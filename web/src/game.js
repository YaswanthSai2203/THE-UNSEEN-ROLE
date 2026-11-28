import * as THREE from 'three';
import { chapterOf, objectiveOf } from './logic/rules.js';
import { objectiveText, hintFor, CHECKPOINT_FLAGS, itemName, docTitle, BLACKOUTS, pick } from './logic/content.js';
import { PerceptionModel } from './logic/perception.js';
import { HorrorScheduler } from './logic/scheduler.js';
import { SaveStore, newSave, browserStorage } from './logic/save.js';
import { F, Ending } from './logic/flags.js';

/**
 * G is the composition root: renderer, scene, managers, game state and flow. Systems reach each other
 * through G instead of many singletons. Everything is created in initGame().
 */
export const G = {
  time: 0, state: 'boot', data: null, world: null, worldName: '', player: null, shadowsDirty: true, lightScale: 6,
  storage: null, saves: null, settings: null,
  notify(text) { G.ui?.notify(text); },
};

// ---------------------------------------------------------------- story
G.story = {
  has: f => !!G.data && G.data.flags.includes(f),
  get chapter() { return G.data ? G.data.chapter : 0; },
  get objectiveId() { return G.data ? G.data.objective : ''; },
  get objectiveText() { return objectiveText(G.story.objectiveId, G.story.has); },
  set(f) {
    if (!G.data || G.story.has(f)) return;
    G.data.flags.push(f);
    G.hints.progress();
    const newChapter = G.story.evaluate(true);
    if (!newChapter && CHECKPOINT_FLAGS.has(f)) G.checkpoint();
  },
  evaluate(announce) {
    if (!G.data) return false;
    const ch = chapterOf(G.story.has);
    let started = false;
    if (ch > G.data.chapter) { G.data.chapter = ch; started = true; G.ui.chapterCard(ch); G.checkpoint(); }
    const obj = objectiveOf(G.story.has);
    if (obj !== G.data.objective) { G.data.objective = obj; G.hints.progress(); if (announce) G.ui.showObjective(); }
    return started;
  },
  journal(line) { if (G.data) { G.data.journal.push(line); if (G.data.journal.length > 200) G.data.journal.shift(); } },
};

// ---------------------------------------------------------------- inventory
G.inventory = {
  has: id => G.inventory.count(id) > 0,
  count: id => (G.data?.items[id] ?? 0),
  add(id, n = 1, notify = true) {
    if (!G.data) return;
    G.data.items[id] = (G.data.items[id] ?? 0) + n;
    G.audio.play2D('pickup', 0.6);
    if (notify) G.notify(n > 1 ? `${itemName(id)} ×${n}` : itemName(id));
  },
  remove(id, n = 1) {
    if (!G.data || G.inventory.count(id) < n) return false;
    G.data.items[id] -= n;
    if (G.data.items[id] <= 0) delete G.data.items[id];
    return true;
  },
  read(docId) {
    if (!G.data) return;
    G.audio.play2D('paper', 0.7);
    if (!G.data.documents.includes(docId)) { G.data.documents.push(docId); G.notify('Document: ' + docTitle(docId)); }
    G.ui.showDocument(docId);
  },
  addPhoto(p) { G.data?.photos.push(p); },
};

// ---------------------------------------------------------------- perception
G.perception = {
  model: new PerceptionModel(), _drain: 0, _recover: 0, _lastNotice: -10,
  get value() { return this.model.value; },
  get distortion() { return this.model.distortion; },
  get meterVisible() { return G.story.chapter >= 2; },
  drain(r) { if (r > 0) this._drain += r; },
  recover(r) { if (r > 0) this._recover += r; },
  hit(a) { this.model.hit(a); },
  restore(a, reason) {
    this.model.restore(a);
    if (reason && G.time - this._lastNotice > 3) { this._lastNotice = G.time; G.notify(reason); }
  },
  update(dt) {
    if (G.state !== 'playing' || !G.player) { this._drain = this._recover = 0; return; }
    if (G.player.eyesClosed && G.player.closedTime > 6 && this.model.value > 20) this._drain += 1.2; // not a free escape, but never a knockout on its own
    this.model.tick(dt, this._drain, this._recover);
    this._drain = this._recover = 0;
    if (this.model.depleted) G.blackout(pick(BLACKOUTS));
  },
};

// ---------------------------------------------------------------- hints after inactivity
G.hints = {
  last: 0, shown: 0,
  progress() { this.last = G.time; this.shown = 0; },
  update(dt) {
    if (G.state !== 'playing' || G.ui.modalOpen) { this.last += dt; return; }
    const idle = G.time - this.last;
    if ((this.shown === 0 && idle > 150) || (this.shown === 1 && idle > 330)) {
      const h = hintFor(G.story.objectiveId, this.shown); this.shown++;
      if (h) G.ui.showHint(h);
    }
  },
};

