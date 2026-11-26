import * as THREE from 'three';
import { G } from '../game.js';
import { WorldBuilder } from '../engine/kit.js';
import { mat, fromCanvas } from '../engine/materials.js';
import { familyPhoto, canvas, toTexture, grainOver, HAND } from '../engine/textures.js';
import { Television } from '../engine/tv.js';
import { Observable } from '../engine/observation.js';
import { UnseenEntity } from './entity.js';
import { F, MEMORIES, Items, Ending } from '../logic/flags.js';
import { LINES, MEMORY_THOUGHTS } from '../logic/content.js';
import { memoryCount } from '../logic/rules.js';
import { angleTo } from '../logic/observeMath.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const wait = s => new Promise(r => setTimeout(r, s * 1000));
const BREAKERS = [F.Breaker1, F.Breaker2, F.Breaker3];

/** The basement (chapter 4) and Mira's room (chapter 5). Basement x[-5,5] z[0,12]; her room x[-2,2] z[12,15.5]. */
export class BasementBuilder extends WorldBuilder {
  get power() { return this.has(F.PowerOn); }
  build() {
    this.ceiling = 2.5;
    this.atmosphere(new THREE.Color(0.06, 0.062, 0.07), 0x030304, 0.06);
    this.room('Basement', -5, 0, 5, 12, 'concrete', 'concrete');
    this.room('Mira', -2, 12, 2, 15.5, 'carpet', 'ceiling');
    this.wallZ(-5, 0, 12, 'concrete', 'concrete_wall');
    this.wallZ(5, 0, 12, 'concrete_wall', 'concrete');
    this.wallX(0, -5, 5, 'concrete', 'concrete_wall', { c: 0, w: 1.2, h: 2.5 });
    this.wallX(12, -5, 5, 'concrete_wall', 'wallpaper_child', { c: 0, w: 0.9, h: 2.05 });
    this.wallZ(-2, 12, 15.5, 'concrete', 'wallpaper_child');
    this.wallZ(2, 12, 15.5, 'wallpaper_child', 'concrete');
    this.wallX(15.5, -2, 2, 'wallpaper_child', 'concrete');
    this.lampMats = [];
    this.stairs(); this.props(); this.breakers(); this.miraRoom();
    if (!this.power) this.presence();
    this.spawn('default', 0, 0, 1.0, 0);
    this.spawn('safe', 0, 0, 1.0, 0);
    this.updaters.push(dt => this.tick(dt));
  }

  stairs() {
    const g = this.group('Stairs');
    for (let i = 0; i < 10; i++) { const top = 0.18 * (i + 1); this.box('Step', [0, top / 2, -0.14 - i * 0.28], [1.2, top, 0.28], 'wood_dark', { parent: g }); }
    this.box('StairWall', [-0.65, 2.1, -1.5], [0.1, 4.2, 3.1], 'concrete_wall');
    this.box('StairWall', [0.65, 2.1, -1.5], [0.1, 4.2, 3.1], 'concrete_wall');
    this.box('StairEnd', [0, 2.1, -3.05], [1.4, 4.2, 0.1], 'concrete_wall');
    this.box('StairCeiling', [0, 4.25, -1.5], [1.4, 0.1, 3.2], 'concrete');
    this.box('UpstairsDoor', [0, 2.8, -2.97], [0.9, 2.0, 0.05], 'door', { collide: false });
    this.interact(g, 'Go upstairs', () => G.transitionTo('apartment', 'from_basement'), { maxDist: 2.6 });
    const bulb = this.ceilingLight('EmergencyBulb', [0, 2.3, 0.5], new THREE.Color(1, 0.75, 0.5), 0.6, 4, { bare: true });
    this.zones.push({ p: V(0, 0, 0.8), r: 1.8, rate: 2.5 });
    G.audio.loop('buzz', bulb.light, 0.12, 'ambience', 4);
    G.audio.loop('roomTone', V(0, 1.5, 6), 0.5, 'ambience', 20);
  }

