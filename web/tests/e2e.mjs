// Full playthrough in headless Chromium, driving the real game code through its debug hook.
// node tests/e2e.mjs   (after `node build.mjs`)
import { open } from './smoke.mjs';

const t = await open();
const p = t.page;
const log = (...a) => console.log('•', ...a);
let failures = 0;
const check = (cond, msg) => { if (cond) log('ok  ', msg); else { failures++; console.log('FAIL', msg); } };
const G = (fn, arg) => p.evaluate(fn, arg);
const flag = f => p.evaluate(f => window.__unseen.G.story.has(f), f);
const diag = () => p.evaluate(() => { const g = window.__unseen.G, sc = g.director.scheduler; return JSON.stringify({ state: g.state, busy: g.isBusy(), active: sc.active?.id, tvBusy: g.world.tvBusy, dlg: g.dialogue.busy, sub: g.dialogue.subtitle, q: g.dialogue.queue.length, lock: g.input.locked, lf: g.input.lockFailed, modal: g.ui.modal, t: g.time.toFixed(1) }); });
const waitFlag = async (f, ms = 180000) => { try { await p.waitForFunction(f => window.__unseen.G.story.has(f), f, { timeout: ms, polling: 200 }); return true; } catch { console.log('DIAG', f, await diag()); return false; } };
const waitGame = async s => { const t0 = await p.evaluate(() => window.__unseen.G.time); await p.waitForFunction(([t0, s]) => window.__unseen.G.time - t0 >= s, [t0, s], { timeout: s * 6000 + 10000, polling: 100 }).catch(async e => { console.log('DIAG waitGame', await diag()); throw e; }); };
const idle = () => p.waitForFunction(() => !window.__unseen.G.dialogue.busy, null, { timeout: 120000, polling: 200 });
const shot = name => p.screenshot({ path: `tests/out/e2e-${name}.png` });

// low settings so software rendering keeps up
await p.evaluate(() => localStorage.setItem('unseen_settings_v1', JSON.stringify({ quality: 'low', shadows: false })));
await p.reload();
await p.waitForTimeout(1500);
await p.click('#begin');
await p.waitForTimeout(800);
await p.getByText('New Game').click();
await p.waitForFunction(() => window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });

await p.evaluate(() => {
  const g = window.__unseen.G, V = g.camera.position.constructor;
  window.T = {
    g, V,
    at(x, z, yaw, pitch = 0) { g.player.teleport(new V(x, 0, z), yaw); g.player.pitch = pitch; },
    face(x, y, z) { g.player.lookAt(new V(x, y, z)); },
    use(name) {
      const o = g.worldRoot.getObjectByName(name);
      if (!o) throw new Error('no object ' + name);
      for (let x = o; x; x = x.parent) if (x.userData.interact) { x.userData.interact.onUse(); return true; }
      throw new Error('not interactable ' + name);
    },
    door(label) { return g.world.doors.find(d => d.label === label); },
    obj: () => g.story.objectiveId,
  };
});
const has = f => flag(f);

// ---------------------------------------------------------------- chapter 1
check(await G(() => T.obj()) === 'light', 'new game starts with "Find a light"');
// real aiming: look at the flashlight and press E
await G(() => { T.at(4.9, 9.2, 0); T.face(5.5, 0.64, 9.15); });
await waitGame(0.5);
check(await G(() => !!T.g.player.current), 'crosshair finds the flashlight');
await p.keyboard.press('KeyE');
check(await waitFlag('got_flashlight', 5000), 'flashlight picked up with E');
await G(() => T.door('front door').toggle());
check(await has('front_door_tried'), 'front door tried');
await G(() => T.at(-1.5, 3.3, Math.PI / 2));
await p.waitForFunction(() => window.__unseen.G.world.ringing, null, { timeout: 60000 }).catch(() => {});
check(await G(() => T.g.world.ringing), 'telephone rings after trying the door');
await G(() => T.use('Phone'));
await idle();
check(await waitFlag('phone1_answered', 25000), 'first call answered');
await G(() => T.use('Drawer'));
await G(() => T.use('FuseBox'));
check(await has('fuse_installed'), 'fuse installed (puzzle 1)');
// Event 1: leave the living room, the chair moves while unobserved; come back and notice it
await G(() => T.at(-3, 8.5, 0));
await waitGame(7);
const chairMoved = await G(() => T.g.world.watchedChair.stepIndex);
check(chairMoved === 0, 'chair moved while unobserved (Event 1)');
await G(() => { T.at(-2.5, 3.6, 0); T.face(-4.3, 0.5, 1.25); });
check(await waitFlag('chair_noticed', 5000), 'noticing the chair starts chapter 2');
check(await G(() => T.g.story.chapter) === 2, 'chapter 2');
await shot('ch2');

