import { open } from './smoke.mjs';
const t = await open();
const p = t.page;
await p.evaluate(() => localStorage.setItem('unseen_settings_v1', JSON.stringify({ quality: 'low', shadows: false })));
await p.reload(); await p.waitForTimeout(1200); await p.click('#begin'); await p.waitForTimeout(500);
await p.getByText('New Game').click();
await p.waitForFunction(() => window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });
const flags = ['woke','got_flashlight','front_door_tried','phone1_answered','got_fuse','fuse_installed','chair_noticed','got_camera','tv_live_seen','photo_key_revealed','got_brass_key','wardrobe_open','diary_read','radio_on','radio_off','kitchen_msg','mirror_msg','tv_solved','closet_found','frag_a','musicbox_found','frag_b','basement_unlocked','entered_basement','breaker_1','breaker_2','breaker_3','power_on','tape_seen','frag_c','frag_d','photo_restored','got_room_key'];
await p.evaluate(f => { const g = window.__unseen.G; f.forEach(x => g.story.set(x)); g.dialogue.stopAll(); g.transitionTo('basement', 'default'); }, flags);
await p.waitForFunction(() => window.__unseen.G.worldName === 'basement' && window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), null, { timeout: 30000 });
await p.evaluate(() => { const g = window.__unseen.G, V = g.camera.position.constructor; g.world.doors.find(d => d.label === 'door').toggle(); });
await p.waitForTimeout(3000);
await p.evaluate(() => { const g = window.__unseen.G, V = g.camera.position.constructor; g.player.teleport(new V(0, 0, 12.9), 0); });
await p.waitForTimeout(3000);
await p.evaluate(() => { const g = window.__unseen.G, V = g.camera.position.constructor; g.player.teleport(new V(0, 0, 13.7), 0); });
for (let i = 0; i < 4; i++) {
  await p.waitForTimeout(2500);
  console.log(JSON.stringify(await p.evaluate(() => { const g = window.__unseen.G;
    return { t: g.time.toFixed(1), state: g.state, ch: g.story.chapter, pos: [g.player.position.x.toFixed(2), g.player.position.z.toFixed(2)], vis: ['rabbit', 'shoe', 'crayons', 'drawing'].map(k => g.worldRoot.getObjectByName('Memory_' + k).visible), lock: g.input.locked, screen: document.getElementById('screen').className }; })));
}
await p.screenshot({ path: 'tests/out/mira.png' });
console.log(t.errors.filter(e => !e.includes('GPU stall') && !e.includes('GL Driver')).join('\n'));
await t.close();
