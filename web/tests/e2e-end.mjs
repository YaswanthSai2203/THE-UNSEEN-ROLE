// Chapter 5 to every ending, starting from a save at the door of her room (complements tests/e2e.mjs).
import { open } from './smoke.mjs';
const t = await open();
const p = t.page;
let failures = 0;
const check = (c, m) => { if (c) console.log('• ok  ', m); else { failures++; console.log('FAIL', m); } };
const G = (fn, arg) => p.evaluate(fn, arg);
const has = f => p.evaluate(f => window.__unseen.G.story.has(f), f);
const diag = () => p.evaluate(() => { const g = window.__unseen.G; return JSON.stringify({ state: g.state, busy: g.isBusy(), t: g.time.toFixed(2), dlg: g.dialogue.subtitle, lock: g.input.locked, hidden: document.hidden, modal: g.ui.modal }); });
const waitGame = async s => {
  const t0 = await p.evaluate(() => window.__unseen.G.time);
  for (let i = 0; i < 40; i++) {
    const ok = await p.waitForFunction(([t0, s]) => window.__unseen.G.time - t0 >= s, [t0, s], { timeout: 15000, polling: 100 }).then(() => true, () => false);
    if (ok) return;
    console.log('waiting', await diag());
  }
  throw new Error('game time stalled');
};
const waitFlag = (f, ms = 300000) => p.waitForFunction(f => window.__unseen.G.story.has(f), f, { timeout: ms, polling: 200 }).then(() => true, () => false);
const ready = () => p.waitForFunction(() => window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 60000 });
const helpers = () => p.evaluate(() => { const g = window.__unseen.G, V = g.camera.position.constructor; window.T = { g, at(x, z, y) { g.player.teleport(new V(x, 0, z), y); g.player.pitch = 0; }, face(x, y, z) { g.player.lookAt(new V(x, y, z)); },
  use(n) { for (let x = g.worldRoot.getObjectByName(n); x; x = x.parent) if (x.userData.interact) return x.userData.interact.onUse(); throw new Error('no ' + n); } }; });
const continueGame = async () => { await p.reload(); await p.waitForTimeout(1500); await p.click('#begin'); await p.waitForTimeout(600); await p.getByText('Continue').click(); await ready(); await helpers(); };

await p.evaluate(() => localStorage.setItem('unseen_settings_v1', JSON.stringify({ quality: 'low', shadows: false })));
await p.reload(); await p.waitForTimeout(1200); await p.click('#begin'); await p.waitForTimeout(500);
await p.getByText('New Game').click(); await ready(); await helpers();
const flags = ['woke','got_flashlight','front_door_tried','phone1_answered','got_fuse','fuse_installed','chair_noticed','got_camera','tv_live_seen','photo_key_revealed','got_brass_key','wardrobe_open','diary_read','radio_on','radio_off','kitchen_msg','mirror_msg','tv_solved','closet_found','frag_a','musicbox_found','frag_b','basement_unlocked','entered_basement','breaker_1','breaker_2','breaker_3','power_on','tape_seen','frag_c','frag_d','photo_restored','got_room_key'];
await p.evaluate(f => { const g = window.__unseen.G; f.forEach(x => g.story.set(x)); g.dialogue.stopAll(); g.inventory.add('room_key'); g.transitionTo('basement', 'default'); }, flags);
await p.waitForFunction(() => window.__unseen.G.worldName === 'basement' && window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 60000 });
await helpers();

