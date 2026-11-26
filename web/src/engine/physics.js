import * as THREE from 'three';

// Box-based collision and ray queries. Every solid mesh gets an axis-aligned box (conservative for rotated
// objects). Entries are grouped by "owner": the object's top-level group under the world root, which is the
// unit that moves (a door, a chair) and the unit an observation ray may hit without counting as blocked.
const _box = new THREE.Box3();

export class Physics {
  constructor(worldRoot) { this.root = worldRoot; this.entries = []; }

  ownerOf(obj) {
    let o = obj;
    while (o.parent && o.parent !== this.root) o = o.parent;
    return o;
  }

  add(mesh, { solid = true, occluder = true } = {}) {
    mesh.updateWorldMatrix(true, false);
    const e = { mesh, owner: this.ownerOf(mesh), solid, occluder, enabled: true, min: new THREE.Vector3(), max: new THREE.Vector3() };
    this.refresh(e);
    this.entries.push(e);
    mesh.userData.phys = e;
    return e;
  }

  refresh(e) {
    e.mesh.updateWorldMatrix(true, false);
    _box.makeEmpty().expandByObject(e.mesh, false);
    e.min.copy(_box.min); e.max.copy(_box.max);
  }

  /** Recompute boxes after an owner moved (and re-detect owner if it was re-parented). */
  refreshOwner(owner) {
    owner.updateWorldMatrix(true, true);
    for (const e of this.entries) if (e.owner === owner || isDescendant(e.mesh, owner)) { e.owner = this.ownerOf(e.mesh); this.refresh(e); }
  }

  setEnabled(owner, v) { for (const e of this.entries) if (e.owner === owner || isDescendant(e.mesh, owner)) e.enabled = v; }
  removeUnder(obj) { this.entries = this.entries.filter(e => !(e.mesh === obj || isDescendant(e.mesh, obj))); }

  /** Nearest hit along a ray. filter(e) may exclude entries. Returns { entry, dist } or null. */
  raycast(o, d, maxDist, filter) {
    let best = null, bestT = maxDist;
    const ix = 1 / d.x, iy = 1 / d.y, iz = 1 / d.z;
    for (const e of this.entries) {
      if (!e.enabled || (filter && !filter(e))) continue;
      let t1 = (e.min.x - o.x) * ix, t2 = (e.max.x - o.x) * ix;
      let tmin = Math.min(t1, t2), tmax = Math.max(t1, t2);
      t1 = (e.min.y - o.y) * iy; t2 = (e.max.y - o.y) * iy;
      tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
      t1 = (e.min.z - o.z) * iz; t2 = (e.max.z - o.z) * iz;
      tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
      if (tmax < Math.max(tmin, 0)) continue;
      const t = Math.max(tmin, 0);
      if (t < bestT) { bestT = t; best = e; }
    }
    return best ? { entry: best, dist: bestT } : null;
  }

  /** Clear line of sight from a to b? Hitting `self` (an owner) does not count as blocked. */
  lineOfSight(a, b, self) {
    const d = new THREE.Vector3().subVectors(b, a), len = d.length();
    if (len < 0.01) return true;
    d.divideScalar(len);
    const hit = this.raycast(a, d, len - 0.05, e => e.occluder);
    return !hit || (self && hit.entry.owner === self);
  }

  /** Does the box overlap any solid thing (or the player), ignoring entries of `ignoreOwner`? */
  overlaps(min, max, ignoreOwner, player) {
    for (const e of this.entries) {
      if (!e.enabled || !e.solid || e.owner === ignoreOwner) continue;
      if (e.min.x < max.x && e.max.x > min.x && e.min.y < max.y && e.max.y > min.y && e.min.z < max.z && e.max.z > min.z) return true;
    }
    if (player) {
      const p = player.position, r = player.radius;
      if (p.x + r > min.x && p.x - r < max.x && p.z + r > min.z && p.z - r < max.z && p.y + player.height > min.y && p.y < max.y) return true;
    }
    return false;
  }

  /** Push a vertical capsule (as a circle in XZ) out of solid boxes; steps under 0.3 m are ignored. */
  collide(pos, radius, height) {
    for (let iter = 0; iter < 3; iter++) {
      let moved = false;
      for (const e of this.entries) {
        if (!e.enabled || !e.solid) continue;
        if (e.max.y <= pos.y + 0.3 || e.min.y >= pos.y + height) continue;
        const cx = Math.max(e.min.x, Math.min(pos.x, e.max.x)), cz = Math.max(e.min.z, Math.min(pos.z, e.max.z));
        let dx = pos.x - cx, dz = pos.z - cz;
        const d2 = dx * dx + dz * dz;
        if (d2 >= radius * radius) continue;
        if (d2 > 1e-8) {
          const d = Math.sqrt(d2), push = radius - d;
          pos.x += (dx / d) * push; pos.z += (dz / d) * push;
        } else {
          // centre inside the box: leave by the shortest way
          const opts = [[e.min.x - radius - pos.x, 0], [e.max.x + radius - pos.x, 0], [0, e.min.z - radius - pos.z], [0, e.max.z + radius - pos.z]];
          opts.sort((a, b) => Math.abs(a[0] + a[1]) - Math.abs(b[0] + b[1]));
          pos.x += opts[0][0]; pos.z += opts[0][1];
        }
        moved = true;
      }
      if (!moved) break;
    }
  }
}

export function isDescendant(o, ancestor) {
  for (let p = o.parent; p; p = p.parent) if (p === ancestor) return true;
  return false;
}