// ---------------------------------------------------------------- chapter 2
await G(() => T.use('Drawer') && T.g.worldRoot.getObjectByName('DeskDrawer').userData.interact.onUse());
check(await has('got_camera'), 'camera found');
await idle();
await G(() => { T.at(-3.4, 2.6, Math.PI); });
check(await waitFlag('tv_live_seen', 400000), 'TV live feed shows the figure (Event 4)');
// photograph the bathroom sink with the real camera key
await G(() => { T.at(1.6, 3.2, 0); T.face(2.4, 0.3, 4.6); });
await waitGame(0.5);
await p.keyboard.press('KeyG');
check(await waitFlag('photo_key_revealed', 5000), 'photo reveals the hidden key (puzzle 2)');
check(await G(() => T.g.data.photos.length === 1 && T.g.data.photos[0].src.startsWith('data:image/jpeg')), 'photo stored with the save');
check(await has('symbol_circle_seen'), 'photo also shows the circle symbol');
await shot('photo');
await G(() => T.use('BrassKey'));
check(await has('got_brass_key'), 'brass key taken');
await G(() => { T.door('wardrobe').toggle(); });
check(await has('wardrobe_open'), 'wardrobe opened with the key');
await G(() => { T.use('Diary'); T.g.ui.closeModals(); });
check(await has('diary_read'), 'diary read');
await idle();
check(await waitFlag('radio_on', 30000), 'radio switches itself on');
await waitGame(1); await G(() => T.g.world.useRadio());
check(await has('radio_off'), 'radio switched off');
await waitGame(1.6);
await G(() => { T.door('cabinet').toggle(); T.g.ui.closeModals(); });
check(await has('kitchen_msg'), 'cabinet message read: chapter 3');
check(await G(() => T.g.story.chapter) === 3, 'chapter 3');

if (process.env.STOP === 'ch2') { console.log('stopping after chapter 2'); await t.close(); process.exit(failures ? 1 : 0); }
// ---------------------------------------------------------------- chapter 3
await G(() => { T.g.world.bathLight.on = false; T.at(2.2, 4.1, 0); });
await p.keyboard.down('KeyQ'); await waitGame(3.6); await p.keyboard.up('KeyQ');
check(await waitFlag('mirror_msg', 5000), 'mirror writing appears in the dark with eyes closed (puzzle 3)');
await idle();
await p.waitForFunction(() => !window.__unseen.G.world.tvBusy, null, { timeout: 120000 });
await G(() => { T.at(-3.4, 2.4, Math.PI); T.g.world.useTelevision(); });
for (const ch of ['11', '4', '7']) await p.locator('.channels .grid button', { hasText: new RegExp(`^${ch}$`) }).click();
check(await waitFlag('tv_solved', 400000), 'TV channels 11-4-7 play the broadcast (puzzle 4)');
await shot('tv');
// follow the footsteps without looking: stay just behind them, facing away
await waitGame(1);
for (let i = 0; i < 200 && !(await flag('closet_found')); i++) {
  await G(() => { const gd = T.g.world.guide; if (gd) T.at(0, Math.min(9.9, gd.pos.z + 1.3), 0); });
  await waitGame(0.3);
}
check(await waitFlag('closet_found', 8000), 'footsteps lead to a door that was never there (puzzle 5, Event 5)');
await G(() => T.use('Fragment'));
check(await has('frag_a'), 'fragment 1 from the closet');
await G(() => { T.at(4.4, 6.6, 0); });
await p.keyboard.down('KeyQ'); await waitGame(2.2); await p.keyboard.up('KeyQ');
check(await waitFlag('musicbox_revealed', 5000), 'music box found by sound with eyes closed (puzzle 6)');
await G(() => T.use('MusicBox'));
check(await has('frag_b'), 'fragment 2 in the music box');
await G(() => { T.at(0, 9.0, 0); T.g.world.useBasementDoor(); });
const dials = p.locator('.dial');
for (const [i, v] of [[1, 2], [2, 1], [3, 9]]) for (let k = 0; k < v; k++) await dials.nth(i).locator('button').first().click();
await p.getByText('Pull the shackle').click();
check(await has('basement_unlocked'), 'padlock 0219 opens (puzzle 7)');
await G(() => T.g.world.useBasementDoor());
await p.waitForFunction(() => window.__unseen.G.worldName === 'basement' && window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });
check(await has('entered_basement') && await G(() => T.g.story.chapter) === 4, 'basement reached: chapter 4');
await shot('basement');

