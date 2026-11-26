// Pure geometry: is a point inside the view frustum (enlarged by margin so off-edge objects never visibly pop)?
const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y, z: a.z - b.z });
const dot = (a, b) => a.x * b.x + a.y * b.y + a.z * b.z;
const cross = (a, b) => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });
const norm = a => { const m = Math.hypot(a.x, a.y, a.z) || 1; return { x: a.x / m, y: a.y / m, z: a.z / m }; };

/** forward/up are the camera's world directions; fov is vertical, in degrees. */
export function inViewCone(camPos, forward, up, fovDeg, aspect, p, margin = 0.15, near = 0.05, maxDist = 40) {
  const f = norm(forward);
  const r = norm(cross(f, up));
  const u = cross(r, f);
  const d = sub(p, camPos);
  const z = dot(d, f);
  if (z < near || z > maxDist) return false;
  const tanV = Math.tan((fovDeg * Math.PI) / 360) * (1 + margin);
  const tanH = tanV * aspect;
  return Math.abs(dot(d, u)) <= z * tanV && Math.abs(dot(d, r)) <= z * tanH;
}

export function angleTo(camPos, forward, p) {
  const d = sub(p, camPos);
  const m = Math.hypot(d.x, d.y, d.z) * Math.hypot(forward.x, forward.y, forward.z);
  if (m < 1e-9) return 0;
  return (Math.acos(Math.max(-1, Math.min(1, dot(d, forward) / m))) * 180) / Math.PI;
}
