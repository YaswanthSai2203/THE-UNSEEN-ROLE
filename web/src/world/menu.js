import * as THREE from 'three';
import { G } from '../game.js';
import { WorldBuilder, TUNGSTEN } from '../engine/kit.js';

/** Main menu backdrop: a dark hallway, a failing bulb, and someone at the far end, sometimes. */
export class MenuBuilder extends WorldBuilder {
  get hasPlayer() { return false; }
  build() {
    this.ceiling = 2.6;
    this.atmosphere(new THREE.Color(0.035, 0.035, 0.042), 0x020203, 0.07);
    this.room('Hall', -0.75, 0, 0.75, 12, 'floor_wood');
    this.wallZ(-0.75, 0, 12, 'plaster', 'wallpaper_hall', { c: 4, w: 0.9, h: 2.05 }, { c: 8.5, w: 0.9, h: 2.05 });
    this.wallZ(0.75, 0, 12, 'wallpaper_hall', 'plaster', { c: 6, w: 0.9, h: 2.05 });
    this.wallX(12, -0.75, 0.75, 'wallpaper_hall', 'plaster', { c: 0, w: 0.9, h: 2.05 });
    this.wallX(0, -0.75, 0.75, 'plaster', 'wallpaper_hall');
    this.makeDoor('door', [-0.75, 0, 4.45], 90, 0.9, 'door').setAngleInstant(-20);
    this.makeDoor('door', [0.75, 0, 5.55], -90, 0.9, 'door').setAngleInstant(35);
    this.makeDoor('door', [-0.45, 0, 12], 0, 0.9, 'door').setAngleInstant(-25);
    this.box('Runner', [0, 0.005, 6], [0.8, 0.01, 11], 'rug', { collide: false });
    this.box('Console', [0.55, 0.4, 3], [0.25, 0.8, 0.8], 'wood_dark');
    this.bulb = this.ceilingLight('Bulb', [0, 2.35, 7], TUNGSTEN, 0.9, 6, { bare: true });
    this.bulb.alwaysUnstable = true;
    this.ceilingLight('Bulb', [0, 2.35, 1.5], TUNGSTEN, 0.35, 3, { bare: true, shadows: false });
    this.dust([0, 1.4, 5], [1.2, 1.5, 6]);
    this.fig = this.figure('Figure', [0, 0, 12.6], 180);
    this.fig.visible = false;
    this.figTimer = 8;
    G.audio.loop('roomTone', G.camera, 0.5, 'ambience', 5);
    G.audio.loop('buzz', this.bulb.light, 0.15, 'ambience', 6);
    G.audio.loop('tick', new THREE.Vector3(-0.7, 2, 3), 0.2, 'ambience', 6);
    this.spawn('default', 0, 0, 0, 0);
    this.updaters.push(dt => this.drift(dt));
  }
  drift(dt) {
    const t = performance.now() / 1000, c = G.camera;
    c.position.set(Math.sin(t * 0.13) * 0.06, 1.6 + Math.sin(t * 0.21) * 0.02, 0.8 + Math.sin(t * 0.05) * 0.5);
    c.rotation.set(-0.035 - Math.sin(t * 0.17) * 0.01, Math.PI + Math.sin(t * 0.09) * 0.026, 0, 'YXZ');
    c.fov = 60; c.updateProjectionMatrix(); c.updateMatrixWorld();
    // Someone stands in the far doorway for a while, then isn't there. It changes only while the bulb is out.
    this.figTimer -= dt;
    if (this.figTimer <= 0) {
      this.bulb.flicker(0.5); this.figTimer = 12 + Math.random() * 13;
      setTimeout(() => { if (this.fig) this.fig.visible = !this.fig.visible; }, 250);
    }
  }
}
