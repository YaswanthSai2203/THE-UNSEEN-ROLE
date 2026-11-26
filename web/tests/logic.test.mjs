import test from 'node:test';
import assert from 'node:assert/strict';
import { F, FRAGMENTS } from '../src/logic/flags.js';
import { chapterOf, objectiveOf, fragmentCount } from '../src/logic/rules.js';
import { OBJECTIVES, objectiveText, hintFor, DOCS, ITEMS, ENDINGS, LINES } from '../src/logic/content.js';
import { PerceptionModel, PASSIVE_CAP } from '../src/logic/perception.js';
import { inViewCone, angleTo } from '../src/logic/observeMath.js';
import { HorrorScheduler } from '../src/logic/scheduler.js';
import { CombinationLock, ChannelSequence, FragmentPuzzle, PUZZLES } from '../src/logic/puzzles.js';
import { newSave, validateSave, parseSave, SaveStore, KEY_MAIN, KEY_BACKUP } from '../src/logic/save.js';

export const PLAYTHROUGH = [F.Woke, F.GotFlashlight, F.FrontDoorTried, F.Phone1, F.GotFuse, F.FuseInstalled, F.ChairNoticed,
  F.GotCamera, F.TvLiveSeen, F.KeyRevealed, F.GotBrassKey, F.WardrobeOpen, F.DiaryRead, F.RadioOn, F.RadioOff, F.KitchenMsg,
  F.MirrorMsg, F.TvSolved, F.ClosetFound, F.FragA, F.MusicBoxFound, F.FragB, F.BasementUnlocked,
  F.EnteredBasement, F.Breaker1, F.Breaker2, F.Breaker3, F.PowerOn, F.TapeSeen, F.FragC, F.FragD, F.PhotoRestored, F.GotRoomKey,
  F.EnteredMirasRoom, F.Mem1, F.Mem2, F.Mem3, F.Mem4, F.MemoriesDone, F.FinalCall, F.GotFrontKey];

test('full playthrough reaches every objective in order and chapters never go back', () => {
  const flags = new Set(); const has = f => flags.has(f);
  let ch = 1; const seen = [];
  for (const f of PLAYTHROUGH) {
    flags.add(f);
    const c = chapterOf(has); assert.ok(c >= ch, 'chapter went back after ' + f); ch = c;
    const o = objectiveOf(has); assert.ok(objectiveText(o, has), 'no text for ' + o);
    if (seen.at(-1) !== o) seen.push(o);
  }
  assert.equal(ch, 5);
  assert.deepEqual(seen, ['light', 'exit', 'phone', 'fuse', 'look_around', 'search', 'television', 'photo_bathroom', 'take_key',
    'wardrobe', 'radio', 'cabinet', 'mirror', 'tv_channels', 'footsteps', 'listen', 'padlock', 'enter_basement', 'power',
    'fragments', 'restore_photo', 'open_room', 'memories', 'toy_phone', 'choice']);
});

test('chapter beats', () => {
  const flags = new Set(); const has = f => flags.has(f);
  assert.equal(chapterOf(has), 1);
  for (const [f, c] of [[F.ChairNoticed, 2], [F.KitchenMsg, 3], [F.EnteredBasement, 4], [F.EnteredMirasRoom, 5]]) { flags.add(f); assert.equal(chapterOf(has), c); }
});

test('guessing the padlock early still asks for the missing fragments', () => {
  const flags = new Set(PLAYTHROUGH.slice(0, PLAYTHROUGH.indexOf(F.ClosetFound)));
  [F.BasementUnlocked, F.EnteredBasement, F.PowerOn, F.FragC, F.FragD].forEach(f => flags.add(f));
  const has = f => flags.has(f);
  assert.equal(objectiveOf(has), 'fragments');
  assert.equal(fragmentCount(has), 2);
  assert.match(objectiveText('fragments', has), /2\/4/);
});

test('every objective has two hints', () => {
  for (const id of Object.keys(OBJECTIVES)) { assert.ok(hintFor(id, 0)); assert.ok(hintFor(id, 1)); }
});

test('perception drains, caps passive recovery, recovers in safe areas', () => {
  const m = new PerceptionModel();
  m.tick(10, 5, 0); assert.equal(m.value, 50);
  m.set(10); m.tick(1000, 0, 0); assert.equal(m.value, PASSIVE_CAP);
  m.tick(100, 0, 3); assert.equal(m.value, 100);
  m.set(50); m.tick(1, 1, 10); assert.ok(m.value < 50, 'drain suppresses recovery');
  m.set(5); assert.equal(m.level, 'breaking'); m.hit(50); assert.ok(m.depleted);
});

test('view cone: front, behind, side, margin', () => {
  const eye = { x: 0, y: 1.6, z: 0 }, fwd = { x: 0, y: 0, z: -1 }, up = { x: 0, y: 1, z: 0 };
  assert.ok(inViewCone(eye, fwd, up, 70, 16 / 9, { x: 0, y: 1.5, z: -5 }));
  assert.ok(!inViewCone(eye, fwd, up, 70, 16 / 9, { x: 0, y: 1.5, z: 5 }));
  assert.ok(!inViewCone(eye, fwd, up, 70, 16 / 9, { x: 10, y: 1.6, z: -1 }));
  const a = 55 * Math.PI / 180, p = { x: Math.sin(a) * 4, y: 1.6, z: -Math.cos(a) * 4 };
  assert.ok(!inViewCone(eye, fwd, up, 70, 16 / 9, p, 0));
  assert.ok(inViewCone(eye, fwd, up, 70, 16 / 9, p, 0.15));
  assert.ok(Math.abs(angleTo(eye, fwd, { x: 3, y: 1.6, z: 0 }) - 90) < 1e-6);
});

