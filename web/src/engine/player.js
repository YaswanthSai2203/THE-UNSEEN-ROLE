import * as THREE from 'three';
import { G } from '../game.js';
import { LAYER_BODY } from './kit.js';
import { mat } from './materials.js';
import { shakeAllowed, bobAllowed, keyName } from './settings.js';
import { Items } from '../logic/flags.js';

export const STAND = 1.75, CROUCH = 1.1, RADIUS = 0.28;
const WALK = 1.7, FAST = 2.9, CROUCH_SPEED = 0.9;

/** First-person movement, look, crouch, head bob, footsteps, flashlight, eye closure and interaction. */
export class Player {
  constructor(pos, yaw, root) {
    this.position = pos.clone().setY(0); this.yaw = yaw; this.pitch = 0; this.height = STAND; this.radius = RADIUS;
    this.crouching = false; this.velocity = new THREE.Vector3(); this.bob = 0; this.stepDist = 0; this.shakeAmt = 0; this.shakeTime = 0;
    this.eyesClosed = false; this.closedTime = 0; this.eyesAmount = 0; this.current = null;
    this.body = this.makeBody(); root.add(this.body);
    const flash = new THREE.SpotLight(0xffeccc, 9 * G.lightScale, 11, 0.46, 0.55, 1.6);
    flash.position.set(0.18, -0.15, 0.1); flash.target.position.set(0.1, -0.2, -5);
    if (G.settings.shadows) { flash.castShadow = true; flash.shadow.mapSize.set(512, 512); flash.shadow.bias = -0.002; flash.shadow.camera.near = 0.1; }
    flash.visible = false;
    G.camera.add(flash, flash.target);
    this.flashlight = flash;
    this.updateCamera();
  }

  /** Only mirrors and TV feeds see the body (first-person view never does). */
  makeBody() {
    const g = new THREE.Group();
    const part = (geo, p, s, m) => { const mesh = new THREE.Mesh(geo, mat(m)); mesh.position.set(...p); mesh.scale.set(...s); mesh.layers.set(LAYER_BODY); g.add(mesh); };
    const cap = new THREE.CapsuleGeometry(0.5, 1, 4, 10), sph = new THREE.SphereGeometry(0.5, 14, 10);
    part(cap, [0, 1.15, 0], [0.42, 0.38, 0.26], 'clothes');
    part(cap, [-0.11, 0.45, 0], [0.16, 0.45, 0.16], 'trousers'); part(cap, [0.11, 0.45, 0], [0.16, 0.45, 0.16], 'trousers');
    part(cap, [-0.27, 1.12, 0], [0.11, 0.33, 0.11], 'clothes'); part(cap, [0.27, 1.12, 0], [0.11, 0.33, 0.11], 'clothes');
    part(sph, [0, 1.62, 0], [0.21, 0.25, 0.23], 'skin'); part(sph, [0, 1.69, -0.02], [0.22, 0.14, 0.23], 'hair');
    return g;
  }

  get forward() { return new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }
  get eye() { return G.camera.getWorldPosition(new THREE.Vector3()); }

  teleport(pos, yaw) { this.position.copy(pos).setY(0); this.yaw = yaw; this.pitch = 0; this.velocity.set(0, 0, 0); this.updateCamera(); }
  shake(a, t) { if (!shakeAllowed(G.settings)) return; this.shakeAmt = Math.max(this.shakeAmt, a); this.shakeTime = Math.max(this.shakeTime, t); }
  lookAt(p) { const d = p.clone().sub(this.eye); this.yaw = Math.atan2(d.x, d.z); this.pitch = Math.asin(THREE.MathUtils.clamp(d.normalize().y, -1, 1)); }

