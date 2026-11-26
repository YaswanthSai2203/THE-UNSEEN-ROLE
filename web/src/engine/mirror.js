import * as THREE from 'three';
import { G } from '../game.js';
import { LAYER_BODY } from './kit.js';
import { inViewCone } from '../logic/observeMath.js';

/**
 * A planar mirror: a camera at the reflected eye renders through the mirror rectangle with an off-axis
 * projection, and the image is shown horizontally flipped. The player's body appears in it. Supports the
 * anomaly where the reflection stops following you.
 */
export class Mirror {
  constructor(builder, center, normal, w, h) {
    this.center = new THREE.Vector3(...center); this.n = new THREE.Vector3(...normal).normalize(); this.w = w; this.h = h;
    this.anomaly = false; this.frozen = null;
    this.rt = new THREE.WebGLRenderTarget(Math.round(384 * w / h), 384, { colorSpace: THREE.SRGBColorSpace });
    this.rt.texture.wrapS = THREE.RepeatWrapping; this.rt.texture.repeat.x = -1; this.rt.texture.offset.x = 1;
    const m = new THREE.MeshBasicMaterial({ map: this.rt.texture, color: new THREE.Color(0.82, 0.86, 0.86) });
    this.mesh = builder.panel('MirrorSurface', center, [w, h], normal, m);
    this.cam = new THREE.PerspectiveCamera(60, w / h, 0.05, 25);
    this.cam.layers.enable(LAYER_BODY);
    builder.updaters.push(() => this.update());
    G.mirrors.push(this);
  }

  visible() {
    if (!G.player) return false;
    const eye = G.player.eye, side = eye.clone().sub(this.center).dot(this.n);
    if (side < 0.05 || eye.distanceTo(this.center) > 7) return false;
    const fwd = G.camera.getWorldDirection(new THREE.Vector3()), up = new THREE.Vector3(0, 1, 0).applyQuaternion(G.camera.quaternion);
    return inViewCone(eye, fwd, up, G.camera.fov, G.camera.aspect, this.center, 0.3);
  }

  /** Called before the main render. */
  render() {
    if (!this.visible()) return;
    const eye = G.player.eye, n = this.n, side = eye.clone().sub(this.center).dot(n);
    const v = eye.clone().addScaledVector(n, -2 * side);
    this.cam.position.copy(v);
    this.cam.lookAt(v.clone().add(n));
    this.cam.updateMatrixWorld();
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.cam.quaternion), up = new THREE.Vector3(0, 1, 0).applyQuaternion(this.cam.quaternion);
    const d = this.center.clone().sub(v), near = Math.max(0.02, d.dot(n));
    let l = d.dot(right) - this.w / 2, r = l + this.w;
    const b = d.dot(up) - this.h / 2, t = b + this.h;
    const wob = G.perception.distortion > 0.6 && !G.settings.reducedMotion ? Math.sin(G.time * 0.7) * 0.03 * G.perception.distortion : 0;
    l += wob; r += wob;
    this.cam.near = near;
    this.cam.projectionMatrix.makePerspective(l, r, t, b, near, 25);
    this.cam.projectionMatrixInverse.copy(this.cam.projectionMatrix).invert();
    this.mesh.visible = false;
    G.renderer.setRenderTarget(this.rt);
    G.renderer.render(G.scene, this.cam);
    G.renderer.setRenderTarget(null);
    this.mesh.visible = true;
  }

  update() {
    const p = G.player;
    if (!p) return;
    if (!this.anomaly) {
      if (this.frozen) { this.frozen.removeFromParent(); this.frozen = null; if (!G.mirrors.some(m => m.anomaly)) p.body.visible = true; }
      return;
    }
    if (!this.frozen) {
      this.frozen = p.body.clone(); this.frozen.traverse(o => o.layers.set(LAYER_BODY));
      G.worldRoot.add(this.frozen);
    }
    p.body.visible = false;
    // It only catches up while you aren't looking at the mirror, and then it faces the glass, not you.
    if (!this.visible()) { this.frozen.position.copy(p.position); this.frozen.rotation.y = Math.atan2(-this.n.x, -this.n.z); }
  }
}