// ---------------------------------------------------------------- chapter 4: the presence
await p.waitForFunction(() => { const g = window.__unseen.G; return !g.dialogue.busy && g.time - g.world.entity.since > 5.5; }, null, { timeout: 60000 }); // it waits a few seconds before it starts
await G(() => { T.at(0, 3, 0); T.face(0, 1.2, 10.8); });
const before = await G(() => T.g.world.entity.root.position.z);
await waitGame(2.5);
const watched = await G(() => T.g.world.entity.root.position.z);
check(Math.abs(watched - before) < 0.01, 'the presence does not move while watched');
await G(() => T.at(0, 3, Math.PI));
await waitGame(2.5);
const after = await G(() => T.g.world.entity.root.position.z);
check(after < watched - 0.5, `the presence moves when you look away (${watched.toFixed(2)} → ${after.toFixed(2)})`);
await G(() => { T.at(0, 1, 0); T.g.world.entity.resetHome(); });
await G(() => { const b = T.g.worldRoot.children.filter(c => c.name === 'Breaker'); b.forEach(x => x.userData.interact.onUse()); });
check(await waitFlag('power_on', 3000), 'three breakers restore power (puzzle 8)');
check(await waitFlag('tape_seen', 60000), 'the home video plays');
await G(() => { T.use('Fragment'); });
await G(() => { const f = T.g.worldRoot.getObjectByName('Fragment'); if (f) T.use('Fragment'); });
check(await has('frag_c') && await has('frag_d'), 'fragments 3 and 4 found');
await G(() => T.use('Stairs'));
await p.waitForFunction(() => window.__unseen.G.worldName === 'apartment' && window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });
check(await G(() => T.g.world.changed), 'the apartment has changed in chapter 4');
await shot('changed');
await G(() => T.use('FamilyPicture'));
const slots = p.locator('.slot');
for (let i = 0; i < 4; i++) { await p.locator('.piece').first().click(); await slots.nth(await p.locator('.piece').count() === 4 - i ? i : i).click(); }
check(await waitFlag('photo_restored', 8000), 'family photograph rebuilt (puzzle 9)');
check(await has('got_room_key'), 'ribbon key found');