// ---------------------------------------------------------------- horror director
G.director = {
  scheduler: new HorrorScheduler(), acc: 0,
  register(e) { this.scheduler.register(e); },
  clear() { this.scheduler.clear(); },
  update(dt) {
    if (G.state !== 'playing' || !G.player) return;
    this.acc += dt; if (this.acc < 0.5) return; this.acc = 0;
    const started = this.scheduler.tick({
      time: G.time, chapter: G.story.chapter, has: G.story.has, playerPos: G.player.position,
      isObserved: p => G.observation.isPointObserved(new THREE.Vector3(p.x, p.y, p.z)), random: Math.random,
    });
    if (started?.cue) started.anchor ? G.audio.playAt(started.cue, started.anchor, 0.8) : G.audio.play2D(started.cue, 0.6);
  },
};

// ---------------------------------------------------------------- flow
export const busy = { v: false };

G.newGame = () => {
  if (busy.v) return;
  G.saves.clear();
  G.lastCheckpoint = null;
  G.data = newSave();
  load('apartment', null, true);
};
G.canContinue = () => G.saves.hasSave;
G.continueGame = () => {
  if (busy.v) return;
  const d = G.saves.load();
  if (!d) { G.ui.message(G.saves.wasCorrupted ? 'The save is damaged and could not be loaded. Please start a new game.' : 'There is no saved game.'); return; }
  G.data = d; G.lastCheckpoint = null;
  load(d.scene, null, false);
};
G.restartCheckpoint = () => {
  if (busy.v) return;
  const d = G.lastCheckpoint ? JSON.parse(G.lastCheckpoint) : G.saves.load();
  if (!d) { G.newGame(); return; }
  G.data = d;
  load(d.scene, null, false);
};
G.toMenu = (save = true) => {
  if (busy.v) return;
  if (save && G.data && (G.state === 'playing' || G.state === 'paused')) G.checkpoint();
  load('menu', null, false);
};
G.isBusy = () => busy.v;
G.transitionTo = (scene, spawnId) => {
  if (!G.data) return;
  if (busy.v) { setTimeout(() => G.transitionTo(scene, spawnId), 200); return; } // e.g. a door used during the fade-in
  if (G.data.scene === scene && G.worldName === scene) return;
  G.data.scene = scene; G.data.hasPosition = false;
  load(scene, spawnId, false);
};
G.setPaused = p => {
  if (p && G.state === 'playing') { G.state = 'paused'; G.input.unlock(); G.audio.setPaused(true); }
  else if (!p && G.state === 'paused') { G.state = 'playing'; G.audio.setPaused(false); G.input.lock(); }
};

G.captureState = () => {
  if (!G.data) return;
  G.data.perception = G.perception.value;
  if (G.player) { G.data.hasPosition = true; G.data.position = { x: G.player.position.x, y: 0, z: G.player.position.z }; G.data.yaw = G.player.yaw; }
  G.data.scene = G.worldName === 'basement' ? 'basement' : 'apartment';
};
G.checkpoint = () => {
  if (!G.data || G.state === 'ending') return;
  G.captureState();
  G.lastCheckpoint = JSON.stringify(G.data);
  if (G.saves.write(G.data)) G.ui.saving();
};

async function load(scene, spawnId, isNew) {
  busy.v = true;
  G.state = 'loading';
  G.input.unlock();
  await G.ui.fade(1, 0.8);
  G.dialogue.stopAll();
  G.audio.stopAll();
  G.ui.closeModals();
  G.buildWorld(scene, spawnId);
  await nextFrame();
  if (scene === 'menu') { G.state = 'menu'; G.data = null; }
  else {
    G.perception.model.set(G.data.perception);
    G.state = 'playing';
    G.story.evaluate(false);
    if (isNew) { G.story.set(F.Woke); G.ui.chapterCard(1); }
    G.checkpoint();
    G.world.onEntered();
    G.ui.showObjective();
    G.input.lock();
  }
  await G.ui.fade(0, 1.2);
  busy.v = false;
}
const nextFrame = () => new Promise(r => requestAnimationFrame(() => r()));
const wait = s => new Promise(r => setTimeout(r, s * 1000));

G.blackout = thought => {
  if (G.state !== 'playing' || busy.v) return;
  (async () => {
    busy.v = true; G.state = 'cutscene';
    G.audio.play2D('heartbeat', 0.9);
    await G.ui.fade(1, 0.6);
    const s = G.world.getSpawn('safe');
    G.player.teleport(s.pos, s.yaw);
    G.perception.model.set(45);
    G.world.onBlackout();
    await wait(1.5);
    G.state = 'playing';
    await G.ui.fade(0, 1.5);
    if (thought) G.dialogue.thought(thought);
    busy.v = false;
  })();
};

G.triggerEnding = ending => {
  if (G.state === 'ending') return;
  (async () => {
    busy.v = true; G.state = 'ending'; G.input.unlock();
    G.endingsSeen.add(ending); // record at once, so closing the page during the fade still counts it
    try { G.storage.set('unseen_endings', JSON.stringify([...G.endingsSeen])); } catch { /* storage full or blocked */ }
    G.ui.closeModals(); G.dialogue.stopAll();
    await G.ui.fade(1, 3);
    G.audio.stopAll();
    await G.ui.playEnding(ending); // the checkpoint before the choice stays saved, so every ending can be reached
    busy.v = false;
    G.toMenu(false);
  })();
};

export { Ending };