  props() {
    for (const [x, z] of [[-2, 4], [2, 4], [-2, 8], [2, 8]]) this.box('Pillar', [x, 1.25, z], [0.4, 2.5, 0.4], 'concrete_wall');
    for (let s = 0; s < 4; s++) this.box('Shelf', [-4.6, 0.3 + s * 0.55, 3.5], [0.5, 0.03, 3], 'metal');
    this.box('ShelfPost', [-4.6, 1.0, 2.0], [0.5, 2.0, 0.04], 'metal');
    this.box('ShelfPost', [-4.6, 1.0, 5.0], [0.5, 2.0, 0.04], 'metal');
    let seed = 9; const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let s = 0; s < 4; s++) for (let k = 0; k < 4; k++) {
      if (r() < 0.25) continue;
      const hh = 0.25 + r() * 0.2;
      this.box('Carton', [-4.6, 0.32 + s * 0.55 + hh / 2, 2.3 + k * 0.72], [0.42, hh, 0.55], 'cardboard', { yaw: r() * 10 });
    }
    this.note('Clipping', [-4.45, 0.885, 4.6], [0.2, 0.01, 0.28], 'clipping', 'paper', 0, () => this.memory('read_clipping'));

    this.box('MiraBox', [-4.0, 0.2, 7.0], [0.6, 0.4, 0.5], 'cardboard');
    const flap = this.box('Flap', [-4.0, 0.42, 6.72], [0.6, 0.02, 0.25], 'cardboard', { collide: false }); flap.rotation.x = -60 * Math.PI / 180;
    const label = this.box('BoxLabel', [-4.0, 0.25, 6.745], [0.35, 0.12, 0.01], 'paper');
    this.interact(label, 'Read the label', () => G.inventory.read('basement_note'));
    if (!this.has(F.FragD)) {
      const frag = this.box('Fragment', [-4.0, 0.41, 7.05], [0.14, 0.01, 0.11], 'paper');
      this.pickup(frag, 'Take the torn photograph', () => { G.inventory.add(F.FragD); G.story.set(F.FragD); G.perception.restore(10); this.thought('A corner of a photograph. A small yellow sleeve.'); });
    }

    const desk = this.group('OldDesk', [-3.8, 0, 10]);
    this.box('Top', [0, 0.74, 0], [1.2, 0.04, 0.6], 'wood_dark', { parent: desk });
    this.box('Body', [-0.4, 0.36, 0], [0.4, 0.72, 0.58], 'wood_dark', { parent: desk });
    this.box('Leg', [0.55, 0.36, 0], [0.05, 0.72, 0.55], 'wood_dark', { parent: desk });
    this.note('Coroner', [-4.0, 0.765, 10.0], [0.22, 0.01, 0.3], 'coroner', 'paper', 8, () => this.memory('read_coroner'));
    this.note('Psych', [-3.5, 0.765, 10.05], [0.22, 0.01, 0.3], 'psych', 'paper', -12, () => this.memory('read_psych'));
    this.note('Letter', [-3.2, 0.005, 11.2], [0.18, 0.01, 0.24], 'letter', 'paper', 30, () => this.memory('read_letter'));
    this.box('FramedPhoto', [-4.94, 1.5, 10], [0.03, 0.4, 0.5], 'wood_dark', { collide: false });
    this.panel('Photo', [-4.92, 1.5, 10], [0.42, 0.32], [1, 0, 0], fromCanvas(familyPhoto(false), 0.5));

    this.box('SheetSofa', [3.8, 0.5, 2.5], [1.4, 1.0, 0.8], 'sheet');
    this.box('SheetChair', [3.9, 0.45, 5.5], [0.9, 0.9, 1.6], 'sheet');
    this.box('SheetTall', [4.3, 0.9, 7.0], [0.6, 1.8, 0.6], 'sheet');
    this.box('BikeSmall', [1.0, 0.3, 11.3], [0.9, 0.6, 0.2], 'plastic_red');