  update(dt) {
    const locked = G.state !== 'playing' || G.ui.modalOpen, s = G.settings, inp = G.input;
    const [mx, my] = inp.takeMouse();
    if (!locked) {
      const k = 0.0022 * s.sensitivity;
      this.yaw -= mx * k;
      this.pitch += (s.invertY ? my : -my) * k;
      this.pitch = THREE.MathUtils.clamp(this.pitch, -1.48, 1.48);
      if (inp.hit('crouch')) this.toggleCrouch();
      if (inp.hit('flashlight')) {
        if (G.inventory.has(Items.Flashlight)) { this.flashlight.visible = !this.flashlight.visible; G.audio.play2D('switch', 0.5); }
        else G.notify('You don\'t have a flashlight.');
      }
    }
    // eyes
    const wantClosed = !locked && inp.held('eyes');
    if (wantClosed && !this.eyesClosed) G.audio.play2D('breath', 0.15, 'sfx', 1.15);
    this.eyesClosed = wantClosed;
    this.closedTime = this.eyesClosed ? this.closedTime + dt : 0;
    this.eyesAmount = THREE.MathUtils.clamp(this.eyesAmount + (this.eyesClosed ? 3.5 : -2.5) * dt, 0, 1);

    // movement
    let ix = 0, iz = 0;
    if (!locked) {
      if (inp.held('forward')) iz += 1; if (inp.held('back')) iz -= 1;
      if (inp.held('left')) ix += 1; if (inp.held('right')) ix -= 1;
    }
    const len = Math.hypot(ix, iz) || 1;
    let speed = this.crouching ? CROUCH_SPEED : !locked && inp.held('sprint') ? FAST : WALK;
    if (this.eyesClosed) speed *= 0.45;
    const f = this.forward, r = new THREE.Vector3(f.z, 0, -f.x); // r points to the player's left
    const target = f.multiplyScalar((iz / len) * speed).add(r.multiplyScalar((ix / len) * speed));
    const a = 10 * dt;
    this.velocity.x += THREE.MathUtils.clamp(target.x - this.velocity.x, -a, a);
    this.velocity.z += THREE.MathUtils.clamp(target.z - this.velocity.z, -a, a);
    const before = this.position.clone();
    this.position.addScaledVector(this.velocity, dt);
    G.physics.collide(this.position, this.radius, this.height);
    const moved = Math.hypot(this.position.x - before.x, this.position.z - before.z);
    const planar = moved / Math.max(dt, 1e-4);

    this.height += THREE.MathUtils.clamp((this.crouching ? CROUCH : STAND) - this.height, -3 * dt, 3 * dt);
    if (planar > 0.2) {
      this.stepDist += moved; this.bob += moved * 4.2;
      if (this.stepDist > (this.crouching ? 0.55 : 0.75)) { this.stepDist = 0; G.audio.playAt('step', this.position, this.crouching ? 0.12 : 0.25, 0.85 + Math.random() * 0.25); }
    }
    this.bobAmt = bobAllowed(s) ? 0.025 * Math.min(1, planar) : 0;
    if (this.shakeTime > 0) this.shakeTime -= dt;
    G.camera.fov = s.fov;
    this.updateCamera();
    this.body.position.copy(this.position); this.body.rotation.y = this.yaw;
    this.updateInteraction(locked);
  }

  updateCamera() {
    const c = G.camera;
    c.position.set(this.position.x, this.height - 0.13 + Math.sin(this.bob * 2) * (this.bobAmt || 0), this.position.z);
    if (this.shakeTime > 0) c.position.add(new THREE.Vector3().randomDirection().multiplyScalar(this.shakeAmt * Math.min(1, this.shakeTime * 2)));
    c.rotation.set(this.pitch, this.yaw + Math.PI, 0, 'YXZ');
    c.updateMatrixWorld();
  }

  toggleCrouch() {
    if (!this.crouching) { this.crouching = true; return; }
    const p = this.position, r = this.radius * 0.9;
    const blocked = G.physics.overlaps(new THREE.Vector3(p.x - r, p.y + 0.8, p.z - r), new THREE.Vector3(p.x + r, p.y + STAND, p.z + r), null, null);
    if (!blocked) this.crouching = false;
  }

  updateInteraction(locked) {
    this.current = null;
    if (locked || this.eyesClosed) return;
    const o = this.eye, d = G.camera.getWorldDirection(new THREE.Vector3());
    const hit = G.physics.raycast(o, d, 2.6);
    if (hit) {
      for (let x = hit.entry.mesh; x; x = x.parent) {
        const it = x.userData.interact;
        if (it) { if ((!it.enabled || it.enabled()) && hit.dist <= it.maxDist) this.current = it; break; }
      }
    }
    if (this.current && G.input.hit('interact') && performance.now() - G.ui.lastModalClosed > 250) this.current.onUse();
  }

  promptText() { const it = this.current; return it ? `[${keyName(G.settings.keys.interact)}]  ${it.promptFn ? it.promptFn() : it.prompt}` : ''; }
}
