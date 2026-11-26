import { open } from './smoke.mjs';
const t = await open();
const p = t.page;
await p.waitForTimeout(2000);
await p.click('#begin');
await p.waitForTimeout(1500);
await p.getByText('New Game').click();
await p.waitForFunction(() => window.__unseen.G.state === 'playing', null, { timeout: 30000 });
await p.waitForTimeout(3000);
await p.screenshot({ path: 'tests/out/start.png' });
// look at a few places with lights on
const shots = [
  ['bedroom', 2.0, 7.5, -Math.PI / 2 + 0.3, -0.1],
  ['living', -1.5, 1.2, -2.2, -0.15],
  ['kitchen', -1.5, 7.6, -1.9, -0.1],
  ['hallway', 0, 1.0, 0, 0],
  ['bathroom', 1.2, 2.8, 0.6, -0.25],
];
await p.evaluate(() => { const G = window.__unseen.G; G.world.lights.forEach(l => (l.on = true)); G.story.set('fuse_installed'); });
for (const [name, x, z, yaw, pitch] of shots) {
  await p.evaluate(([x, z, yaw, pitch]) => { const G = window.__unseen.G; G.player.teleport({ x, y: 0, z, clone() { return this; } } && new G.camera.position.constructor(x, 0, z), yaw); G.player.pitch = pitch; }, [x, z, yaw, pitch]);
  await p.waitForTimeout(1200);
  await p.screenshot({ path: `tests/out/${name}.png` });
}
console.log(JSON.stringify(await p.evaluate(() => { const G = window.__unseen.G; return { state: G.state, obj: G.story.objectiveId, entries: G.physics.entries.length, calls: G.renderer.info.render.calls, tris: G.renderer.info.render.triangles }; })));
console.log(t.errors.filter(e => !e.includes('GPU stall')).join('\n') || 'no console errors');
await t.close();