// ---------------------------------------------------------------- chapter 5
await G(() => T.g.world.useBasementDoor());
await p.waitForFunction(() => window.__unseen.G.worldName === 'basement' && window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });
await G(() => { T.door('door').toggle(); });
await waitGame(1.2);
await G(() => T.at(0, 12.9, 0));
check(await waitFlag('entered_miras_room', 3000) && await G(() => T.g.story.chapter) === 5, 'her room: chapter 5');
for (const yaw of [0, Math.PI, Math.PI / 2, -Math.PI / 2]) { await G(y => T.at(0, 13.7, y), yaw); await waitGame(3.5); }
const visible = await G(() => ['rabbit', 'shoe', 'crayons', 'drawing'].filter(k => T.g.worldRoot.getObjectByName('Memory_' + k).visible));
check(visible.length === 4, `memories appear where you are not looking (${visible.join(', ')})`);
await G(() => ['rabbit', 'shoe', 'crayons', 'drawing'].forEach(k => T.use('Memory_' + k)));
check(await waitFlag('memories_done', 8000), 'all four memories (puzzle 10)');
await waitGame(10);
await G(() => T.use('ToyPhone'));
check(await waitFlag('final_call_done', 40000), 'her call');
await G(() => T.use('FrontKey'));
check(await has('got_front_key'), 'front door key');
await shot('miraroom');

// ---------------------------------------------------------------- save and continue
const saved = await G(() => JSON.parse(localStorage.getItem('unseen_save_v1')).flags.includes('got_front_key'));
check(saved, 'progress is saved to browser storage');
await p.reload();
await p.waitForTimeout(1500);
await p.click('#begin');
await p.waitForTimeout(600);
await p.getByText('Continue').click();
await p.waitForFunction(() => window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });
await p.evaluate(() => { const g = window.__unseen.G, V = g.camera.position.constructor; window.T = { g, V, at(x, z, y) { g.player.teleport(new V(x, 0, z), y); g.player.pitch = 0; }, face(x, y, z) { g.player.lookAt(new V(x, y, z)); } }; });
check(await G(() => T.g.worldName === 'basement' && T.g.story.objectiveId === 'choice' && T.g.inventory.has('front_key')), 'Continue restores chapter 5, objective and inventory');

// ---------------------------------------------------------------- endings
await G(() => { T.at(0, 12.9, 0); T.face(0, 0.6, 13.9); });
await p.waitForFunction(() => window.__unseen.G.state === 'ending', null, { timeout: 120000 }).catch(() => {});
check(await G(() => T.g.state === 'ending' && T.g.endingsSeen.has(2)), 'REMEMBER: looking at the empty chair for 12 s');
await shot('ending');
// STAY and FORGET from the same checkpoint
for (const [name, run] of [['STAY', async () => { await G(() => T.at(0, 13.4, Math.PI)); await p.keyboard.down('KeyQ'); await waitGame(13); await p.keyboard.up('KeyQ'); }],
  ['FORGET', async () => {
    await G(() => T.g.transitionTo('apartment', 'from_basement'));
    await p.waitForFunction(() => window.__unseen.G.worldName === 'apartment' && window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });
    await G(() => T.g.world.doors.find(d => d.label === 'front door').toggle());
    await p.getByRole('button', { name: 'Yes', exact: true }).click();
  }]]) {
  await p.evaluate(() => { const g = window.__unseen.G; g.state = 'paused'; });
  await p.evaluate(() => { const g = window.__unseen.G; g.state = 'menu'; });
  await p.reload(); await p.waitForTimeout(1500); await p.click('#begin'); await p.waitForTimeout(600);
  await p.getByText('Continue').click();
  await p.waitForFunction(() => window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });
  await p.evaluate(() => { const g = window.__unseen.G, V = g.camera.position.constructor; window.T = { g, V, at(x, z, y) { g.player.teleport(new V(x, 0, z), y); g.player.pitch = 0; } }; });
  await run();
  await p.waitForFunction(() => window.__unseen.G.state === 'ending', null, { timeout: 30000 }).catch(() => {});
  check(await G(() => T.g.state === 'ending'), `${name} ending reached`);
}
check(await G(() => JSON.parse(localStorage.getItem('unseen_endings')).length === 3), 'all three endings recorded');

const errs = t.errors.filter(e => !e.includes('GPU stall') && !e.includes('GL Driver'));
check(errs.length === 0, 'no console errors' + (errs.length ? ':\n' + errs.join('\n') : ''));
console.log(failures ? `\n${failures} FAILED` : '\nALL PASSED');
await t.close();
process.exit(failures ? 1 : 0);
