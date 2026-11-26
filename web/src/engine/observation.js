import * as THREE from 'three';
import { G } from '../game.js';
import { inViewCone } from '../logic/observeMath.js';

const MARGIN = 0.15;
const _b = new THREE.Box3(), _v = new THREE.Vector3();

/**
 * Decides what the player is observing: frustum (with a safety margin) plus line-of-sight rays. Closed eyes
 * observe nothing. Registered Observables are evaluated at 10 Hz.
 */
export class ObservationManager {
  constructor() { this.objects = []; this.acc = 0; }
  clear() { this.objects = []; }
  register(o) { this.objects.push(o); }
  unregister(o) { this.objects = this.objects.filter(x => x !== o); }

  sees(p, self) {
    const cam = G.camera;
    if (!G.player || G.player.eyesClosed) return false;
    const pos = cam.getWorldPosition(new THREE.Vector3()), fwd = cam.getWorldDirection(new THREE.Vector3()), up = new THREE.Vector3(0, 1, 0).applyQuaternion(cam.quaternion);
    if (!inViewCone(pos, fwd, up, cam.fov, cam.aspect, p, MARGIN)) return false;
    return G.physics.lineOfSight(pos, p, self);
  }
  isPointObserved(p, self) { return this.sees(p, self); }
  isBoxObserved(box, self) {
    if (!G.player || G.player.eyesClosed) return false;
    const c = box.getCenter(new THREE.Vector3()), e = box.getSize(new THREE.Vector3()).multiplyScalar(0.45);
    if (this.sees(c, self)) return true;
    for (let i = 0; i < 8; i++) {
      _v.set(c.x + (i & 1 ? e.x : -e.x), c.y + (i & 2 ? e.y : -e.y), c.z + (i & 4 ? e.z : -e.z));
      if (this.sees(_v.clone(), self)) return true;
    }
    return false;
  }
  update(dt) {
    if (G.state !== 'playing' || !G.player) return;
    this.acc += dt; if (this.acc < 0.1) return;
    const step = this.acc; this.acc = 0;
    for (const o of [...this.objects]) o.tick(step, o.observable && this.isBoxObserved(o.bounds(), o.root));
  }
}

/**
 * An object whose behaviour depends on being watched. It changes only while both its current and target
 * placement are unobserved, after a delay, with a cooldown, never into occupied space or the player, never
 * farther than maxMove, and only along authored steps (never random teleports).
 */
export class Observable {
  constructor(root, cfg = {}) {
    Object.assign(this, {
      observable: true, canMove: true, delay: 3, maxMove: 3, canAppear: false, canDisappear: false, disappearAfter: 0.6,
      minChapter: 1, requires: null, cooldown: 10, minPlayerDist: 2.5, checkOccupancy: true, sound: null, soundVol: 0.6,
      condition: null, loop: false, onNoticed: null, onChanged: null, onDisappeared: null, whileObserved: null,
    }, cfg);
    this.root = root; this.steps = []; this.stepIndex = -1; this.visible = true; this.observed = false;
    this.observedTime = 0; this.unobservedTime = 0; this.changedSinceSeen = false; this.lastEvent = -Infinity;
    G.observation.register(this);
  }
  pose(x, y, z, yawDeg) { this.steps.push({ pose: { p: new THREE.Vector3(x, y, z), yaw: (yawDeg * Math.PI) / 180 } }); return this; }
  action(fn) { this.steps.push({ apply: fn }); return this; }
  bounds() { return new THREE.Box3().setFromObject(this.root); }
  setVisible(v) { this.visible = v; this.root.visible = v; G.physics.setEnabled(this.root, v); }
  jumpToStep(i) { for (let k = 0; k <= i && k < this.steps.length; k++) this.applyStep(this.steps[k]); this.stepIndex = Math.min(i, this.steps.length - 1); }
  ready() {
    if (G.story.chapter < this.minChapter) return false;
    if (this.requires && !G.story.has(this.requires)) return false;
    if (G.time - this.lastEvent < this.cooldown) return false;
    return !this.condition || this.condition();
  }
  tick(dt, observed) {
    this.observed = observed;
    if (observed) {
      this.observedTime += dt; this.unobservedTime = 0;
      if (!this.visible) return;
      if (this.changedSinceSeen) { this.changedSinceSeen = false; this.onNoticed?.(this); }
      this.whileObserved?.(dt);
      // Vanishing only needs the cooldown: a phantom must still go away after its appear-condition ends.
      if (this.canDisappear && this.observedTime >= this.disappearAfter && G.time - this.lastEvent >= this.cooldown) {
        this.setVisible(false); this.lastEvent = G.time; this.onDisappeared?.(this);
      }
      return;
    }
    this.observedTime = 0; this.unobservedTime += dt;
    if (this.unobservedTime < this.delay || !this.ready()) return;
    if (G.player && this.bounds().getCenter(_v).setY(0).distanceTo(G.player.position) < this.minPlayerDist) return;
    if (this.canAppear && !this.visible) {
      if (this.checkOccupancy && this.occupied(this.bounds())) return;
      this.setVisible(true); this.changed(); return;
    }
    if (!this.canMove || !this.steps.length) return;
    let next = this.stepIndex + 1;
    if (next >= this.steps.length) { if (!this.loop) return; next = 0; }
    if (this.tryStep(this.steps[next])) { this.stepIndex = next; this.changed(); }
  }
  changed() {
    this.lastEvent = G.time; this.unobservedTime = 0; this.changedSinceSeen = true;
    if (this.sound) G.audio.playAt(this.sound, this.root.getWorldPosition(new THREE.Vector3()), this.soundVol, 0.9 + Math.random() * 0.2);
    this.onChanged?.(this);
  }
  tryStep(s) {
    if (s.pose) {
      if (this.root.position.distanceTo(s.pose.p) > this.maxMove) return false;
      // Where would it be? Move, measure, and put it back if that spot is watched or occupied.
      const oldP = this.root.position.clone(), oldY = this.root.rotation.y;
      this.root.position.copy(s.pose.p); this.root.rotation.y = s.pose.yaw; this.root.updateMatrixWorld(true);
      const b = this.bounds();
      this.root.position.copy(oldP); this.root.rotation.y = oldY; this.root.updateMatrixWorld(true);
      if (G.observation.isBoxObserved(b, this.root)) return false;
      if (this.checkOccupancy && this.occupied(b)) return false;
    }
    this.applyStep(s);
    return true;
  }
  applyStep(s) {
    if (s.pose) {
      this.root.position.copy(s.pose.p); this.root.rotation.y = s.pose.yaw;
      G.physics.refreshOwner(this.root); G.shadowsDirty = true;
    }
    s.apply?.();
  }
  /** Shrunk and lifted slightly so resting on the floor or touching a wall is fine. */
  occupied(b) {
    const c = b.getCenter(new THREE.Vector3()).add(new THREE.Vector3(0, 0.06, 0)), h = b.getSize(new THREE.Vector3()).multiplyScalar(0.4);
    return G.physics.overlaps(c.clone().sub(h), c.clone().add(h), this.root, G.player);
  }
  destroy() { G.observation.unregister(this); }
}
