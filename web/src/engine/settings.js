// Player settings, kept apart from the story save.
const KEY = 'unseen_settings_v1';
export const DEFAULT_KEYS = { forward: 'KeyW', back: 'KeyS', left: 'KeyA', right: 'KeyD', interact: 'KeyE', sprint: 'ShiftLeft',
  crouch: 'KeyC', eyes: 'KeyQ', flashlight: 'KeyF', camera: 'KeyG', inventory: 'Tab' };
export const ACTION_LABELS = { forward: 'Move forward', back: 'Move back', left: 'Move left', right: 'Move right', interact: 'Interact',
  sprint: 'Walk faster', crouch: 'Crouch', eyes: 'Close eyes (hold)', flashlight: 'Flashlight', camera: 'Instant camera', inventory: 'Inventory' };

export function defaultSettings() {
  return { masterVolume: 1, musicVolume: 0.8, sfxVolume: 1, sensitivity: 1, invertY: false, brightness: 0.5, fov: 70,
    quality: 'high', shadows: true, subtitles: true, cameraShake: true, headBob: true, motionBlur: false, reducedMotion: false,
    keys: { ...DEFAULT_KEYS } };
}

export function loadSettings(storage) {
  const s = defaultSettings();
  try {
    const raw = storage.get(KEY);
    if (raw) {
      const d = JSON.parse(raw);
      for (const k of Object.keys(s)) if (k !== 'keys' && typeof d[k] === typeof s[k]) s[k] = d[k];
      if (d.keys) for (const a of Object.keys(DEFAULT_KEYS)) if (typeof d.keys[a] === 'string') s.keys[a] = d.keys[a];
    }
  } catch { /* unreadable settings: defaults */ }
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  s.masterVolume = clamp(s.masterVolume, 0, 1); s.musicVolume = clamp(s.musicVolume, 0, 1); s.sfxVolume = clamp(s.sfxVolume, 0, 1);
  s.sensitivity = clamp(s.sensitivity, 0.1, 4); s.brightness = clamp(s.brightness, 0, 1); s.fov = clamp(s.fov, 55, 95);
  if (!['low', 'medium', 'high'].includes(s.quality)) s.quality = 'high';
  return s;
}

export function saveSettings(storage, s) { try { storage.set(KEY, JSON.stringify(s)); } catch { /* ignore */ } }
export const shakeAllowed = s => s.cameraShake && !s.reducedMotion;
export const bobAllowed = s => s.headBob && !s.reducedMotion;
export function keyName(code) {
  if (!code) return '?';
  return code.replace(/^Key/, '').replace(/^Digit/, '').replace('ShiftLeft', 'Shift').replace('ShiftRight', 'R-Shift')
    .replace('ControlLeft', 'Ctrl').replace('ControlRight', 'R-Ctrl').replace('AltLeft', 'Alt').replace('Space', 'Space');
}