const ctx = (o = {}) => Object.assign({ time: 0, chapter: 1, flags: new Set(), has(f) { return this.flags.has(f); }, playerPos: { x: 0, y: 0, z: 0 }, observed: false, isObserved() { return this.observed; }, roll: 0, random() { return this.roll; } }, o);

test('scheduler: story events once; ambient gap, no overlap, no repeat', () => {
  const s = new HorrorScheduler(); let runs = 0;
  s.register({ id: 'call', story: true, requires: 'a', start: () => runs++ });
  const c = ctx(); assert.equal(s.tick(c), null); c.flags.add('a'); assert.ok(s.tick(c)); c.time = 100; assert.equal(s.tick(c), null); assert.equal(runs, 1);
  const t = new HorrorScheduler(); t.ambientGap = 10; let done = false;
  t.register({ id: 'a', oneShot: false, cooldown: 0, completion: () => done });
  t.register({ id: 'b', oneShot: false, cooldown: 0 });
  const k = ctx({ time: 100 }); const first = t.tick(k); assert.ok(first);
  k.time = 200; if (first.id === 'a') assert.equal(t.tick(k), null);
  done = true; k.time = 201; assert.equal(t.tick(k), null);
  k.time = 215; const second = t.tick(k); assert.ok(second); assert.notEqual(second.id, first.id);
});

test('scheduler: chapter, visibility, distance, cooldown, probability', () => {
  const s = new HorrorScheduler();
  s.register({ id: 'e', oneShot: false, minChapter: 2, cooldown: 30, anchor: { x: 10, y: 0, z: 0 }, minDist: 4, visibility: 'unobserved' });
  const e = s.events[0], c = ctx();
  assert.ok(!s.eligible(e, c)); c.chapter = 2; assert.ok(s.eligible(e, c));
  c.observed = true; assert.ok(!s.eligible(e, c)); c.observed = false;
  c.playerPos = { x: 9, y: 0, z: 0 }; assert.ok(!s.eligible(e, c)); c.playerPos = { x: 0, y: 0, z: 0 };
  e.lastRun = 0; c.time = 10; assert.ok(!s.eligible(e, c)); c.time = 31; assert.ok(s.eligible(e, c));
  const p = new HorrorScheduler(); p.ambientGap = 0; p.register({ id: 'rare', oneShot: false, cooldown: 0, probability: 0.1 });
  assert.equal(p.tick(ctx({ time: 10, roll: 0.5 })), null); assert.ok(p.tick(ctx({ time: 10, roll: 0.05 })));
});

test('puzzles', () => {
  const l = new CombinationLock('0219'); l.step(1, 2); l.step(2, 1); l.step(3, -1); assert.ok(l.isOpen); l.step(0, 11); assert.equal(l.current, '1219');
  const c = new ChannelSequence(11, 4, 7); assert.deepEqual([4, 11, 7, 11, 4, 7].map(x => c.push(x)), [false, false, false, false, false, true]);
  const f = new FragmentPuzzle(); f.place(1, 0); f.place(0, 1); f.place(2, 2); f.place(3, 3); assert.ok(!f.isSolved);
  f.place(0, 0); assert.equal(f.slots[1], -1); f.place(1, 1); assert.ok(f.isSolved);
  assert.ok(PUZZLES.length >= 8); assert.equal(new Set(PUZZLES.map(p => p.flag)).size, PUZZLES.length);
  for (const p of PUZZLES) assert.ok(PLAYTHROUGH.includes(p.flag), p.id);
});

test('padlock clues are in the content', () => {
  assert.match(DOCS.closet_note[1], /SQUARE = 1/); assert.match(DOCS.cabinet[1], /CROSS = 9/); assert.match(DOCS.diary[1], /February 19th/);
  assert.ok(LINES.broadcast.some(l => /number two/.test(l.text)));
});

test('content complete', () => {
  for (const f of FRAGMENTS) assert.ok(ITEMS[f]);
  for (const k of [1, 2, 3]) assert.ok(ENDINGS[k].lines.length && ENDINGS[k].title);
});

test('save: validate repairs, rejects junk and future versions, falls back to backup', () => {
  assert.equal(validateSave(null), null); assert.equal(validateSave({ version: 99 }), null); assert.equal(parseSave('{oops'), null);
  const d = validateSave({ version: 1, scene: 'nowhere', perception: NaN, items: { film: 2, x: -1 }, flags: ['a', 'a', 3] });
  assert.equal(d.scene, 'apartment'); assert.equal(d.perception, 100); assert.deepEqual(d.items, { film: 2 }); assert.deepEqual(d.flags, ['a']);
  const mem = new Map(); const st = new SaveStore({ get: k => mem.get(k) ?? null, set: (k, v) => mem.set(k, v), remove: k => mem.delete(k) });
  const a = newSave(); a.flags.push('first'); st.write(a);
  const b = newSave(); b.flags.push('second'); st.write(b);
  assert.deepEqual(st.load().flags, ['second']);
  mem.set(KEY_MAIN, '{ broken'); const l = st.load(); assert.deepEqual(l.flags, ['first']); assert.ok(st.wasCorrupted);
  mem.set(KEY_BACKUP, 'junk'); assert.equal(st.load(), null);
});