await G(() => T.g.world.doors.find(d => d.label === 'door').toggle());
check(await G(() => T.g.world.doors.find(d => d.label === 'door').isOpen), 'ribbon key opens her room');
await waitGame(1.5);
await G(() => T.at(0, 12.9, 0));
check(await waitFlag('entered_miras_room', 20000) && await G(() => T.g.story.chapter) === 5, 'chapter 5');
for (const yaw of [0, Math.PI, Math.PI / 2, -Math.PI / 2]) { await G(y => T.at(0, 13.7, y), yaw); await waitGame(3.5); }
const vis = await G(() => ['rabbit', 'shoe', 'crayons', 'drawing'].filter(k => T.g.worldRoot.getObjectByName('Memory_' + k).visible));
check(vis.length === 4, `memories appear where you are not looking (${vis.join(', ')})`);
await G(() => ['rabbit', 'shoe', 'crayons', 'drawing'].forEach(k => T.use('Memory_' + k)));
check(await waitFlag('memories_done'), 'all four memories (puzzle 10)');
await p.waitForFunction(() => window.__unseen.G.world.toyRinging, null, { timeout: 300000 }).catch(() => {});
check(await G(() => T.g.world.toyRinging), 'the toy telephone rings');
await G(() => T.use('ToyPhone'));
check(await waitFlag('final_call_done'), 'her call');
await G(() => T.use('FrontKey'));
check(await has('got_front_key'), 'front door key on her desk');
check(await G(() => JSON.parse(localStorage.getItem('unseen_save_v1')).flags.includes('got_front_key')), 'saved');
await p.screenshot({ path: 'tests/out/end-room.png' });

await continueGame();
check(await G(() => T.g.worldName === 'basement' && T.g.story.objectiveId === 'choice' && T.g.inventory.has('front_key')), 'Continue restores chapter 5, the choice and the key');
await G(() => { T.at(0, 12.9, 0); T.face(0, 0.6, 13.9); });
await p.waitForFunction(() => window.__unseen.G.state === 'ending', null, { timeout: 600000 }).catch(e => console.log('wait error:', e.message.split('\n')[0]));
console.log('after gaze', await G(() => JSON.stringify({ state: T.g.state, gaze: T.g.world.gaze, per: T.g.perception.value, pos: T.g.player.position, seen: [...T.g.endingsSeen] })));
check(await G(() => T.g.state === 'ending' && T.g.endingsSeen.has(2)), 'REMEMBER: look at the empty chair and keep looking');
await p.waitForTimeout(4000);
await p.screenshot({ path: 'tests/out/end-remember.png' });

await continueGame();
await G(() => T.at(0, 13.4, Math.PI));
await p.keyboard.down('KeyQ');
await p.waitForFunction(() => window.__unseen.G.state === 'ending', null, { timeout: 600000 }).catch(() => {});
await p.keyboard.up('KeyQ');
check(await G(() => T.g.state === 'ending' && T.g.endingsSeen.has(3)), 'STAY: keep your eyes closed in her room');

await continueGame();
await G(() => T.g.transitionTo('apartment', 'from_basement'));
await p.waitForFunction(() => window.__unseen.G.worldName === 'apartment' && window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 60000 });
await helpers();
await G(() => T.g.world.doors.find(d => d.label === 'front door').toggle());
await p.getByRole('button', { name: 'Yes', exact: true }).click();
await p.waitForFunction(() => window.__unseen.G.state === 'ending', null, { timeout: 60000 }).catch(() => {});
check(await G(() => T.g.state === 'ending' && T.g.endingsSeen.has(1)), 'FORGET: leave by the front door');
// let an ending play out and return to the menu
await p.waitForFunction(() => window.__unseen.G.state === 'menu', null, { timeout: 240000 }).catch(() => {});
check(await G(() => T.g.state === 'menu'), 'ending plays through the credits and returns to the main menu');
check(await G(() => /Endings found: 3 \/ 3/.test(document.body.innerText)), 'main menu shows 3 / 3 endings');
await p.screenshot({ path: 'tests/out/end-menu.png' });

const errs = t.errors.filter(e => !/GPU stall|GL Driver/.test(e));
check(!errs.length, 'no console errors' + (errs.length ? ':\n' + errs.join('\n') : ''));
console.log(failures ? `\n${failures} FAILED` : '\nALL PASSED');
await t.close();
process.exit(failures ? 1 : 0);
