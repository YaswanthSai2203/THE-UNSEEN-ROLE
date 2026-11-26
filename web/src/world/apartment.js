import * as THREE from 'three';
import { G } from '../game.js';
import { WorldBuilder, TUNGSTEN, COLD, LAYER_UNSEEN } from '../engine/kit.js';
import { mat, fromCanvas, cutout, unlit } from '../engine/materials.js';
import { gen, toTexture, writing, symbolCard, familyPhoto, childDrawing, stickFamily, canvas, HAND, drawSymbol } from '../engine/textures.js';
import { Observable } from '../engine/observation.js';
import { Mirror } from '../engine/mirror.js';
import { Television } from '../engine/tv.js';
import { F, Items } from '../logic/flags.js';
import { keyName } from '../engine/settings.js';
import { installApartmentEvents } from './apartmentEvents.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const win = c => ({ c, w: 1.2, h: 2.1, b: 0.9 });

/**
 * Apartment 4B. Layout (metres, +z = north):
 *   living x[-6,-0.75] z[0,5.5] · kitchen x[-6,-0.75] z[5.5,10] · hallway x[-0.75,0.75] z[0,10(14)]
 *   bedroom x[0.75,6] z[5,10] · bathroom x[0.75,4] z[2,5] · closet x[0.75,2.4] z[0,2]
 */
export class ApartmentBuilder extends WorldBuilder {
  get power() { return this.has(F.FuseInstalled); }
  get changed() { return this.chapter >= 4; }
  get hallMat() { return this.changed ? 'wallpaper_stained' : 'wallpaper_hall'; }
  get livingMat() { return this.changed ? 'wallpaper_stained' : 'wallpaper_living'; }

  build() {
    this.ceiling = 2.7;
    this.atmosphere(this.changed ? new THREE.Color(0.075, 0.08, 0.095) : new THREE.Color(0.09, 0.09, 0.1), 0x050506, 0.03);
    installApartmentEvents(this); // defines the story handlers the furniture below is wired to
    this.shell(); this.living(); this.kitchen(); this.bedroom(); this.bathroom(); this.hallway(); this.closet(); this.remoteSet();
    if (this.changed) this.changedApartment();
    this.spawn('default', 3.6, 0, 6.9, 300);
    this.spawn('from_basement', 0, 0, 8.9, 180);
    this.spawn('safe', -5.0, 0, 4.4, 150);
  }

  // ------------------------------------------------------------------ structure
  shell() {
    const B = 'wallpaper_bed';
    this.room('Living', -6, 0, -0.75, 5.5, 'floor_wood');
    this.room('Kitchen', -6, 5.5, -0.75, 10, 'floor_tile');
    this.room('Hall', -0.75, 0, 0.75, 14, 'floor_wood');
    this.room('Bedroom', 0.75, 5, 6, 10, 'carpet');
    this.room('Bath', 0.75, 2, 4, 5, 'tile_bath');
    this.room('Closet', 0.75, 0, 2.4, 2, 'floor_wood');
    this.wallZ(-6, 0, 5.5, 'plaster', this.livingMat, win(1.5), win(4.0));
    this.wallZ(-6, 5.5, 10, 'plaster', 'plaster', win(8.3));
    this.wallX(0, -6, -0.75, 'plaster', this.livingMat);
    this.wallX(10, -6, -0.75, 'plaster', 'plaster');
    this.wallX(5.5, -6, -0.75, this.livingMat, 'plaster', { c: -4.5, w: 1.0, h: 2.1 });
    this.wallZ(-0.75, 0, 5.5, this.livingMat, this.hallMat, { c: 2.6, w: 1.4, h: 2.2 });
    this.wallZ(-0.75, 5.5, 10, 'plaster', this.hallMat, { c: 7.6, w: 1.2, h: 2.2 });
    this.wallZ(0.75, 0, 2, this.hallMat, 'plaster', { c: 1.0, w: 0.8, h: 2.05 });
    this.wallZ(0.75, 2, 5, this.hallMat, 'tile_bath', { c: 3.0, w: 0.85, h: 2.05 });
    this.wallZ(0.75, 5, 10, this.hallMat, B, { c: 6.0, w: 0.9, h: 2.05 });
    this.wallX(0, -0.75, 0.75, 'plaster', this.hallMat, { c: 0, w: 0.9, h: 2.1 });
    this.wallZ(-0.75, 10, 14, 'plaster', this.hallMat);
    this.wallZ(0.75, 10, 14, this.hallMat, 'plaster');
    this.wallX(14, -0.75, 0.75, this.hallMat, 'plaster');
    this.wallX(0, 0.75, 2.4, 'plaster', 'plaster');
    this.wallZ(2.4, 0, 2, 'plaster', 'plaster');
    this.wallX(2, 0.75, 4, 'plaster', 'tile_bath');
    this.wallZ(4, 2, 5, 'tile_bath', 'plaster');
    this.wallX(5, 0.75, 4, 'tile_bath', B);
    this.wallX(5, 4, 6, 'plaster', B);
    this.wallZ(6, 5, 10, B, 'plaster', win(6.4));
    this.wallX(10, 0.75, 6, B, 'plaster');
    this.windowAt(-6, 1.5, 1); this.windowAt(-6, 4.0, 1); this.windowAt(-6, 8.3, 1); this.windowAt(6, 6.4, -1);
  }

  /** Night window in an X wall at x, centred at z; inward = +1 (faces +x) or -1. */
  windowAt(x, z, inward) {
    const n = [inward, 0, 0];
    this.panel('WindowView', [x - inward * 0.07, 1.5, z], [1.2, 1.2], n, mat('window_night'));
    this.box('Sill', [x + inward * 0.05, 0.88, z], [0.22, 0.04, 1.35], 'wood_painted');
    this.box('FrameMid', [x - inward * 0.03, 1.5, z], [0.05, 1.2, 0.04], 'wood_painted', { collide: false });
    this.box('FrameBar', [x - inward * 0.03, 1.5, z], [0.05, 0.04, 1.2], 'wood_painted', { collide: false });
    for (const s of [-1, 1]) this.box('Curtain', [x + inward * 0.12, 1.35, z + s * 0.78], [0.06, 2.3, 0.45], 'curtain', { collide: false });
    this.box('Radiator', [x + inward * 0.12, 0.45, z], [0.1, 0.55, 0.95], 'metal');
    this.pointLight([x + inward * 0.6, 1.5, z], new THREE.Color(0.45, 0.55, 0.8), 0.6, 4);
    G.audio.loop('wind', V(x, 1.5, z), 0.18, 'ambience', 6);
  }

