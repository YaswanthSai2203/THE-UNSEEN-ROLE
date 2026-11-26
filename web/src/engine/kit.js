import * as THREE from 'three';
import { G } from '../game.js';
import { mat, emissive } from './materials.js';
import { Door } from './door.js';
import { RoomLight } from './roomlight.js';

export const LAYER_UNSEEN = 1;   // only photos and TV feeds see it
export const LAYER_BODY = 2;     // the player's body: mirrors and TV feeds
export const TUNGSTEN = new THREE.Color(1, 0.78, 0.52);
export const COLD = new THREE.Color(0.75, 0.85, 1);
const D2R = Math.PI / 180;

const boxGeoCache = new Map();
/** Box geometry whose UVs are in metres, so textures keep their scale on any size. */
function boxGeometry(sx, sy, sz) {
  const key = `${sx.toFixed(3)}|${sy.toFixed(3)}|${sz.toFixed(3)}`;
  let g = boxGeoCache.get(key);
  if (g) return g;
  g = new THREE.BoxGeometry(sx, sy, sz);
  const uv = g.attributes.uv;
  const dims = [[sz, sy], [sz, sy], [sx, sz], [sx, sz], [sx, sy], [sx, sy]]; // px nx py ny pz nz
  for (let f = 0; f < 6; f++) for (let v = 0; v < 4; v++) { const i = f * 4 + v; uv.setXY(i, uv.getX(i) * dims[f][0], uv.getY(i) * dims[f][1]); }
  boxGeoCache.set(key, g);
  return g;
}

const PRIM = {
  cube: () => new THREE.BoxGeometry(1, 1, 1),
  sphere: () => new THREE.SphereGeometry(0.5, 20, 14),
  cylinder: () => new THREE.CylinderGeometry(0.5, 0.5, 2, 20), // Unity-style: radius 0.5, height 2
  capsule: () => new THREE.CapsuleGeometry(0.5, 1, 6, 14),      // total height 2
};
const primCache = {};

/**
 * Base for the level builders: a small construction kit (boxes, walls with openings, lights, doors, notes)
 * plus spawn points. Builders configure everything from the saved story flags, so loading = rebuilding.
 */
export class WorldBuilder {
  constructor(root) {
    this.root = root; this.spawns = {}; this.ceiling = 2.7; this.lights = []; this.doors = []; this.updaters = []; this.zones = [];
  }
  get hasPlayer() { return true; }
  has(f) { return G.story.has(f); }
  get chapter() { return G.story.chapter; }
  spawn(id, x, y, z, yawDeg) { this.spawns[id] = { pos: new THREE.Vector3(x, y, z), yaw: yawDeg * D2R }; }
  getSpawn(id) { return this.spawns[id] || this.spawns.default; }
  onEntered() {}
  onBlackout() {}
  update(dt) {
    for (const d of this.doors) d.update(dt);
    for (const l of this.lights) l.update();
    for (const u of this.updaters) u(dt);
    // perception zones: safe areas steady you, distorted areas erode you
    if (G.player && G.state === 'playing') for (const z of this.zones) {
      if (z.active && !z.active()) continue;
      if (Math.hypot(G.player.position.x - z.p.x, G.player.position.z - z.p.z) > z.r) continue;
      if (z.rate > 0) G.perception.recover(z.rate); else G.perception.drain(-z.rate);
    }
  }
  thought(t) { G.dialogue.thought(t); }

