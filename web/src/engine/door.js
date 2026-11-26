import * as THREE from 'three';
import { G } from '../game.js';

/** Hinged door. The hinge group rotates about Y; positive angles swing towards the frame's local -Z. */
export class Door {
  constructor(hinge, frame, label, openAngle) {
    this.hinge = hinge; this.frame = frame; this.label = label; this.openAngle = openAngle;
    this.angle = 0; this.target = 0; this.isLocked = null; this.onLocked = null; this.onOpened = null;
  }
  get isOpen() { return this.target !== 0; }
  /** Fully open (an ajar door is not): using an ajar door opens it the rest of the way. */
  get fullyOpen() { return Math.abs(this.target) >= Math.abs(this.openAngle) - 1; }
  toggle() {
    if (!this.fullyOpen && !this.isOpen && this.isLocked?.()) { G.audio.playAt('locked', this.worldPos(), 0.8); this.onLocked?.(); return; }
    this.setOpen(!this.fullyOpen);
  }
  setOpen(open, sound = true) {
    this.target = open ? this.openAngle : 0;
    if (sound) G.audio.playAt(open ? 'doorOpen' : 'doorClose', this.worldPos(), 0.7, 0.9 + Math.random() * 0.2);
    if (open) this.onOpened?.();
  }
  setAngleInstant(a) { this.angle = this.target = a; this.apply(); }
  worldPos() { return this.hinge.getWorldPosition(new THREE.Vector3()).setY(1.2); }
  apply() {
    this.hinge.rotation.y = (this.angle * Math.PI) / 180;
    G.physics.refreshOwner(G.physics.ownerOf(this.hinge));
    G.shadowsDirty = true;
  }
  update(dt) {
    if (this.angle === this.target) return;
    const step = 150 * dt;
    this.angle = Math.abs(this.target - this.angle) <= step ? this.target : this.angle + Math.sign(this.target - this.angle) * step;
    this.apply();
  }
}