  // ------------------------------------------------------------------ furniture kit
  chair(name, p, yaw, m = 'wood_dark', child = false) {
    const k = child ? 0.7 : 1, g = this.group(name, p, yaw);
    this.box('Seat', [0, 0.45 * k, 0], [0.44 * k, 0.05, 0.44 * k], m, { parent: g });
    this.box('Back', [0, 0.74 * k, -0.2 * k], [0.44 * k, 0.55 * k, 0.04], m, { parent: g });
    for (let i = 0; i < 4; i++) this.box('Leg', [(i % 2 ? 0.19 : -0.19) * k, 0.215 * k, (i < 2 ? -0.19 : 0.19) * k], [0.04, 0.43 * k, 0.04], m, { parent: g, collide: false });
    return g;
  }
  table(name, c, s, m) {
    const g = this.group(name, c);
    this.box('Top', [0, s[1] - 0.025, 0], [s[0], 0.05, s[2]], m, { parent: g });
    for (let i = 0; i < 4; i++) this.box('Leg', [(i % 2 ? 1 : -1) * (s[0] / 2 - 0.06), (s[1] - 0.05) / 2, (i < 2 ? -1 : 1) * (s[2] / 2 - 0.06)], [0.05, s[1] - 0.05, 0.05], m, { parent: g });
    return g;
  }
  picture(p, n, size, c) {
    const alongX = Math.abs(n[2]) > 0.5;
    this.box('PictureFrame', [p[0] - n[0] * 0.01, p[1], p[2] - n[2] * 0.01], alongX ? [size[0] + 0.08, size[1] + 0.08, 0.025] : [0.025, size[1] + 0.08, size[0] + 0.08], 'wood_dark', { collide: false });
    this.panel('Picture', [p[0] + n[0] * 0.005, p[1], p[2] + n[2] * 0.005], size, n, this.changed ? mat('black') : fromCanvas(c, 0.6));
  }
  clock(p, n, ticking, hour, minute) {
    const g = this.group('Clock', p, (Math.atan2(n[0], n[2]) * 180) / Math.PI);
    this.prim('cylinder', 'Face', [0, 0, 0], [0.34, 0.015, 0.34], 'paper', { parent: g, collide: false, euler: [90, 0, 0] });
    this.prim('cylinder', 'Rim', [0, 0, -0.01], [0.37, 0.012, 0.37], 'wood_dark', { parent: g, collide: false, euler: [90, 0, 0] });
    const hand = (len, w, ang, z) => { const hg = this.group('Hand', [0, 0, z], 0, g); hg.rotation.z = -ang; this.box('H', [0, len / 2, 0], [w, len, 0.005], 'black', { parent: hg, collide: false }); };
    hand(0.1, 0.015, (((hour % 12) + minute / 60) * Math.PI) / 6, 0.02);
    hand(0.14, 0.01, (minute * Math.PI) / 30, 0.025);
    if (ticking) this.clockLoop = G.audio.loop('tick', g, 0.35, 'ambience', 7);
  }
  bookshelf(c, w, hgt, d) {
    const g = this.group('Bookshelf', c);
    this.box('Back', [0, hgt / 2, d / 2 - 0.01], [w, hgt, 0.02], 'wood_dark', { parent: g });
    this.box('Side', [-w / 2, hgt / 2, 0], [0.03, hgt, d], 'wood_dark', { parent: g });
    this.box('Side', [w / 2, hgt / 2, 0], [0.03, hgt, d], 'wood_dark', { parent: g });
    const cols = [[0.35, 0.12, 0.1], [0.15, 0.2, 0.25], [0.3, 0.28, 0.2], [0.18, 0.25, 0.17], [0.45, 0.4, 0.3], [0.2, 0.15, 0.12]].map(c2 => new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(...c2, THREE.SRGBColorSpace), roughness: 0.8 }));
    let seed = 5; const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let s = 0; s < 5; s++) {
      const y = 0.05 + (s * (hgt - 0.1)) / 4;
      this.box('Shelf', [0, y, 0], [w, 0.03, d], 'wood_dark', { parent: g });
      if (s === 4) continue;
      let x = -w / 2 + 0.05;
      while (x < w / 2 - 0.1) {
        const bw = 0.03 + r() * 0.04, bh = 0.2 + r() * 0.12;
        if (r() < 0.12) { x += 0.12; continue; } // gaps where books were taken
        this.box('Book', [x + bw / 2, y + 0.015 + bh / 2, -0.02], [bw, bh, d * 0.75], cols[Math.floor(r() * cols.length)], { parent: g, collide: false });
        x += bw + 0.004;
      }
    }
  }

  // ------------------------------------------------------------------ living room
  living() {
    this.box('Rug', [-3.4, 0.005, 2.3], [2.6, 0.01, 1.9], 'rug', { collide: false });
    this.box('TVStand', [-3.4, 0.25, 0.35], [1.3, 0.5, 0.45], 'wood_dark');
    const drawer = this.box('FilmDrawer', [-3.0, 0.32, 0.585], [0.45, 0.14, 0.02], 'wood_light');
    this.interact(drawer, 'Open drawer', () => this.takeFilm(), { promptFn: () => (this.has(F.GotCamera) ? 'Take instant film' : 'Open drawer') });
    const tvBody = this.box('TV', [-3.4, 0.8, 0.36], [0.78, 0.58, 0.5], 'plastic_dark');
    const screen = this.panel('TVScreen', [-3.4, 0.82, 0.615], [0.6, 0.45], [0, 0, 1], mat('screen_off'));
    const glow = this.pointLight([-3.4, 0.9, 1.0], new THREE.Color(0.6, 0.7, 0.9), 0.5, 4.5);
    this.tv = new Television(this, screen, glow, G.audio.loop('static', tvBody, 0.3, 'sfx', 9, false));
    this.tvLiveCam = this.tv.feedCamera([-3.4, 1.2, 0.7], [-3.4, 1.0, 4.0]);
    this.interact(tvBody, 'Use television', () => this.useTelevision());

    const sofa = this.sofa = this.group('Sofa', [-3.4, 0, 3.27]);
    this.box('Seat', [0, 0.21, 0], [2.1, 0.42, 0.85], 'fabric_sofa', { parent: sofa });
    this.box('Back', [0, 0.66, 0.33], [2.1, 0.5, 0.2], 'fabric_sofa', { parent: sofa });
    this.box('Arm', [-1, 0.32, 0], [0.18, 0.64, 0.85], 'fabric_sofa', { parent: sofa });
    this.box('Arm', [1, 0.32, 0], [0.18, 0.64, 0.85], 'fabric_sofa', { parent: sofa });
    this.box('Cushion', [-0.48, 0.48, -0.05], [0.9, 0.12, 0.62], 'fabric_sofa', { parent: sofa, collide: false });
    this.box('Cushion', [0.48, 0.48, -0.05], [0.9, 0.12, 0.62], 'fabric_sofa', { parent: sofa, collide: false });
    this.table('CoffeeTable', [-3.4, 0, 1.85], [1.1, 0.42, 0.55], 'wood_dark');
    this.prim('cylinder', 'Mug', [-3.1, 0.47, 1.8], [0.08, 0.05, 0.08], 'porcelain', { collide: false });
    this.box('Magazine', [-3.6, 0.428, 1.9], [0.3, 0.01, 0.22], 'paper', { collide: false, yaw: 12 });

    this.box('SideTable', [-1.95, 0.25, 3.3], [0.45, 0.5, 0.45], 'wood_dark');
    const phone = this.phone = this.box('Phone', [-1.95, 0.55, 3.3], [0.22, 0.09, 0.18], 'plastic_beige');
    this.prim('capsule', 'Handset', [0, 0.07, 0], [0.05, 0.11, 0.05], 'plastic_beige', { parent: phone, collide: false, euler: [0, 0, 90] });
    this.interact(phone, 'Pick up the phone', () => this.answerPhone(), { promptFn: () => (this.ringing ? 'Answer the telephone' : 'Pick up the phone') });
    this.ringLoop = G.audio.loop('ring', phone, 0.9, 'sfx', 16, false);

    // the warm, safe corner
    this.prim('cylinder', 'LampPole', [-5.4, 0.75, 3.9], [0.03, 0.75, 0.03], 'metal');
    this.prim('cylinder', 'LampBase', [-5.4, 0.02, 3.9], [0.3, 0.02, 0.3], 'metal', { collide: false });
    const shade = this.prim('cylinder', 'LampShade', [-5.4, 1.6, 3.9], [0.42, 0.16, 0.42], 'lampshade');
    this.lamp = this.ceilingLight('FloorLamp', [-5.4, 1.5, 3.9], TUNGSTEN, 1.0, 4.5, { bare: true });
    this.interact(shade, 'Switch lamp', () => { this.lamp.on = !this.lamp.on; G.audio.playAt('switch', V(-5.4, 1.5, 3.9), 0.5); }, { promptFn: () => (this.lamp.on ? 'Switch lamp off' : 'Switch lamp on') });
    this.zones.push({ p: V(-5.0, 0, 3.9), r: 1.5, rate: 3, active: () => this.lamp.lit });

    this.bookshelf([-1.7, 0, 5.27], 1.0, 1.9, 0.32);
    this.box('FamilyFrame', [-2.9, 1.5, 5.425], [0.66, 0.52, 0.03], 'wood_dark');
    this.framePicture = this.panel('FamilyPicture', [-2.9, 1.5, 5.405], [0.56, 0.42], [0, 0, -1], mat('black'), { collide: true });
    this.interact(this.framePicture, 'Examine the frame', () => this.useFamilyFrame(), { promptFn: () => (this.has(F.PhotoRestored) ? 'Look at the photograph' : 'Examine the empty frame') });
    this.updateFramePicture();

    // the small photo on top of the bookshelf changes when unobserved
    const small = this.group('ShelfPhoto', [-1.7, 1.95, 5.2]);
    this.box('Frame', [0, 0, 0], [0.22, 0.17, 0.02], 'wood_dark', { parent: small, collide: false });
    const withChild = fromCanvas(familyPhoto(true), 0.5), empty = fromCanvas(familyPhoto(false), 0.5);
    const pic = this.panel('Photo', [0, 0, -0.012], [0.19, 0.14], [0, 0, -1], withChild, { parent: small });
    const ob = new Observable(small, { minChapter: 2, delay: 5, minPlayerDist: 1.5, checkOccupancy: false, onNoticed: () => this.thought('The photo on the shelf. There were three people in it. Weren\'t there?') });
    ob.action(() => (pic.material = empty));
    if (this.chapter >= 3) ob.jumpToStep(0);

    this.picture([-5.93, 1.6, 2.75], [1, 0, 0], [0.4, 0.3], familyPhoto(false));
    this.picture([-5.93, 1.75, 0.45], [1, 0, 0], [0.3, 0.4], gen.grain([0.4, 0.45, 0.4], 0.3, 4));
    this.clock([-0.83, 2.0, 4.4], [-1, 0, 0], !this.changed, 9, 40);

    // dining corner with the chair that moves (Event 1)
    this.table('DiningTable', [-5.2, 0, 1.0], [0.7, 0.74, 0.7], 'wood_light');
    this.chair('Chair', [-5.2, 0, 1.62], 180);
    const chair = this.chair('WatchedChair', [-4.55, 0, 1.0], 270);
    this.watchedChair = new Observable(chair, {
      delay: 4, maxMove: 3, minPlayerDist: 3, cooldown: 20, sound: 'scrape', soundVol: 0.25,
      condition: () => (this.watchedChair.stepIndex < 0 ? this.has(F.Phone1) && this.has(F.FuseInstalled) : this.has(F.TvLiveSeen)),
      onNoticed: o => {
        if (o.stepIndex === 0 && !this.has(F.ChairNoticed)) {
          G.perception.hit(6); this.thought('That chair was by the table. I\'m sure it was by the table.'); G.story.set(F.ChairNoticed);
        } else if (o.stepIndex === 1) {
          G.perception.hit(6); this.thought('It\'s facing the hallway now. Like it\'s waiting for someone to come home.'); G.story.set('chair_faces_hall');
        }
      },
    });
    // Step 1 is clear of the coffee table (x -3.95..-2.85), so the move is never blocked.
    this.watchedChair.pose(-4.3, 0, 1.25, 150).pose(-2.15, 0, 2.45, 90);
    if (this.has('chair_faces_hall')) this.watchedChair.jumpToStep(1); else if (this.has(F.ChairNoticed)) this.watchedChair.jumpToStep(0);

    this.livingLight = this.ceilingLight('LivingLight', [-3.4, 2.5, 2.75], TUNGSTEN, 1.3, 7);
    this.livingLight.on = false;
    this.lightSwitch([-0.83, 1.2, 3.55], [-1, 0, 0], null, this.livingLight);
    this.dust([-5.0, 1.3, 3.6], [1.5, 1.5, 1.5]);
  }

  // ------------------------------------------------------------------ kitchen
  kitchen() {
    this.box('Counter', [-4.0, 0.44, 9.68], [3.6, 0.88, 0.6], 'wood_painted');
    this.box('Worktop', [-4.0, 0.9, 9.67], [3.65, 0.04, 0.64], 'wood_light');
    this.box('Backsplash', [-4.0, 1.22, 9.93], [3.6, 0.6, 0.02], 'tile_kitchen', { collide: false });
    this.box('Hob', [-5.2, 0.925, 9.65], [0.6, 0.012, 0.5], 'black', { collide: false });
    const sink = this.box('Sink', [-3.5, 0.925, 9.65], [0.5, 0.015, 0.4], 'chrome');
    this.box('Tap', [-3.5, 1.05, 9.88], [0.03, 0.25, 0.03], 'chrome', { collide: false });
    this.interact(sink, 'Run cold water', () => { G.audio.playAt('water', V(-3.5, 1, 9.7), 0.5); this.ground('sink', 25, 'Cold water over your hands and wrists. This is real. This is real.'); });
    const fuseDrawer = this.box('Drawer', [-4.3, 0.78, 9.37], [0.45, 0.14, 0.02], 'wood_light');
    this.interact(fuseDrawer, 'Open drawer', () => {
      G.audio.playAt('doorOpen', V(-4.3, 0.8, 9.4), 0.3, 1.6);
      if (!this.has(F.GotFuse)) { G.inventory.add(Items.Fuse); G.story.set(F.GotFuse); this.thought('A fuse. HALL, in pencil.'); }
      else this.thought('Cutlery. Birthday candles, still in the packet.');
    });
    this.box('WallCabinets', [-4.45, 1.95, 9.8], [2.7, 0.7, 0.35], 'wood_painted');
    this.box('CabinetBack', [-2.4, 1.95, 9.96], [0.6, 0.7, 0.03], 'wood_painted');
    this.box('CabinetTop', [-2.4, 2.29, 9.8], [0.6, 0.02, 0.35], 'wood_painted');
    this.box('CabinetBottom', [-2.4, 1.61, 9.8], [0.6, 0.02, 0.35], 'wood_painted');
    this.box('CabinetSide', [-2.1, 1.95, 9.8], [0.02, 0.7, 0.35], 'wood_painted');
    const sc = canvas(256, 256), ctx = sc.getContext('2d');
    ctx.fillStyle = '#9e998a'; ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = '#2a1c15'; ctx.font = `30px ${HAND}`; ctx.fillText('SHE WAS', 20, 50); ctx.fillText('RIGHT THERE', 20, 86);
    ctx.font = `20px ${HAND}`; ctx.fillText('SHE WAS RIGHT THERE', 24, 128); ctx.fillText('SHE WAS RIGHT THERE', 18, 152);
    drawSymbol(ctx, 'cross', 60, 205, 26, 6, '#46100c');
    ctx.fillStyle = '#46100c'; ctx.font = `44px ${HAND}`; ctx.fillText('= 9', 110, 220);
    const msg = this.panel('CabinetMessage', [-2.4, 1.95, 9.94], [0.55, 0.66], [0, 0, -1], fromCanvas(sc), { collide: true });
    this.interact(msg, 'Read the scratches', () => { G.inventory.read('cabinet'); G.story.set(F.KitchenMsg); });
    this.cabinetDoor = this.makeDoor('cabinet', [-2.7, 1.6, 9.62], 0, 0.6, 'wood_painted', 105, 0.7);
    this.cabinetDoor.isLocked = () => !this.has(F.RadioOff);
    this.cabinetDoor.onLocked = () => this.thought('It\'s stuck. Something on the other side is holding it shut.');
    this.cabinetDoor.onOpened = () => { if (this.has(F.KitchenMsg)) return; G.perception.hit(8); G.inventory.read('cabinet'); G.story.set(F.KitchenMsg); };
    if (this.has(F.RadioOff)) this.cabinetDoor.setAngleInstant(this.has(F.KitchenMsg) ? 105 : 12);

    const fridge = this.box('Fridge', [-1.45, 0.9, 9.6], [0.7, 1.8, 0.65], 'appliance');
    this.box('Handle', [-1.75, 1.2, 9.255], [0.03, 0.35, 0.03], 'chrome', { collide: false });
    this.fridgeLoop = G.audio.loop('fridge', fridge, 0.3, 'ambience', 7);
    const note = this.panel('FridgeNote', [-1.4, 1.35, 9.27], [0.13, 0.16], [0, 0, -1], fromCanvas(writing('FUSES\nDRAWER', 64, 80, 14, '#1a1a4d', '#e6e09a', HAND)), { collide: true });
    this.interact(note, 'Read note', () => G.inventory.read('fridge_note'));

    const radio = this.radio = this.box('Radio', [-2.75, 1.02, 9.72], [0.34, 0.2, 0.15], 'plastic_dark');
    this.prim('cylinder', 'Dial', [0.1, 0, -0.08], [0.05, 0.01, 0.05], 'chrome', { parent: radio, collide: false, euler: [90, 0, 0] });
    this.radioLoop = G.audio.loop('static', radio, 0.25, 'sfx', 9, false);
    this.interact(radio, 'Switch radio', () => this.useRadio(), { promptFn: () => (this.radioLoop.isPlaying ? 'Switch the radio off' : 'Switch the radio on') });
    if (this.has(F.RadioOn) && !this.has(F.RadioOff)) this.radioLoop.play();

    // a table that seats four, with three chairs
    this.table('KitchenTable', [-3.6, 0, 7.4], [1.4, 0.75, 0.85], 'wood_light');
    const flip = this.changed ? 180 : 0;
    this.chair('KChair', [-4.6, 0, 7.4], 90 + flip); this.chair('KChair', [-2.6, 0, 7.4], 270 + flip); this.chair('KChair', [-3.6, 0, 6.75], flip);
    for (const p of [[-4.0, 7.4], [-3.2, 7.4], [-3.6, 7.15]]) this.prim('cylinder', 'Plate', [p[0], 0.76, p[1]], [0.24, 0.006, 0.24], 'porcelain', { collide: false });
    const small = this.group('SmallPlate', [-3.6, 0.76, 7.7]);
    this.prim('cylinder', 'Plate', [0, 0, 0], [0.18, 0.006, 0.18], 'plastic_red', { parent: small, collide: false });
    const cup = new Observable(small, { minChapter: 2, minPlayerDist: 2, cooldown: 45, checkOccupancy: false, loop: true });
    cup.action(() => cup.setVisible(false)).action(() => cup.setVisible(true));

    this.clock([-5.93, 2.0, 6.6], [1, 0, 0], false, 9, 40); // stopped at 9:40
    this.kitchenLight = this.ceilingLight('KitchenLight', [-3.4, 2.5, 7.7], TUNGSTEN, 1.2, 6.5);
    this.kitchenLight.on = false;
    this.lightSwitch([-0.83, 1.2, 8.4], [-1, 0, 0], null, this.kitchenLight);
  }

  // ------------------------------------------------------------------ bedroom
  bedroom() {
    this.box('BedFrame', [4.95, 0.32, 8.0], [2.0, 0.15, 1.45], 'wood_dark');
    for (let i = 0; i < 4; i++) this.box('BedLeg', [i % 2 ? 5.9 : 4.0, 0.125, i < 2 ? 7.33 : 8.67], [0.06, 0.25, 0.06], 'wood_dark', { collide: false });
    this.box('Mattress', [4.95, 0.5, 8.0], [1.95, 0.2, 1.4], 'fabric_bed');
    this.box('Headboard', [5.94, 0.65, 8.0], [0.06, 1.0, 1.45], 'wood_dark');
    this.box('Pillow', [5.62, 0.65, 8.0], [0.35, 0.1, 1.0], 'fabric_bed', { collide: false });
    if (!this.changed) this.box('Blanket', [4.6, 0.62, 8.0], [1.3, 0.05, 1.46], 'sheet', { collide: false });
    this.box('BedsideTable', [5.6, 0.3, 9.2], [0.45, 0.6, 0.4], 'wood_dark');
    if (!this.has(F.GotFlashlight)) {
      const torch = this.prim('cylinder', 'Flashlight', [5.5, 0.64, 9.15], [0.06, 0.12, 0.06], 'metal', { euler: [0, 30, 90] });
      this.pickup(torch, 'Take flashlight', () => {
        G.inventory.add(Items.Flashlight); G.story.set(F.GotFlashlight);
        G.notify(`Flashlight: press ${keyName(G.settings.keys.flashlight)}`);
      });
    }
    const watch = this.prim('cylinder', 'Wristwatch', [5.72, 0.61, 9.3], [0.06, 0.008, 0.06], 'chrome');
    this.interact(watch, 'Hold the wristwatch', () => this.ground('watch', 20, 'It still ticks. You count sixty seconds, and the room holds still.'));

    // wardrobe, hollow so its contents can be seen
    const wr = this.group('Wardrobe', [2.6, 0, 9.7]);
    this.box('Back', [0, 1.0, 0.27], [1.2, 2.0, 0.03], 'wood_dark', { parent: wr });
    this.box('Side', [-0.59, 1.0, 0], [0.03, 2.0, 0.57], 'wood_dark', { parent: wr });
    this.box('Side', [0.59, 1.0, 0], [0.03, 2.0, 0.57], 'wood_dark', { parent: wr });
    this.box('Top', [0, 1.99, 0], [1.2, 0.03, 0.57], 'wood_dark', { parent: wr });
    this.box('Bottom', [0, 0.06, 0], [1.2, 0.12, 0.57], 'wood_dark', { parent: wr });
    this.prim('cylinder', 'Rail', [0, 1.75, 0.05], [0.02, 0.58, 0.02], 'chrome', { parent: wr, collide: false, euler: [0, 0, 90] });
    this.box('ChildDress', [-0.2, 1.42, 0.05], [0.3, 0.6, 0.05], 'child_clothes', { parent: wr, collide: false });
    this.box('ChildCoat', [0.15, 1.38, 0.05], [0.32, 0.68, 0.06], 'fabric_child', { parent: wr, collide: false });
    this.box('SmallShoes', [0.3, 0.15, 0], [0.12, 0.06, 0.16], 'red_shoe', { parent: wr, collide: false });
    this.panel('Tally', [-0.57, 1.2, 0], [0.4, 0.8], [1, 0, 0], fromCanvas(writing('IIII IIII\nIIII IIII\nIIII IIII\nIIII IIII\nIIII IIII\nIIII III', 128, 256, 22, '#8c7359', '#4d3324', HAND)), { parent: wr });
    this.note('Diary', [2.4, 0.14, 9.65], [0.18, 0.03, 0.24], 'diary', 'plastic_red', 15, () => G.story.set(F.DiaryRead));
    const drawing = this.panel('Drawing', [2.75, 0.85, 9.95], [0.4, 0.3], [0, 0, -1], fromCanvas(childDrawing()), { collide: true });
    this.interact(drawing, 'Look at the drawing', () => G.inventory.read('drawing'));
    const wl = this.makeDoor('wardrobe', [2.02, 0.12, 9.41], 0, 0.58, 'wood_dark', 100, 1.86);
    const wrr = this.makeDoor('wardrobe', [3.18, 0.12, 9.41], 180, 0.58, 'wood_dark', -100, 1.86);
    for (const d of [wl, wrr]) {
      d.isLocked = () => !this.has(F.GotBrassKey);
      d.onLocked = () => this.thought('Locked. A small brass keyhole.');
      d.onOpened = () => {
        if (this.has(F.WardrobeOpen)) return;
        G.story.set(F.WardrobeOpen); G.perception.hit(8); G.audio.playAt('creak', d.worldPos(), 0.5);
        this.thought('Small clothes. A child\'s. Why does this apartment have a child\'s clothes?');
      };
    }
    if (this.has(F.WardrobeOpen)) { wl.setAngleInstant(100); wrr.setAngleInstant(-100); }

    // desk with the camera drawer
    this.table('Desk', [4.5, 0, 5.38], [1.2, 0.76, 0.6], 'wood_light');
    const dg = this.group('DeskDrawer', [4.5, 0.64, 5.38]);
    this.box('Drawer', [0, 0, 0], [0.5, 0.12, 0.52], 'wood_light', { parent: dg });
    this.interact(dg, 'Open drawer', () => {
      G.audio.playAt('doorOpen', V(4.5, 0.7, 5.6), 0.3, 1.5);
      if (!this.has(F.GotCamera)) {
        G.inventory.add(Items.Camera); G.inventory.add(Items.Film, 6); G.story.set(F.GotCamera);
        G.notify(`Take a photograph: ${keyName(G.settings.keys.camera)}    Inventory: ${keyName(G.settings.keys.inventory)}`);
        this.thought('An old instant camera. Someone loaded it.');
      } else this.thought('Pencils. A hospital wristband, cut through. The name has been scratched off.');
    });
    const dob = new Observable(dg, { minChapter: 2, checkOccupancy: false, minPlayerDist: 2.5, cooldown: 60, loop: true, sound: 'scrape', soundVol: 0.15 });
    dob.pose(4.5, 0.64, 5.68, 0).pose(4.5, 0.64, 5.38, 0);
    this.chair('DeskChair', [4.5, 0, 6.0], 180);
    this.box('Papers', [4.2, 0.765, 5.3], [0.3, 0.01, 0.22], 'paper', { collide: false, yaw: -8 });
    this.prim('cylinder', 'Mug', [4.95, 0.8, 5.25], [0.08, 0.05, 0.08], 'porcelain', { collide: false });

    this.box('MirrorFrame', [0.8, 1.45, 8.7], [0.02, 1.08, 0.63], 'wood_dark', { collide: false });
    this.bedMirror = new Mirror(this, [0.815, 1.45, 8.7], [1, 0, 0], 0.55, 1.0);
    const mcol = this.box('MirrorCollider', [0.82, 1.45, 8.7], [0.03, 1.0, 0.55], 'black');
    mcol.visible = false;
    this.interact(mcol, 'Look in the mirror', () => this.thought(this.has(F.MemoriesDone) ? 'Adrian. That\'s my face. Adrian.' : 'A tired man. I don\'t know his name either.'));

    this.bedLight = this.ceilingLight('BedroomLight', [3.4, 2.5, 7.5], TUNGSTEN, 1.1, 6.5);
    this.bedLight.on = false;
    this.lightSwitch([0.83, 1.2, 6.75], [1, 0, 0], null, this.bedLight);
    this.bedDoor = this.makeDoor('door', [0.75, 0, 5.55], -90, 0.9, 'door');
    this.dust([3.5, 1.2, 7.5], [3, 2, 3]);
  }

  // ------------------------------------------------------------------ bathroom
  bathroom() {
    this.prim('cylinder', 'Pedestal', [2.2, 0.4, 4.75], [0.15, 0.4, 0.15], 'porcelain');
    const basin = this.box('Basin', [2.2, 0.85, 4.72], [0.55, 0.15, 0.42], 'porcelain');
    this.box('Tap', [2.2, 1.0, 4.88], [0.03, 0.15, 0.03], 'chrome', { collide: false });
    this.waterLoop = G.audio.loop('water', V(2.2, 0.95, 4.72), 0.4, 'sfx', 8, false);
    this.interact(basin, 'Turn the tap', () => {
      if (this.waterLoop.isPlaying) { this.waterLoop.stop(); this.thought('The water was running. I didn\'t leave it running.'); }
      else { this.waterLoop.play(); setTimeout(() => this.waterLoop.stop(), 4000); }
    }, { promptFn: () => (this.waterLoop.isPlaying ? 'Turn off the tap' : 'Turn the tap') });

    this.box('MirrorFrame', [2.2, 1.55, 4.94], [0.68, 0.83, 0.02], 'chrome', { collide: false });
    this.bathMirror = new Mirror(this, [2.2, 1.55, 4.925], [0, 0, -1], 0.6, 0.75);
    const mcol = this.box('MirrorCollider', [2.2, 1.55, 4.93], [0.6, 0.75, 0.03], 'black');
    mcol.visible = false;
    this.interact(mcol, 'Look in the mirror', () => this.thought(this.has(F.MirrorMsg) ? '11, 4, 7. Written from the inside of the glass.' : 'My reflection looks back. It takes a moment too long.'));
    const steam = writing('CH\n11 4 7', 256, 320, 64, 'rgba(225,232,236,1)', null, HAND);
    const sctx = steam.getContext('2d'); sctx.strokeStyle = 'rgba(225,232,236,1)'; sctx.lineWidth = 5; sctx.strokeRect(70, 250, 116, 50);
    this.mirrorMsg = this.panel('MirrorWriting', [2.2, 1.55, 4.918], [0.5, 0.62], [0, 0, -1], cutout(toTexture(steam, false), 0xffffff, true));
    this.mirrorMsg.visible = this.has(F.MirrorMsg);

    // what only the camera can see
    if (!this.has(F.GotBrassKey)) {
      const key = this.bathKey = this.prim('cube', 'BrassKey', [2.45, 0.012, 4.55], [0.07, 0.012, 0.03], 'brass', { collide: false, euler: [0, 25, 0] });
      if (this.has(F.KeyRevealed)) this.makeKeyReal(); else key.layers.set(LAYER_UNSEEN);
      G.reveals.push({ object: key, maxDist: 4.5, caption: 'Under the sink there is something small and brass. It wasn\'t there when you looked.',
        active: () => !this.has(F.KeyRevealed) && this.has(F.GotCamera), onRevealed: () => { G.story.set(F.KeyRevealed); this.makeKeyReal(); } });
    }
    const circle = this.panel('CircleSymbol', [2.95, 0.55, 4.935], [0.5, 0.25], [0, 0, -1], cutout(toTexture(symbolCard('circle', '= 0', '#5a140f', null), false)), { layer: LAYER_UNSEEN });
    G.reveals.push({ object: circle, maxDist: 4.5, caption: 'On the tiles beside the sink, something is drawn: a circle, and the number 0.', active: () => this.has(F.GotCamera),
      onRevealed: () => { if (!this.has(F.CircleSeen)) { G.story.set(F.CircleSeen); G.story.journal('Bathroom tiles (in a photograph): CIRCLE = 0'); } } });

    this.box('Bathtub', [3.55, 0.275, 3.05], [0.75, 0.55, 1.65], 'porcelain');
    this.box('BathWater', [3.55, 0.555, 3.05], [0.6, 0.01, 1.5], 'water', { collide: false });
    this.box('BathTap', [3.55, 0.75, 3.85], [0.04, 0.3, 0.04], 'chrome', { collide: false });
    this.prim('cylinder', 'ShowerHead', [3.55, 2.05, 3.82], [0.12, 0.02, 0.12], 'chrome', { collide: false, euler: [30, 0, 0] });
    this.prim('cylinder', 'CurtainRail', [3.17, 2.2, 3.05], [0.02, 0.85, 0.02], 'chrome', { collide: false, euler: [90, 0, 0] });
    this.box('ShowerCurtain', [3.17, 1.4, 2.6], [0.02, 1.55, 0.75], 'sheet', { collide: false });
    this.box('Toilet', [1.2, 0.2, 4.62], [0.4, 0.4, 0.55], 'porcelain');
    this.box('Cistern', [1.2, 0.6, 4.85], [0.4, 0.4, 0.16], 'porcelain');
    const cab = this.box('MedicineCabinet', [2.6, 1.5, 2.1], [0.5, 0.6, 0.15], 'wood_painted');
    this.interact(cab, 'Open cabinet', () => this.thought('Sleeping pills, a lot of them. A child\'s toothbrush, still damp.'));
    this.tvBathCam = this.tv.feedCamera([1.05, 2.25, 2.35], [2.45, 0.35, 4.6]);
    this.bathLight = this.ceilingLight('BathroomLight', [2.4, 2.5, 3.5], COLD, 1.0, 4.5, { bare: true });
    this.bathLight.on = false;
    this.bathLight.alwaysUnstable = this.chapter >= 2;
    this.lightSwitch([0.83, 1.2, 3.65], [1, 0, 0], null, this.bathLight);
    this.bathDoor = this.makeDoor('door', [0.75, 0, 2.575], -90, 0.85, 'door');
  }

  makeKeyReal() {
    const key = this.bathKey;
    key.layers.set(0);
    key.scale.set(0.07, 0.03, 0.06); // slightly larger hit area once it is real
    G.physics.add(key, { solid: false });
    this.pickup(key, 'Take the small brass key', () => { G.inventory.add(Items.BrassKey); G.story.set(F.GotBrassKey); this.thought('It\'s cold. Real.'); });
  }

  // ------------------------------------------------------------------ hallway
  hallway() {
    const P = () => this.power;
    this.hall1 = this.ceilingLight('HallLight', [0, 2.5, 2.5], TUNGSTEN, 0.9, 5, { power: P });
    this.hall2 = this.ceilingLight('HallLight', [0, 2.5, 7.5], TUNGSTEN, 0.9, 5, { power: P });
    // only lit while the hallway is stretched, so it never shines through the end wall
    this.extLight = this.ceilingLight('ExtensionBulb', [0, 2.4, 12.4], new THREE.Color(0.9, 0.85, 0.7), 0.35, 4, { shadows: false, bare: true, power: () => P() && this.falseWall?.position.z > 11 });
    this.lightSwitch([-0.69, 1.2, 0.45], [1, 0, 0], P, this.hall1, this.hall2);
    this.zones.push({ p: V(0, 0, 12), r: 2.2, rate: -1.5 });
    const fuse = this.box('FuseBox', [-0.7, 1.55, 0.95], [0.08, 0.4, 0.3], 'metal');
    this.interact(fuse, 'Open fuse box', () => this.useFuseBox(), { promptFn: () => (this.power ? 'Fuse box' : G.inventory.has(Items.Fuse) ? 'Insert the fuse' : 'Open fuse box') });
    this.box('Console', [0.55, 0.4, 4.3], [0.25, 0.8, 0.8], 'wood_dark');
    this.prim('cylinder', 'KeyBowl', [0.55, 0.83, 4.3], [0.18, 0.03, 0.18], 'porcelain', { collide: false });
    this.box('Runner', [0, 0.005, 5.0], [0.8, 0.01, 8.5], 'rug', { collide: false });
    for (let i = 0; i < 3; i++) this.box('CoatHook', [0.71, 1.75, 0.25 + i * 0.2], [0.05, 0.03, 0.03], 'brass', { collide: false });
    this.box('Coat', [0.64, 1.35, 0.35], [0.08, 0.8, 0.35], 'clothes', { collide: false });
    this.picture([-0.7, 1.6, 5.0], [1, 0, 0], [0.35, 0.45], gen.grain([0.35, 0.4, 0.45], 0.3, 4));
    this.picture([0.7, 1.6, 8.5], [-1, 0, 0], [0.45, 0.35], familyPhoto(false));
    this.frontDoor = this.makeDoor('front door', [-0.45, 0, 0], 0, 0.9, 'door_front', -95, 2.1);
    this.frontDoor.isLocked = () => true;
    this.frontDoor.onLocked = () => this.useFrontDoor();
    this.box('DoorChain', [0.3, 1.5, 0.06], [0.1, 0.02, 0.01], 'brass', { collide: false });
    this.buildFalseWall();
  }

  /** The north end of the hallway with the basement door. It is not always where you left it. */
  buildFalseWall() {
    const g = this.falseWall = this.group('HallEnd', [0, 0, 10]);
    this.box('Wall', [-0.6, 1.35, 0], [0.3, 2.7, 0.12], this.hallMat, { parent: g });
    this.box('Wall', [0.6, 1.35, 0], [0.3, 2.7, 0.12], this.hallMat, { parent: g });
    this.box('Wall', [0, 2.375, 0], [0.9, 0.65, 0.12], this.hallMat, { parent: g });
    const door = this.box('BasementDoor', [0, 1.025, 0], [0.88, 2.05, 0.05], 'door', { parent: g });
    this.prim('sphere', 'Knob', [0.32, 1.0, -0.04], [0.055, 0.055, 0.055], 'brass', { parent: g, collide: false });
    if (!this.has(F.BasementUnlocked)) {
      this.padlock = this.group('Padlock', [0.32, 1.15, -0.07], 0, g);
      this.box('Body', [0, 0, 0], [0.09, 0.1, 0.04], 'brass', { parent: this.padlock, collide: false });
      this.prim('cylinder', 'Shackle', [0, 0.07, 0], [0.06, 0.03, 0.06], 'chrome', { parent: this.padlock, collide: false });
    }
    this.interact(door, 'Basement door', () => this.useBasementDoor(), { promptFn: () => (this.has(F.BasementUnlocked) ? 'Go down to the basement' : 'Examine the padlock') });
    const ob = new Observable(g, { minChapter: 3, delay: 3, cooldown: 50, maxMove: 3.2, minPlayerDist: 4, loop: true, sound: 'creak', soundVol: 0.2,
      // only while the player is well down the hallway, so nobody is ever shut in behind it
      condition: () => this.chapter <= 4 && G.player && G.player.position.z < 8.3 && Math.abs(G.player.position.x) < 0.8,
      onNoticed: o => { if (o.stepIndex === 0) { G.perception.hit(5); this.thought('The hallway is longer. It is longer than it was.'); } } });
    ob.pose(0, 0, 13, 0).pose(0, 0, 10, 0);
  }

  // ------------------------------------------------------------------ closet
  closet() {
    const found = this.has(F.ClosetFound);
    this.closetFiller = this.box('Wall', [0.75, 1.025, 1.0], [0.12, 2.05, 0.8], this.hallMat);
    const root = this.closetRoot = this.group('ClosetContents');
    this.closetDoor = this.makeDoor('closet', [0.75, 0, 0.6], -90, 0.8, 'door');
    root.attach(this.closetDoor.frame);
    this.box('Shelf', [1.6, 1.55, 0.22], [1.5, 0.03, 0.35], 'wood_painted', { parent: root });
    this.box('OldCoat', [2.1, 1.2, 1.0], [0.4, 1.0, 0.1], 'clothes', { parent: root, collide: false, yaw: 90 });
    this.box('SmallCoat', [1.9, 1.35, 1.4], [0.3, 0.6, 0.08], 'child_clothes', { parent: root, collide: false, yaw: 90 });
    const note = this.box('ClosetNote', [1.3, 1.575, 0.2], [0.2, 0.01, 0.26], 'paper', { parent: root });
    this.interact(note, 'Read note', () => { G.inventory.read('closet_note'); if (!this.has('square_seen')) { G.story.set('square_seen'); G.story.journal('Closet note: SQUARE = 1'); } });
    if (!this.has(F.FragA)) {
      const frag = this.box('Fragment', [1.85, 1.575, 0.22], [0.14, 0.01, 0.11], 'paper', { parent: root });
      this.pickup(frag, 'Take the torn photograph', () => { G.inventory.add(F.FragA); G.story.set(F.FragA); G.perception.restore(10); this.thought('Part of a photograph. A man\'s shoulder.'); });
    }
    this.closetLight = this.ceilingLight('ClosetBulb', [1.6, 2.4, 1.0], TUNGSTEN, 0.5, 3, { shadows: false, bare: true, power: () => this.has(F.ClosetFound) });
    G.physics.refreshOwner(root);
    this.setClosetVisible(found);
  }
  setClosetVisible(found) {
    this.closetFiller.visible = !found; G.physics.setEnabled(this.closetFiller, !found);
    this.closetRoot.visible = found; G.physics.setEnabled(this.closetRoot, found);
  }

  // ------------------------------------------------------------------ the room the TV shows (a child's room)
  remoteSet() {
    const r = this.group('RemoteSet', [0, -30, 0]);
    this.box('Floor', [0, -0.05, 0], [4, 0.1, 4], 'carpet', { parent: r, collide: false });
    this.box('Wall', [0, 1.25, 2], [4, 2.5, 0.1], 'wallpaper_child', { parent: r, collide: false });
    this.box('Wall', [-2, 1.25, 0], [0.1, 2.5, 4], 'wallpaper_child', { parent: r, collide: false });
    this.box('Wall', [2, 1.25, 0], [0.1, 2.5, 4], 'wallpaper_child', { parent: r, collide: false });
    this.box('Bed', [-1.2, 0.25, 1.1], [1.2, 0.4, 1.6], 'fabric_child', { parent: r, collide: false });
    const c = this.chair('EmptyChair', [0.3, -30, 0.6], 180, 'wood_painted', true);
    c.traverse(o => { if (o.userData.phys) o.userData.phys.enabled = false; });
    this.prim('sphere', 'Rabbit', [-1.0, 0.55, 1.3], [0.18, 0.22, 0.15], 'rabbit', { parent: r, collide: false });
    const l = new THREE.PointLight(new THREE.Color(1, 0.7, 0.6), 0.9 * G.lightScale, 5, 1.6); l.position.set(0.5, 2, -0.5); r.add(l);
    this.remoteCam = this.tv.feedCamera([1.5, -28.5, -1.6], [0, -29.4, 0.8]);
  }

  // ------------------------------------------------------------------ chapter 4+: the apartment has changed
  changedApartment() {
    this.sofa.rotation.y = Math.PI; this.sofa.position.z = 3.4; G.physics.refreshOwner(this.sofa);
    for (const l of [this.livingLight, this.kitchenLight, this.bedLight, this.hall1, this.hall2]) { l.light.color.lerp(COLD, 0.5); l.base *= 0.75; }
    for (let i = 0; i < 7; i++) {
      const west = i % 2 === 0;
      this.panel('Drawing', [west ? -0.685 : 0.685, 1.2 + ((i * 37) % 10) / 16, 1.5 + i * 1.15], [0.3, 0.22], west ? [1, 0, 0] : [-1, 0, 0], fromCanvas(stickFamily(i)));
    }
    this.tv.static();
  }
}
