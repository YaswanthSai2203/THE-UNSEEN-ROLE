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
const fps = () => p.evaluate(() => new Promise(res => { let n = 0; const w0 = performance.now(); const f = () => { n++; if (performance.now() - w0 > 3000) res((n / 3).toFixed(1)); else requestAnimationFrame(f); }; requestAnimationFrame(f); }));
for (let i = 0; i < 4; i++) {
  const w = i % 2 ? 'basement' : 'apartment';
  await p.evaluate(w => window.__unseen.G.transitionTo(w, w === 'basement' ? 'default' : 'from_basement'), w);
  await p.waitForFunction(w => window.__unseen.G.worldName === w && window.__unseen.G.state === 'playing' && !window.__unseen.G.isBusy(), w, { timeout: 60000 });
  console.log(i, w, 'fps', await fps(), JSON.stringify(await p.evaluate(() => { const g = window.__unseen.G; let lights = 0, objs = 0; g.scene.traverse(o => { objs++; if (o.isLight) lights++; }); return { lights, objs, camKids: g.camera.children.length, loops: g.audio.loops.length, shots: g.audio.oneShots.length, obs: g.observation.objects.length, ev: g.director.scheduler.events.length, geo: g.renderer.info.memory.geometries, tex: g.renderer.info.memory.textures }; })));
}
await t.close();
