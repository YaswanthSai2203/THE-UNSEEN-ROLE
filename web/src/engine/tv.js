import * as THREE from 'three';
import { G } from '../game.js';
import { LAYER_UNSEEN, LAYER_BODY } from './kit.js';
import { staticTexture } from './materials.js';
import { noise1 } from './noise.js';

/** The television: off, static, live camera feeds (which see the Unseen layer) or still cards. */
export class Television {
  constructor(builder, screen, glow, staticLoop) {
    this.screen = screen; this.glow = glow; this.staticLoop = staticLoop; this.mode = 'off'; this.feed = null;
    this.mat = new THREE.MeshBasicMaterial({ color: 0x050606 });
    screen.material = this.mat;
    this.rt = new THREE.WebGLRenderTarget(320, 240, { colorSpace: THREE.SRGBColorSpace });
    builder.updaters.push(() => this.update());
    G.tvs.push(this);
    this.off();
  }
  feedCamera(pos, look) {
    const c = new THREE.PerspectiveCamera(62, 4 / 3, 0.05, 30);
    c.layers.enable(LAYER_UNSEEN); c.layers.enable(LAYER_BODY);
    c.position.set(...pos); c.lookAt(new THREE.Vector3(...look)); c.updateMatrixWorld();
    return c;
  }
  set(mode, color, map) {
    this.mode = mode; this.mat.map = map || null; this.mat.color.copy(color); this.mat.needsUpdate = true;
    this.glow.visible = mode !== 'off';
    if (mode === 'static') { if (!this.staticLoop.isPlaying) this.staticLoop.play(); } else this.staticLoop.stop();
  }
  off() { this.feed = null; this.set('off', new THREE.Color(0.02, 0.025, 0.025)); }
  static() { this.feed = null; const t = staticTexture(); t.repeat.set(1.5, 1.2); this.set('static', new THREE.Color(0.8, 0.82, 0.85), t); }
  showFeed(cam) { this.feed = cam; this.set('feed', new THREE.Color(0.75, 0.85, 0.8), this.rt.texture); }
  card(tex) { this.feed = null; this.set('card', new THREE.Color(0.85, 0.85, 0.8), tex); }
  render() {
    if (this.mode !== 'feed' || !this.feed) return;
    this.screen.visible = false; // never sample the texture being drawn into
    G.renderer.setRenderTarget(this.rt); G.renderer.render(G.scene, this.feed); G.renderer.setRenderTarget(null);
    this.screen.visible = true;
  }
  update() {
    if (this.mode === 'static') this.mat.map.offset.set(Math.random(), Math.random());
    if (this.glow.visible) this.glow.intensity = (this.mode === 'static' ? 0.6 : 0.45) * G.lightScale * (0.85 + noise1(G.time * 9) * 0.3);
  }
}