    this.box('TVCabinet', [3.7, 0.3, 10.8], [0.5, 0.6, 0.9], 'wood_dark');
    const tvBody = this.box('OldTV', [3.75, 0.83, 10.8], [0.45, 0.45, 0.6], 'plastic_dark');
    const screen = this.panel('Screen', [3.52, 0.85, 10.8], [0.48, 0.36], [-1, 0, 0], mat('screen_off'));
    const glow = this.pointLight([3.0, 0.9, 10.8], new THREE.Color(0.6, 0.7, 0.9), 0.5, 4);
    this.tv = new Television(this, screen, glow, G.audio.loop('static', tvBody, 0.25, 'sfx', 8, false));
    this.interact(tvBody, 'Examine the television', () => {
      if (!this.power) this.thought('The screen is cracked. The plug is in, but there\'s no power down here.');
      else if (!this.has(F.TapeSeen) && !this.tapePlaying) this.tape();
      else this.thought('A home video, worn thin from being watched.');
    });
    if (this.has(F.TapeSeen)) this.spawnFragC();
  }

  memory(flag) { if (this.has(flag)) return; G.story.set(flag); G.perception.restore(8, 'You remember a little more.'); }

  // ------------------------------------------------------------------ power (P8)
  breakers() {
    for (const [x, z] of [[-2.5, 3], [2.5, 3], [-2.5, 9.5], [2.5, 9.5]]) this.ceilingLight('Bulb', [x, 2.3, z], new THREE.Color(1, 0.82, 0.6), 0.95, 6.5, { bare: true, power: () => this.power, shadows: x < 0 });
    const panel = this.box('ElectricalPanel', [-1.5, 1.4, 0.1], [0.5, 0.6, 0.1], 'metal');
    this.lamps = [0, 1, 2].map(i => this.prim('sphere', 'Lamp', [-1.65 + i * 0.15, 1.55, 0.16], [0.045, 0.045, 0.045], 'plastic_red', { collide: false }));
    this.interact(panel, 'Examine the panel', () => {
      const on = BREAKERS.filter(f => this.has(f)).length;
      this.thought(this.power ? 'Main power is on.' : `Three breaker lamps: ${on} of 3 lit. Labels: NORTH-WEST CORNER, WEST WALL, EAST WALL.`);
    });
    [[-4.9, 11.4, 1], [-4.9, 6.0, 1], [4.9, 9.0, -1]].forEach(([x, z, n], i) => {
      const b = this.box('Breaker', [x, 1.3, z], [0.12, 0.35, 0.25], 'metal');
      const lever = this.box('Lever', [x + n * 0.08, 1.3 + (this.has(BREAKERS[i]) ? 0.08 : -0.08), z], [0.04, 0.1, 0.04], 'plastic_red', { collide: false });
      this.interact(b, 'Throw the breaker', () => {
        if (this.has(BREAKERS[i])) { this.thought('It\'s already on.'); return; }
        G.audio.playAt('breaker', V(x, 1.3, z), 0.9);
        lever.position.y = 1.38; G.story.set(BREAKERS[i]); this.updateLamps();
        if (BREAKERS.every(f => this.has(f))) this.powerOn();
      }, { promptFn: () => (this.has(BREAKERS[i]) ? 'Breaker (on)' : 'Throw the breaker') });
    });
    this.updateLamps();
  }
  updateLamps() { this.lamps.forEach((l, i) => (l.material = mat(this.has(BREAKERS[i]) || this.power ? 'bulb' : 'plastic_red'))); }
  async powerOn() {
    if (this.powering) return; this.powering = true;
    G.audio.play2D('hum', 0.4);
    for (const l of this.lights) l.flicker(1.2);
    G.story.set(F.PowerOn);
    await wait(0.3);
    this.entity?.remove(); this.entity = null; // gone in the flicker
    this.updateLamps();
    await wait(1.5);
    this.thought('Light. It\'s gone. It\'s only gone because I can see now.');
    await wait(4);
    if (!this.has(F.TapeSeen)) this.tape();
  }
  async tape() {
    if (this.tapePlaying) return; this.tapePlaying = true;
    this.tv.static(); await wait(1.5);
    const c = canvas(320, 240), x = c.getContext('2d');
    x.fillStyle = '#594c38'; x.fillRect(0, 0, 320, 240); x.fillStyle = '#403326'; x.fillRect(0, 150, 320, 90);
    x.fillStyle = '#bfa659'; x.beginPath(); x.ellipse(150, 120, 30, 45, 0, 0, 7); x.fill();
    x.fillStyle = '#b38c73'; x.beginPath(); x.arc(150, 62, 22, 0, 7); x.fill();
    x.fillStyle = '#fff'; x.font = '20px monospace'; x.fillText('▶ PLAY', 10, 28); x.fillText('OCT 03', 220, 226);
    grainOver(x, 320, 240, 50);
    this.tv.card(toTexture(c, false));
    await new Promise(r => G.dialogue.play(LINES.tape, 'tape', this.tv.screen, r));
    this.tv.static(); await wait(1); this.tv.off();
    G.perception.restore(15, 'Her voice. You remember her voice.');
    G.story.set(F.TapeSeen);
    G.audio.playAt('doorOpen', V(3.7, 0.4, 10.8), 0.5, 1.4);
    this.spawnFragC();
    this.thought('The cabinet under the television has swung open.');
    this.tapePlaying = false;
  }
  spawnFragC() {
    if (this.has(F.FragC)) return;
    const frag = this.box('Fragment', [3.3, 0.61, 10.8], [0.14, 0.01, 0.11], 'paper');
    this.pickup(frag, 'Take the torn photograph', () => { G.inventory.add(F.FragC); G.story.set(F.FragC); G.perception.restore(10); this.thought('Another corner. A man\'s hand, reaching down.'); });
  }

  // ------------------------------------------------------------------ the presence
  presence() {
    const fig = this.figure('ThePresence', [0, 0, 10.8], 180, 0, 2.05);
    const nodes = [V(0, 0, 2.5), V(0, 0, 6), V(0, 0, 10.5), V(-3.4, 0, 1.5), V(-3.3, 0, 6), V(-2.8, 0, 10.9), V(2.7, 0, 1.5), V(2.7, 0, 6), V(2.7, 0, 10), V(-3.3, 0, 8.4), V(3.3, 0, 8.5)];
    this.entity = new UnseenEntity(fig, nodes, V(0, 0, 10.8), () => this.has(F.EnteredBasement) && !this.power && !G.dialogue.busy);
  }
  onBlackout() { this.entity?.resetHome(); }
  onEntered() {
    if (!this.has(F.EnteredBasement)) { G.story.set(F.EnteredBasement); G.dialogue.play(LINES.enterBasement); }
    else if (this.power && !this.has(F.TapeSeen)) this.tape();
  }

  // ------------------------------------------------------------------ Mira's room (chapter 5)
  miraRoom() {
    const door = this.makeDoor('door', [-0.45, 0, 12], 0, 0.9, 'wood_painted', -95);
    door.isLocked = () => !this.has(F.GotRoomKey);
    door.onLocked = () => this.thought('Locked. A child\'s drawing is taped to it: a door, and a little key with a ribbon.');
    if (this.has(F.EnteredMirasRoom)) door.setAngleInstant(-95);
    this.miraLight = this.ceilingLight('MiraLight', [0, 2.3, 13.8], new THREE.Color(1, 0.72, 0.7), 0.7, 5, { power: () => this.power });
    this.box('Bed', [-1.3, 0.2, 14.6], [0.8, 0.4, 1.5], 'fabric_child');
    this.box('Pillow', [-1.3, 0.45, 15.15], [0.55, 0.1, 0.3], 'sheet', { collide: false });
    const desk = this.group('SmallDesk', [1.3, 0, 15.1]);
    this.box('Top', [0, 0.58, 0], [0.8, 0.04, 0.5], 'wood_painted', { parent: desk });
    this.box('Body', [0, 0.28, 0.1], [0.75, 0.56, 0.3], 'wood_painted', { parent: desk });
    this.box('Rug', [0, 0.005, 13.9], [1.6, 0.01, 1.2], 'rug', { collide: false });

    const chair = this.chair = this.group('EmptyChair', [0, 0, 13.9], 180);
    this.box('Seat', [0, 0.32, 0], [0.32, 0.04, 0.32], 'wood_painted', { parent: chair });
    this.box('Back', [0, 0.52, -0.14], [0.32, 0.38, 0.03], 'wood_painted', { parent: chair });
    for (let i = 0; i < 4; i++) this.box('Leg', [i % 2 ? 0.13 : -0.13, 0.15, i < 2 ? -0.13 : 0.13], [0.03, 0.3, 0.03], 'wood_painted', { parent: chair, collide: false });
    const spot = this.spot = new THREE.SpotLight(new THREE.Color(1, 0.9, 0.75), 0, 4, 0.36, 0.6, 1.6);
    spot.position.set(0, 2.3, 13.9); spot.target.position.set(0, 0, 13.9);
    if (G.settings.shadows) { spot.castShadow = true; spot.shadow.mapSize.set(512, 512); }
    this.root.add(spot, spot.target);
    // Mira, who was always sitting there
    const mira = this.mira = new THREE.Group(); chair.add(mira);
    this.prim('capsule', 'Body', [0, 0.55, -0.02], [0.24, 0.2, 0.16], 'child_clothes', { parent: mira, collide: false });
    this.prim('sphere', 'Head', [0, 0.86, -0.02], [0.17, 0.19, 0.17], 'skin', { parent: mira, collide: false });
    this.prim('sphere', 'Hair', [0, 0.9, -0.04], [0.19, 0.18, 0.19], 'hair', { parent: mira, collide: false });
    this.prim('capsule', 'Leg', [-0.06, 0.36, 0.1], [0.07, 0.13, 0.07], 'skin', { parent: mira, collide: false, euler: [90, 0, 0] });
    this.prim('capsule', 'Leg', [0.06, 0.36, 0.1], [0.07, 0.13, 0.07], 'skin', { parent: mira, collide: false, euler: [90, 0, 0] });
    mira.visible = false;

    const toy = this.toyPhone = this.box('ToyPhone', [-0.6, 0.06, 14.9], [0.2, 0.12, 0.16], 'plastic_red');
    this.toyRing = G.audio.loop('ring', toy, 0.6, 'sfx', 12, false); this.toyRing.pitch = 1.35;
    this.interact(toy, 'Pick up the toy telephone', () => this.answerToy(), { promptFn: () => (this.toyRinging ? 'Answer the toy telephone' : 'Toy telephone') });
    if (this.has(F.FinalCall) && !this.has(F.GotFrontKey)) this.spawnFrontKey();
    if (this.has(F.FinalCall)) this.miraLight.base = 0.12 * G.lightScale;

    this.memoryObject(0, [-1.65, 0, 12.45], 'rabbit');
    this.memoryObject(1, [1.65, 0, 12.45], 'shoe');
    this.memoryObject(2, [1.72, 0, 14.1], 'crayons');
    this.memoryObject(3, [-1.93, 1.25, 13.3], 'drawing');
    this.gaze = 0;
  }

  /** P10: memories appear only where you are not looking. */
  memoryObject(i, p, kind) {
    const g = this.group('Memory_' + kind, p), o = { parent: g, collide: false };
    if (kind === 'rabbit') {
      this.prim('sphere', 'Body', [0, 0.12, 0], [0.18, 0.22, 0.15], 'rabbit', { parent: g });
      this.prim('sphere', 'Head', [0, 0.28, 0], [0.13, 0.13, 0.12], 'rabbit', o);
      this.prim('capsule', 'Ear', [-0.03, 0.38, 0], [0.04, 0.08, 0.02], 'rabbit', o);
      this.prim('capsule', 'Ear', [0.03, 0.36, 0], [0.04, 0.07, 0.02], 'rabbit', { ...o, euler: [0, 0, -40] });
    } else if (kind === 'shoe') this.box('Shoe', [0, 0.04, 0], [0.08, 0.07, 0.16], 'red_shoe', { parent: g, yaw: 30 });
    else if (kind === 'crayons') {
      this.prim('cylinder', 'Cup', [0, 0.07, 0], [0.1, 0.07, 0.1], 'porcelain', { parent: g });
      for (let k = 0; k < 5; k++) this.prim('cylinder', 'Crayon', [-0.03 + k * 0.015, 0.16, 0], [0.012, 0.05, 0.012], k % 2 ? 'child_clothes' : 'plastic_red', { ...o, euler: [0, 0, -8 + k * 4] });
    } else {
      const c = canvas(128, 96), x = c.getContext('2d'); x.fillStyle = '#ebe6d6'; x.fillRect(0, 0, 128, 96);
      const fig = (fx, hgt, col) => { x.strokeStyle = x.fillStyle = col; x.lineWidth = 4; x.beginPath(); x.moveTo(fx, 80 - hgt); x.lineTo(fx, 80); x.stroke(); x.beginPath(); x.arc(fx, 72 - hgt, 7, 0, 7); x.fill(); };
      fig(30, 50, '#4d4d59'); fig(98, 46, '#334db3'); fig(64, 26, '#d9b333');
      x.strokeStyle = '#4d4d59'; x.lineWidth = 2; x.beginPath(); x.moveTo(36, 40); x.lineTo(58, 52); x.stroke();
      this.panel('Drawing', [0, 0, 0], [0.36, 0.27], [1, 0, 0], fromCanvas(c), { parent: g, collide: true });
    }
    const flag = MEMORIES[i];
    const ob = new Observable(g, { canMove: false, canAppear: true, delay: 2.5, minPlayerDist: 1.0, checkOccupancy: false, minChapter: 5, cooldown: 0,
      condition: () => G.player && G.player.position.z > 12.3, onChanged: () => G.audio.playAt('musicBox', V(p[0], p[1], p[2]), 0.08, 1.5) });
    ob.setVisible(this.has(flag));
    this.interact(g, 'Remember', () => {
      if (this.has(flag)) { this.thought(MEMORY_THOUGHTS[i]); return; }
      G.story.set(flag); G.perception.restore(12); this.thought(MEMORY_THOUGHTS[i]);
      if (memoryCount(f => this.has(f)) === 4) this.allRemembered();
    });
  }
  async allRemembered() {
    await wait(4);
    G.story.set(F.MemoriesDone);
    G.dialogue.play(LINES.memoriesDone);
    await wait(5);
    this.toyRinging = true; this.toyRing.play();
  }
  answerToy() {
    if (!this.toyRinging) {
      if (this.has(F.MemoriesDone) && !this.has(F.FinalCall) && !this.inCall) { this.toyRinging = true; this.toyRing.play(); return; }
      this.thought('It\'s just a toy. It was always just a toy.');
      return;
    }
    this.toyRinging = false; this.toyRing.stop(); this.inCall = true;
    G.dialogue.play(LINES.finalCall, 'phone', this.toyPhone, () => {
      this.inCall = false; G.story.set(F.FinalCall); this.miraLight.base = 0.12 * G.lightScale; this.spawnFrontKey();
    });
  }
  spawnFrontKey() {
    const k = this.box('FrontKey', [1.2, 0.61, 15.05], [0.08, 0.015, 0.035], 'brass');
    this.pickup(k, 'Take the front door key', () => { G.inventory.add(Items.FrontKey); G.story.set(F.GotFrontKey); this.thought('FOR WHEN YOU ARE READY TO GO.'); });
  }

  // ------------------------------------------------------------------ continuous: entering, gazing, staying
  tick(dt) {
    this.entity?.update(dt);
    const p = G.player;
    if (!p || G.state !== 'playing') return;
    const inRoom = p.position.z > 12.3 && Math.abs(p.position.x) < 2;
    if (inRoom && !this.has(F.EnteredMirasRoom)) { G.story.set(F.EnteredMirasRoom); this.thought('Her room. It was always down here, under everything.'); }
    if (!this.has(F.FinalCall) || !inRoom) { this.gaze = Math.max(0, this.gaze - dt * 2); this.spot.intensity = (this.gaze / 12) * 2.2 * G.lightScale; return; }
    const chairBox = new THREE.Box3().setFromCenterAndSize(this.chair.position.clone().setY(0.5), V(0.6, 1, 0.6));
    if (!this.mira.visible && !G.observation.isBoxObserved(chairBox, this.chair)) this.mira.visible = true;

    // REMEMBER: look at the empty chair, and keep looking.
    const eye = p.eye, fwd = G.camera.getWorldDirection(V(0, 0, 0)), target = this.chair.position.clone().setY(0.6);
    const looking = !p.eyesClosed && angleTo(eye, fwd, target) < 14 && G.physics.lineOfSight(eye, target, this.chair);
    if (looking) { this.gaze += dt; G.perception.drain(3.5); if (this.gaze > 4 && Math.random() < dt * 0.8) p.shake(0.006, 0.4); }
    else this.gaze = Math.max(0, this.gaze - dt * 1.5);
    this.spot.intensity = (this.gaze / 12) * 2.2 * G.lightScale;
    if (this.gaze >= 12) { G.triggerEnding(Ending.Remember); return; }

    // STAY: close your eyes here, and keep them closed.
    if (p.eyesClosed) {
      if (p.closedTime > 5 && !this.stayWarned) { this.stayWarned = true; this.thought('It\'s easier like this. Isn\'t it?'); }
      if (p.closedTime > 12) G.triggerEnding(Ending.Stay);
    } else this.stayWarned = false;
  }
}
