import * as THREE from 'three';
import { G } from '../game.js';
import { LAYER_UNSEEN } from './kit.js';
import { inViewCone } from '../logic/observeMath.js';
import { Items } from '../logic/flags.js';
import { PLAIN_CAPTIONS, pick } from '../logic/content.js';
import { canvas } from './textures.js';

const W = 480, H = 360;

/**
 * The instant camera. A photo is rendered by a second camera that also sees the Unseen layer, so photos can
 * show what eyes cannot. Things that can be revealed register in G.reveals.
 */
export class PhotoCamera {
  constructor() {
    this.cam = new THREE.PerspectiveCamera(55, W / H, 0.05, 40);
    this.cam.layers.enable(LAYER_UNSEEN);
    this.rt = new THREE.WebGLRenderTarget(W, H, { colorSpace: THREE.SRGBColorSpace });
    this.flash = new THREE.PointLight(0xf2f7ff, 16 * G.lightScale, 9, 1.6);
    this.flash.visible = false;
    G.camera.add(this.flash);
    this.next = 0;
  }

  update() {
    if (G.state !== 'playing' || G.ui.modalOpen || !G.input.hit('camera')) return;
    if (!G.inventory.has(Items.Camera)) { G.notify('You don\'t have a camera.'); return; }
    if (G.player.eyesClosed || G.time < this.next) return;
    if (!G.inventory.remove(Items.Film)) { G.audio.play2D('locked', 0.5); G.notify('No film left. There was a box of film in the living room drawer.'); return; }
    this.take();
  }

  take() {
    this.next = G.time + 1.6;
    G.audio.play2D('shutter', 0.8);
    G.ui.flash();
    this.flash.visible = true;
    G.camera.updateMatrixWorld();
    this.cam.position.copy(G.camera.getWorldPosition(new THREE.Vector3()));
    this.cam.quaternion.copy(G.camera.getWorldQuaternion(new THREE.Quaternion()));
    this.cam.updateMatrixWorld();
    G.renderer.setRenderTarget(this.rt);
    G.renderer.render(G.scene, this.cam);
    const px = new Uint8Array(W * H * 4);
    G.renderer.readRenderTargetPixels(this.rt, 0, 0, W, H, px);
    G.renderer.setRenderTarget(null);
    setTimeout(() => (this.flash.visible = false), 90);

    const c = canvas(W, H), ctx = c.getContext('2d'), img = ctx.createImageData(W, H);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const s = ((H - 1 - y) * W + x) * 4, d = (y * W + x) * 4; // flip: GL rows start at the bottom
      let r = px[s] / 255, g = px[s + 1] / 255, b = px[s + 2] / 255;
      const lum = r * 0.3 + g * 0.59 + b * 0.11;
      r = r + (lum - r) * 0.35; g = g + (lum - g) * 0.35; b = b + (lum - b) * 0.35;           // fade
      r = r * 1.06 + 0.03; g = g + 0.025; b = b * 0.88 + 0.02;                                   // warm instant-film cast
      const dx = (x - W / 2) / (W / 2), dy = (y - H / 2) / (H / 2), v = 1 - 0.55 * Math.min(1, (dx * dx + dy * dy) * 0.6);
      const n = (Math.random() - 0.5) * 0.06;
      img.data[d] = (r * v + n) * 255; img.data[d + 1] = (g * v + n) * 255; img.data[d + 2] = (b * v + n) * 255; img.data[d + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);

    const captions = [];
    const pos = this.cam.position, fwd = this.cam.getWorldDirection(new THREE.Vector3()), up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.cam.quaternion);
    for (const r of [...G.reveals]) {
      if (r.active && !r.active()) continue;
      const p = r.object.getWorldPosition(new THREE.Vector3());
      if (p.distanceTo(pos) > r.maxDist) continue;
      if (!inViewCone(pos, fwd, up, this.cam.fov, this.cam.aspect, p, -0.1)) continue; // well inside the frame
      if (!G.physics.lineOfSight(pos, p, null)) continue;
      captions.push(r.caption); r.onRevealed?.();
    }
    const record = { src: c.toDataURL('image/jpeg', 0.72), caption: captions.length ? captions.join(' ') : pick(PLAIN_CAPTIONS), takenAt: new Date().toTimeString().slice(0, 5) };
    G.inventory.addPhoto(record);
    G.notify(captions.length ? 'The photograph shows something. (Tab to inspect)' : 'Photograph taken.');
    G.ui.latestPhoto(record);
  }
}
