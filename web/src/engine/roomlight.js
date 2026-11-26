import * as THREE from 'three';
import { G } from '../game.js';
import { noise1 } from './noise.js';

/** A light with an emissive bulb: power, switch, scripted flicker, and instability at low perception. */
export class RoomLight {
  constructor(light, bulbMat, intensity) {
    this.light = light; this.bulbMat = bulbMat; this.base = intensity; this.on = true; this.hasPower = null;
    this.alwaysUnstable = false; this.flickerUntil = 0; this.seed = Math.random() * 100;
    this.bulbColor = bulbMat ? bulbMat.emissive.clone() : null;
  }
  get powered() { return !this.hasPower || this.hasPower(); }
  get lit() { return this.on && this.powered; }
  flicker(s) { this.flickerUntil = Math.max(this.flickerUntil, G.time + s); }
  update() {
    let k = this.lit ? 1 : 0;
    if (k > 0) {
      const t = G.time;
      if (t < this.flickerUntil) k = noise1(t * 18 + this.seed) > 0.45 ? 1 : 0.05;
      else if (this.alwaysUnstable || G.perception.distortion > 0.65) {
        if (noise1(t * 2.5 + this.seed) > 0.78) k = noise1(t * 25 + this.seed * 3) > 0.5 ? 0.9 : 0.15;
      }
    }
    this.light.intensity = this.base * k;
    if (this.bulbMat) this.bulbMat.emissiveIntensity = 1.6 * k;
  }
}
