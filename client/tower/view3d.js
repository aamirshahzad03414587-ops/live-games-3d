// Mira's Haunted Tower, 3D view (Three.js), iPhone Safari first:
// - one room at a time (two while climbing): procedural canvas textures, instanced props, no real-time shadows
// - one flickering point light (the candles), hemisphere fill, fog that thickens as the lantern oil runs low
// - rigged, animated CC0 KayKit adventurers carrying lanterns (pooled actors, shared clips), spectral copies for the
//   fallen, KayKit skeleton wraiths / boss, KayKit Dungeon + Halloween props (instanced per room), a billboard Mystic Mira
// - fixed pools for particles / falling things; every geometry, material and texture is disposed with its room
import { DirectionalLight,
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, PointLight, AmbientLight,
  Mesh, InstancedMesh, Points, Group, BufferGeometry, BufferAttribute, CylinderGeometry, CircleGeometry, SphereGeometry,
  CapsuleGeometry, BoxGeometry, PlaneGeometry, RingGeometry, TorusGeometry, ConeGeometry, LatheGeometry,
  MeshToonMaterial, MeshBasicMaterial, ShaderMaterial, CanvasTexture, DataTexture, RedFormat, NearestFilter, TextureLoader,
  AdditiveBlending, NormalBlending, BackSide, DoubleSide, Matrix4, Vector2, Vector3, Quaternion, Euler, Object3D, SRGBColorSpace,
  ACESFilmicToneMapping,
} from 'three';
import { THEMES, BOSS_THEME, GATE_THEME, FH, DOOR_Z, doorX, STAIR } from '../../public/shared/tower-data.js';
import { TFLAG } from '../../public/shared/tower-sim.js';
import { loadKit, tickActor } from '../shared/kaykit.js';
import { loadMonsters } from '../shared/monsters.js';
import { loadEnv } from '../shared/envkit.js';

const HEROES = ['Knight', 'Barbarian', 'Mage', 'Rogue', 'Rogue_Hooded'];
const CSCALE = 0.86;   // climbers ~1.5 m next to 2.8 m dungeon doorways

const TAU = Math.PI * 2;
const SKIN = [0xffd9b8, 0xf1c08f, 0xd9a066, 0xa86b45, 0x7a4a2c, 0xffe3cf];
const KIND_COL = { treasure: 0xffc23a, trap: 0xff3344, monster: 0x5dff7a, riddle: 0xb07cff };
const themeOf = (i) => (i === -2 ? BOSS_THEME : i === -1 || i === undefined || i < -2 ? GATE_THEME : THEMES[i] || GATE_THEME);
const RW = 10.2;   // room radius

