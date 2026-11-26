import * as THREE from 'three';
import { G } from '../game.js';
import { Observable } from '../engine/observation.js';
import { CombinationLock, ChannelSequence, FragmentPuzzle } from '../logic/puzzles.js';
import { F, FRAGMENTS, Items, Ending } from '../logic/flags.js';
import { LINES } from '../logic/content.js';
import { fragmentCount } from '../logic/rules.js';
import { angleTo } from '../logic/observeMath.js';
import { fromCanvas } from '../engine/materials.js';
import { familyPhoto, canvas, toTexture, drawSymbol, HAND, grainOver } from '../engine/textures.js';
import { keyName } from '../engine/settings.js';
import { FootstepsGuide } from './footsteps.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const later = (s, fn) => setTimeout(fn, s * 1000);
const inRect = (p, x0, x1, z0, z1) => p.x >= x0 && p.x <= x1 && p.z >= z0 && p.z <= z1;

/** Story beats, puzzles and authored anomalies for the apartment. */
export function installApartmentEvents(b) {
  const has = f => G.story.has(f), thought = t => b.thought(t);
  const P = () => (G.player ? G.player.position : V(0, 0, 0));
  const inLiving = () => inRect(P(), -6, -0.75, 0, 5.5), inBath = () => inRect(P(), 0.75, 4, 2, 5);
  const inBed = () => inRect(P(), 0.75, 6, 5, 10), inHall = () => inRect(P(), -0.75, 0.75, 0, 14);
  const lock = new CombinationLock('0219'), channels = new ChannelSequence(11, 4, 7), grounded = {};
  b.tvBusy = false;
  let tvChannel = 1, inCall = false, ringStart = 0, pending = null, mirrorDark = 0, musicTimer = 0, anomalyPhase = 0, anomalyAway = 0, guide = null;
  b.ringing = false;

  // ---------------------------------------------------------------- entering / leaving
  b.onEntered = () => {
    if (!has('intro_done')) {
      G.story.set('intro_done');
      G.dialogue.play(LINES.opening);
      const k = G.settings.keys;
      G.notify(`Move: ${keyName(k.forward)} ${keyName(k.left)} ${keyName(k.back)} ${keyName(k.right)}   Look: mouse (click the game first)`);
      G.notify(`Interact: ${keyName(k.interact)}    Crouch: ${keyName(k.crouch)}    Close eyes: hold ${keyName(k.eyes)}`);
    }
    if (b.changed && !has('seen_changed')) { G.story.set('seen_changed'); thought('This isn\'t the same apartment. Everything is where it was, and none of it is right.'); }
  };
  b.shadows = [];
  b.onBlackout = () => { for (const s of b.shadows) s.root.removeFromParent(), s.destroy(); b.shadows = []; };

  // ---------------------------------------------------------------- telephone
  const ring = (lines, after) => { b.ringing = true; pending = { lines, after }; ringStart = G.time; b.ringLoop.play(); };
  const stopRing = () => { b.ringing = false; b.ringLoop.stop(); };
  const ringDone = () => { if (inCall) return false; if (!b.ringing) return true; if (G.time - ringStart > 40) { stopRing(); return true; } return false; };
  b.answerPhone = () => {
    if (!b.ringing) { thought(has(F.Phone1) ? 'No dial tone. The cord isn\'t plugged into anything.' : 'No dial tone.'); return; }
    stopRing(); inCall = true;
    G.audio.playAt('phonePickup', b.phone.getWorldPosition(V()), 0.6);
    const p = pending;
    G.dialogue.play(p.lines, 'phone', b.phone, () => { inCall = false; G.audio.playAt('switch', b.phone.getWorldPosition(V()), 0.5); p.after?.(); });
  };
  const callEvent = (id, requires, done, lines, after, where) => ({
    id, story: true, oneShot: false, cooldown: 45, requires, blockedBy: done, timeout: 120,
    condition: () => !b.ringing && !inCall && !G.dialogue.busy && (!where || where()),
    start: () => ring(lines, after), completion: ringDone,
  });

  // ---------------------------------------------------------------- story events
  const d = G.director;
  d.register(callEvent('call1', F.FrontDoorTried, F.Phone1, LINES.call1, () => { G.perception.hit(4); G.dialogue.play(LINES.afterCall1); G.story.set(F.Phone1); }));
  d.register({ id: 'tv_live', story: true, requires: F.GotCamera, blockedBy: F.TvLiveSeen, timeout: 60,
    condition: () => inLiving() && !b.tvBusy && P().distanceTo(V(-3.4, 0, 0.36)) < 4.5 && !G.dialogue.busy,
    start: () => tvLiveSequence(), completion: () => has(F.TvLiveSeen) });
  d.register({ id: 'radio', story: true, requires: F.DiaryRead, blockedBy: F.RadioOn, condition: () => !G.dialogue.busy,
    start: () => { b.radioLoop.play(); G.story.set(F.RadioOn); G.dialogue.play(LINES.radio, 'radio', b.radio); } });
  d.register(callEvent('call2', F.KitchenMsg, F.Call2, LINES.call2, () => {
    const p = G.player; G.audio.playAt('breath', p.position.clone().addScaledVector(p.forward, -0.9).setY(1.55), 0.7);
    p.shake(0.015, 1.2); G.perception.hit(10); G.dialogue.play(LINES.afterCall2); G.story.set(F.Call2);
  }, () => inLiving() || inHall()));
  d.register(callEvent('call3', F.TvSolved, F.Call3, LINES.call3, () => { G.perception.hit(8); G.story.set(F.Call3); }));
  d.register(callEvent('call4', F.PowerOn, F.Call4, LINES.call4, () => { G.perception.hit(6); G.story.set(F.Call4); }));
  d.register({ id: 'mirror_anomaly', story: true, oneShot: false, cooldown: 30, requires: F.KitchenMsg, blockedBy: F.MirrorAnomaly, timeout: 90,
    condition: () => inBath() && G.observation.isPointObserved(b.bathMirror.center),
    start: () => { b.bathMirror.anomaly = true; anomalyPhase = 0; anomalyAway = 0; }, completion: () => has(F.MirrorAnomaly) || !inBath() });

  // ---------------------------------------------------------------- ambient events
  const anchors = [V(-3, 0, 2), V(-3, 0, 8.5), V(3.5, 0, 7.5), V(0, 0, 9), V(2.4, 0, 3.5)];
  anchors.forEach((a, i) => d.register({ id: 'steps_' + i, oneShot: false, requires: F.Phone1, cooldown: 80, probability: 0.08,
    anchor: a.clone().setY(1), minDist: 4, visibility: 'unobserved',
    start: () => stepsTrail(a, a.clone().add(V(Math.random() * 3 - 1.5, 0, Math.random() * 3 - 1.5)), 4, 'stepHeavy', 0.35) }));
  d.register({ id: 'knock', oneShot: false, minChapter: 2, cooldown: 160, probability: 0.05, anchor: V(0, 1.2, 0.05), minDist: 3, cue: 'knock' });
  d.register({ id: 'bed_door_ajar', oneShot: false, minChapter: 2, cooldown: 90, probability: 0.1, anchor: V(0.75, 1, 6), minDist: 4, visibility: 'unobserved',
    condition: () => !b.bedDoor.isOpen && b.bedDoor.angle < 1, start: () => { b.bedDoor.setAngleInstant(22); G.audio.playAt('creak', V(0.75, 1, 6), 0.35); } });
  d.register({ id: 'flicker', oneShot: false, minChapter: 2, cooldown: 70, probability: 0.06, start: () => flickerNearest(1.6) });
  d.register({ id: 'whisper_closed', oneShot: false, minChapter: 2, cooldown: 25, probability: 0.35, condition: () => G.player.closedTime > 2,
    start: () => G.audio.playAt('whisper', G.player.position.clone().addScaledVector(G.player.forward, -1.2).setY(1.6), 0.5) });
  d.register({ id: 'breath_behind', oneShot: false, minChapter: 3, cooldown: 120, probability: 0.05,
    condition: () => G.player.velocity.length() < 0.2 && !G.player.eyesClosed,
    start: () => G.audio.playAt('breath', G.player.position.clone().addScaledVector(G.player.forward, -1).setY(1.5), 0.4) });
  d.register({ id: 'shadow_edge', oneShot: false, minChapter: 2, cooldown: 90, probability: 0.07, start: () => spawnEdgeShadow() });
  d.register({ id: 'fridge_silence', oneShot: false, minChapter: 2, cooldown: 200, probability: 0.04, condition: () => b.fridgeLoop.isPlaying,
    start: () => { b.fridgeLoop.stop(); later(20, () => { if (G.world === b) { b.fridgeLoop.play(); G.audio.playAt('thud', V(-1.45, 0.9, 9.6), 0.3); } }); } });
  d.register({ id: 'clock_stop', oneShot: false, minChapter: 3, cooldown: 200, probability: 0.04, condition: () => b.clockLoop?.isPlaying,
    start: () => { b.clockLoop.stop(); later(15, () => { if (G.world === b) b.clockLoop.play(); }); } });
  d.register({ id: 'water_running', oneShot: false, minChapter: 2, cooldown: 240, probability: 0.04, anchor: V(2.2, 1, 4.7), minDist: 4,
    condition: () => !inBath() && !b.waterLoop.isPlaying, start: () => b.waterLoop.play() });
  d.register({ id: 'bed_steps', oneShot: false, minChapter: 2, cooldown: 120, probability: 0.07,
    condition: () => inBed() && !G.observation.isPointObserved(V(4.95, 0.5, 8)), start: () => stepsAround() });
  d.register({ id: 'tv_remote', oneShot: false, minChapter: 2, requires: F.TvLiveSeen, cooldown: 150, probability: 0.07,
    condition: () => inLiving() && !b.tvBusy && b.tv.mode === 'off', start: () => tvRemoteFlash() });
  d.register({ id: 'bed_mirror', oneShot: false, minChapter: 2, maxChapter: 3, cooldown: 200, probability: 0.08,
    condition: () => inBed() && !b.bedMirror.anomaly, start: () => { b.bedMirror.anomaly = true; later(25, () => (b.bedMirror.anomaly = false)); } });
  d.register({ id: 'hall_figure', oneShot: false, minChapter: 3, cooldown: 120, probability: 0.1, anchor: V(0, 1, 9.4), visibility: 'unobserved',
    condition: () => inHall() && P().z < 5,
    start: () => spawnVanishingFigure(V(0, 0, b.falseWall.position.z - 0.6), 180, () => { b.hall1.flicker(0.4); b.hall2.flicker(0.4); }) });

  // low perception: things that are not there (and leave once looked at)
  const pc = new Observable(b.chair('PhantomChair', [-2.6, 0, 4.7], 200), { canMove: false, canAppear: true, canDisappear: true, disappearAfter: 1.4, delay: 3, cooldown: 30, condition: () => G.perception.value < 35 });
  pc.setVisible(false);
  const pf = new Observable(b.figure('PhantomFigure', [-1.4, 0, 7.6], 90), { canMove: false, canAppear: true, canDisappear: true, disappearAfter: 0.5, minChapter: 3, cooldown: 60, minPlayerDist: 3.5, condition: () => G.perception.value < 30, onDisappeared: () => flickerNearest(0.3) });
  pf.setVisible(false);

  // ---------------------------------------------------------------- continuous checks
  b.updaters.push(dt => {
    const p = G.player;
    if (!p || G.state !== 'playing') return;
    // P3: writing on the mirror, only in the dark, only with closed eyes
    if (has(F.KitchenMsg) && !has(F.MirrorMsg) && inBath() && !b.bathLight.lit && p.position.distanceTo(b.bathMirror.center.clone().setY(0)) < 2.0 && p.eyesClosed) {
      mirrorDark += dt;
      if (mirrorDark > 3) {
        b.mirrorMsg.visible = true; G.audio.playAt('creak', b.bathMirror.center, 0.2, 1.8);
        G.story.set(F.MirrorMsg); G.story.journal('Bathroom mirror, in the dark: CH 11 4 7');
        whenEyesOpen(() => thought('Letters in the steam on the glass. CH... 11, 4, 7. A drawing of a television.'));
      }
    } else mirrorDark = 0;
    updateMirrorAnomaly();
    updateMusicBox(dt);
    // P5: the footsteps begin once the broadcast has been seen
    if (has(F.TvSolved) && !has(F.ClosetFound) && !guide) b.guide = guide = new FootstepsGuide(b, V(0, 0, 9.2), [V(0, 0, 6.5), V(0, 0, 4.0), V(0.1, 0, 1.8), V(0.45, 0, 1.0)], () => closetReveal());
    guide?.update(dt);
  });

  function updateMirrorAnomaly() {
    const m = b.bathMirror;
    if (!m.anomaly) return;
    if (!inBath()) { m.anomaly = false; return; } // always ends when you leave, so mirrors never stay wrong
    const seen = G.observation.isPointObserved(m.center);
    if (anomalyPhase === 0) { if (!seen) { anomalyAway += 0.016; if (anomalyAway > 1.2) anomalyPhase = 1; } }
    else if (anomalyPhase === 1 && seen && !has(F.MirrorAnomaly)) {
      anomalyPhase = 2;
      later(1.2, () => { G.perception.hit(8); G.audio.playAt('stinger', m.center, 0.25); thought('I moved. It didn\'t. It\'s still standing there, facing the glass.'); G.story.set(F.MirrorAnomaly); });
    }
  }

  // ---------------------------------------------------------------- P6: the music box
  if (!has(F.MusicBoxFound)) {
    const mb = b.group('MusicBox', [4.45, 0, 7.12]);
    b.box('Body', [0, 0.05, 0], [0.16, 0.1, 0.11], 'wood_light', { parent: mb });
    b.box('Lid', [0, 0.105, 0], [0.17, 0.012, 0.12], 'plastic_red', { parent: mb });
    const hidden = G.audio.loop('musicBox', mb, 0.9, 'unseen', 9, false), audible = G.audio.loop('musicBox', mb, 0.35, 'sfx', 5, false);
    const setVis = v => { mb.visible = v; G.physics.setEnabled(mb, v); };
    setVis(has('musicbox_revealed'));
    b.pickup(mb, 'Take the music box', () => {
      hidden.stop(); audible.stop();
      G.inventory.add(Items.MusicBox); G.inventory.add(F.FragB); G.story.set(F.FragB); G.story.set(F.MusicBoxFound);
      G.perception.restore(15, 'A memory steadies you.');
      thought('Folded inside, under the broken dancer: part of a photograph. A woman\'s face.');
    });
    b.musicBox = { mb, hidden, audible, setVis };
  }
  function updateMusicBox(dt) {
    const m = b.musicBox;
    if (!m || has(F.MusicBoxFound) || !has(F.KitchenMsg)) return;
    const revealed = has('musicbox_revealed');
    if (!revealed && !m.hidden.isPlaying) m.hidden.play();
    if (revealed && !m.audible.isPlaying) { m.hidden.stop(); m.audible.play(); }
    if (revealed) return;
    if (G.player.eyesClosed && G.player.position.distanceTo(m.mb.position) < 1.9) {
      musicTimer += dt;
      if (musicTimer > 1.5) { G.story.set('musicbox_revealed'); m.setVis(true); whenEyesOpen(() => thought('There. By the bed. It was there the whole time.')); }
    } else musicTimer = 0;
  }

  // ---------------------------------------------------------------- P5: closet (Event 5)
  async function closetReveal() {
    await wait(0.6);
    const on1 = b.hall1.on, on2 = b.hall2.on;
    b.hall1.on = b.hall2.on = false;
    G.audio.playAt('knock', V(0.75, 1.2, 1.0), 0.5);
    await wait(1.8);
    b.setClosetVisible(true); b.closetDoor.setAngleInstant(25);
    G.audio.playAt('creak', V(0.75, 1.2, 1.0), 0.4);
    await wait(0.8);
    b.hall1.on = on1; b.hall2.on = on2;
    G.perception.hit(8); G.story.set(F.ClosetFound); thought('A door. There was never a door there.');
  }

  // ---------------------------------------------------------------- television
  async function tvLiveSequence() {
    b.tvBusy = true; b.tv.static(); await wait(1.5);
    const tv = V(-3.4, 0, 0.36), away = P().clone().sub(tv).setY(0).normalize();
    const fp = P().clone().addScaledVector(away, 0.9); fp.x = THREE.MathUtils.clamp(fp.x, -5.6, -1.0); fp.z = THREE.MathUtils.clamp(fp.z, 0.8, 5.1);
    const fig = b.figure('TVFigure', [fp.x, 0, fp.z], (Math.atan2(tv.x - fp.x, tv.z - fp.z) * 180) / Math.PI, 1);
    b.tv.showFeed(b.tvLiveCam); G.audio.play2D('drone', 0.25, 'music');
    await wait(5.5);
    G.perception.hit(8); b.tv.static(); await wait(0.6);
    fig.removeFromParent();
    b.tv.showFeed(b.tvBathCam); await wait(4.5);
    b.tv.static(); await wait(0.4); b.tv.off();
    G.dialogue.play(LINES.tvLive, 'thought', null, () => { G.story.set(F.TvLiveSeen); b.tvBusy = false; });
  }
  async function tvRemoteFlash() {
    b.tvBusy = true; b.tv.static(); await wait(1); b.tv.showFeed(b.remoteCam); await wait(6); b.tv.static(); await wait(0.5); b.tv.off(); b.tvBusy = false;
    if (!has('remote_seen')) { G.story.set('remote_seen'); thought('A child\'s bedroom. There is no child\'s bedroom in this apartment.'); }
  }
  b.useTelevision = () => { if (!b.tvBusy) G.ui.openChannels(tvChannel, tune); };
  function tune(ch) {
    tvChannel = ch;
    if (channels.push(ch) && has(F.KitchenMsg) && !has(F.TvSolved)) { G.ui.closeModals(); broadcast(); return; }
    if (ch === 3) b.tv.card(testCard());
    else if (ch === 9 && b.chapter >= 2) b.tv.showFeed(b.remoteCam);
    else b.tv.static();
  }
  async function broadcast() {
    b.tvBusy = true; b.tv.static(); await wait(1);
    const c = canvas(320, 240), x = c.getContext('2d');
    x.fillStyle = '#1a244d'; x.fillRect(0, 0, 320, 240);
    x.fillStyle = '#f2d980'; x.font = `26px ${HAND}`; x.textAlign = 'center'; x.fillText('HAPPY BIRTHDAY', 160, 40);
    drawSymbol(x, 'triangle', 110, 140, 60, 8, '#fff'); x.fillStyle = '#fff'; x.font = `64px ${HAND}`; x.fillText('= 2', 240, 160);
    grainOver(x, 320, 240, 20);
    b.tv.card(toTexture(c, false));
    await new Promise(r => G.dialogue.play(LINES.broadcast, 'tape', b.tv.screen, r));
    G.story.journal('Television, channels 11-4-7: TRIANGLE = 2');
    G.perception.restore(10, 'A memory steadies you.');
    G.story.set(F.TvSolved);
    await wait(2); b.tv.off(); b.tvBusy = false;
  }
  let testTex = null;
  function testCard() {
    if (testTex) return testTex;
    const c = canvas(320, 240), x = c.getContext('2d');
    ['#bfbfbf', '#bfbf00', '#00bfbf', '#00bf00', '#bf00bf', '#bf0000', '#0000bf'].forEach((col, i) => { x.fillStyle = col; x.fillRect(i * 46, 0, 46, 170); });
    x.fillStyle = '#000'; x.fillRect(0, 170, 320, 70); x.fillStyle = '#fff'; x.font = '20px monospace'; x.textAlign = 'center'; x.fillText('PLEASE STAND BY', 160, 212);
    return (testTex = toTexture(c, false));
  }

  // ---------------------------------------------------------------- interactions
  b.takeFilm = () => {
    if (!has(F.GotCamera)) { thought('Old batteries, a remote, and a box of instant film. Film for a camera I don\'t have.'); return; }
    const n = G.inventory.count(Items.Film);
    if (n >= 3) { thought('You have enough film for now.'); return; }
    G.inventory.add(Items.Film, 3 - n);
  };
  b.useRadio = () => {
    if (b.radioLoop.isPlaying) {
      b.radioLoop.stop(); G.dialogue.stopAll();
      if (has(F.RadioOn) && !has(F.RadioOff)) {
        G.story.set(F.RadioOff);
        later(1.2, () => { b.cabinetDoor.setAngleInstant(12); G.audio.playAt('creak', V(-2.4, 1.95, 9.6), 0.45, 1.3); thought('Behind me, a cabinet door creaks open. Just a little.'); });
      }
      return;
    }
    b.radioLoop.play(); later(3, () => b.radioLoop.stop()); thought('Only static.');
  };
  b.ground = (id, amount, text) => {
    if (grounded[id] && G.time - grounded[id] < 90) { thought('Not yet. It doesn\'t work if you do it too often.'); return; }
    grounded[id] = G.time; G.perception.restore(amount, 'You feel steadier.'); thought(text);
  };
  b.useFuseBox = () => {
    if (b.power) { thought('All the fuses are in. It hums quietly.'); return; }
    if (G.inventory.has(Items.Fuse)) {
      G.inventory.remove(Items.Fuse); G.audio.playAt('breaker', V(-0.7, 1.55, 0.95), 0.8);
      G.story.set(F.FuseInstalled); b.hall1.flicker(0.8); b.hall2.flicker(1.1); thought('The hallway lights stutter on.');
      return;
    }
    thought('The fuse box. One slot is empty. Someone wrote HALL above it in pencil.');
  };
  b.useFrontDoor = () => {
    if (!has(F.FrontDoorTried)) { G.story.set(F.FrontDoorTried); thought('Locked. And there\'s no key. The handle is warm, as if someone was holding it from the other side.'); return; }
    if (G.inventory.has(Items.FrontKey)) { G.ui.confirm('Unlock the front door and leave? You will not come back, and you will not remember.', () => G.triggerEnding(Ending.Forget)); return; }
    thought('Still locked.');
  };
  b.useBasementDoor = () => {
    if (has(F.BasementUnlocked)) { G.transitionTo('basement', 'default'); return; }
    if (!has(F.PadlockSeen)) { G.story.set(F.PadlockSeen); G.story.journal('Basement padlock dials, in order: CIRCLE, TRIANGLE, SQUARE, CROSS'); }
    G.ui.openPadlock(lock, () => {
      b.padlock?.removeFromParent(); G.audio.playAt('unlock', b.falseWall.position.clone().setY(1), 0.8);
      G.story.set(F.BasementUnlocked); thought('February nineteenth. It opens. Cold air comes up from below.');
    });
  };
  b.useFamilyFrame = () => {
    if (has(F.PhotoRestored)) { thought('Adrian, Hanna and Mira. Lindell Street, one summer.'); return; }
    const n = fragmentCount(has);
    if (n < 4) { G.inventory.read('photo_back'); if (n > 0) G.notify(`Pieces of the photograph: ${n} / 4`); return; }
    G.ui.openFragments(new FragmentPuzzle(), () => {
      for (const f of FRAGMENTS) G.inventory.remove(f);
      G.story.set(F.PhotoRestored); b.updateFramePicture();
      G.inventory.add(Items.RoomKey); G.story.set(F.GotRoomKey);
      G.perception.restore(30, 'You remember her face.');
      thought('Behind the photograph, taped to the board: a small key on a faded pink ribbon.');
    });
  };
  b.updateFramePicture = () => {
    let c;
    if (has(F.PhotoRestored)) c = familyPhoto(true);
    else {
      c = canvas(256, 192); const x = c.getContext('2d'); x.fillStyle = '#403326'; x.fillRect(0, 0, 256, 192); x.fillStyle = '#e6e0d1';
      for (let i = 0; i < 256; i++) { const t = 4 + Math.random() * 8, bt = 4 + Math.random() * 8; x.fillRect(i, 0, 1, t); x.fillRect(i, 192 - bt, 1, bt); }
    }
    b.framePicture.material = fromCanvas(c, 0.5);
  };

  // ---------------------------------------------------------------- helpers
  function wait(s) { return new Promise(r => setTimeout(r, s * 1000)); }
  function whenEyesOpen(fn) { const t = setInterval(() => { if (!G.player || !G.player.eyesClosed) { clearInterval(t); later(0.4, fn); } }, 100); }
  async function stepsTrail(from, to, count, snd, vol) {
    for (let i = 0; i < count; i++) { G.audio.playAt(snd, from.clone().lerp(to, count > 1 ? i / (count - 1) : 0), vol, 0.85 + Math.random() * 0.2, 'sfx', 14); await wait(0.6); }
  }
  async function stepsAround() { for (const p of [V(3.8, 0, 7.1), V(4.6, 0, 7.0), V(5.4, 0, 7.05), V(6.0, 0, 7.3)]) { G.audio.playAt('step', p, 0.3, 1.45); await wait(0.5); } }
  function flickerNearest(s) {
    let best = null, bd = 7;
    for (const l of [b.livingLight, b.lamp, b.kitchenLight, b.bedLight, b.bathLight, b.hall1, b.hall2]) {
      if (!l?.lit) continue; const dd = l.light.getWorldPosition(V()).distanceTo(P()); if (dd < bd) { bd = dd; best = l; }
    }
    if (best) { best.flicker(s); G.audio.playAt('buzz', best.light.getWorldPosition(V()), 0.25); }
  }
  /** A figure placed just outside the player's view, so a small turn of the head reveals it. */
  function spawnEdgeShadow() {
    const eye = G.player.eye, fwd = G.camera.getWorldDirection(V());
    const spots = [V(-5.5, 0, 0.5), V(-1.3, 0, 5.0), V(-5.5, 0, 9.4), V(-1.3, 0, 6.0), V(0, 0, 9.3), V(0, 0, 0.6), V(1.3, 0, 9.5), V(5.5, 0, 5.5), V(3.6, 0, 4.5)];
    for (const s of spots) {
      const head = s.clone().setY(1.6), dist = eye.distanceTo(head), ang = angleTo(eye, fwd, head);
      if (dist < 2.5 || dist > 7 || ang < 50 || ang > 85) continue;
      if (G.observation.isPointObserved(head) || !G.physics.lineOfSight(eye, head, null)) continue;
      spawnVanishingFigure(s, (Math.atan2(eye.x - s.x, eye.z - s.z) * 180) / Math.PI, () => flickerNearest(0.35));
      return;
    }
  }
  function spawnVanishingFigure(pos, yaw, onVanish) {
    const fig = b.figure('Shadow', [pos.x, 0, pos.z], yaw);
    const ob = new Observable(fig, { canMove: false, canDisappear: true, disappearAfter: 0.4, cooldown: 0,
      onDisappeared: () => { onVanish?.(); G.perception.hit(4); fig.removeFromParent(); ob.destroy(); } });
    b.shadows.push(ob);
    later(12, () => { if (fig.parent && !ob.observed) { fig.removeFromParent(); ob.destroy(); } }); // never seen: it leaves quietly
  }
}