  // ------------------------------------------------------------ primitives
  addMesh(mesh, parent, collide) {
    mesh.castShadow = mesh.receiveShadow = true;
    (parent || this.root).add(mesh);
    if (collide) G.physics.add(mesh);
    return mesh;
  }
  box(name, c, s, m, { parent, collide = true, yaw = 0 } = {}) {
    const mesh = new THREE.Mesh(boxGeometry(s[0], s[1], s[2]), typeof m === 'string' ? mat(m) : m);
    mesh.name = name; mesh.position.set(c[0], c[1], c[2]); mesh.rotation.y = yaw * D2R;
    return this.addMesh(mesh, parent, collide);
  }
  prim(type, name, c, s, m, { parent, collide = true, euler } = {}) {
    const geo = primCache[type] || (primCache[type] = PRIM[type]());
    const mesh = new THREE.Mesh(geo, typeof m === 'string' ? mat(m) : m);
    mesh.name = name; mesh.position.set(c[0], c[1], c[2]); mesh.scale.set(s[0], s[1], s[2]);
    if (euler) mesh.rotation.set(euler[0] * D2R, euler[1] * D2R, euler[2] * D2R, 'YXZ');
    return this.addMesh(mesh, parent, collide);
  }
  /** A flat panel facing along normal n = [x, y, z]. */
  panel(name, c, size, n, material, { parent, layer = 0, collide = false } = {}) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size[0], size[1]), material);
    mesh.name = name; mesh.position.set(c[0], c[1], c[2]);
    if (Math.abs(n[1]) > 0.9) mesh.rotation.x = -Math.sign(n[1]) * Math.PI / 2;
    else mesh.rotation.y = Math.atan2(n[0], n[2]);
    mesh.receiveShadow = true;
    if (layer) mesh.layers.set(layer);
    (parent || this.root).add(mesh);
    if (collide) {
      const hit = new THREE.Mesh(boxGeometry(size[0], size[1], 0.03), mat('black'));
      hit.visible = false; mesh.add(hit); G.physics.add(hit, { solid: false });
    }
    return mesh;
  }
  group(name, c = [0, 0, 0], yaw = 0, parent) {
    const g = new THREE.Group(); g.name = name; g.position.set(c[0], c[1], c[2]); g.rotation.y = yaw * D2R;
    (parent || this.root).add(g); return g;
  }

  /** Mark an object as usable with the interact key. */
  interact(obj, prompt, onUse, { enabled, promptFn, maxDist = 2.3 } = {}) {
    obj.userData.interact = { prompt, onUse, enabled, promptFn, maxDist };
    return obj.userData.interact;
  }
  pickup(obj, prompt, take) {
    this.interact(obj, prompt, () => { take(); G.physics.removeUnder(obj); G.physics.entries = G.physics.entries.filter(e => e.mesh !== obj); obj.removeFromParent(); });
  }

  // ------------------------------------------------------------ walls and rooms
  /** Wall along X at z, from x0 to x1. gaps: [{c, w, h=2.1, b=0}] for doors (b=0) and windows (b>0). */
  wallX(z, x0, x1, matNeg, matPos, ...gaps) { this.wall(true, z, x0, x1, matNeg, matPos, gaps); }
  wallZ(x, z0, z1, matNeg, matPos, ...gaps) { this.wall(false, x, z0, z1, matNeg, matPos, gaps); }
  wall(alongX, at, a0, a1, mNeg, mPos, gaps) {
    gaps = gaps.map(g => Object.assign({ h: 2.1, b: 0 }, g)).sort((p, q) => p.c - q.c);
    let cur = a0;
    for (const g of gaps) {
      const g0 = g.c - g.w / 2, g1 = g.c + g.w / 2;
      if (g0 > cur) this.wallSeg(alongX, at, cur, g0, 0, this.ceiling, mNeg, mPos);
      if (g.b > 0) this.wallSeg(alongX, at, g0, g1, 0, g.b, mNeg, mPos);
      this.wallSeg(alongX, at, g0, g1, g.h, this.ceiling, mNeg, mPos);
      cur = g1;
    }
    if (cur < a1) this.wallSeg(alongX, at, cur, a1, 0, this.ceiling, mNeg, mPos);
  }
  wallSeg(alongX, at, a0, a1, y0, y1, mNeg, mPos) {
    const len = a1 - a0, h = y1 - y0, mid = (a0 + a1) / 2, T = 0.12, q = T / 4;
    if (len <= 0.001 || h <= 0.001) return;
    if (alongX) {
      this.box('Wall', [mid, y0 + h / 2, at - q], [len, h, T / 2], mNeg);
      this.box('Wall', [mid, y0 + h / 2, at + q], [len, h, T / 2], mPos);
      if (y0 <= 0) this.box('Skirting', [mid, 0.05, at], [len, 0.1, T + 0.03], 'wood_painted', { collide: false });
    } else {
      this.box('Wall', [at - q, y0 + h / 2, mid], [T / 2, h, len], mNeg);
      this.box('Wall', [at + q, y0 + h / 2, mid], [T / 2, h, len], mPos);
      if (y0 <= 0) this.box('Skirting', [at, 0.05, mid], [T + 0.03, 0.1, len], 'wood_painted', { collide: false });
    }
  }
  room(name, x0, z0, x1, z1, floorMat, ceilMat = 'ceiling') {
    this.box('Floor_' + name, [(x0 + x1) / 2, -0.05, (z0 + z1) / 2], [x1 - x0, 0.1, z1 - z0], floorMat);
    this.box('Ceiling_' + name, [(x0 + x1) / 2, this.ceiling + 0.05, (z0 + z1) / 2], [x1 - x0, 0.1, z1 - z0], ceilMat);
  }

  // ------------------------------------------------------------ lights
  /** Ceiling light with its fixture and emissive bulb. intensity is in the game's own scale (~1). */
  ceilingLight(name, p, color, intensity, range, { shadows = true, power = null, bare = false } = {}) {
    const g = this.group(name, p);
    const bulbMat = emissive(new THREE.Color(1, 0.92, 0.75), color.clone(), 1.6);
    if (bare) {
      this.prim('cylinder', 'Cord', [0, 0.2, 0], [0.01, 0.2, 0.01], 'black', { parent: g, collide: false });
      this.prim('sphere', 'Bulb', [0, 0, 0], [0.09, 0.09, 0.09], bulbMat, { parent: g, collide: false });
    } else {
      this.prim('cylinder', 'Fixture', [0, 0.12, 0], [0.1, 0.02, 0.1], 'metal', { parent: g, collide: false });
      this.prim('sphere', 'Globe', [0, 0, 0], [0.28, 0.2, 0.28], bulbMat, { parent: g, collide: false });
    }
    g.children.forEach(c => (c.castShadow = false));
    const l = new THREE.PointLight(color, intensity * G.lightScale, range, 1.6);
    l.position.set(0, -0.18, 0);
    if (shadows && G.settings.shadows) {
      l.castShadow = true; l.shadow.mapSize.set(512, 512); l.shadow.bias = -0.004; l.shadow.radius = 3;
      l.shadow.camera.near = 0.1; l.shadow.camera.far = range; l.shadow.autoUpdate = false; l.shadow.needsUpdate = true;
    }
    g.add(l);
    const rl = new RoomLight(l, bulbMat, intensity * G.lightScale);
    rl.hasPower = power;
    this.lights.push(rl);
    return rl;
  }
  pointLight(p, color, intensity, range) {
    const l = new THREE.PointLight(color, intensity * G.lightScale, range, 1.6); l.position.set(p[0], p[1], p[2]); this.root.add(l); return l;
  }
  lightSwitch(p, n, power, ...lights) {
    const plate = this.box('LightSwitch', p, [0.08, 0.12, 0.02], 'plastic_beige', { yaw: Math.atan2(n[0], n[2]) / D2R });
    const it = this.interact(plate, 'Switch light', () => {
      G.audio.playAt('switch', new THREE.Vector3(...p), 0.6);
      if (power && !power()) { G.notify('Nothing happens. There\'s no power.'); return; }
      const on = !lights[0].on; for (const l of lights) l.on = on;
    }, { maxDist: 2 });
    it.promptFn = () => (lights[0].on ? 'Switch light off' : 'Switch light on');
    return plate;
  }

  // ------------------------------------------------------------ doors, notes, props
  /** Door whose hinge is at p; the closed leaf runs along the frame's local +X (rotated by yawDeg). */
  makeDoor(label, p, yawDeg, width, m, openAngle = 95, height = 2.05) {
    const frame = this.group('DoorFrame_' + label, p, yawDeg);
    const hinge = new THREE.Group(); frame.add(hinge);
    const leaf = this.box('Leaf', [width / 2, height / 2, 0], [width - 0.02, height, 0.045], m, { parent: hinge });
    const ky = Math.min(1, height * 0.5) - height / 2;
    this.prim('sphere', 'Knob', [width / 2 - 0.09, ky, 0.04], [0.055, 0.055, 0.055], 'brass', { parent: leaf, collide: false });
    this.prim('sphere', 'Knob', [width / 2 - 0.09, ky, -0.04], [0.055, 0.055, 0.055], 'brass', { parent: leaf, collide: false });
    const door = new Door(hinge, frame, label, openAngle);
    const it = this.interact(leaf, 'Open', () => door.toggle());
    it.promptFn = () => (door.fullyOpen ? 'Close ' : 'Open ') + label;
    this.doors.push(door);
    return door;
  }
  note(name, p, s, docId, m = 'paper', yaw = 0, onRead) {
    const b = this.box(name, p, s, m, { yaw });
    this.interact(b, 'Read', () => { G.inventory.read(docId); onRead?.(); });
    return b;
  }
  /** A tall, thin, faceless silhouette: never a monster, just a shape that shouldn't be there. */
  figure(name, p, yawDeg, layer = 0, height = 1.95, parent) {
    const g = this.group(name, p, yawDeg, parent), k = height / 1.95;
    const part = (t, c, s) => { const m = this.prim(t, 'Part', c.map(v => v * k), s.map(v => v * k), 'figure', { parent: g, collide: false }); if (layer) m.layers.set(layer); m.castShadow = layer === 0; };
    part('capsule', [0, 1.2, 0], [0.36, 0.45, 0.22]);
    part('capsule', [-0.09, 0.45, 0], [0.12, 0.48, 0.12]); part('capsule', [0.09, 0.45, 0], [0.12, 0.48, 0.12]);
    part('capsule', [-0.22, 1.05, 0], [0.08, 0.48, 0.08]); part('capsule', [0.22, 1.05, 0], [0.08, 0.48, 0.08]);
    part('sphere', [0, 1.78, 0.02], [0.2, 0.27, 0.22]);
    return g;
  }
  dust(c, size) {
    const n = 120, pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { pos[i * 3] = (Math.random() - 0.5) * size[0]; pos[i * 3 + 1] = (Math.random() - 0.5) * size[1]; pos[i * 3 + 2] = (Math.random() - 0.5) * size[2]; }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, mat('dust')); pts.position.set(...c); this.root.add(pts);
    const base = pos.slice();
    this.updaters.push(() => {
      const t = G.time * 0.05;
      for (let i = 0; i < n; i++) { pos[i * 3] = base[i * 3] + Math.sin(t + i) * 0.15; pos[i * 3 + 1] = base[i * 3 + 1] + Math.sin(t * 0.7 + i * 1.3) * 0.2; }
      geo.attributes.position.needsUpdate = true;
    });
  }
  atmosphere(ambient, fog, density) {
    G.scene.background = new THREE.Color(0, 0, 0);
    G.ambient.color.copy(ambient);
    G.baseAmbient = G.ambient.intensity = 1;
    G.scene.fog = new THREE.FogExp2(fog, density);
  }
}