export function createTowerView(canvas, opts = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: !!opts.aa, alpha: false, depth: true, stencil: false, powerPreference: 'default', preserveDrawingBuffer: !!opts.preserve, failIfMajorPerformanceCaveat: false });
  if (!renderer.getContext()) throw new Error('no webgl');
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.2;
  renderer.shadowMap.enabled = false;

  const scene = new Scene();
  scene.background = new Color(0x120a20);
  scene.fog = new Fog(0x1a1030, 14, 42);
  const camera = new PerspectiveCamera(62, 9 / 16, 0.4, 120);
  const global = [];
  const keep = (x) => { global.push(x); return x; };

  // ------------------------------------------------------------------ light
  const hemi = new HemisphereLight(0xb9a6ff, 0x3a2030, 1.15); scene.add(hemi);
  const amb = new AmbientLight(0x6a5a8a, 0.35); scene.add(amb);
  const candle = new PointLight(0xffb36b, 30, 26, 1.6); scene.add(candle);
  // one soft key light from the camera side so the climbers read clearly in the gloom (follows the current floor)
  const key = new DirectionalLight(0xffd9b0, 1.1); key.position.set(3, 12, 14); scene.add(key); scene.add(key.target);
  const ramp = keep(new DataTexture(new Uint8Array([80, 165, 255]), 3, 1, RedFormat)); ramp.minFilter = ramp.magFilter = NearestFilter; ramp.needsUpdate = true;
  const toonG = (color, extra = {}) => keep(new MeshToonMaterial({ color, gradientMap: ramp, ...extra }));

  // ------------------------------------------------------------------ CC0 KayKit models (stream in; rooms are rebuilt with props once loaded)
  let kit = null, env = null, mons = null, disposed = false, loadErr = null;
  const ready = Promise.all([loadEnv(opts.envUrl || '/models/env-tower.glb'), loadKit({ names: HEROES.concat(['Skeleton_Mage', 'Skeleton_Warrior']) }), loadMonsters({ names: ['Ghost_Skull', 'Demon', 'Demon2'] })])
    .then(([e, k, m]) => {
      if (disposed) { e.dispose(); k.dispose(); m.dispose(); return; }
      env = e; kit = k; mons = m;
      for (const r of rooms.values()) disposeRoom(r); rooms.clear();
      upgradeModels();
    }).catch((err) => { loadErr = err; throw err; });
  ready.catch(() => {});

  // ------------------------------------------------------------------ procedural textures
  function canvasTex(w, h, draw, list = global, { mip = true, repeat = null } = {}) {
    const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
    const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.generateMipmaps = mip; if (!mip) t.minFilter = 1006; t.anisotropy = 2;
    if (repeat) { t.wrapS = t.wrapT = 1000; t.repeat.set(repeat[0], repeat[1]); }
    list.push(t); return t;
  }
  let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  const brickTex = canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = '#5a5262'; g.fillRect(0, 0, W, H);
    const rows = 8;
    for (let r = 0; r < rows; r++) {
      const h = H / rows, off = (r % 2) * 0.5;
      for (let c = -1; c < 5; c++) {
        const w = W / 4, x = (c + off) * w, y = r * h;
        g.fillStyle = `hsl(${250 + rnd() * 30}, ${8 + rnd() * 8}%, ${52 + rnd() * 22}%)`; g.fillRect(x + 3, y + 3, w - 6, h - 6);
        g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(x + 3, y + h - 9, w - 6, 6);
        for (let k = 0; k < 6; k++) { g.fillStyle = `rgba(0,0,0,${rnd() * 0.12})`; g.fillRect(x + rnd() * w, y + rnd() * h, 6 + rnd() * 10, 3 + rnd() * 5); }
      }
    }
  }, global, { repeat: [5, 1.6] });
  const softTex = canvasTex(64, 64, (g, S) => { const rg = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2); rg.addColorStop(0, 'rgba(0,0,0,0.6)'); rg.addColorStop(0.6, 'rgba(0,0,0,0.28)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = rg; g.fillRect(0, 0, S, S); }, global, { mip: false });
  const doorTex = canvasTex(128, 256, (g, W, H) => {
    g.fillStyle = '#4a2a1a'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 4; i++) { g.fillStyle = `hsl(22, 45%, ${22 + rnd() * 10}%)`; g.fillRect(i * 32 + 2, 0, 28, H); g.fillStyle = 'rgba(0,0,0,0.25)'; for (let k = 0; k < 8; k++) g.fillRect(i * 32 + 4 + rnd() * 22, rnd() * H, 2, 20 + rnd() * 40); }
    for (const y of [40, 210]) { g.fillStyle = '#2a2a30'; g.fillRect(0, y, W, 14); g.fillStyle = '#6a6a78'; for (let x = 8; x < W; x += 24) { g.beginPath(); g.arc(x, y + 7, 3, 0, TAU); g.fill(); } }
    g.strokeStyle = '#c9a24a'; g.lineWidth = 5; g.beginPath(); g.arc(W * 0.78, H * 0.55, 10, 0, TAU); g.stroke();
  });
  const digitTex = [1, 2, 3].map((d) => canvasTex(128, 128, (g) => {
    const rg = g.createRadialGradient(64, 64, 10, 64, 64, 62); rg.addColorStop(0, '#fff3c4'); rg.addColorStop(0.75, '#f0b43c'); rg.addColorStop(1, '#8a4a10');
    g.fillStyle = rg; g.beginPath(); g.arc(64, 64, 60, 0, TAU); g.fill();
    g.lineWidth = 6; g.strokeStyle = '#5a2a00'; g.stroke();
    g.font = '900 86px -apple-system, Arial Black, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#3a1300'; g.fillText(String(d), 64, 70);
  }));
  const webTex = canvasTex(128, 128, (g, W) => {
    g.strokeStyle = 'rgba(255,255,255,0.75)'; g.lineWidth = 1.5;
    for (let a = 0; a < 7; a++) { const an = (a / 6) * (Math.PI / 2); g.beginPath(); g.moveTo(0, 0); g.lineTo(Math.cos(an) * W * 1.4, Math.sin(an) * W * 1.4); g.stroke(); }
    for (let r = 14; r < W * 1.3; r += 16) { g.beginPath(); for (let a = 0; a <= 6; a++) { const an = (a / 6) * (Math.PI / 2); const rr = r * (0.92 + (a % 2) * 0.08); if (a) g.lineTo(Math.cos(an) * rr, Math.sin(an) * rr); else g.moveTo(Math.cos(an) * rr, Math.sin(an) * rr); } g.stroke(); }
  });
  const shelfTex = canvasTex(128, 128, (g, W, H) => {
    g.fillStyle = '#3a2214'; g.fillRect(0, 0, W, H);
    for (let r = 0; r < 4; r++) { let x = 4; const y = r * 32; g.fillStyle = '#24140a'; g.fillRect(0, y + 28, W, 4); while (x < W - 6) { const w = 5 + rnd() * 8, h = 18 + rnd() * 8; g.fillStyle = `hsl(${rnd() * 360}, 45%, ${28 + rnd() * 22}%)`; g.fillRect(x, y + 28 - h, w, h); g.fillStyle = 'rgba(255,220,140,0.35)'; g.fillRect(x, y + 28 - h + 3, w, 2); x += w + 1; } }
  });
  const clockTex = canvasTex(256, 256, (g, W) => {
    const c = W / 2; g.fillStyle = '#f3e3bc'; g.beginPath(); g.arc(c, c, c - 6, 0, TAU); g.fill(); g.lineWidth = 12; g.strokeStyle = '#8a5a1a'; g.stroke();
    g.fillStyle = '#3a2410'; g.font = 'bold 30px Georgia, serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'].forEach((s, i) => { const a = (i / 12) * TAU - Math.PI / 2; g.fillText(s, c + Math.cos(a) * (c - 34), c + Math.sin(a) * (c - 34)); });
  });
  const mirrorTex = canvasTex(64, 128, (g, W, H) => { const lg = g.createLinearGradient(0, 0, W, H); lg.addColorStop(0, '#b9c8ff'); lg.addColorStop(0.45, '#3a3870'); lg.addColorStop(0.55, '#d8e0ff'); lg.addColorStop(1, '#2a2450'); g.fillStyle = lg; g.fillRect(0, 0, W, H); });
  mirrorTex.wrapT = 1000;
  const floorTexFor = (id, list) => canvasTex(256, 256, (g, W, H) => {
    const T = id === 'belfry' ? BOSS_THEME : id === 'gate' ? GATE_THEME : THEMES.find((t) => t.id === id) || GATE_THEME;
    const base = new Color(T.floor);
    const hex = (c, k) => '#' + c.clone().multiplyScalar(k).getHexString();
    g.fillStyle = hex(base, 1); g.fillRect(0, 0, W, H);
    if (id === 'library' || id === 'attic' || id === 'gate') {
      for (let i = 0; i < 8; i++) { g.fillStyle = hex(base, 0.85 + rnd() * 0.3); g.fillRect(i * 32 + 1, 0, 30, H); for (let k = 0; k < 2; k++) { g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(i * 32 + 1, rnd() * H, 30, 2); } for (let k = 0; k < 10; k++) { g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(i * 32 + 3 + rnd() * 24, rnd() * H, 1.5, 14 + rnd() * 30); } }
      if (id !== 'attic') { g.fillStyle = 'rgba(120,20,40,0.55)'; g.fillRect(W * 0.32, 0, W * 0.36, H); g.fillStyle = 'rgba(255,200,90,0.5)'; g.fillRect(W * 0.32, 0, 4, H); g.fillRect(W * 0.68 - 4, 0, 4, H); }
    } else if (id === 'mirror' || id === 'ballroom') {
      for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { g.fillStyle = (x + y) % 2 ? hex(base, 1.25) : hex(base, 0.45); g.fillRect(x * 32, y * 32, 32, 32); }
    } else if (id === 'clock') {
      for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { g.fillStyle = hex(base, 0.8 + rnd() * 0.4); g.fillRect(x * 64 + 2, y * 64 + 2, 60, 60); }
      g.strokeStyle = 'rgba(255,210,120,0.6)'; g.lineWidth = 3; for (const r of [40, 80, 118]) { g.beginPath(); g.arc(W / 2, H / 2, r, 0, TAU); g.stroke(); }
    } else {
      for (let y = 0; y < 6; y++) for (let x = 0; x < 6; x++) { g.fillStyle = hex(base, 0.7 + rnd() * 0.45); g.fillRect(x * 43 + 2 + (y % 2) * 20, y * 43 + 2, 39, 39); }
      if (id === 'lab') { g.strokeStyle = 'rgba(140,255,170,0.5)'; g.lineWidth = 3; g.beginPath(); g.arc(W / 2, H / 2, 70, 0, TAU); g.stroke(); for (let k = 0; k < 6; k++) { const a = (k / 6) * TAU; g.beginPath(); g.moveTo(W / 2, H / 2); g.lineTo(W / 2 + Math.cos(a) * 70, H / 2 + Math.sin(a) * 70); g.stroke(); } }
      if (id === 'belfry' || id === 'crypt') { g.strokeStyle = 'rgba(190,150,255,0.55)'; g.lineWidth = 4; g.beginPath(); for (let k = 0; k <= 5; k++) { const a = (k * 2 / 5) * TAU - Math.PI / 2; g.lineTo(W / 2 + Math.cos(a) * 90, H / 2 + Math.sin(a) * 90); } g.stroke(); g.beginPath(); g.arc(W / 2, H / 2, 98, 0, TAU); g.stroke(); }
    }
    const vg = g.createRadialGradient(W / 2, H / 2, W * 0.2, W / 2, H / 2, W * 0.7); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.45)'); g.fillStyle = vg; g.fillRect(0, 0, W, H);
  }, list);

  // ------------------------------------------------------------------ shared geometry
  const G = {
    box: keep(new BoxGeometry(1, 1, 1)), cyl: keep(new CylinderGeometry(0.5, 0.5, 1, 10)), cyl6: keep(new CylinderGeometry(0.5, 0.5, 1, 6)), sph: keep(new SphereGeometry(0.5, 12, 8)),
    plane: keep(new PlaneGeometry(1, 1)), cone: keep(new ConeGeometry(0.5, 1, 6)), torus: keep(new TorusGeometry(1, 0.08, 6, 24)),
    floor: keep(new CircleGeometry(RW, 8).rotateX(-Math.PI / 2).rotateY(Math.PI / 8)),
    wall: keep(new CylinderGeometry(RW, RW, FH, 8, 1, true).rotateY(Math.PI / 8).translate(0, FH / 2, 0)),
    step: keep(new BoxGeometry(1.5, 0.22, 0.7)),
    gear: keep(new CylinderGeometry(1, 1, 0.25, 12)),
    ghost: keep(new LatheGeometry([[0.0, 0.0], [0.44, 0.02], [0.47, 0.3], [0.43, 0.62], [0.35, 0.86], [0.2, 1.02], [0.0, 1.08]].map(([x, y]) => new Vector2(x, y)), 12)),
    bell: keep(new LatheGeometry([[0.05, 1.6], [0.45, 1.55], [0.6, 1.2], [0.7, 0.6], [0.95, 0.15], [1.05, 0.0], [0.0, 0.0]].map(([x, y]) => new Vector2(x, y)), 14)),
  };
  // wavy ghost skirt
  { const p = G.ghost.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y < 0.05) { const a = Math.atan2(p.getZ(i), p.getX(i)); p.setY(i, y - 0.08 - 0.08 * Math.sin(a * 6)); } } G.ghost.computeVertexNormals(); }

  // ------------------------------------------------------------------ rooms (built per floor, disposed when left behind)
  const rooms = new Map();   // floor index -> room
  const M = new Matrix4(), L2 = new Matrix4(), Q = new Quaternion(), E = new Euler(), V = new Vector3(), S = new Vector3(), ROOT = new Matrix4();
  function buildRoom(fi, th, nd) {
    const T = themeOf(th), id = T.id, list = [], grp = new Group();
    const mat = (o) => { const m = new MeshToonMaterial({ gradientMap: ramp, ...o }); list.push(m); return m; };
    const basic = (o) => { const m = new MeshBasicMaterial(o); list.push(m); return m; };
    const add = (m) => { grp.add(m); return m; };
    const inst = (geo, m, n) => add(new InstancedMesh(geo, m, n));
    const put = (im, i, x, y, z, sx, sy, sz, ry = 0, rx = 0, rz = 0) => { Q.setFromEuler(E.set(rx, ry, rz)); im.setMatrixAt(i, M.compose(V.set(x, y, z), Q, S.set(sx, sy, sz))); };
    grp.position.y = fi * FH;
    add(new Mesh(G.floor, mat({ map: floorTexFor(id, list), side: DoubleSide })));
    add(new Mesh(G.wall, mat({ map: brickTex, color: T.wall, side: BackSide })));
    const pil = inst(G.box, mat({ color: new Color(T.wall).multiplyScalar(0.7) }), 8);
    for (let i = 0; i < 8; i++) { const a = (i / 8) * TAU; if (Math.sin(a) > 0.3) { put(pil, i, 0, -50, 0, 0.01, 0.01, 0.01, 0); continue; } put(pil, i, Math.cos(a) * (RW - 0.3), FH / 2, Math.sin(a) * (RW - 0.3), 0.9, FH, 0.9, -a); }
    const trim = add(new Mesh(G.torus, mat({ color: 0x8a6a3a, emissive: 0x2a1a08 }))); trim.rotation.x = Math.PI / 2; trim.scale.set(RW - 0.4, RW - 0.4, 2); trim.position.y = 0.05;
    // spiral stairs up to the next floor
    const steps = inst(G.step, mat({ color: 0x6a6070 }), 16);
    for (let i = 0; i < 16; i++) { const s = (i + 0.5) / 16, a = Math.PI - s * TAU; put(steps, i, STAIR.x + Math.cos(a) * STAIR.r, s * FH - 0.1, STAIR.z + Math.sin(a) * STAIR.r, 1, 1, 1, -a); }
    const post = add(new Mesh(G.cyl, mat({ color: 0x4a4050 }))); post.position.set(STAIR.x, FH / 2, STAIR.z); post.scale.set(0.5, FH, 0.5);
    // candles (flames are glow points, drawn with the halos)
    const flames = [], cps = [];
    for (let i = 0; i < 10; i++) { const a = -Math.PI * 0.95 + (i / 9) * Math.PI * 1.9 + Math.PI / 2, r = RW - 1.2, x = Math.cos(a) * r, z = Math.sin(a) * r; if (Math.hypot(x - STAIR.x, z - STAIR.z) < 2.6 || z > 3) continue; cps.push([x, z, 0.5 + (i % 3) * 0.35]); }
    if (env) {
      const lit = [], tri = [];
      cps.forEach(([x, z, h], i) => { if (i % 3 === 1) { tri.push({ x, z, ry: rnd() * TAU, s: 1.1 }); flames.push([x, 0.95, z]); } else { lit.push({ x, z, ry: rnd() * TAU, s: 0.9 + h * 0.4 }); flames.push([x, (0.9 + h * 0.4) * 1.0, z]); } });
      for (const [n, it] of [['candle_lit', lit], ['candle_triple', tri]]) { const m = env.instanced(n, it); if (m) add(m); }
    } else {
      const cm = inst(G.cyl, mat({ color: 0xf3ead2, emissive: 0x3a2a10 }), cps.length);
      const st = inst(G.cyl6, mat({ color: 0x6a4a2a }), cps.length);
      cps.forEach(([x, z, h], i) => { put(cm, i, x, h / 2 + 0.6, z, 0.22, h, 0.22); put(st, i, x, 0.3, z, 0.5, 0.6, 0.5); flames.push([x, h + 0.75, z]); });
    }
    const anim = [];
    const r = { fi, th, id, grp, list, doors: [], flames, anim, nd, extra: {} };
    // doors: frames, dark doorway, coloured glow, hinged panel, number plaque
    if (nd) {
      const xs = doorX(nd);
      // KayKit dungeon doorways (stone wall + arch) when loaded, else simple frames
      const DH = env ? 2.8 : 4.0, DW = 2.0;
      if (env) { const f = env.instanced('wall_doorway', xs.map((x) => ({ x, y: 0, z: DOOR_Z - 0.1, s: 1 }))); if (f) add(f); }
      else { const frame = inst(G.box, mat({ color: 0x3a3040 }), nd * 3); xs.forEach((x, i) => { put(frame, i * 3, x - 1.2, 2.0, DOOR_Z, 0.45, 4.2, 0.7); put(frame, i * 3 + 1, x + 1.2, 2.0, DOOR_Z, 0.45, 4.2, 0.7); put(frame, i * 3 + 2, x, 4.2, DOOR_Z, 2.9, 0.55, 0.75); }); }
      xs.forEach((x, i) => {
        const dark = add(new Mesh(G.plane, basic({ color: 0x050208 }))); dark.position.set(x, DH / 2, DOOR_Z - 0.12); dark.scale.set(DW, DH, 1);
        const glow = add(new Mesh(G.plane, basic({ color: 0x000000, transparent: true, blending: AdditiveBlending, depthWrite: false }))); glow.position.set(x, DH / 2, DOOR_Z - 0.08); glow.scale.set(DW, DH, 1);
        const pivot = add(new Object3D()); pivot.position.set(x - 0.98, 0, DOOR_Z + 0.08);
        if (env && env.has('wall_doorway_door')) { const panel = new Mesh(env.geos.get('wall_doorway_door'), env.matOf('wall_doorway_door')); panel.position.set(1.0, 0, -0.1); pivot.add(panel); }
        else { const panel = new Mesh(G.box, mat({ map: doorTex })); panel.scale.set(1.95, 3.95, 0.16); panel.position.set(0.975, 1.98, 0); pivot.add(panel); }
        // the door number is the one piece of writing kept on screen (viewers vote by typing it)
        const plaque = add(new Mesh(G.plane, basic({ map: digitTex[i], transparent: true }))); plaque.position.set(x, DH + 1.35, DOOR_Z + 0.42); plaque.scale.set(1.25, 1.25, 1);
        r.doors.push({ x, pivot, glow, plaque, open: 0, top: DH + 2.2 });
      });
    }
    // ---------- theme props
    const side = [[-8.2, -1.5, Math.PI / 2], [-7.2, 3.6, Math.PI / 2 + 0.5], [8.4, 3.2, -Math.PI / 2 - 0.4], [-6.6, -5.6, Math.PI / 4]];
    if (id === 'library' || id === 'gate') {
      const sh = inst(G.box, mat({ map: shelfTex }), 4);
      side.forEach(([x, z, ry], i) => put(sh, i, x, 2.2, z, 2.6, 4.4, 0.9, ry));
      if (id === 'library') {
        const books = inst(G.box, mat({ color: 0xffffff }), 10), bc = new Color();
        for (let i = 0; i < 10; i++) books.setColorAt(i, bc.setHSL(rnd(), 0.6, 0.45));
        anim.push((t) => { for (let i = 0; i < 10; i++) { const a = t * 0.3 + i * 0.63; put(books, i, Math.cos(a) * (3 + (i % 3)), 4.6 + Math.sin(t * 1.3 + i) * 0.5, -1.5 + Math.sin(a) * 2.5, 0.5, 0.12, 0.38, t * 0.8 + i, Math.sin(t + i) * 0.4); } books.instanceMatrix.needsUpdate = true; });
      } else { const ban = add(new Mesh(G.plane, basic({ color: 0x6a1a4a, side: DoubleSide }))); ban.position.set(0, 5.6, DOOR_Z + 0.5); ban.scale.set(3, 1.6, 1); }
    } else if (id === 'crypt') {
      const cof = inst(G.cyl6, mat({ color: 0x4a3a30 }), 3);
      [[-7.6, -1, 0.3], [-6.8, 3.2, -0.4], [8.1, 3.8, 0.5]].forEach(([x, z, ry], i) => put(cof, i, x, 0.45, z, 1.3, 2.5, 0.8, ry, Math.PI / 2));
      const sk = inst(G.sph, mat({ color: 0xece2cc }), 9);
      for (let i = 0; i < 9; i++) { const a = rnd() * TAU, rr = 7 + rnd() * 1.6; put(sk, i, Math.cos(a) * rr, 0.25, Math.abs(Math.sin(a)) * rr * 0.8 - 2, 0.5, 0.45, 0.5); }
      const tomb = inst(G.box, mat({ color: 0x5a5a66 }), 3);
      [[-5.6, -5.8], [3.2, -5.4], [-8.2, 1.6]].forEach(([x, z], i) => put(tomb, i, x, 0.7, z, 1.0, 1.4, 0.3, rnd() * 0.3));
    } else if (id === 'mirror') {
      const fr = inst(G.box, mat({ color: 0xc9a24a, emissive: 0x3a2a00 }), 4), mi = inst(G.plane, basic({ map: mirrorTex }), 4);
      [[-8.6, -2.5, Math.PI / 2], [-8.0, 2.4, Math.PI / 2 + 0.3], [8.8, 2.6, -Math.PI / 2 - 0.3], [-6.4, -6.2, Math.PI / 4]].forEach(([x, z, ry], i) => { put(fr, i, x, 2.6, z, 1.7, 4.0, 0.2, ry); put(mi, i, x + Math.sin(ry) * 0.13, 2.6, z + Math.cos(ry) * 0.13, 1.4, 3.6, 1, ry); });
      anim.push((t) => { mirrorTex.offset.y = (t * 0.05) % 1; });
    } else if (id === 'clock') {
      const face = add(new Mesh(G.plane, basic({ map: clockTex, transparent: true }))); face.position.set(-8.5, 4.4, -1.2); face.rotation.y = Math.PI / 2; face.scale.set(4.2, 4.2, 1);
      const hands = inst(G.box, mat({ color: 0x2a1a0a }), 2), gears = inst(G.gear, mat({ color: 0xc08a3a, emissive: 0x2a1a00 }), 5);
      const gp = [[-7.6, 1.2, 3.6, 1.2], [-6.6, 6.2, -5.5, 1.6], [8.3, 5.4, 2.4, 1.4], [8.6, 1.5, 4.8, 0.9], [-8.4, 7.0, 2.4, 1.0]];
      anim.push((t) => {
        const hA = t * 0.08, mA = t * 1.0;
        put(hands, 0, -8.42, 4.4 + Math.cos(hA) * 0.6, -1.2 - Math.sin(hA) * 0.6, 0.05, 1.2, 0.14, 0, hA);
        put(hands, 1, -8.40, 4.4 + Math.cos(mA) * 0.85, -1.2 - Math.sin(mA) * 0.85, 0.05, 1.7, 0.09, 0, mA);
        hands.instanceMatrix.needsUpdate = true;
        gp.forEach(([x, y, z, s], i) => put(gears, i, x, y, z, s, 1, s, Math.atan2(-x, -z), Math.PI / 2, (i % 2 ? -1 : 1) * t * 0.7 / s));
        gears.instanceMatrix.needsUpdate = true;
      });
    } else if (id === 'attic') {
      const beams = inst(G.box, mat({ color: 0x4a3020 }), 5);
      for (let i = 0; i < 5; i++) put(beams, i, 0, FH - 1.2, -6 + i * 3, RW * 2, 0.5, 0.5);
      const crates = inst(G.box, mat({ color: 0x7a5a30 }), 6);
      [[-7.8, 0.6, -2.6, 1.2], [-7.4, 0.5, 2.2, 1.0], [-7.6, 1.6, -2.4, 0.8], [8.2, 0.6, 3.2, 1.2], [-5.5, 0.5, -6.0, 1.0], [8.4, 1.6, 3.4, 0.8]].forEach(([x, y, z, s], i) => put(crates, i, x, y, z, s, s, s, rnd()));
      const webs = inst(G.plane, basic({ map: webTex, transparent: true, depthWrite: false, side: DoubleSide, opacity: 0.8 }), 4);
      put(webs, 0, -6.8, FH - 2.2, -6.8, 4, 4, 1, Math.PI / 4); put(webs, 1, 7.2, FH - 2.2, -6.4, 4, 4, 1, -Math.PI / 4, 0, Math.PI / 2); put(webs, 2, -9.2, 3.5, 2.5, 3, 3, 1, Math.PI / 2); put(webs, 3, 4.6, 6.4, -7.4, 3, 3, 1, 0, 0, Math.PI);
      const sp = inst(G.sph, mat({ color: 0x1a1018 }), 3), thread = inst(G.cyl6, basic({ color: 0xdddddd }), 3);
      anim.push((t) => { for (let i = 0; i < 3; i++) { const x = [-3.5, 2.4, 5.4][i], z = [-3.2, -4.5, 0.5][i], y = 5.5 + Math.sin(t * 0.9 + i * 2) * 1.2; put(sp, i, x, y, z, 0.45, 0.4, 0.5); put(thread, i, x, (y + FH) / 2, z, 0.02, FH - y, 0.02); } sp.instanceMatrix.needsUpdate = true; thread.instanceMatrix.needsUpdate = true; });
    } else if (id === 'lab') {
      const tables = inst(G.box, mat({ color: 0x4a3424 }), 2);
      put(tables, 0, -7.6, 0.9, 0, 1.6, 0.25, 4.5); put(tables, 1, 7.9, 0.9, 3.6, 1.4, 0.25, 3.0, 0.3);
      const btl = inst(G.cyl, mat({ color: 0xffffff, emissive: 0x111111 }), 12), bc = new Color();
      for (let i = 0; i < 12; i++) { const L = i < 7; put(btl, i, L ? -7.6 + (rnd() - 0.5) : 7.9 + (rnd() - 0.5) * 0.8, 1.35, L ? -2 + i * 0.6 : 2.6 + (i - 7) * 0.55, 0.3, 0.5 + rnd() * 0.5, 0.3); btl.setColorAt(i, bc.setHSL([0.33, 0.8, 0.55, 0.15][i % 4], 0.9, 0.55)); }
      const caul = add(new Mesh(G.sph, mat({ color: 0x222228 }))); caul.position.set(-4.6, 0.8, -4.4); caul.scale.set(2.0, 1.6, 2.0);
      const brew = add(new Mesh(G.floor, basic({ color: 0x7dff6a }))); brew.position.set(-4.6, 1.45, -4.4); brew.scale.setScalar(0.09);
      r.extra.brew = [-4.6, 1.6, -4.4];
    } else if (id === 'ballroom') {
      const ch = inst(G.torus, mat({ color: 0xd9b04a, emissive: 0x4a3000 }), 2);
      put(ch, 0, -3, FH - 2, 0, 1.4, 1.4, 1.4, 0, Math.PI / 2); put(ch, 1, 3.5, FH - 2.4, -2.5, 1.1, 1.1, 1.1, 0, Math.PI / 2);
      r.extra.chand = [[-3, FH - 2, 0], [3.5, FH - 2.4, -2.5]];
      const dancers = inst(G.ghost, basic({ color: 0xc9b6ff, transparent: true, opacity: 0.32, depthWrite: false }), 4);
      anim.push((t) => { for (let i = 0; i < 4; i++) { const a = t * 0.35 + (i * TAU) / 4; put(dancers, i, Math.cos(a) * 6.8, 1.0 + Math.sin(t * 2 + i) * 0.25, Math.sin(a) * 6.8 - 0.5, 1.1, 1.6, 1.1, -a + Math.sin(t * 3 + i) * 0.4); } dancers.instanceMatrix.needsUpdate = true; });
    } else if (id === 'belfry') {
      const bell = add(new Mesh(G.bell, mat({ color: 0xc9953a, emissive: 0x3a2400, side: DoubleSide }))); bell.position.set(0, FH - 2.4, -8.5); bell.scale.setScalar(1.1); bell.visible = false;   // (the giant demon boss needs the headroom)
      anim.push((t) => { bell.rotation.z = Math.sin(t * 1.6) * 0.25; });
      const win = inst(G.plane, basic({ color: 0x9fb4ff }), 2);
      put(win, 0, -9.3, 5, -1.5, 2, 3.2, 1, Math.PI / 2); put(win, 1, 9.3, 5, 1.5, 2, 3.2, 1, -Math.PI / 2);
      r.extra.win = win;
    }
    if (id === 'attic' || id === 'mirror' || id === 'crypt') { const w = inst(G.plane, basic({ color: 0x6a7ab4 }), 1); put(w, 0, -9.3, 5.2, -3.0, 1.8, 2.8, 1, Math.PI / 2); r.extra.win = w; }
    if (env) kitProps(id, add, r);
    grp.traverse((o) => { if (o.isInstancedMesh) { o.instanceMatrix.needsUpdate = true; if (o.instanceColor) o.instanceColor.needsUpdate = true; o.frustumCulled = false; } });
    scene.add(grp);
    return r;
  }
  // KayKit dungeon / Halloween dressing per room (one InstancedMesh per prop type; geometry shared, never disposed per room)
  const L = Math.PI / 2;
  const PROPS = {
    all: [['torch_mounted', -9.55, -3.2, L, 1, 3.2], ['torch_mounted', -9.55, 2.4, L, 1, 3.2], ['torch_mounted', 9.6, 1.0, -L, 1, 3.2]],
    gate: [['banner_patternA_red', -6.7, DOOR_Z + 0.05, 0, 1, 2.6], ['banner_patternA_red', 6.7, DOOR_Z + 0.05, 0, 1, 2.6], ['lantern_standing', -7.4, 3.8, 0, 1.3], ['barrel_large', -8.0, -1.0, 0.3, 0.75], ['crates_stacked', 8.1, 4.4, 0.4, 0.8], ['pumpkin_orange_jackolantern', -6.6, 5.6, 0.6, 0.9]],
    library: [['table_medium_decorated_A', -7.2, 2.2, 0.2, 0.9], ['chair', -6.1, 3.4, 2.4, 0.9], ['lantern_standing', 7.9, 4.6, 0, 1.3], ['banner_thin_green', -3.4, DOOR_Z + 0.05, 0, 1, 2.8], ['banner_thin_green', 3.4, DOOR_Z + 0.05, 0, 1, 2.8], ['shelf_small_candles', -9.4, -0.5, L, 1, 2.4]],
    crypt: [['coffin_decorated', -7.6, -0.6, L, 0.95], ['coffin', -7.0, 3.6, L - 0.4, 0.95], ['coffin_lid', -7.0, 3.6, L - 0.4, 0.95], ['skull_candle', -5.8, -5.7, 0.4, 1], ['gravestone', 3.0, -5.8, 0, 1], ['gravestone', -3.1, -6.0, 0.15, 0.9], ['ribcage', 7.6, 5.2, 0.8, 1.2], ['bone_A', -3.8, 5.6, 1.1, 1.2], ['bone_A', 4.6, 6.0, 2.2, 1.2], ['shrine_candles', 8.3, 3.6, -L, 1]],
    mirror: [['candle_triple', -7.8, 0.4, 0, 1.2], ['candle_triple', 8.2, 4.4, 0, 1.2], ['banner_thin_green', -3.4, DOOR_Z + 0.05, 0, 1, 2.8], ['banner_thin_green', 3.4, DOOR_Z + 0.05, 0, 1, 2.8]],
    clock: [['crates_stacked', -7.9, 3.4, 0.3, 0.85], ['barrel_small_stack', 8.2, 4.4, -0.6, 0.85], ['keg_decorated', -7.2, -4.6, 0.8, 0.8], ['sword_shield', 9.6, 4.2, -L, 1, 3.0]],
    attic: [['box_stacked', -7.4, -4.4, 0.4, 0.75], ['barrel_large', 8.2, 4.6, 0, 0.8], ['pumpkin_orange_jackolantern', -6.2, 5.4, 0.6, 0.9], ['pumpkin_yellow_small', -5.4, 6.0, 0.2, 1.2], ['crates_stacked', 7.0, -5.8, -0.4, 0.8]],
    lab: [['keg_decorated', 8.0, 4.6, -0.5, 0.8], ['bottle_A_green', -7.6, -1.2, 0, 0.9, 1.0], ['bottle_B_brown', -7.4, 0.8, 0, 0.9, 1.0], ['shelf_small_candles', 9.6, 2.6, -L, 1, 2.4], ['skull', 7.2, 6.0, -0.8, 0.8]],
    ballroom: [['banner_triple_yellow', 0, DOOR_Z - 0.1, 0, 1, 4.4], ['bench_decorated', -7.8, 1.4, L, 1], ['bench_decorated', 8.2, 4.4, -L, 1], ['candle_triple', -7.6, -4.6, 0, 1.3]],
    belfry: [['banner_patternB_blue', -6.6, DOOR_Z + 0.05, 0, 1, 2.6], ['banner_patternB_blue', 6.6, DOOR_Z + 0.05, 0, 1, 2.6], ['skull_candle', -7.6, 2.6, 0.8, 1.1], ['lantern_standing', 7.8, 4.8, 0, 1.3], ['post_skull', -6.6, 5.4, 0.6, 1], ['post_skull_skull', -6.6, 5.4, 0.6, 1]],
  };
  function kitProps(id, add, r) {
    const by = {};
    for (const [n, x, z, ry, sc = 1, y = 0] of PROPS.all.concat(PROPS[id] || [])) (by[n] || (by[n] = [])).push({ x, y, z, ry, s: sc });
    for (const [n, items] of Object.entries(by)) { const m = env.instanced(n, items); if (m) { add(m); if (n === 'torch_mounted') for (const it of items) r.flames.push([it.x + Math.sin(it.ry) * 0.45, it.y + 0.75, it.z + Math.cos(it.ry) * 0.45]); } }
  }
  function disposeRoom(r) { scene.remove(r.grp); for (const x of r.list) x.dispose(); r.grp.traverse((o) => { if (o.isInstancedMesh) o.dispose(); }); }
  function ensureRoom(fi, th, nd) {
    let r = rooms.get(fi);
    if (r && (r.th !== th || r.nd !== nd)) { disposeRoom(r); rooms.delete(fi); r = null; }
    if (!r) { r = buildRoom(fi, th, nd); rooms.set(fi, r); }
    return r;
  }

  // ------------------------------------------------------------------ Mystic Mira (billboard of her v2 art) + a holo shimmer
  const miraMat = keep(new ShaderMaterial({
    transparent: true, depthWrite: false, fog: false, uniforms: { map: { value: null }, time: { value: 0 }, talk: { value: 0 }, op: { value: 0 } },
    vertexShader: 'varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec2 vU; uniform sampler2D map; uniform float time; uniform float talk; uniform float op;
      void main(){ vec4 c = texture2D(map, vU); if (c.a < 0.05) discard;
        float scan = 0.94 + 0.06 * sin(vU.y * 140.0 + time * 6.0);
        vec3 col = c.rgb * scan * (1.0 + talk * 0.22) + vec3(0.55,0.3,0.9) * (0.1 + talk * 0.14);
        gl_FragColor = vec4(col, c.a * op * (0.9 + 0.1 * sin(time * 2.0))); }`,
  }));
  const mira = new Mesh(G.plane, miraMat); mira.scale.set(2.55, 4.08, 1); mira.renderOrder = 7; mira.visible = false; scene.add(mira);
  new TextureLoader().load(opts.miraUrl || '/assets/mira-tower.png', (t) => { t.colorSpace = SRGBColorSpace; keep(t); miraMat.uniforms.map.value = t; mira.visible = true; });
  let miraTalk = 0, miraSpeaking = false, miraFade = 1;
  const miraPos = new Vector3(-6.1, 1.1, -4.9);

  // ------------------------------------------------------------------ climbers (instanced) + lanterns
  const CAP = opts.maxChars || 60;
  const part = (geo, m, n = 1) => { const im = new InstancedMesh(geo, m, CAP * n); im.frustumCulled = false; im.count = 0; const c = new Color(1, 1, 1); for (let i = 0; i < CAP * n; i++) im.setColorAt(i, c); scene.add(im); return im; };
  const P = {
    body: part(keep(new CapsuleGeometry(0.27, 0.24, 3, 10)), toonG(0xffffff)),
    head: part(keep(new SphereGeometry(0.36, 14, 10)), toonG(0xffffff)),
    hair: part(keep(new SphereGeometry(0.385, 14, 8, 0, TAU, 0, Math.PI * 0.52)), toonG(0xffffff)),
    eyes: part(keep(new SphereGeometry(0.058, 8, 6)), keep(new MeshBasicMaterial({ color: 0x1b1430 })), 2),
    hands: part(keep(new SphereGeometry(0.13, 10, 8)), toonG(0xffffff), 2),
    feet: part(keep(new SphereGeometry(0.12, 8, 6)), toonG(0x2a2238), 2),
    lantern: part(keep(new CylinderGeometry(0.11, 0.13, 0.26, 6)), toonG(0xffe7a0, { emissive: 0xffa020 })),
    shadow: part(keep(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2)), keep(new MeshBasicMaterial({ map: softTex, transparent: true, depthWrite: false }))),
  };
  P.shadow.renderOrder = 2;
  // ghosts of the fallen
  const GCAP = 16;
  const ghostM = new InstancedMesh(G.ghost, keep(new MeshBasicMaterial({ color: 0xd8e4ff, transparent: true, opacity: 0.5, depthWrite: false })), GCAP); ghostM.frustumCulled = false; ghostM.count = 0; ghostM.renderOrder = 6; scene.add(ghostM);
  const ghostEyes = new InstancedMesh(keep(new SphereGeometry(0.07, 6, 5)), keep(new MeshBasicMaterial({ color: 0x1a1030 })), GCAP * 2); ghostEyes.frustumCulled = false; ghostEyes.count = 0; scene.add(ghostEyes);
  // party shield dome
  const dome = new Mesh(keep(new SphereGeometry(1, 20, 12, 0, TAU, 0, Math.PI / 2)), keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { time: { value: 0 }, a: { value: 0 } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; varying float vY; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vY = position.y; gl_Position = projectionMatrix * mv; }',
    fragmentShader: 'varying vec3 vN; varying vec3 vV; varying float vY; uniform float time; uniform float a; void main(){ float f = 1.0 - abs(dot(vN, vV)); float band = 0.5 + 0.5*sin(vY*30.0 - time*3.0); gl_FragColor = vec4(vec3(0.35,0.75,1.0) * (pow(f,2.0)*0.9 + band*0.08) * a, 1.0); }',
  })));
  dome.visible = false; dome.renderOrder = 8; scene.add(dome);

  // ------------------------------------------------------------------ monsters (one at a time)
  const monster = new Group(); monster.visible = false; scene.add(monster);
  const monGhostMat = keep(new MeshToonMaterial({ color: 0xe8ecff, gradientMap: ramp, emissive: 0x2a2a60, transparent: true, opacity: 0.9 }));
  const darkMat = keep(new MeshBasicMaterial({ color: 0x120818 }));
  const eyeGlow = keep(new MeshBasicMaterial({ color: 0xff3a3a }));
  const hitMats = [];
  const M_ = {};
  { // ghost / boss
    const g = new Group(); const body = new Mesh(G.ghost, monGhostMat); body.scale.set(2.6, 2.8, 2.6); g.add(body);
    for (const s of [-1, 1]) { const e = new Mesh(G.sph, darkMat); e.position.set(s * 0.42, 2.15, 1.0); e.scale.set(0.42, 0.62, 0.3); g.add(e); const p = new Mesh(G.sph, eyeGlow); p.position.set(s * 0.42, 2.12, 1.15); p.scale.set(0.14, 0.18, 0.1); g.add(p); }
    const mouth = new Mesh(G.sph, darkMat); mouth.position.set(0, 1.55, 1.12); mouth.scale.set(0.5, 0.42, 0.2); g.add(mouth);
    for (const s of [-1, 1]) { const arm = new Mesh(G.ghost, monGhostMat); arm.scale.set(0.5, 1.2, 0.5); arm.position.set(s * 1.25, 1.1, 0.3); arm.rotation.z = s * 2.2; g.add(arm); }
    const crown = new Mesh(keep(new CylinderGeometry(0.62, 0.5, 0.5, 6, 1, true)), toonG(0xffd34d, { emissive: 0x6a4a00, side: DoubleSide })); crown.position.set(0, 3.15, 0); g.add(crown);
    g.userData = { mouth, crown };
    M_.ghost = g; monster.add(g);
  }
  const EYE_Y = Number(new URLSearchParams(location.search).get('eyeY')) || 2.55, EYE_Z = Number(new URLSearchParams(location.search).get('eyeZ')) || 2.2;
  // once the models stream in: the wraith is a horned skull ghost, the boss a trident demon lord (small crown between
  // the horns), the spider room a winged demon — CC0 Quaternius monsters restyled dark with glowing red eyes
  let wraith = null, bossA = null, demonA = null;
  function upgradeModels() {
    const g = M_.ghost;
    for (const c of [...g.children]) if (c !== g.userData.crown) c.visible = false;
    wraith = mons.actor('Ghost_Skull'); wraith.obj.scale.setScalar(wraith.unit * 3.4); g.add(wraith.obj);
    bossA = mons.actor('Demon'); bossA.obj.scale.setScalar(bossA.unit * 3.6); g.add(bossA.obj);
    g.userData.crown.scale.setScalar(0.3);
    const sp = M_.spider; for (const c of [...sp.children]) c.visible = false; sp.userData.legs = [];
    demonA = mons.actor('Demon2'); demonA.obj.scale.setScalar(demonA.unit * 3.3); demonA.obj.position.y = 0.9; sp.add(demonA.obj);
  }
  { // spider
    const g = new Group(); const mm = toonG(0x2a1a2a, { emissive: 0x100008 }); hitMats.push(mm);
    const ab = new Mesh(G.sph, mm); ab.scale.set(2.2, 1.7, 2.6); ab.position.set(0, 1.5, -0.9); g.add(ab);
    const hd = new Mesh(G.sph, mm); hd.scale.set(1.2, 1.0, 1.1); hd.position.set(0, 1.3, 0.8); g.add(hd);
    for (let i = 0; i < 6; i++) { const e = new Mesh(G.sph, eyeGlow); e.position.set((i % 3 - 1) * 0.28, 1.55 + Math.floor(i / 3) * 0.2, 1.3); e.scale.setScalar(0.14); g.add(e); }
    const mark = new Mesh(G.sph, toonG(0xff3a3a, { emissive: 0x6a0000 })); mark.scale.set(0.6, 0.6, 0.2); mark.position.set(0, 2.25, -1.4); mark.rotation.x = -0.9; g.add(mark);
    const legs = [];
    for (let i = 0; i < 8; i++) { const s = i < 4 ? -1 : 1, k = i % 4; const L = new Group(); L.position.set(s * 0.6, 1.4, 0.6 - k * 0.5); const a = new Mesh(G.cyl6, mm); a.scale.set(0.16, 1.6, 0.16); a.position.set(s * 0.6, 0.45, 0); a.rotation.z = -s * 1.0; L.add(a); const b = new Mesh(G.cyl6, mm); b.scale.set(0.12, 1.8, 0.12); b.position.set(s * 1.55, -0.35, 0); b.rotation.z = s * 0.5; L.add(b); L.rotation.y = s * (k - 1.5) * 0.35; g.add(L); legs.push(L); }
    g.userData = { legs };
    M_.spider = g; monster.add(g);
  }
  { // mimic chest
    const g = new Group(); const wood = toonG(0x7a3e1c), gold = toonG(0xe0b040, { emissive: 0x3a2400 }); hitMats.push(wood);
    const base = new Mesh(G.box, wood); base.scale.set(2.6, 1.3, 1.7); base.position.y = 0.65; g.add(base);
    const band = new Mesh(G.box, gold); band.scale.set(2.7, 0.2, 1.8); band.position.y = 1.2; g.add(band);
    const lidP = new Object3D(); lidP.position.set(0, 1.3, -0.85); g.add(lidP);
    const lid = new Mesh(G.box, wood); lid.scale.set(2.6, 0.6, 1.7); lid.position.set(0, 0.3, 0.85); lidP.add(lid);
    const teeth = new InstancedMesh(G.cone, toonG(0xfff6e0), 12); teeth.frustumCulled = false;
    for (let i = 0; i < 12; i++) { const top = i >= 6; Q.setFromEuler(E.set(top ? Math.PI : 0, 0, 0)); teeth.setMatrixAt(i, M.compose(V.set(-1.05 + (i % 6) * 0.42, top ? 1.15 : 1.45, 0.75), Q, S.set(0.22, 0.4, 0.22))); }
    g.add(teeth);
    const tongue = new Mesh(G.sph, toonG(0xff4a7a)); tongue.scale.set(0.7, 0.25, 1.4); tongue.position.set(0, 1.35, 0.6); g.add(tongue);
    const yel = keep(new MeshBasicMaterial({ color: 0xffe14a }));
    for (const s of [-1, 1]) { const e = new Mesh(G.sph, yel); e.position.set(s * 0.6, 0.65, 0.75); e.scale.setScalar(0.3); lidP.add(e); }
    g.userData = { lidP };
    M_.mimic = g; monster.add(g);
  }
  // treasure chest (gold)
  const chest = new Group(); chest.visible = false; scene.add(chest);
  { const wood = toonG(0x8a4a20), gold = toonG(0xffc23a, { emissive: 0x6a4000 }); const b = new Mesh(G.box, wood); b.scale.set(1.6, 0.9, 1.0); b.position.y = 0.45; chest.add(b); const band = new Mesh(G.box, gold); band.scale.set(1.68, 0.16, 1.08); band.position.y = 0.8; chest.add(band); const lp = new Object3D(); lp.position.set(0, 0.9, -0.5); chest.add(lp); const lid = new Mesh(G.box, wood); lid.scale.set(1.6, 0.36, 1.0); lid.position.set(0, 0.18, 0.5); lp.add(lid); const lb = new Mesh(G.box, gold); lb.scale.set(0.3, 0.4, 1.06); lb.position.set(0, 0.18, 0.5); lp.add(lb); const gl = new Mesh(G.box, keep(new MeshBasicMaterial({ color: 0xffe9a0 }))); gl.scale.set(1.4, 0.1, 0.8); gl.position.y = 0.86; chest.add(gl); chest.userData = { lp }; }
  // traps: falling things (books / webs / chandeliers), a pendulum blade, grasping hands
  const DROP = 24;
  const drops = new InstancedMesh(G.box, toonG(0xffffff), DROP); drops.frustumCulled = false; drops.count = 0; { const c = new Color(1, 1, 1); for (let i = 0; i < DROP; i++) drops.setColorAt(i, c); } scene.add(drops);
  const dropList = [];
  const blade = new Group(); blade.visible = false; scene.add(blade);
  { const rod = new Mesh(G.cyl6, toonG(0x8a7a6a)); rod.scale.set(0.12, 7, 0.12); rod.position.y = -3.5; blade.add(rod); const bl = new Mesh(keep(new CylinderGeometry(1.6, 1.6, 0.12, 16, 1, false, 0, Math.PI)), toonG(0xd8dde8, { emissive: 0x222233 })); bl.rotation.set(0, Math.PI / 2, Math.PI / 2); bl.position.y = -7; blade.add(bl); }
  const HANDS = 12;
  const hands = new InstancedMesh(keep(new ConeGeometry(0.22, 1.3, 5)), toonG(0xd8f0d0, { emissive: 0x204020 }), HANDS); hands.frustumCulled = false; hands.count = 0; scene.add(hands);
  const handList = [];
  // rings (shockwaves)
  const RINGS = 40;
  const ringMesh = new InstancedMesh(keep(new RingGeometry(0.86, 1, 36).rotateX(-Math.PI / 2)), keep(new MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide })), RINGS);
  ringMesh.frustumCulled = false; ringMesh.renderOrder = 4; { const c = new Color(0, 0, 0); for (let i = 0; i < RINGS; i++) ringMesh.setColorAt(i, c); } scene.add(ringMesh);
  const rings = [];

  // ------------------------------------------------------------------ particles (glow = additive "bloom", solid = smoke/confetti)
  function particleSystem(cap, additive) {
    const geo = keep(new BufferGeometry());
    const pos = new Float32Array(cap * 3), col = new Float32Array(cap * 4), size = new Float32Array(cap);
    geo.setAttribute('position', new BufferAttribute(pos, 3)); geo.setAttribute('col', new BufferAttribute(col, 4)); geo.setAttribute('size', new BufferAttribute(size, 1));
    const m = keep(new ShaderMaterial({
      transparent: true, depthWrite: false, blending: additive ? AdditiveBlending : NormalBlending, uniforms: { px: { value: 400 } },
      vertexShader: 'attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 180.0); gl_Position = projectionMatrix * mv; }',
      fragmentShader: additive
        ? 'varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }'
        : 'varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }',
    }));
    const pts = new Points(geo, m); pts.frustumCulled = false; scene.add(pts);
    return { geo, pos, col, size, mat: m, pts, list: [], cap };
  }
  const glow = particleSystem(opts.particles || 900, true);
  const solid = particleSystem(Math.round((opts.particles || 900) * 0.45), false);
  glow.pts.renderOrder = 9; solid.pts.renderOrder = 5;
  let partMult = 1;
  const tmpC = new Color();
  function emit(sys, n, x, y, z, o) {
    n = Math.max(1, Math.round(n * partMult));
    for (let i = 0; i < n && sys.list.length < sys.cap - 80; i++) {
      const a = Math.random() * TAU, el = (o.up ?? 0.5) + Math.random() * (o.spreadUp ?? 0.5), sp = (o.speed || 4) * (0.4 + Math.random() * 0.8);
      tmpC.set(o.colors ? o.colors[(Math.random() * o.colors.length) | 0] : o.color);
      sys.list.push({ x: x + (Math.random() - 0.5) * (o.jitter || 0), y: y + (Math.random() - 0.5) * (o.jy || 0), z: z + (Math.random() - 0.5) * (o.jitter || 0), vx: Math.cos(a) * sp * (1 - el * 0.6), vy: sp * el * (o.vyMul ?? 1), vz: Math.sin(a) * sp * (1 - el * 0.6),
        g: o.g ?? 9, drag: o.drag ?? 1.5, life: (o.life || 0.6) * (0.7 + Math.random() * 0.6), t: 0, s0: o.size || 0.3, s1: o.size1 ?? (o.size || 0.3) * 0.3, r: tmpC.r, gg: tmpC.g, b: tmpC.b, a: o.alpha ?? 1, conf: !!o.confetti, spin: Math.random() * TAU, floor: o.floorY ?? -1e9 });
    }
  }
  function updateParticles(sys, dt, halos) {
    const L = sys.list; let w = 0;
    for (let i = 0; i < L.length; i++) {
      const p = L[i]; p.t += dt; if (p.t >= p.life) continue;
      p.vy -= p.g * dt; const d = Math.exp(-p.drag * dt); p.vx *= d; p.vy *= d; p.vz *= d;
      if (p.conf) { p.spin += dt * 6; p.vx += Math.sin(p.spin) * dt * 2; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; if (p.y < p.floor + 0.05 && p.g > 0) { p.y = p.floor + 0.05; p.vy *= -0.3; p.vx *= 0.7; p.vz *= 0.7; }
      L[w++] = p;
    }
    L.length = w;
    let n = 0;
    const put = (x, y, z, r, g, b, a, s) => { sys.pos[n * 3] = x; sys.pos[n * 3 + 1] = y; sys.pos[n * 3 + 2] = z; sys.col[n * 4] = r; sys.col[n * 4 + 1] = g; sys.col[n * 4 + 2] = b; sys.col[n * 4 + 3] = a; sys.size[n] = s; n++; };
    if (halos) for (const h of halos) if (n < sys.cap - 1) put(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
    for (const p of L) { if (n >= sys.cap) break; const k = p.t / p.life; const fade = p.conf ? 1 : 1 - k * k; put(p.x, p.y, p.z, p.r, p.gg, p.b, p.conf ? -1 : p.a * fade, p.s0 + (p.s1 - p.s0) * k); }
    sys.geo.setDrawRange(0, n);
    for (const k of ['position', 'col', 'size']) { const at = sys.geo.attributes[k]; at.needsUpdate = true; at.clearUpdateRanges?.(); at.addUpdateRange?.(0, n * at.itemSize); }
  }
  // dust motes: positions computed on the GPU (no per-frame CPU work)
  const dustGeo = keep(new BufferGeometry());
  { const n = 150, p = new Float32Array(n * 3); for (let i = 0; i < n; i++) p.set([Math.random(), Math.random(), Math.random()], i * 3); dustGeo.setAttribute('position', new BufferAttribute(p, 3)); }
  const dust = new Points(dustGeo, keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { time: { value: 0 }, base: { value: 0 }, px: { value: 300 }, tint: { value: new Color(0xffd8a0) } },
    vertexShader: `uniform float time; uniform float base; uniform float px; varying float vA;
      void main(){ vec3 s = position; float t = time * (0.02 + s.x * 0.03); float fy = fract(s.y + t * 0.4);
        vec3 p = vec3((fract(s.x + sin(t + s.z * 6.0) * 0.05) - 0.5) * 18.0, base + fy * 8.5, (fract(s.z + cos(t * 0.7 + s.x * 5.0) * 0.05) - 0.5) * 16.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vA = (0.4 + 0.6 * (0.5 + 0.5 * sin(time * 1.5 + s.x * 40.0))) * smoothstep(0.0, 0.15, fy) * smoothstep(1.0, 0.8, fy);
        vA *= smoothstep(2.5, 7.0, -mv.z); gl_PointSize = min((0.07 + s.z * 0.1) * px / max(1.0, -mv.z), 14.0); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: 'uniform vec3 tint; varying float vA; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(tint * vA * max(0.0, 1.0-d) * 0.55, 1.0); }',
  })));
  dust.frustumCulled = false; dust.renderOrder = 3; scene.add(dust);

  // ------------------------------------------------------------------ per-frame state
  const vis = new Map(), ghostVis = new Map();
  const white = new Color(1, 1, 1), cA = new Color(), cB = new Color();
  let quality = { particles: 1, halos: true, maxChars: CAP };
  let time = 0, shake = 0, flashT = -9, lightning = -9, thunderAt = 0, curFloor = 0, baseY = 0, lastW = null;
  const camPos = new Vector3(0, 10, 20), camLook = new Vector3(0, 2.6, -2.4), tgtPos = new Vector3(), tgtLook = new Vector3();
  const cRed = new Color(0x2a0606);
  const fogCol = new Color(0x1a1030), fogTgt = new Color(), lightCol = new Color(0xffb36b), lightTgt = new Color();
  let monVis = { kind: '', t0: 0, hitT: -9, atkT: -9, dieT: -9, x: 0, z: -4 };
  let chestT = -9, chestX = 0, bladeT = -9;
  const drawn = [];   // label anchors for the HUD: { id, x, y, z, info, flags, ghost }
  const hashId = (n) => { n = (n ^ 61) ^ (n >>> 16); n = (n + (n << 3)) | 0; n ^= n >>> 4; n = Math.imul(n, 0x27d4eb2d); return (n ^ (n >>> 15)) >>> 0; };
  let frameNo = 0;
  const HV = new Vector3();
  function actorClimbers(list, now, dt, halos, fuel, w) {
    let n = 0, cx = 0, cz = 0, cn = 0;
    const lod = quality.animLod || 1, crowd = list.length > 24;
    const battle = w.phase === 'monster' || w.phase === 'boss';
    const happy = w.phase === 'treasure' || w.phase === 'victory';
    for (const m of list) {
      const s = vstate(m, now); s.seen = now; s.frame = frameNo;
      const sp = Math.hypot(m.x - s.x, m.z - s.z) / Math.max(dt, 1e-3);
      s.speed = (s.speed || 0) + (Math.min(sp, 10) - (s.speed || 0)) * Math.min(1, dt * 8);
      s.x = m.x; s.y = m.y; s.z = m.z;
      const info = m.info || {};
      if (!s.a) { s.model = s.model || HEROES[hashId(m.id) % HEROES.length]; s.a = kit.actor(s.model, m.flags & TFLAG.bot ? null : (info.color ?? null)); scene.add(s.a.obj); s.acc = 0; }
      const a = s.a, pa = Math.min(1, (now - s.spawn) / 0.35);
      const climbing = m.flags & 2048;
      a.obj.position.set(m.x, baseY + m.y, m.z); a.obj.rotation.set(0, m.face, 0); a.obj.scale.setScalar(CSCALE * (0.4 + 0.6 * pa));
      const base = climbing || s.speed > 2.4 ? 'run' : s.speed > 0.4 ? 'walk' : m.flags & TFLAG.cmd ? 'cheer' : happy ? 'cheer' : battle ? 'combat' : 'idle';
      a.play(base, now);
      if (now - s.hit < 0.05 && now >= a.until) a.play(s.model === 'Mage' ? 'cast' : s.model.startsWith('Rogue') ? 'shoot' : 'slash', now, { speed: 1.4 });
      s.acc += dt;
      const every = (crowd || Math.hypot(m.x, m.z - 2) > 7 ? 2 : 1) * lod;
      if ((frameNo + m.id) % every === 0) { tickActor(kit, a, s.acc, now); s.acc = 0; }
      // lantern swings from the left hand slot (last frame's bone pose is plenty)
      if (a.hand) { a.hand.getWorldPosition(HV); } else HV.set(m.x + 0.3, baseY + m.y + 0.5, m.z + 0.3);
      L2.compose(V.set(HV.x, HV.y - 0.28, HV.z), Q.setFromEuler(E.set(Math.sin(now * 2 + m.id) * 0.15, m.face, 0)), S.set(0.75, 0.75, 0.75)); P.lantern.setMatrixAt(n, L2);
      L2.compose(V.set(m.x, baseY + m.y + 0.02, m.z), Q.identity(), S.set(1.1, 1, 1.1)); P.shadow.setMatrixAt(n, L2);
      if (quality.halos || n < 16) halos.push([HV.x, HV.y - 0.3, HV.z, 1, 0.7, 0.3, (0.35 + 0.65 * fuel) * (m.flags & TFLAG.gift ? 1.7 : 1), 1.5 + 1.5 * fuel]);
      drawn.push({ id: m.id, x: m.x, y: baseY + m.y + 1.75 * CSCALE * pa + 0.2, z: m.z, info, flags: m.flags });
      if (m.y < 0.5) { cx += m.x; cz += m.z; cn++; }
      n++;
    }
    // members that left the drawn list (fell, over the cap) hand their actor back to the pool
    for (const s of vis.values()) if (s.a && s.frame !== frameNo) { kit.release(s.a); s.a = null; }
    return { n, cx, cz, cn };
  }
  function vstate(m, now) {
    let s = vis.get(m.id);
    if (!s) { s = { walk: Math.random() * 10, hit: -9, spawn: now, skin: SKIN[m.id % SKIN.length], x: m.x, y: m.y, z: m.z, seen: now }; vis.set(m.id, s); }
    return s;
  }
  const doorPos = (r, i) => (r && r.doors[i] ? r.doors[i].x : 0);

  function frame(w, dt, now) {
    lastW = w; time = now; frameNo++;
    const T = themeOf(w.th);
    curFloor = w.floor; baseY = curFloor * FH;
    // rooms: the current one (+ the one above while climbing); the one below lingers 2.5 s, the rest are disposed
    const cur = ensureRoom(curFloor, w.th, w.nd || 0);
    if (!cur.born) cur.born = now;
    let next = null;
    if (w.phase === 'climb' && w.nth > -9) next = ensureRoom(curFloor + (w.lift ? 2 : 1), w.nth, 0);
    for (const [fi, r] of rooms) if (r !== cur && r !== next && !(fi < curFloor && fi >= curFloor - 2 && now - cur.born < 2.5)) { disposeRoom(r); rooms.delete(fi); }
    // doors: open the chosen one, glow by contents / votes / prophecy
    const hidden = w.phase === 'vote' || w.phase === 'enter';
    for (let i = 0; i < cur.doors.length; i++) {
      const d = cur.doors[i];
      d.open += ((!hidden && w.ch === i ? 1.75 : 0) - d.open) * Math.min(1, dt * 5);
      d.pivot.rotation.y = -d.open;
      const k = w.kinds ? w.kinds[i] : '';
      let gcol = 0, gA = 0;
      if (k && !hidden && (w.ch === i || w.phase !== 'reveal')) { gcol = KIND_COL[k]; gA = w.ch === i ? 0.95 : 0.3; }
      else if (w.pr === i && w.phase === 'vote') { gcol = 0xb07cff; gA = 0.6 + 0.35 * Math.sin(now * 6); }
      else if (w.phase === 'vote' && w.vc) { const tot = w.vc.reduce((a, b) => a + b, 0) || 1; gcol = 0xffb36b; gA = 0.1 + 0.5 * (w.vc[i] || 0) / tot; }
      d.glow.material.color.setHex(gcol).multiplyScalar(gA);
      const pul = w.phase === 'vote' ? 1 + 0.07 * Math.sin(now * 5 + i * 2) : 1;
      d.plaque.scale.set(1.25 * pul, 1.25 * pul, 1);
    }
    for (const r of rooms.values()) for (const a of r.anim) a(now);
    // light + fog: thicker and darker as the lantern oil runs low; lightning in rooms with windows
    const fuel = Math.max(0, Math.min(100, w.fuel ?? 100)) / 100;
    fogTgt.setHex(T.fog).multiplyScalar(0.55 + 0.45 * fuel);
    if (w.phase === 'monster' || w.phase === 'boss') fogTgt.lerp(cRed, w.phase === 'boss' ? 0.55 : 0.4);
    fogCol.lerp(fogTgt, Math.min(1, dt * 1.5));
    scene.fog.color.copy(fogCol); scene.background.copy(fogCol).multiplyScalar(0.6);
    scene.fog.far = 26 + 20 * fuel; scene.fog.near = 7 + 7 * fuel;
    lightTgt.setHex(T.light); lightCol.lerp(lightTgt, Math.min(1, dt * 2));
    const flick = 0.82 + 0.1 * Math.sin(now * 13.1) + 0.06 * Math.sin(now * 7.3 + 1.7) + 0.05 * Math.sin(now * 23.7);
    candle.color.copy(lightCol); candle.intensity = (18 + 26 * fuel) * flick * (now - flashT < 0.15 ? 2.5 : 1);
    candle.position.set(0, baseY + 4.2, 1.5);
    key.position.set(3, baseY + 12, 14); key.target.position.set(0, baseY, 0); key.intensity = 0.55 + 0.6 * fuel;
    const bolt = now - lightning < 0.12 || (now - lightning > 0.22 && now - lightning < 0.3);
    hemi.intensity = 0.6 + 0.7 * fuel + (bolt ? 2.2 : 0);
    if (cur.extra.win && Math.random() < dt / 9) { lightning = now; thunderAt = now + 0.45; }
    for (const r of rooms.values()) if (r.extra.win) r.extra.win.material.color.setHex(bolt ? 0xffffff : 0x5a6aa4);

    // camera: steady shots per phase, a dolly up the spiral stairs while climbing
    const k = w.pd > 0 ? 1 - Math.max(0, Math.min(1, w.tl / w.pd)) : 1;
    if (w.phase === 'climb') {
      const lift = w.lift ? 2 : 1, e2 = Math.max(0, Math.min(1, (k - 0.15) / 0.8)), up = e2 * e2 * (3 - 2 * e2) * FH * lift;
      tgtPos.set(STAIR.x - 9.0 + Math.sin(e2 * Math.PI) * 2.6, baseY + 6.2 + up, 12.5 - Math.sin(e2 * Math.PI) * 3);
      tgtLook.set(STAIR.x - 1.2, baseY + 2.6 + up, STAIR.z);
    } else if (w.phase === 'reveal' && w.ch >= 0) {
      const dx = doorPos(cur, w.ch), e = k * k * (3 - 2 * k);
      tgtPos.set(dx * 0.5, baseY + 5.6, 12.5 - e * 3.2); tgtLook.set(dx * 0.85, baseY + 1.8, DOOR_Z);
    } else if ((w.phase === 'treasure' || w.phase === 'trap') && w.ch >= 0) {
      const dx = doorPos(cur, w.ch);
      tgtPos.set(dx * 0.35, baseY + 6.4, 13.8); tgtLook.set(dx * 0.6, baseY + 1.8, -4.2);
    } else if (w.phase === 'monster' || w.phase === 'boss') {
      const b = w.phase === 'boss';
      tgtPos.set(Math.sin(now * 0.25) * 1.4, baseY + (b ? 8.8 : 7.4), b ? 18.2 : 17.0); tgtLook.set(0, baseY + (b ? 3.9 : 2.7), -3);
    } else if (w.phase === 'end') {
      const a = now * 0.18; tgtPos.set(Math.sin(a) * 7, baseY + 4.4, 3 + Math.cos(a) * 7); tgtLook.set(0, baseY + 1.5, 2.4);
    } else if (w.phase === 'vote') {
      let lead = 0, mx = 0; (w.vc || []).forEach((v, i) => { if (v > mx) { mx = v; lead = i; } });
      const dx = mx ? doorPos(cur, lead) * 0.25 : 0;
      tgtPos.set(dx * 0.4, baseY + 7.6, 17.4); tgtLook.set(dx * 0.6, baseY + 2.4, -3.4);
    } else { const a = now * 0.12; tgtPos.set(Math.sin(a) * 1.6, baseY + 6.9 + Math.sin(a * 0.7) * 0.6, 17.0); tgtLook.set(0, baseY + 1.9, -2.2); }
    const ck = Math.min(1, dt * (w.phase === 'climb' ? 3.2 : 2.2));
    if (camPos.distanceTo(tgtPos) > 30) { camPos.copy(tgtPos); camLook.copy(tgtLook); }
    camPos.lerp(tgtPos, ck); camLook.lerp(tgtLook, ck);
    shake = Math.max(0, shake - dt * 2.2);
    const sx = (Math.random() - 0.5) * shake * 0.5, sy = (Math.random() - 0.5) * shake * 0.5;
    camera.position.set(camPos.x + sx + Math.sin(now * 0.4) * 0.15, camPos.y + sy + Math.sin(now * 0.55) * 0.08, camPos.z);
    camera.lookAt(camLook.x + sx, camLook.y + sy, camLook.z);

    // Mira floats beside the doors and faces the camera
    const mY = baseY + 1.0 + Math.sin(now * 1.3) * 0.18;
    if (w.phase === 'climb') miraPos.set(-4.6, camLook.y - 1.6, -3.6); else if (w.phase === 'monster' || w.phase === 'boss') miraPos.set(-5.0, mY + 1.2, 0.2); else if (['reveal', 'treasure', 'trap'].includes(w.phase)) miraPos.set(-6.4, mY + 2.4, -5.2); else miraPos.set(-4.7, mY + 0.9, -1.4);
    mira.position.lerp(miraPos, Math.min(1, dt * 3));
    mira.quaternion.copy(camera.quaternion);
    miraTalk += ((miraSpeaking ? 1 : 0) - miraTalk) * Math.min(1, dt * 6);
    miraFade = Math.min(1, miraFade + dt * 1.5);
    miraMat.uniforms.time.value = now; miraMat.uniforms.talk.value = miraTalk; miraMat.uniforms.op.value = miraFade;

    // glow halos: candle flames, lanterns, the cauldron, chandeliers, Mira's aura
    const halos = [];
    for (const r of [cur, next]) if (r) for (const f of r.flames) { const fl = 0.7 + 0.3 * Math.sin(now * (9 + f[0]) + f[2]); halos.push([f[0], r.fi * FH + f[1], f[2], 1, 0.62 * fl, 0.25 * fl, (0.5 + 0.5 * fuel) * fl, 1.5]); halos.push([f[0], r.fi * FH + f[1] - 0.05, f[2], 1, 0.9, 0.6, 1, 0.35]); }
    if (cur.extra.brew) { const b = cur.extra.brew; halos.push([b[0], baseY + b[1], b[2], 0.3, 1, 0.35, 0.7 + 0.2 * Math.sin(now * 4), 5]); if (Math.random() < dt * 6) emit(glow, 1, b[0] + (Math.random() - 0.5), baseY + 1.5, b[2] + (Math.random() - 0.5), { color: 0x7dff6a, up: 1, speed: 1.2, g: -1, life: 1.2, size: 0.4 }); }
    if (cur.extra.chand) for (const c of cur.extra.chand) halos.push([c[0], baseY + c[1] - 0.2, c[2], 1, 0.8, 0.45, 0.8, 4]);
    halos.push([mira.position.x, mira.position.y + 0.2, mira.position.z - 0.3, 0.6, 0.35, 1, 0.4 + miraTalk * 0.45, 7]);

    // ---------------------------------------------------------------- climbers
    drawn.length = 0;
    const list = w.members.length > Math.min(CAP, quality.maxChars || CAP) ? w.members.slice(0, Math.min(CAP, quality.maxChars || CAP)) : w.members;
    let n = 0, cx = 0, cz = 0, cn = 0;
    const set = (im, i, lx, ly, lz, sx2, sy2, sz2, rx = 0, rz = 0, col = null) => { L2.compose(V.set(lx, ly, lz), Q.setFromEuler(E.set(rx, 0, rz)), S.set(sx2, sy2, sz2)); M.multiplyMatrices(ROOT, L2); im.setMatrixAt(i, M); if (col) im.setColorAt(i, col); };
    if (kit) { const o = actorClimbers(list, now, dt, halos, fuel, w); n = o.n; cx = o.cx; cz = o.cz; cn = o.cn; }
    else for (const m of list) {
      const s = vstate(m, now); s.seen = now;
      const sp = Math.hypot(m.x - s.x, m.z - s.z) / Math.max(dt, 1e-3);
      s.x = m.x; s.y = m.y; s.z = m.z;
      const moving = sp > 0.4 || (m.flags & 2048);
      s.walk += dt * (moving ? 11 : 0);
      const hitK = Math.max(0, 1 - (now - s.hit) / 0.35);
      const pa = Math.min(1, (now - s.spawn) / 0.35), sc = (0.3 + 0.7 * pa) * (1 + 0.15 * Math.sin(pa * Math.PI));
      const y = baseY + m.y + (moving ? Math.abs(Math.sin(s.walk)) * 0.12 : 0) + (m.flags & TFLAG.cmd ? Math.abs(Math.sin(now * 12)) * 0.18 : 0);
      ROOT.compose(V.set(m.x, y, m.z), Q.setFromEuler(E.set(0, m.face, 0)), S.set(sc, sc, sc));
      const info = m.info || {};
      cA.setHex(info.color ?? 0xffffff);
      const flashC = hitK > 0 ? cB.copy(cA).lerp(white, hitK) : cA;
      const sw = moving ? Math.sin(s.walk) : 0;
      set(P.body, n, 0, 0.52, 0, 1, 1, 1, 0, 0, flashC);
      cB.setHex(s.skin); set(P.head, n, 0, 1.06, 0, 1, 1, 1, 0, 0, cB);
      cB.copy(cA).multiplyScalar(0.55); set(P.hair, n, 0, 1.1, -0.02, 1, 1, 1, -0.15, 0, cB);
      const blink = ((now + m.id * 0.37) % 4.2) < 0.12 ? 0.15 : 1;
      set(P.eyes, n * 2, -0.13, 1.08, 0.31, 1, blink, 1); set(P.eyes, n * 2 + 1, 0.13, 1.08, 0.31, 1, blink, 1);
      set(P.hands, n * 2, -0.36, 0.5 + sw * 0.05, sw * 0.12, 1, 1, 1, 0, 0, cA);
      set(P.hands, n * 2 + 1, 0.34, 0.66, 0.26, 1, 1, 1, 0, 0, cA);
      set(P.lantern, n, 0.36, 0.42 + Math.sin(now * 3 + m.id) * 0.02, 0.32, 1, 1, 1, Math.sin(now * 2 + m.id) * 0.15, 0);
      set(P.feet, n * 2, -0.13, 0.08, sw * 0.18, 1, 1, 1); set(P.feet, n * 2 + 1, 0.13, 0.08, -sw * 0.18, 1, 1, 1);
      L2.compose(V.set(m.x, baseY + m.y + 0.02, m.z), Q.identity(), S.set(1.1, 1, 1.1)); P.shadow.setMatrixAt(n, L2);
      V.set(0.36, 0.45, 0.32).applyMatrix4(ROOT);
      if (quality.halos || n < 16) halos.push([V.x, V.y, V.z, 1, 0.7, 0.3, (0.35 + 0.65 * fuel) * (m.flags & TFLAG.gift ? 1.7 : 1), 1.5 + 1.5 * fuel]);
      drawn.push({ id: m.id, x: m.x, y: y + 1.55 * sc, z: m.z, info, flags: m.flags });
      if (m.y < 0.5) { cx += m.x; cz += m.z; cn++; }
      n++;
    }
    for (const key of Object.keys(P)) { const im = P[key]; if (kit && key !== 'lantern' && key !== 'shadow') { im.count = 0; continue; } im.count = key === 'eyes' || key === 'hands' || key === 'feet' ? n * 2 : n; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; }
    // ghosts drift behind the party
    let gn = 0;
    for (const g of w.ghosts || []) {
      if (gn >= GCAP) break;
      let s = ghostVis.get(g.id);
      if (!s) { const v = vis.get(g.id); s = { x: v ? v.x : (Math.random() - 0.5) * 6, z: v ? v.z : 5, born: now - 2, ph: Math.random() * TAU }; ghostVis.set(g.id, s); }
      s.seen = now;
      const tx = -6 + (gn % 8) * 1.7, tz = 6.6 + Math.floor(gn / 8) * 1.3;
      s.x += (tx - s.x) * Math.min(1, dt * 0.8); s.z += (tz - s.z) * Math.min(1, dt * 0.8);
      const rise = Math.min(1, (now - s.born) / 1.5);
      const gy = baseY + 0.6 + rise * 1.6 + Math.sin(now * 1.7 + s.ph) * 0.25;
      if (kit) {
        // the fallen: a see-through spectral copy of the same adventurer, floating behind the party
        if (!s.a) { const v = vis.get(g.id); s.a = kit.actor(v?.model || HEROES[hashId(g.id) % HEROES.length], 'ghost'); s.a.play('idle', now); scene.add(s.a.obj); }
        s.a.obj.position.set(s.x, gy - 0.8, s.z); s.a.obj.rotation.set(0, Math.sin(now + s.ph) * 0.4, Math.sin(now * 1.3 + s.ph) * 0.1); s.a.obj.scale.setScalar(CSCALE * 0.9 * (0.4 + 0.6 * rise));
        s.acc = (s.acc || 0) + dt; if ((frameNo + g.id) % 3 === 0) { tickActor(kit, s.a, s.acc, now); s.acc = 0; }
        s.drawnAt = frameNo;
      } else {
        ROOT.compose(V.set(s.x, gy, s.z), Q.setFromEuler(E.set(0, Math.sin(now + s.ph) * 0.4, Math.sin(now * 1.3 + s.ph) * 0.12)), S.set(0.7, 0.7, 0.7));
        ghostM.setMatrixAt(gn, ROOT);
        for (const sd of [0, 1]) { L2.compose(V.set(sd ? 0.13 : -0.13, 0.72, 0.4), Q.identity(), S.set(1, 1.3, 1)); M.multiplyMatrices(ROOT, L2); ghostEyes.setMatrixAt(gn * 2 + sd, M); }
      }
      drawn.push({ id: g.id, x: s.x, y: gy + 0.9, z: s.z, info: g.info || {}, flags: g.flags, ghost: true });
      gn++;
    }
    if (kit) { gn = 0; for (const [id, s] of ghostVis) if (s.a && s.drawnAt !== frameNo) { kit.release(s.a); s.a = null; } }
    ghostM.count = gn; ghostEyes.count = gn * 2; ghostM.instanceMatrix.needsUpdate = true; ghostEyes.instanceMatrix.needsUpdate = true;
    if (Math.random() < 0.02) { for (const [id, s] of ghostVis) if (now - s.seen > 3) { if (s.a) kit.release(s.a); ghostVis.delete(id); } for (const [id, s] of vis) if (now - s.seen > 5) { if (s.a) kit.release(s.a); vis.delete(id); } }
    // shield dome over the party
    const want = (w.sh || 0) > 0, du = dome.material.uniforms;
    du.a.value += ((want ? (['trap', 'monster', 'boss'].includes(w.phase) ? 0.75 : 0.4) : 0) - du.a.value) * Math.min(1, dt * 3); du.time.value = now;
    dome.visible = du.a.value > 0.02;
    if (cn) { dome.position.set(cx / cn, baseY, cz / cn); const r = 1.7 + Math.sqrt(cn) * 0.62; dome.scale.set(r, r * 0.62, r * 0.75); }

    // ---------------------------------------------------------------- monster
    const mo = w.mo;
    if (mo && (w.phase === 'monster' || w.phase === 'boss')) {
      if (monVis.kind !== mo.k || !monster.visible || monVis.dieT > 0) monVis = { kind: mo.k, t0: now, hitT: -9, atkT: -9, dieT: -9, x: w.ch >= 0 ? doorPos(cur, w.ch) : 0, z: DOOR_Z + 0.5 };
      const key = mo.k === 'boss' ? 'ghost' : mo.k, boss = mo.k === 'boss';
      for (const k2 of Object.keys(M_)) M_[k2].visible = k2 === key;
      monster.visible = true;
      const g = M_[key];
      const em = Math.min(1, (now - monVis.t0) / 1.2);
      monVis.x += (0 - monVis.x) * Math.min(1, dt * 2); monVis.z += ((boss ? -3.8 : -3.4) - monVis.z) * Math.min(1, dt * 2);
      const atk = Math.max(0, 1 - (now - monVis.atkT) / 0.6), lunge = Math.sin(Math.min(1, (now - monVis.atkT) / 0.6) * Math.PI) * 1.6;
      const hitK = Math.max(0, 1 - (now - monVis.hitT) / 0.18);
      const scl = (boss ? 1.75 : 1.15) * (0.2 + 0.8 * em) * (1 + hitK * 0.06 + atk * 0.08);
      monster.position.set(monVis.x + (hitK > 0 ? (Math.random() - 0.5) * 0.15 : 0), baseY + (key === 'ghost' ? (wraith ? 0.25 : 0.4) + Math.sin(now * 1.8) * (wraith ? 0.15 : 0.3) : 0), monVis.z + lunge * (wraith && key === 'ghost' ? 0.4 : 1));
      monster.scale.setScalar(scl);
      monster.rotation.set(0, Math.sin(now * 0.8) * 0.15, key === 'ghost' ? Math.sin(now * 1.3) * 0.06 : 0);
      if (key === 'ghost' && wraith) {
        const a = boss ? bossA : wraith; wraith.obj.visible = !boss; bossA.obj.visible = boss;
        g.userData.crown.position.set(0.05, 3.32, 0.15); g.userData.crown.visible = boss;
        if (em < 1 && a.state !== 'roar') a.play('roar', now); else if (!a.until) a.play('combat', now);
        if (now - monVis.atkT < 0.05) a.play(boss ? (mo.slam ? 'spin' : 'slash') : 'attack', now, { speed: 1.25 });
        else if (now - monVis.hitT < 0.03 && now >= a.until) a.play('hit', now, { speed: 1.6 });
        else if (!a.until && Math.random() < dt * 0.25) a.play('taunt', now);   // restless, aggressive idle
        a.tick(dt, now);
        const gl = 0.75 + 0.25 * Math.sin(now * 6);
        if (boss) halos.push([monVis.x, baseY + 3.0 * scl, monVis.z + 0.9, 1, 0.1, 0.03, gl * 0.75, 2.6]);   // red eye glare
        else for (const sx of [-0.36, 0.36]) { halos.push([monVis.x + sx * scl, baseY + EYE_Y * scl, monVis.z + EYE_Z * scl, 1, 0.08, 0.02, gl, 0.9]); halos.push([monVis.x + sx * scl, baseY + EYE_Y * scl, monVis.z + (EYE_Z + 0.05) * scl, 1, 0.6, 0.3, gl, 0.28]); }   // burning eye sockets
      } else if (key === 'ghost') { const u = g.userData; u.crown.visible = boss; monGhostMat.color.setHex(boss ? 0xcab8ff : 0xe8ecff); monGhostMat.emissive.setHex(hitK > 0 ? 0xffffff : boss ? 0x3a1a6a : 0x2a2a60); u.mouth.scale.set(0.5, 0.42 + atk * 0.5 + Math.sin(now * 5) * 0.06, 0.2); }
      if (key === 'spider') g.userData.legs.forEach((L, i) => { L.rotation.x = Math.sin(now * 10 + i * 1.3) * 0.25 * (1 + atk); });
      if (key === 'spider' && demonA) { if (now - monVis.atkT < 0.05) demonA.play('bite', now, { speed: 1.3 }); else if (now - monVis.hitT < 0.03 && now >= demonA.until) demonA.play('hit', now); else if (!demonA.until) demonA.play(atk > 0 ? 'move' : 'combat', now); demonA.tick(dt, now); halos.push([monVis.x, baseY + 2.9 * scl, monVis.z + 0.8, 1, 0.1, 0.03, 0.6, 1.6]); }
      // embers + a blood-red haze while a monster is in the room
      if (Math.random() < dt * (boss ? 22 : 12)) emit(glow, 1, monVis.x + (Math.random() - 0.5) * 9, baseY + 0.2, monVis.z + Math.random() * 6, { colors: [0xff6a20, 0xff3010, 0xffa040], up: 1.2, speed: 0.7, g: -0.8, life: 2.4, size: 0.14 });
      if (key === 'mimic') g.userData.lidP.rotation.x = -0.35 - Math.abs(Math.sin(now * 4)) * 0.5 - atk * 0.6;
      for (const hm of hitMats) hm.emissive.setHex(hitK > 0 ? 0x888888 : 0x100008);
      halos.push([monVis.x, baseY + 2.2 * scl, monVis.z + 0.5, boss ? 0.6 : 0.3, boss ? 0.3 : 1, boss ? 1 : 0.4, 0.35, boss ? 14 : 8]);
    } else if (monster.visible) {
      if (monVis.dieT < 0) monVis.dieT = now;
      monster.scale.multiplyScalar(Math.max(0.01, 1 - dt * 4)); monster.rotation.y += dt * 8;
      if (now - monVis.dieT > 0.5) monster.visible = false;
    }
    // treasure chest bounces out of the door and bursts open
    if (w.phase === 'treasure' || (w.phase === 'climb' && now - chestT < 3)) {
      if (!chest.visible) { chest.visible = true; chestT = now; chestX = doorPos(cur, w.ch); }
      const a = now - chestT, e = Math.min(1, a / 1.0);
      chest.position.set(chestX * (1 - e), baseY + Math.sin(e * Math.PI) * 1.2, DOOR_Z + 2.4 + e * 3.2);
      chest.scale.setScalar(1.3);
      chest.userData.lp.rotation.x = a > 1.1 ? -Math.min(1.9, (a - 1.1) * 5) : 0;
      if (a > 1.1 && a < 3.4 && Math.random() < 0.7) emit(glow, 2, chest.position.x, chest.position.y + 1.2, chest.position.z, { colors: [0xffd34d, 0xfff2a0, 0xffa020], up: 1.2, speed: 6, g: 9, life: 1.1, size: 0.35, floorY: baseY });
      halos.push([chest.position.x, chest.position.y + 1.3, chest.position.z, 1, 0.8, 0.3, a > 1.1 ? 0.9 : 0.2, 7]);
    } else chest.visible = false;
    // pendulum blade (clock trap)
    if (now - bladeT < 2.2) { blade.visible = true; const a = (now - bladeT) / 2.2; blade.position.set(0, baseY + FH - 0.5, 2.6); blade.rotation.z = Math.cos(a * Math.PI * 2.5) * 1.15 * (1 - a * 0.3); } else blade.visible = false;
    // falling things
    let dn = 0;
    for (let i = dropList.length - 1; i >= 0; i--) {
      const d = dropList[i], a = now - d.t0;
      if (a > d.life) { dropList.splice(i, 1); continue; }
      if (a < 0) continue;
      d.vy -= 22 * dt; d.y += d.vy * dt; d.rx += dt * d.spin;
      if (d.y < baseY + d.s * 0.18) { if (!d.landed) { d.landed = true; emit(solid, 4, d.x, baseY + 0.3, d.z, { color: 0x8a7a6a, up: 0.4, speed: 3, life: 0.6, size: 0.4, alpha: 0.8, floorY: baseY }); } d.y = baseY + d.s * 0.18; d.vy = 0; d.spin = 0; }
      if (dn < DROP) { Q.setFromEuler(E.set(d.rx, d.ry, 0)); drops.setMatrixAt(dn, M.compose(V.set(d.x, d.y, d.z), Q, S.set(d.s * d.sx, d.s * 0.35, d.s))); drops.setColorAt(dn, cB.setHex(d.col)); dn++; }
    }
    drops.count = dn; drops.instanceMatrix.needsUpdate = true; if (drops.instanceColor) drops.instanceColor.needsUpdate = true;
    // grasping hands
    let hn = 0;
    for (let i = handList.length - 1; i >= 0; i--) {
      const h = handList[i], a = now - h.t0;
      if (a > 1.6) { handList.splice(i, 1); continue; }
      const up = Math.sin(Math.max(0, Math.min(1, a / 1.6)) * Math.PI);
      if (hn < HANDS) { Q.setFromEuler(E.set(Math.sin(a * 8 + i) * 0.2, 0, Math.sin(a * 6 + i) * 0.25)); hands.setMatrixAt(hn++, M.compose(V.set(h.x, baseY - 0.6 + up * 1.2, h.z), Q, S.set(1, 1, 1))); }
    }
    hands.count = hn; hands.instanceMatrix.needsUpdate = true;
    // rings
    let rn = 0;
    for (let i = rings.length - 1; i >= 0; i--) {
      const r = rings[i], a = (now - r.t0) / r.dur;
      if (a >= 1) { rings.splice(i, 1); continue; }
      if (a < 0) continue;
      const rad = r.r0 + (r.r1 - r.r0) * (1 - (1 - a) * (1 - a));
      if (rn < RINGS) { ringMesh.setMatrixAt(rn, M.compose(V.set(r.x, r.y, r.z), Q.identity(), S.set(rad, 1, rad))); ringMesh.setColorAt(rn, cB.copy(r.col).multiplyScalar(1 - a)); rn++; }
    }
    ringMesh.count = rn; ringMesh.instanceMatrix.needsUpdate = true; if (ringMesh.instanceColor) ringMesh.instanceColor.needsUpdate = true;
    dust.material.uniforms.time.value = now; dust.material.uniforms.base.value = camLook.y - 2.5; dust.material.uniforms.tint.value.setHex(T.light);
    dust.visible = quality.particles > 0.4;
    updateParticles(glow, dt, quality.halos ? halos : halos.slice(0, 24));
    updateParticles(solid, dt, null);
    renderer.render(scene, camera);
  }

  // ------------------------------------------------------------------ juice for game events
  const memberPos = (id) => { const s = vis.get(id); return s ? { x: s.x, y: baseY + s.y, z: s.z } : null; };
  const ring = (x, z, dur, r0, r1, col, y = 0.1) => rings.push({ x, y: baseY + y, z, t0: time, dur, r0, r1, col: new Color(col) });
  const CONF = [0xff6ad5, 0xffe14a, 0x5ef0ff, 0x9b5de5, 0x7dff7a];
  function fx(e, w) {
    const now = time, r = rooms.get(curFloor);
    switch (e.k) {
      case 'hit': {
        monVis.hitT = now;
        const s = vis.get(e.id); if (s) s.hit = now;
        const big = lastW && lastW.mo && lastW.mo.b;
        emit(glow, e.c ? 10 : 4, monVis.x + (Math.random() - 0.5) * 1.5, baseY + (big ? 3.4 : 2) + (Math.random() - 0.5), monVis.z + 1, { colors: e.c ? [0xffe14a, 0xffffff] : [0xffb36b, 0xffffff, 0xff6ad5], up: 0.6, speed: e.c ? 7 : 4, life: 0.4, size: e.c ? 0.5 : 0.35 });
        if (e.c) shake = Math.max(shake, 0.4);
        break;
      }
      case 'matk':
        monVis.atkT = now; shake = Math.max(shake, e.boss ? 1 : 0.6);
        ring(monVis.x, monVis.z + 2, 0.7, 1, e.boss ? 9 : 6, e.boss ? 0xb07cff : 0x5dff7a);
        if (e.slam) { flashT = now; emit(solid, 20, monVis.x, baseY + 0.3, monVis.z + 2, { color: 0x6a5a7a, up: 0.4, speed: 7, life: 0.8, size: 0.5, alpha: 0.7, floorY: baseY }); }
        break;
      case 'fall': {
        const p = memberPos(e.id); if (!p) break;
        emit(solid, 14, p.x, p.y + 0.6, p.z, { colors: [0x5a3a7a, 0x3a2a5a, 0x8a6aa8], up: 0.6, speed: 3, g: -1, life: 1.1, size: 0.7, alpha: 0.85 });
        emit(glow, 10, p.x, p.y + 0.8, p.z, { colors: [0xb07cff, 0xffffff], up: 1, speed: 3, g: -2, life: 0.9, size: 0.35 });
        ghostVis.set(e.id, { x: p.x, z: p.z, born: now, ph: Math.random() * TAU });
        break;
      }
      case 'rise': {
        const g = ghostVis.get(e.id), x = g ? g.x : 0, z = g ? g.z : 4;
        ghostVis.delete(e.id);
        emit(glow, 18, x, baseY + 1, z, { colors: [0xffe9a0, 0xffffff, 0x9fe0ff], up: 1.2, speed: 4, g: 1, life: 1, size: 0.4 });
        ring(x, z, 0.8, 0.3, 2.6, 0xffe9a0);
        const s = vis.get(e.id); if (s) s.spawn = now;
        break;
      }
      case 'join': { const s = vis.get(e.id); if (s) s.spawn = now; break; }
      case 'reveal': if (r && r.doors[e.door]) emit(glow, 26, r.doors[e.door].x, baseY + 2, DOOR_Z + 0.6, { color: KIND_COL[e.kinds[e.door]] || 0xffffff, up: 0.3, speed: 6, g: 0, drag: 2.5, life: 0.9, size: 0.6, jy: 3 }); break;
      case 'prophecy': case 'gift': {
        const p = e.id ? memberPos(e.id) : null;
        if (p) emit(glow, e.tier === 'boss' || e.tier === 'skip' ? 40 : 16, p.x, p.y + 1, p.z, { colors: [0xffe14a, 0xff6ad5, 0x9fe0ff, 0xffffff], up: 1.2, speed: 5, g: 2, life: 1.1, size: 0.4 });
        const door = e.door ?? -1;
        if (door >= 0 && r && r.doors[door]) emit(glow, 30, r.doors[door].x, baseY + 2.4, DOOR_Z + 0.8, { colors: [0xb07cff, 0xffe9a0], up: 0.2, speed: 3, g: -0.5, life: 1.4, size: 0.5, jy: 3, jitter: 1.6 });
        if (e.tier === 'shield') ring(0, 2.5, 0.9, 1, 8, 0x5ac8ff, 0.15);
        if (e.tier === 'boss' || e.tier === 'rescue') flashT = now;
        break;
      }
      case 'treasure': chestT = now; chest.visible = false; break;
      case 'trap': case 'mlose': {
        const trap = e.k === 'mlose' ? 'hands' : e.trap;
        shake = Math.max(shake, 0.8); flashT = now;
        const pts = (e.fell || []).concat(e.saved || []).map(memberPos).filter(Boolean);
        if (e.blocked) { ring(0, 2.6, 0.9, 2, 9, 0x5ac8ff, 0.2); emit(glow, 40, 0, baseY + 3, 2.6, { colors: [0x5ac8ff, 0xffffff], up: 0.6, speed: 7, g: 1, life: 0.8, size: 0.4 }); break; }
        const at = pts.length ? pts : [{ x: 0, z: 2.5 }];
        if (trap === 'books' || trap === 'chandelier' || trap === 'web') {
          const cols = trap === 'books' ? [0x8a2a3a, 0x2a5a8a, 0x3a7a3a, 0x8a6a2a, 0x6a3a8a] : trap === 'web' ? [0xeeeeee] : [0xd9b04a];
          for (const p of at) for (let i = 0; i < (trap === 'books' ? 3 : 1); i++) dropList.push({ x: p.x + (Math.random() - 0.5) * 0.6, z: p.z + (Math.random() - 0.5) * 0.6, y: baseY + FH - 1, vy: 0, t0: now + i * 0.12 + Math.random() * 0.2, life: 2.6, s: trap === 'books' ? 0.7 : trap === 'web' ? 1.6 : 1.4, sx: trap === 'web' ? 1 : 1.4, rx: 0, ry: Math.random() * TAU, spin: 6, col: cols[(Math.random() * cols.length) | 0] });
          if (trap === 'chandelier') for (const p of at) emit(glow, 16, p.x, baseY + 0.5, p.z, { colors: [0xffd34d, 0xffffff], up: 0.6, speed: 6, life: 0.6, size: 0.3, floorY: baseY });
        } else if (trap === 'hands') {
          for (const p of at) { for (let i = 0; i < 3; i++) handList.push({ x: p.x + Math.cos(i * 2.1) * 0.45, z: p.z + Math.sin(i * 2.1) * 0.45, t0: now + i * 0.05 }); ring(p.x, p.z, 1.2, 0.4, 1.4, 0x5dff7a, 0.08); }
        } else if (trap === 'shards') {
          for (const p of at) emit(glow, 18, p.x, baseY + 2, p.z, { colors: [0xd8e0ff, 0x9fe0ff, 0xffffff], up: 0.2, speed: 8, g: 12, life: 0.9, size: 0.3, floorY: baseY });
          emit(glow, 30, 0, baseY + 3, DOOR_Z + 1, { colors: [0xd8e0ff, 0xffffff], up: 0.3, speed: 10, g: 10, life: 0.9, size: 0.35, floorY: baseY });
        } else if (trap === 'pendulum') bladeT = now;
        else if (trap === 'gas') for (let i = 0; i < 6; i++) emit(solid, 6, (Math.random() - 0.5) * 8, baseY + 0.5, 2 + (Math.random() - 0.5) * 5, { colors: [0x5aff7a, 0x2aa04a, 0x8aff9a], up: 0.5, speed: 1.6, g: -0.6, life: 2.2, size: 2.2, alpha: 0.45 });
        break;
      }
      case 'monster':
        monVis.t0 = now; monVis.dieT = -9;
        if (e.boss) { flashT = now; shake = 1.2; }
        if (r && w && w.ch >= 0 && r.doors[w.ch]) emit(solid, 20, r.doors[w.ch].x, baseY + 1, DOOR_Z + 1, { colors: [0x2a1a3a, 0x4a3a5a], up: 0.5, speed: 4, life: 1, size: 1, alpha: 0.8 });
        break;
      case 'mwin':
        flashT = now; shake = Math.max(shake, e.boss ? 1.4 : 0.8);
        emit(glow, e.boss ? 90 : 50, monVis.x, baseY + 2, monVis.z + 0.5, { colors: [0xffffff, 0xb07cff, 0xffe14a, 0x5dff7a], up: 0.8, speed: e.boss ? 11 : 8, g: 3, life: 1.3, size: 0.5 });
        ring(monVis.x, monVis.z, 1, 1, 12, 0xffe9a0, 0.2);
        if (e.boss) for (let i = 0; i < 5; i++) emit(solid, 26, (Math.random() - 0.5) * 6, baseY + 5, 1 + Math.random() * 3, { colors: CONF, up: 0.6, speed: 5, g: 4, drag: 1.2, life: 3, size: 0.3, confetti: true, floorY: baseY });
        break;
      case 'rwin': { const p = memberPos(e.id); if (p) { emit(glow, 30, p.x, p.y + 1.2, p.z, { colors: [0xffe14a, 0xffffff, 0xb07cff], up: 1, speed: 6, g: 3, life: 1.2, size: 0.45 }); ring(p.x, p.z, 0.8, 0.3, 3.5, 0xffe14a); } break; }
      case 'blaze': flashT = now; for (const s of vis.values()) if (time - s.seen < 1) emit(glow, 2, s.x, baseY + s.y + 0.6, s.z, { colors: [0xffb36b, 0xffe9a0], up: 1.4, speed: 3, g: -1, life: 0.9, size: 0.5 }); break;
      case 'climb': if (e.lift) for (let i = 0; i < 4; i++) emit(glow, 20, STAIR.x, baseY + 0.5 + i, STAIR.z, { colors: [0xb07cff, 0xffe9a0, 0x5ef0ff], up: 1, speed: 3, g: -3, life: 2, size: 0.45, jitter: 3 }); break;
      case 'floor': miraFade = 0; emit(glow, 30, -6.1, e.n * FH + 2, -4.9, { colors: [0xb07cff, 0xffffff], up: 0.4, speed: 4, g: 0, drag: 2, life: 1.1, size: 0.5, jy: 3 }); break;
      case 'end': if (e.reason === 'top') for (let i = 0; i < 6; i++) emit(solid, 30, (Math.random() - 0.5) * 8, baseY + 6, 2 + Math.random() * 3, { colors: CONF, up: 0.5, speed: 5, g: 4, drag: 1.2, life: 3.5, size: 0.3, confetti: true, floorY: baseY }); break;
    }
  }

  // ------------------------------------------------------------------ api
  let W = 390, H = 844;
  const pv = new Vector3();
  const project = (x, y, z) => { pv.set(x, y, z).project(camera); return { x: (pv.x * 0.5 + 0.5) * W, y: (-pv.y * 0.5 + 0.5) * H, vis: pv.z < 1 && pv.z > -1 }; };
  return {
    kind: 'webgl', renderer, ready, scene, get loaded() { return !!kit; }, get error() { return loadErr; },
    resize(w, h, pr) { W = w; H = h; renderer.setPixelRatio(pr); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w / h < 0.7 ? 50 : 42; camera.updateProjectionMatrix(); glow.mat.uniforms.px.value = solid.mat.uniforms.px.value = h * pr * 0.9; dust.material.uniforms.px.value = h * pr * 0.5; },
    setQuality(q) { quality = q; partMult = q.particles; },
    frame, fx, project,
    speaking(on) { miraSpeaking = on; },
    doorTop(i) { const r = rooms.get(curFloor); if (!r || !r.doors[i]) return null; return project(r.doors[i].x, baseY + (r.doors[i].top || 5.95), DOOR_Z + 0.4); },
    monsterTop() { if (!monster.visible || monVis.dieT > 0) return null; return project(monVis.x, baseY + (lastW && lastW.mo && lastW.mo.b ? 6.6 : 3.9), monVis.z); },
    miraTop() { return project(mira.position.x, mira.position.y + 2.2, mira.position.z); },
    drawn: () => drawn,
    thunder() { if (thunderAt && time >= thunderAt) { thunderAt = 0; return true; } return false; },
    stats() { const i = renderer.info; return { calls: i.render.calls, tris: i.render.triangles, tex: i.memory.textures, geo: i.memory.geometries, chars: kit ? [...vis.values()].filter((v) => v.a).length : P.body.count, ghosts: [...ghostVis.values()].filter((v) => v.a).length, loaded: !!kit, parts: glow.list.length + solid.list.length, rooms: rooms.size }; },
    dispose() { disposed = true; for (const r of rooms.values()) disposeRoom(r); rooms.clear(); scene.traverse((o) => { if (o.isInstancedMesh) o.dispose(); }); for (const x of global) x.dispose?.(); if (env) env.dispose(); if (kit) kit.dispose(); if (mons) mons.dispose(); renderer.dispose(); },
    loseContext() { try { renderer.forceContextLoss(); } catch {} },
  };
}
