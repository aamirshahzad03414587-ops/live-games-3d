// Battle Royale 3D view (Three.js), built for iPhone Safari:
// - rigged + animated CC0 KayKit characters (Kay Lousberg): one merged SkinnedMesh per fighter, shared clips, pooled
//   actors, per-viewer colour as a cached material variant, animation LOD (far fighters animate at a lower rate)
// - a hex island arena (KayKit Medieval Hexagon, CC0), everything static instanced (one draw call per prop type)
// - hemisphere + one directional light, ACES tone mapping, fog, gradient sky; no realtime shadows (blob shadows)
// - "bloom" faked with additive glow sprites; fixed-size pools; nothing allocated per frame; all disposed on teardown
// - a cap on drawn fighters per quality level (the rest still fight on the server)
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight,
  Mesh, InstancedMesh, Points, BufferGeometry, BufferAttribute, CylinderGeometry, CircleGeometry,
  IcosahedronGeometry, PlaneGeometry, RingGeometry, MeshBasicMaterial, MeshLambertMaterial, ShaderMaterial, CanvasTexture,
  AdditiveBlending, NormalBlending, DoubleSide, Matrix4, Vector3, Quaternion, Euler, Object3D, SRGBColorSpace,
  ACESFilmicToneMapping, MathUtils,
} from 'three';
import { loadKit, tickActor } from '../shared/kaykit.js';
import { loadEnv } from '../shared/envkit.js';
import { buildArena } from './arena3d.js';

const FLAG = { alive: 1, shield: 2, speed: 4, giant: 8, rage: 16, dash: 32, dance: 64, air: 128, crown: 256, cmd: 512, low: 1024, bot: 2048 };
const TAU = Math.PI * 2;
const HEROES = ['Knight', 'Barbarian', 'Mage', 'Rogue', 'Rogue_Hooded'];
const BOTS = ['Skeleton_Minion', 'Skeleton_Warrior', 'Skeleton_Rogue', 'Skeleton_Mage'];
// loot: a fighter who picks up a weapon (gift chest or a fallen rival's drop) swaps to the same hero carrying a big
// 2-handed KayKit weapon (the weapons ship inside the CC0 character files; the alternate outfit is merged at load)
const LOOT = { Knight: ['2H_Sword', 'Knight_Helmet', 'Knight_Cape'], Barbarian: ['2H_Axe', 'Barbarian_Hat', 'Barbarian_Cape'], Mage: ['2H_Staff', 'Spellbook_open', 'Mage_Hat', 'Mage_Cape'], Rogue: ['2H_Crossbow', 'Knife_Offhand', 'Rogue_Cape'], Rogue_Hooded: ['2H_Crossbow', 'Knife_Offhand', 'Rogue_Cape'] };
const LOOT_ATK = { Knight: ['spin', 'slash', 'attack'], Barbarian: ['spin', 'attack', 'slash'], Mage: ['cast', 'summon'], Rogue: ['shoot'], Rogue_Hooded: ['shoot', 'slash'] };
const SCALE = 0.72;          // KayKit characters are ~2 m; fighters are ~1.45 m next to the 20 m arena
const HEAD = 2.1 * SCALE;    // name-tag anchor above the feet
const ATTACKS = { Knight: ['attack', 'slash'], Barbarian: ['attack', 'slash', 'attack'], Mage: ['cast'], Rogue: ['shoot', 'slash'], Rogue_Hooded: ['slash', 'attack'], Skeleton_Minion: ['attack'], Skeleton_Warrior: ['attack', 'slash'], Skeleton_Rogue: ['slash'], Skeleton_Mage: ['cast'] };

export function createView3D(canvas, opts = {}) {
  const ctxAttrs = { antialias: !!opts.aa, alpha: false, depth: true, stencil: false, powerPreference: 'default', preserveDrawingBuffer: !!opts.preserve, failIfMajorPerformanceCaveat: false };
  const renderer = new WebGLRenderer({ canvas, ...ctxAttrs });
  if (!renderer.getContext()) throw new Error('no webgl');
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = false;
  renderer.info.autoReset = true;

  const scene = new Scene();
  scene.background = new Color(0xfde8cf);
  scene.fog = new Fog(0xf3dcc0, 45, 170);
  const camera = new PerspectiveCamera(46, 9 / 16, 0.3, 600);
  const disposables = [];
  const keep = (x) => { disposables.push(x); return x; };

  // ------------------------------------------------------------------ lights: sky/ground bounce + one warm sun
  const hemi = new HemisphereLight(0xd8ecff, 0x4f6a3a, 1.15); scene.add(hemi);
  const sun = new DirectionalLight(0xffe6c4, 2.0); sun.position.set(-12, 20, 18); scene.add(sun);

  // ------------------------------------------------------------------ small procedural textures
  function canvasTex(size, draw, { mip = true } = {}) {
    const c = document.createElement('canvas'); c.width = c.height = size; draw(c.getContext('2d'), size);
    const t = keep(new CanvasTexture(c)); t.colorSpace = SRGBColorSpace; t.generateMipmaps = mip; if (!mip) t.minFilter = 1006; t.anisotropy = 4; return t;
  }
  const softTex = canvasTex(64, (g, S) => { const rg = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2); rg.addColorStop(0, 'rgba(0,0,0,0.5)'); rg.addColorStop(0.6, 'rgba(0,0,0,0.22)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = rg; g.fillRect(0, 0, S, S); }, { mip: false });
  const ringTex = canvasTex(64, (g, S) => { const rg = g.createRadialGradient(S / 2, S / 2, S * 0.3, S / 2, S / 2, S / 2); rg.addColorStop(0, 'rgba(255,255,255,0)'); rg.addColorStop(0.55, 'rgba(255,255,255,0.9)'); rg.addColorStop(0.8, 'rgba(255,255,255,0.35)'); rg.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = rg; g.fillRect(0, 0, S, S); }, { mip: false });

  // ------------------------------------------------------------------ arena + characters (async: the GLBs stream in, ~2 MB total)
  const R = opts.platform || 20;
  let arena = null, env = null, kit = null, loadErr = null;
  const ready = Promise.all([loadEnv(opts.envUrl || '/models/env-br.glb'), loadKit({ names: HEROES.concat(BOTS), loot: LOOT })])
    .then(([e, k]) => {
      if (disposed) { e.dispose(); k.dispose(); return; }
      env = e; kit = k;
      arena = buildArena(env, { R, sky: { sunDir: [-0.45, 0.3, 0.84] } }); scene.add(arena.group);
      // dynamic CC0 props: falling loot chests, weapon drops, meteor rocks
      if (env.has('chest_gold')) { chestMesh = new InstancedMesh(env.geos.get('chest_gold'), env.matOf('chest_gold'), CH); chestMesh.frustumCulled = false; chestMesh.count = 0; scene.add(chestMesh); }
      if (env.has('sword_shield')) { dropMesh = new InstancedMesh(env.geos.get('sword_shield'), env.matOf('sword_shield'), CH); dropMesh.frustumCulled = false; dropMesh.count = 0; scene.add(dropMesh); }
      if (env.has('rock_single_C')) metMesh.geometry = env.geos.get('rock_single_C');
    })
    .catch((err) => { loadErr = err; throw err; });
  ready.catch(() => {});
  let disposed = false;

  // storm: glowing wall + tinted floor outside the safe zone + dashed next-zone ring
  const wallGeo = keep(new CylinderGeometry(1, 1, 1, 72, 1, true)); wallGeo.translate(0, 0.5, 0);
  const stormU = { time: { value: 0 }, r: { value: 18 }, rt: { value: 18 }, showT: { value: 0 }, heat: { value: 0 }, flash: { value: 0 } };
  const wall = new Mesh(wallGeo, keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide, uniforms: stormU,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec2 vUv; uniform float time, heat, flash;
      void main(){ float s = sin(vUv.x*150.0 + vUv.y*9.0 - time*2.5)*0.5+0.5; float s2 = sin(vUv.x*61.0 - vUv.y*5.0 + time*1.7)*0.5+0.5;
        float a = pow(1.0 - vUv.y, 1.6) * (0.35 + 0.45*s*s2) + exp(-vUv.y*18.0)*0.8;
        vec3 c = mix(vec3(0.55,0.15,0.95), vec3(1.0,0.45,0.95), s*s2);
        c = mix(c, mix(vec3(1.0,0.25,0.08), vec3(1.0,0.75,0.2), s*s2), heat);
        a *= 1.0 + heat * 0.5 + flash * 1.6;
        gl_FragColor = vec4(c * a + vec3(0.6,0.7,1.0) * flash * 0.25 * (1.0 - vUv.y), 1.0); }`,
  })));
  wall.renderOrder = 3; scene.add(wall);
  const stormDisc = new Mesh(keep(new CircleGeometry(R + 0.4, 72)), keep(new ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: stormU,
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `varying vec3 vW; uniform float r, rt, time, showT, heat;
      void main(){ float d = length(vW.xz);
        float outside = smoothstep(r - 0.1, r + 0.5, d);
        float edge = exp(-abs(d - r) * 2.5);
        float ang = atan(vW.z, vW.x);
        float dash = step(0.45, fract(ang * 16.0 / 6.2832 + time * 0.25));
        float tgt = (1.0 - smoothstep(0.03, 0.12, abs(d - rt))) * dash * showT;
        vec3 c = mix(vec3(0.32,0.08,0.5), vec3(1.0,0.6,1.0), edge);
        c = mix(c, mix(vec3(0.4,0.06,0.02), vec3(1.0,0.55,0.2), edge), heat);
        c = mix(c, vec3(1.0), tgt);
        float a = clamp(outside * 0.6 + edge * 0.55 + tgt * 0.9, 0.0, 0.92);
        gl_FragColor = vec4(c, a); }`,
  })));
  stormDisc.rotation.x = -Math.PI / 2; stormDisc.position.y = 0.03; stormDisc.renderOrder = 1; scene.add(stormDisc);


  // podium (ceremony): stone steps with gold / silver / bronze caps
  const podium = new Object3D(); scene.add(podium);
  const podSpots = [[0, 1.5, 0, 0xffd34d], [-2.3, 1.0, 0.6, 0xd7e2f0], [2.3, 0.6, 0.6, 0xd9894a]];
  const stone = keep(new MeshLambertMaterial({ color: 0x9a8f86 }));
  const podMeshes = podSpots.map(([x, h, z, col]) => {
    const g = keep(new CylinderGeometry(1.0, 1.15, h, 6)); g.translate(0, h / 2, 0);
    const m = new Mesh(g, stone); m.position.set(x, 0, z); podium.add(m);
    const cg = keep(new CylinderGeometry(1.02, 1.02, 0.12, 6)); cg.translate(0, h + 0.06, 0);
    m.add(new Mesh(cg, keep(new MeshLambertMaterial({ color: col, emissive: new Color(col).multiplyScalar(0.25) }))));
    return m;
  });
  podium.visible = false;

  // ------------------------------------------------------------------ fighter extras (instanced): blob shadows, viewer-colour foot rings, shield/rage bubbles, crown
  const CAP = opts.maxChars || 64;
  const inst = (geo, mat, n) => { const m = new InstancedMesh(keep(geo), mat, n); m.frustumCulled = false; m.count = 0; const c = new Color(1, 1, 1); for (let i = 0; i < n; i++) m.setColorAt(i, c); scene.add(m); return m; };
  const shadows = inst(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2), keep(new MeshBasicMaterial({ map: softTex, transparent: true, depthWrite: false })), CAP + 8); shadows.renderOrder = 2;
  const footRings = inst(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2), keep(new MeshBasicMaterial({ map: ringTex, transparent: true, depthWrite: false, blending: AdditiveBlending })), CAP); footRings.renderOrder = 2;
  const bubble = inst(new IcosahedronGeometry(1, 2), keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { time: { value: 0 } },
    vertexShader: `varying float vF; varying vec3 vC;
      void main(){ vec4 mv = modelViewMatrix * instanceMatrix * vec4(position,1.0); vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * normal);
        vF = 1.0 - abs(dot(n, normalize(-mv.xyz)));
        #ifdef USE_INSTANCING_COLOR
          vC = instanceColor;
        #else
          vC = vec3(0.4,0.9,1.0);
        #endif
        gl_Position = projectionMatrix * mv; }`,
    fragmentShader: 'varying float vF; varying vec3 vC; uniform float time; void main(){ float a = pow(vF, 2.2) * 0.9 + 0.06; gl_FragColor = vec4(vC * a, 1.0); }',
  })), CAP);
  const crownGeo = keep(new CylinderGeometry(0.22, 0.17, 0.2, 5, 1, true));
  const crown = new Mesh(crownGeo, keep(new MeshLambertMaterial({ color: 0xffd34d, emissive: 0x7a5200, side: DoubleSide }))); crown.visible = false; scene.add(crown);

  // rings: shockwaves, meteor warnings, viewer markers, attack reticles (additive: fading = darker colour)
  const RINGS = 64;
  const ringMesh = new InstancedMesh(keep(new RingGeometry(0.86, 1, 40).rotateX(-Math.PI / 2)), keep(new MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide })), RINGS);
  ringMesh.frustumCulled = false; ringMesh.renderOrder = 4; { const c = new Color(0, 0, 0); for (let i = 0; i < RINGS; i++) ringMesh.setColorAt(i, c); } scene.add(ringMesh);
  const rings = []; // { x, z, y, t0, dur, r0, r1, col: Color, kind }

  // meteors
  const MET = 12;
  const metMesh = new InstancedMesh(keep(new IcosahedronGeometry(0.55, 0)), keep(new MeshLambertMaterial({ color: 0xff8a3d, emissive: 0xff5a10 })), MET); metMesh.frustumCulled = false; metMesh.count = 0; scene.add(metMesh);
  const meteors = []; // { x, z, t0, d }
  // scorch marks where meteors land (dark soft decals, fade out)
  const SC = 12;
  const scorch = inst(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2), keep(new MeshBasicMaterial({ map: softTex, color: 0x1a0c06, transparent: true, depthWrite: false })), SC); scorch.renderOrder = 2;
  const scorches = []; // { x, z, t0, r }
  // light beams: gift summons, revives, loot markers, the champion's spotlight (instanced open cylinders, additive)
  const BM = 10;
  const beamMesh = new InstancedMesh(keep(new CylinderGeometry(1, 1, 1, 20, 1, true).translate(0, 0.5, 0)), keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide,
    vertexShader: `varying vec2 vUv; varying vec3 vC; void main(){ vUv = uv;
      #ifdef USE_INSTANCING_COLOR
        vC = instanceColor;
      #else
        vC = vec3(1.0);
      #endif
      gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position,1.0); }`,
    fragmentShader: 'varying vec2 vUv; varying vec3 vC; void main(){ float a = pow(1.0 - vUv.y, 1.4) * (0.55 + 0.45 * sin(vUv.x * 62.83 + vUv.y * 9.0)); gl_FragColor = vec4(vC * a, 1.0); }',
  })), BM);
  beamMesh.frustumCulled = false; beamMesh.renderOrder = 7; beamMesh.count = 0; { const c = new Color(0, 0, 0); for (let i = 0; i < BM; i++) beamMesh.setColorAt(i, c); } scene.add(beamMesh);
  const beams = []; // { x, z, t0, dur, r, h, col, follow }
  function beam(x, z, o = {}) { beams.push({ x, z, t0: time, dur: o.dur || 1.2, r: o.r || 0.9, h: o.h || 22, col: new Color(o.color ?? 0xffffff), follow: o.follow || 0, y: o.y || 0 }); if (beams.length > BM) beams.shift(); }
  // loot: chests fall from the sky next to a gifter and burst open; a fallen rival's weapon flies to the killer
  const CH = 6;
  let chestMesh = null, dropMesh = null;
  const chests = [], drops = []; // chests { id, x, z, t0, done }  drops { id, x, z, t0 }
  const looted = new Set();
  function giveLoot(id) {
    if (looted.has(id)) return; looted.add(id);
    const s = vis.get(id); if (!s) return;
    s.loot = true; if (s.a) { const st = s.a.state; detach(s); s.relootAt = time; s.prevState = st; }
  }

  // ------------------------------------------------------------------ particles: glow (additive) + solid (confetti, smoke)
  function particleSystem(cap, additive) {
    const geo = keep(new BufferGeometry());
    const pos = new Float32Array(cap * 3), col = new Float32Array(cap * 4), size = new Float32Array(cap);
    geo.setAttribute('position', new BufferAttribute(pos, 3)); geo.setAttribute('col', new BufferAttribute(col, 4)); geo.setAttribute('size', new BufferAttribute(size, 1));
    const mat = keep(new ShaderMaterial({
      transparent: true, depthWrite: false, blending: additive ? AdditiveBlending : NormalBlending, uniforms: { px: { value: 400 } },
      vertexShader: 'attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }',
      fragmentShader: additive
        ? 'varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }'
        : 'varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }',
    }));
    const pts = new Points(geo, mat); pts.frustumCulled = false; scene.add(pts);
    const list = []; // live particles
    return { geo, pos, col, size, mat, pts, list, cap };
  }
  const glow = particleSystem(opts.particles || 900, true);
  const solid = particleSystem(Math.round((opts.particles || 900) * 0.5), false);
  glow.pts.renderOrder = 6; solid.pts.renderOrder = 5;
  let partMult = 1;
  const tmpC = new Color();
  function emit(sys, n, x, y, z, o) {
    n = Math.max(1, Math.round(n * partMult));
    for (let i = 0; i < n && sys.list.length < sys.cap - 64; i++) {
      const a = Math.random() * TAU, el = (o.up ?? 0.5) + Math.random() * (o.spreadUp ?? 0.5), sp = (o.speed || 4) * (0.4 + Math.random() * 0.8);
      const c = o.colors ? o.colors[(Math.random() * o.colors.length) | 0] : o.color;
      tmpC.set(c);
      sys.list.push({ x: x + (Math.random() - 0.5) * (o.jitter || 0), y, z: z + (Math.random() - 0.5) * (o.jitter || 0),
        vx: Math.cos(a) * sp * (1 - el * 0.6), vy: sp * el * (o.vyMul ?? 1), vz: Math.sin(a) * sp * (1 - el * 0.6),
        g: o.g ?? 9, drag: o.drag ?? 1.5, life: (o.life || 0.6) * (0.7 + Math.random() * 0.6), t: 0, s0: o.size || 0.3, s1: o.size1 ?? (o.size || 0.3) * 0.3,
        r: tmpC.r, gg: tmpC.g, b: tmpC.b, a: o.alpha ?? 1, conf: !!o.confetti, spin: Math.random() * TAU });
    }
  }
  function updateParticles(sys, dt, halos) {
    const L = sys.list; let w = 0;
    for (let i = 0; i < L.length; i++) {
      const p = L[i]; p.t += dt; if (p.t >= p.life) continue;
      p.vy -= p.g * dt; const d = Math.exp(-p.drag * dt); p.vx *= d; p.vy *= d; p.vz *= d;
      if (p.conf) { p.spin += dt * 6; p.vx += Math.sin(p.spin) * dt * 2; }
      p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; if (p.y < 0.05 && p.g > 0) { p.y = 0.05; p.vy *= -0.3; p.vx *= 0.7; p.vz *= 0.7; }
      L[w++] = p;
    }
    L.length = w;
    let n = 0;
    const put = (x, y, z, r, g, b, a, s) => { sys.pos[n * 3] = x; sys.pos[n * 3 + 1] = y; sys.pos[n * 3 + 2] = z; sys.col[n * 4] = r; sys.col[n * 4 + 1] = g; sys.col[n * 4 + 2] = b; sys.col[n * 4 + 3] = a; sys.size[n] = s; n++; };
    if (halos) for (const h of halos) put(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
    for (const p of L) { const k = p.t / p.life; const fade = p.conf ? 1 : 1 - k * k; put(p.x, p.y, p.z, p.r, p.gg, p.b, p.conf ? -1 : p.a * fade, p.s0 + (p.s1 - p.s0) * k); }
    sys.geo.setDrawRange(0, n);
    sys.geo.attributes.position.needsUpdate = true; sys.geo.attributes.col.needsUpdate = true; sys.geo.attributes.size.needsUpdate = true;
    // only the used part goes to the GPU
    for (const k of ['position', 'col', 'size']) { const at = sys.geo.attributes[k]; at.clearUpdateRanges?.(); at.addUpdateRange?.(0, n * at.itemSize); }
  }

  // ------------------------------------------------------------------ fighters -> animated actors
  const vis = new Map(); // id -> { a: actor|null, x, y, z, face, ... }
  const corpses = [];    // { a, t0, x, z }
  const M = new Matrix4(), Q = new Quaternion(), E = new Euler(), V = new Vector3(), S = new Vector3();
  const tmpC2 = new Color();
  const hash = (n) => { n = (n ^ 61) ^ (n >>> 16); n = (n + (n << 3)) | 0; n ^= n >>> 4; n = Math.imul(n, 0x27d4eb2d); return (n ^ (n >>> 15)) >>> 0; };
  const modelOf = (f) => (f.flags & FLAG.bot ? BOTS[hash(f.id) % BOTS.length] : HEROES[hash(f.id) % HEROES.length]);
  const meshOf = (s) => (s.loot && kit && kit.templates.has(s.model + '@loot') ? s.model + '@loot' : s.model);
  function vstate(f, now) {
    let s = vis.get(f.id);
    if (!s) { s = { a: null, model: modelOf(f), loot: looted.has(f.id), kb: null, kbx: 0, kbz: 0, freeze: 0, x: f.x, y: f.y, z: f.z, face: f.face, gs: 1, seen: now, spawn: now, hit: -9, atkN: 0, spinT: -9, frame: 0, acc: 0, speed: 0 }; vis.set(f.id, s); }
    return s;
  }
  function attach(s, f) {
    if (s.a || !kit) return;
    const tint = f.flags & FLAG.bot ? null : (f.info?.color ?? null);
    s.a = kit.actor(meshOf(s), tint); s.a.obj.scale.setScalar(SCALE); scene.add(s.a.obj);
  }
  function detach(s) { if (s.a) { kit.release(s.a); s.a = null; } }
  let selected = [], selectAt = 0;
  const focus = new Vector3();

  function selectFighters(fs, now, maxChars) {
    if (fs.length <= maxChars) { selected = fs; return fs; }
    if (now < selectAt && selected.length) { const ids = new Set(selected.map((f) => f.id)); const keepL = fs.filter((f) => ids.has(f.id)); if (keepL.length >= Math.min(maxChars, fs.length) * 0.8) return keepL.concat(fs.filter((f) => !ids.has(f.id) && f.flags & (FLAG.cmd | FLAG.crown | FLAG.giant)).slice(0, 4)).slice(0, maxChars); }
    selectAt = now + 0.6;
    const scored = fs.map((f) => ({ f, s: (f.flags & FLAG.cmd ? 6 : 0) + (f.flags & FLAG.crown ? 5 : 0) + (f.flags & FLAG.giant ? 4 : 0) + (f.flags & FLAG.bot ? 0 : 2) - Math.hypot(f.x - focus.x, f.z - focus.z) * 0.25 }));
    scored.sort((a, b) => b.s - a.s);
    selected = scored.slice(0, maxChars).map((x) => x.f);
    return selected;
  }

  // ------------------------------------------------------------------ cinematic camera
  // lobby: slow crane orbit over the island; battle: follows the busiest fight at a low 3/4 angle with a gentle drift;
  // kill cam: short low push-in on the killer; ceremony: low hero shot circling the podium
  const cam = { tx: 0, ty: 0, tz: 0, dist: 30, yaw: 0.9, pitch: 0.6, kill: null, shake: 0, orbit: 0, zoom: 0, duel: 0 };
  const angTo = (a, b) => Math.atan2(Math.sin(b - a), Math.cos(b - a));
  let aspect = 9 / 16, W = 390, H = 844;
  const action = { x: 0, z: 0, w: 0 }, cluster = { x: 0, z: 0, at: 0 };
  function updateCamera(world, dt, now) {
    let tx = 0, tz = 0, ty = 0.9, dist = 26, pitch = 0.62;
    const ph = world.phase, fs = world.fighters;
    cam.orbit += dt * (ph === 'lobby' ? 0.07 : ph === 'ceremony' ? 0 : 0.025 * (1 - cam.duel));
    action.w *= Math.exp(-dt * 0.8);
    if (ph === 'battle' && fs.length) {
      if (now > cluster.at) {
        cluster.at = now + 0.5;
        const wAt = (cx, cz) => { let w = 0, sx = 0, sz = 0; for (const f of fs) { if (f.flags & FLAG.air) continue; const d = Math.hypot(f.x - cx, f.z - cz); if (d < 7) { const k = (1 + (f.flags & FLAG.cmd ? 1.5 : 0) + (f.flags & (FLAG.giant | FLAG.crown) ? 1 : 0)) * (1 - d / 9); w += k; sx += f.x * k; sz += f.z * k; } } return { w, x: w ? sx / w : cx, z: w ? sz / w : cz }; };
        let best = wAt(cluster.x, cluster.z);
        const cur = best;
        for (const f of fs) { if (Math.random() > 24 / fs.length) continue; const c = wAt(f.x, f.z); if (c.w > best.w) best = c; }
        if (best !== cur && best.w < cur.w * 1.35) best = cur;
        cluster.x = best.x; cluster.z = best.z;
      }
      const aw = Math.min(0.4, action.w * 0.06);
      tx = cluster.x * (1 - aw) + action.x * aw; tz = cluster.z * (1 - aw) + action.z * aw;
      const ds = []; for (const f of fs) if (!(f.flags & FLAG.air)) ds.push(Math.hypot(f.x - tx, f.z - tz));
      ds.sort((a, b) => a - b);
      const spread = Math.max(ds.length ? ds[Math.min(ds.length - 1, Math.max(2, Math.floor(ds.length * 0.45)))] : 3, 2.5);
      dist = MathUtils.clamp(5.5 + spread * (aspect < 0.7 ? 1.1 : 0.85), 8, 18);
      pitch = 0.34 + Math.min(0.1, dist * 0.004);
      ty = 1.0;
      // the final duel: a low side-on two-shot that circles the last two fighters
      const duo = fs.length === 2 && world.n === 2 ? fs : null;
      cam.duel += ((duo ? 1 : 0) - cam.duel) * Math.min(1, dt * 1.5);
      if (duo) {
        const [A, B] = duo, mx = (A.x + B.x) / 2, mz = (A.z + B.z) / 2, sep = Math.hypot(A.x - B.x, A.z - B.z);
        tx = mx; tz = mz; ty = 1.1; dist = MathUtils.clamp(4.5 + sep * 0.95, 6.5, 14); pitch = 0.2;
        let want = Math.atan2(A.x - B.x, -(A.z - B.z)) + Math.sin(now * 0.25) * 0.35;   // perpendicular to the line between them
        const cur = cam.yaw + cam.orbit; if (Math.abs(angTo(cur, want + Math.PI)) < Math.abs(angTo(cur, want))) want += Math.PI;
        cam.orbit += angTo(cur, want) * Math.min(1, dt * 1.2);
      }
    } else if (ph === 'ceremony') {
      // hero shot from the front of the podium, slightly below the champion, gentle sway
      tx = 0; tz = 0.3; ty = 2.4; dist = 7.6; pitch = 0.14;
      const want = Math.PI / 2 + Math.sin(now * 0.35) * 0.32, cur = cam.yaw + cam.orbit; cam.orbit += angTo(cur, want) * Math.min(1, dt * 2.5);
    }
    else { const ds = fs.map((f) => Math.hypot(f.x, f.z)).sort((a, b) => a - b); const sp = ds.length ? ds[Math.floor(ds.length * 0.75)] : 4; dist = MathUtils.clamp(10 + sp * (aspect < 0.7 ? 1.25 : 1.0), 12, 26); pitch = 0.36 + Math.sin(now * 0.11) * 0.05; ty = 1.2; }
    if (cam.kill && now < cam.kill.until) {
      const k = cam.kill, f = fs.find((x) => x.id === k.id) || k.last;
      if (f) { k.last = f; const w = Math.min(1, (now - k.t0) / 0.3, (k.until - now) / 0.4); tx = MathUtils.lerp(tx, f.x, w); tz = MathUtils.lerp(tz, f.z, w); ty = MathUtils.lerp(ty, 1.0, w); const kv = vis.get(k.id); dist = MathUtils.lerp(dist, (k.d || 7) * (kv ? kv.gs : 1), w); pitch = MathUtils.lerp(pitch, k.p ?? 0.28, w); ty = MathUtils.lerp(ty, k.y ?? 1.0, w); }
    }
    const k = 1 - Math.exp(-dt * 2.2), kd = 1 - Math.exp(-dt * 1.4);
    cam.tx += (tx - cam.tx) * k; cam.ty += (ty - cam.ty) * k; cam.tz += (tz - cam.tz) * k; cam.dist += (dist - cam.dist) * kd; cam.pitch += (pitch - cam.pitch) * kd;
    cam.zoom = Math.max(0, cam.zoom - dt * 1.6);
    focus.set(cam.tx, 0, cam.tz);
    const yaw = cam.yaw + cam.orbit;
    const cd = cam.dist * (1 - Math.min(0.2, cam.zoom * 0.2));   // punch-in on big moments
    const cx = cam.tx + Math.cos(yaw) * Math.cos(cam.pitch) * cd, cy = cam.ty + Math.sin(cam.pitch) * cd, cz = cam.tz + Math.sin(yaw) * Math.cos(cam.pitch) * cd;
    cam.shake = Math.max(0, cam.shake - dt * 1.8);
    const sh = cam.shake * cam.shake * 0.7;
    camera.position.set(cx + (Math.sin(now * 47) + Math.sin(now * 29)) * sh, Math.max(0.6, cy + Math.sin(now * 53) * sh), cz + Math.cos(now * 41) * sh);
    camera.lookAt(cam.tx, cam.ty, cam.tz);
  }

  // ------------------------------------------------------------------ frame
  let quality = { maxChars: CAP, halos: true, particles: 1, animLod: 1 };
  const halos = [];
  let time = 0, frameNo = 0, boltAt = 0, fireworkAt = 0;
  function bolt(sr) {
    const a = Math.random() * TAU, x = Math.cos(a) * sr, z = Math.sin(a) * sr;
    let px = x, pz = z;
    for (let i = 0; i < 12; i++) { const y = 9 - i * 0.78; px += (Math.random() - 0.5) * 0.7; pz += (Math.random() - 0.5) * 0.7; emit(glow, 1, px, y, pz, { color: i % 3 ? 0xd8c8ff : 0xffffff, speed: 0, life: 0.22, size: 1.1, size1: 0.6, g: 0 }); }
    emit(glow, 10, x, 0.3, z, { colors: [0xffffff, 0xc9a8ff], speed: 4, life: 0.35, size: 0.4, g: 3, up: 0.6 });
    stormU.flash.value = 1;
    if (Math.hypot(x - cam.tx, z - cam.tz) < 10) shake(0.12);
  }
  function fireworks(now) {
    if (now < fireworkAt) return; fireworkAt = now + 0.35 + Math.random() * 0.35;
    const x = (Math.random() - 0.5) * 16, y = 8 + Math.random() * 5, z = -4 - Math.random() * 6;
    const cols = [[0xff4d5e, 0xffd23f], [0x3ec7ff, 0xffffff], [0x9be564, 0xfff1a8], [0xff6fb5, 0xd08cff]][(Math.random() * 4) | 0];
    emit(glow, 46, x, y, z, { colors: cols, speed: 7, life: 1.3, size: 0.45, size1: 0.15, g: 2.2, drag: 1.6, up: -0.5, spreadUp: 1.4 });
    emit(glow, 1, x, y, z, { color: cols[0], speed: 0, life: 0.35, size: 6, size1: 2, g: 0, alpha: 0.7 });
  }
  function frame(world, dt, now) {
    time = now; frameNo++;
    stormU.time.value = now; bubble.material.uniforms.time.value = now;
    if (arena) arena.update(now);
    const sr = world.phase === 'battle' ? world.r : R + 2;
    stormU.r.value = sr; stormU.rt.value = world.rt; stormU.showT.value = world.phase === 'battle' && world.rt < world.r - 0.3 ? 1 : 0;
    wall.visible = world.phase === 'battle' && sr < R + 0.5;
    wall.scale.set(sr, 9 + Math.sin(now * 2) * 0.4, sr);
    // the storm closes in: the light dims and cools, the wall runs hot for the last three; lightning on the wall
    const closing = world.phase === 'battle' ? MathUtils.clamp(1 - sr / R, 0, 1) : 0;
    const heatT = world.phase === 'battle' && world.n <= 3 ? 1 : 0; stormU.heat.value += (heatT - stormU.heat.value) * Math.min(1, dt * 2);
    stormU.flash.value = Math.max(0, stormU.flash.value - dt * 4);
    if (wall.visible && now > boltAt) { boltAt = now + 0.9 + Math.random() * 2.4; bolt(sr); }
    hemi.intensity = 1.15 - closing * 0.4 + stormU.flash.value * 0.3; sun.intensity = 2.0 - closing * 0.7;
    renderer.toneMappingExposure = 1.0 - closing * 0.12 + stormU.flash.value * 0.05;
    halos.length = 0;
    podium.visible = world.phase === 'ceremony';
    if (podium.visible) { const k = MathUtils.clamp((now - (world.phaseStart || now)) / 0.8, 0.01, 1); podMeshes.forEach((m) => (m.scale.y = 1 - Math.pow(1 - k, 3))); }

    const fs = selectFighters(world.fighters, now, quality.maxChars);
    updateCamera(world, dt, now);
    let n = 0, nb = 0, crownF = null;
    const lod = quality.animLod || 1;
    for (const f of fs) {
      if (n >= CAP) break;
      const s = vstate(f, now);
      const prevX = s.x, prevZ = s.z;
      s.x = f.x; s.y = f.y; s.z = f.z; s.seen = now;
      let df = f.face - s.face; df = Math.atan2(Math.sin(df), Math.cos(df)); s.face += df * Math.min(1, dt * 10);
      const sp = Math.hypot(s.x - prevX, s.z - prevZ) / Math.max(dt, 1e-3);
      s.speed += (Math.min(sp, 12) - s.speed) * Math.min(1, dt * 8);
      const giant = f.flags & FLAG.giant; s.gs += ((giant ? 2 : 1) - s.gs) * Math.min(1, dt * 5);
      const air = f.flags & FLAG.air, dance = f.flags & FLAG.dance, dash = f.flags & FLAG.dash;
      attach(s, f);
      const a = s.a;
      const spawnK = Math.min(1, (now - s.spawn) / 0.3);
      if (a) {
        let yaw = Math.PI / 2 - s.face;
        if (now - s.spinT < 0.45) yaw += (now - s.spinT) * 30;
        // knockback: a short shove away from the hit, eased back
        let kx = 0, kz = 0; if (s.kb) { const kt = (now - s.kb.t0) / 0.28; if (kt >= 1) s.kb = null; else { const e = (1 - kt) * (1 - kt) * s.kb.m; kx = s.kb.x * e; kz = s.kb.z * e; } }
        a.obj.position.set(s.x + kx, s.y, s.z + kz); a.obj.rotation.set(0, yaw, 0); a.obj.scale.setScalar(SCALE * s.gs * (0.4 + 0.6 * spawnK));
        // base loop from the fighter's state; one-shots (attack, hit, block…) come from events
        const base = world.phase === 'ceremony' && f.flags & FLAG.crown ? 'cheer' : dance ? 'cheer' : air ? 'jump' : s.speed > 2.2 ? 'run' : s.speed > 0.5 ? 'walk' : world.phase === 'battle' ? 'combat' : 'idle';
        if (base === 'jump') { if (a.state !== 'jump' && now >= a.until) a.play('jump', now); } else a.play(base, now);
        const runAct = a.actions.get('run'); if (runAct) runAct.timeScale = MathUtils.clamp(s.speed / 4.5, 0.75, 1.6) * (s.gs > 1.5 ? 0.7 : 1);
        // animation LOD: far / crowded fighters animate at a lower rate (accumulated dt keeps the speed right)
        s.acc += dt;
        const far = Math.hypot(s.x - cam.tx, s.z - cam.tz) > 12 || n > 30;
        const every = far ? 2 * lod : lod;
        if (s.relootAt && now - s.relootAt < 1) { a.play('cheer', now); a.until = now + 0.9; s.relootAt = 0; }
        if (now < s.freeze) { /* hit-stop: hold the pose for a few frames */ }
        else if ((frameNo + f.id) % every === 0) { tickActor(kit, a, s.acc, now); s.acc = 0; }
      }
      // blob shadow + viewer colour ring
      const shs = (1.1 + (giant ? 1.1 : 0)) * (air ? Math.max(0.3, 1 - s.y / 14) : 1) * spawnK;
      M.compose(V.set(s.x, 0.04, s.z), Q.identity(), S.set(shs, 1, shs)); shadows.setMatrixAt(n, M);
      const info = f.info || {};
      if (f.flags & (FLAG.shield | FLAG.rage) && world.phase === 'battle') {
        const sh = f.flags & FLAG.shield; const r = (sh ? 1.0 : 0.9) * s.gs * (1 + Math.sin(now * 8) * 0.03);
        M.compose(V.set(s.x, s.y + 0.75 * s.gs, s.z), Q.identity(), S.set(r, r * 1.15, r)); bubble.setMatrixAt(nb, M); bubble.setColorAt(nb, sh ? tmpC.setRGB(0.35, 0.85, 1) : tmpC.setRGB(1, 0.25, 0.2)); nb++;
      }
      if (f.flags & FLAG.crown) crownF = { s };
      if ((f.flags & FLAG.speed) && s.speed > 1.5 && Math.random() < 0.5) emit(glow, 1, s.x, s.y + 0.2, s.z, { color: 0xffe066, speed: 0.4, life: 0.4, size: 0.35, g: -0.5 });
      if (dash) emit(glow, 2, s.x, s.y + 0.6, s.z, { color: info.color ?? 0xffffff, speed: 0.3, life: 0.35, size: 0.6, g: 0 });
      if (air) emit(glow, 1, s.x, s.y + 0.9, s.z, { color: 0xbfe9ff, speed: 0.2, life: 0.5, size: 0.4, g: -2, up: 1 });
      if ((f.flags & FLAG.cmd) && quality.halos) { tmpC2.set(info.color ?? 0xffffff); halos.push([s.x, 0.15, s.z, tmpC2.r * 0.6, tmpC2.g * 0.6, tmpC2.b * 0.6, 0.6, 2.4 * s.gs]); }
      if (giant && quality.halos) halos.push([s.x, s.y + 1.4, s.z, 1, 0.75, 0.3, 0.3, 7]);
      if (s.loot && quality.halos && a && a.hand && n < 24) halos.push([s.x, s.y + 1.0 * s.gs, s.z, 1, 0.8, 0.35, 0.28 + 0.1 * Math.sin(now * 5 + f.id), 1.6 * s.gs]);
      n++;
    }
    // foot rings: one per viewer fighter (bots have none), coloured by the viewer's colour
    { let k = 0; for (const f of fs.slice(0, n)) { if (f.flags & FLAG.bot) continue; const s = vis.get(f.id); const rs = 1.25 * s.gs * Math.min(1, (now - s.spawn) / 0.3); M.compose(V.set(s.x, 0.05, s.z), Q.identity(), S.set(rs, 1, rs)); footRings.setMatrixAt(k, M); footRings.setColorAt(k, tmpC2.set(f.info?.color ?? 0xffffff).multiplyScalar(0.85)); k++; } footRings.count = k; footRings.instanceMatrix.needsUpdate = true; if (footRings.instanceColor) footRings.instanceColor.needsUpdate = true; }
    shadows.count = n + corpses.length; 
    corpses.forEach((c, i) => { const k = Math.max(0, 1 - (now - c.t0 - 1.2) / 0.8); M.compose(V.set(c.x, 0.04, c.z), Q.identity(), S.set(1.1 * k, 1, 1.1 * k)); shadows.setMatrixAt(n + i, M); });
    shadows.instanceMatrix.needsUpdate = true;
    bubble.count = nb; bubble.instanceMatrix.needsUpdate = true; if (bubble.instanceColor) bubble.instanceColor.needsUpdate = true;
    crown.visible = !!crownF;
    if (crownF) { const { s } = crownF; const y = s.y + (HEAD + 0.3) * s.gs + Math.sin(now * 3) * 0.05; crown.position.set(s.x, y, s.z); crown.rotation.set(-0.15, now, 0); crown.scale.setScalar(s.gs * 1.2); if (quality.halos) halos.push([s.x, y, s.z, 1, 0.8, 0.3, 0.7, 2.4]); }
    // fighters that left the drawn set: back to the pool
    for (const [id, s] of vis) { if (now - s.seen > 0.6 && s.a) detach(s); if (now - s.seen > 5) vis.delete(id); }
    // corpses: play the death clip, sink into the ground, then return to the pool
    for (let i = corpses.length - 1; i >= 0; i--) {
      const c = corpses[i], t = now - c.t0;
      if (t > 2.0) { kit.release(c.a); corpses.splice(i, 1); continue; }
      if (t > 1.2) c.a.obj.position.y = -(t - 1.2) * 1.2;
      tickActor(kit, c.a, dt, now);
    }

    // rings
    let rn = 0;
    for (let i = rings.length - 1; i >= 0; i--) { const r = rings[i]; if (now - r.t0 > r.dur) rings.splice(i, 1); }
    for (const r of rings) {
      if (rn >= RINGS) break;
      const k = (now - r.t0) / r.dur;
      let rad, al;
      if (r.kind === 'warn') { rad = r.r0 * (0.9 + 0.1 * Math.sin(now * 18)); al = 0.5 + 0.5 * Math.sin(now * 14); }
      else if (r.kind === 'mark') { rad = r.r0; al = 1 - k; }
      else { rad = r.r0 + (r.r1 - r.r0) * (1 - Math.pow(1 - k, 3)); al = 1 - k; }
      M.compose(V.set(r.x, r.y ?? 0.08, r.z), Q.identity(), S.set(rad, 1, rad)); ringMesh.setMatrixAt(rn, M);
      ringMesh.setColorAt(rn, tmpC.copy(r.col).multiplyScalar(Math.max(0, al))); rn++;
    }
    ringMesh.count = rn; ringMesh.instanceMatrix.needsUpdate = true; if (ringMesh.instanceColor) ringMesh.instanceColor.needsUpdate = true;
    // meteors
    let mn = 0;
    for (let i = meteors.length - 1; i >= 0; i--) if (now > meteors[i].t0 + meteors[i].d + 0.05) meteors.splice(i, 1);
    for (const m of meteors) {
      const k = MathUtils.clamp((now - m.t0) / m.d, 0, 1); const e = k * k;
      const x = m.x + (1 - e) * 7, y = 0.4 + (1 - e) * 26, z = m.z - (1 - e) * 7;
      M.compose(V.set(x, y, z), Q.setFromEuler(E.set(now * 5, now * 4, 0)), S.setScalar(1.2)); metMesh.setMatrixAt(mn++, M);
      emit(glow, 2, x, y, z, { colors: [0xff9a3c, 0xffd36a, 0xff5a1f], speed: 0.8, life: 0.45, size: 1.1, g: 0, drag: 2 });
      if (quality.halos) halos.push([x, y, z, 1, 0.55, 0.2, 0.9, 5]);
    }
    metMesh.count = mn; metMesh.instanceMatrix.needsUpdate = true;
    // scorch decals
    for (let i = scorches.length - 1; i >= 0; i--) if (now - scorches[i].t0 > 7) scorches.splice(i, 1);
    scorches.forEach((c, i) => { const k = Math.min(1, (now - c.t0) * 8) * Math.min(1, (7 - (now - c.t0)) / 2); M.compose(V.set(c.x, 0.035, c.z), Q.identity(), S.set(c.r * k, 1, c.r * k)); scorch.setMatrixAt(i, M); });
    scorch.count = scorches.length; scorch.instanceMatrix.needsUpdate = true;
    // beams
    let bn = 0;
    for (let i = beams.length - 1; i >= 0; i--) if (now - beams[i].t0 > beams[i].dur) beams.splice(i, 1);
    for (const b of beams) {
      if (b.follow) { const fv = vis.get(b.follow); if (fv) { b.x = fv.x; b.z = fv.z; } }
      const k = (now - b.t0) / b.dur, a = Math.min(1, k * 6) * Math.min(1, (1 - k) * 3), r = b.r * (0.6 + 0.4 * Math.min(1, k * 5));
      M.compose(V.set(b.x, b.y, b.z), Q.identity(), S.set(r, b.h, r)); beamMesh.setMatrixAt(bn, M); beamMesh.setColorAt(bn, tmpC.copy(b.col).multiplyScalar(a * 0.45)); bn++;
    }
    beamMesh.count = bn; beamMesh.instanceMatrix.needsUpdate = true; if (beamMesh.instanceColor) beamMesh.instanceColor.needsUpdate = true;
    // loot chests: fall with a beam, bounce, burst into coins, the gifter grabs the weapon
    let cn = 0;
    for (let i = chests.length - 1; i >= 0; i--) if (now - chests[i].t0 > 1.9) chests.splice(i, 1);
    for (const c of chests) {
      const t = now - c.t0; let y, sc = 1.6, ry = c.t0 * 3;
      if (t < 0.7) { const k = t / 0.7; y = 16 * (1 - k * k); ry += t * 6; }
      else { const b = t - 0.7; y = Math.max(0, Math.sin(Math.min(Math.PI, b * 9)) * 0.5 * Math.exp(-b * 4)); }
      if (t >= 0.7 && !c.landed) { c.landed = true; ring(c.x, c.z, { r0: 0.4, r1: 2.6, color: 0xffd36a, dur: 0.4 }); emit(solid, 8, c.x, 0.2, c.z, { color: 0xc9b89a, speed: 2.5, life: 0.5, size: 0.5, size1: 0.9, g: 1, up: 0.1, alpha: 0.7 }); shake(0.12); }
      if (t >= 1.15 && !c.done) {
        c.done = true;
        emit(glow, 30, c.x, 0.8, c.z, { colors: [0xffe066, 0xffd36a, 0xffffff, 0xffb347], speed: 6, life: 0.8, size: 0.35, g: 7, up: 0.9 });
        emit(glow, 1, c.x, 0.9, c.z, { color: 0xffd36a, speed: 0, life: 0.4, size: 5, size1: 2, g: 0, alpha: 0.8 });
        giveLoot(c.id); const p = vis.get(c.id); if (p) beam(p.x, p.z, { color: 0xffd36a, r: 0.7, h: 6, dur: 0.8, follow: c.id });
      }
      if (t > 1.15) sc = 1.6 * Math.max(0, 1 - (t - 1.15) / 0.5);
      if (chestMesh && cn < CH && sc > 0.01) { M.compose(V.set(c.x, y, c.z), Q.setFromEuler(E.set(0, ry, 0)), S.setScalar(sc)); chestMesh.setMatrixAt(cn++, M); }
      if (t < 0.7 && quality.halos) halos.push([c.x, y + 0.6, c.z, 1, 0.8, 0.3, 0.7, 2.6]);
    }
    if (chestMesh) { chestMesh.count = cn; chestMesh.instanceMatrix.needsUpdate = true; }
    // weapon drops: pop out of the fallen, hover, fly to the killer
    let dn = 0;
    for (let i = drops.length - 1; i >= 0; i--) if (now - drops[i].t0 > 1.3) drops.splice(i, 1);
    for (const d of drops) {
      const t = now - d.t0, ks = vis.get(d.id);
      let x = d.x, z = d.z, y = 0.6 + Math.min(1, t * 3) * 1.2;
      if (t > 0.7 && ks) { const k = Math.min(1, (t - 0.7) / 0.45), e = k * k; x += (ks.x - d.x) * e; z += (ks.z - d.z) * e; y = MathUtils.lerp(y, 1.2, e); }
      if (t > 1.15 && !d.done) { d.done = true; giveLoot(d.id); if (ks) emit(glow, 18, ks.x, 1.0, ks.z, { colors: [0xffffff, 0xffe066], speed: 4, life: 0.5, size: 0.35, g: 3 }); }
      if (dropMesh && dn < CH && !d.done) { M.compose(V.set(x, y, z), Q.setFromEuler(E.set(0.3, now * 7, 0)), S.setScalar(1.8)); dropMesh.setMatrixAt(dn++, M); }
      if (!d.done && quality.halos) halos.push([x, y, z, 1, 0.9, 0.5, 0.75, 1.8]);
    }
    if (dropMesh) { dropMesh.count = dn; dropMesh.instanceMatrix.needsUpdate = true; }
    if (world.phase === 'lobby' && looted.size) { looted.clear(); for (const v of vis.values()) if (v.loot) { v.loot = false; detach(v); } }
    if (world.phase === 'ceremony') { fireworks(now); if (now > (spotAt || 0)) { spotAt = now + 2.2; beam(0, 0, { color: 0xffe9a8, r: 1.3, h: 26, dur: 2.4, y: 1.5 }); } }

    updateParticles(glow, dt, halos);
    updateParticles(solid, dt, null);
    renderer.render(scene, camera);
  }

  // ------------------------------------------------------------------ event juice (animations + VFX; no text)
  function posOf(id, world) { const f = world.fighters.find((x) => x.id === id); if (f) return f; const s = vis.get(id); return s ? { x: s.x, y: s.y, z: s.z, id } : null; }
  function ring(x, z, o) { rings.push({ x, z, y: o.y, t0: time, dur: o.dur || 0.5, r0: o.r0 ?? 0.2, r1: o.r1 ?? 2, col: new Color(o.color ?? 0xffffff), kind: o.kind || 'wave' }); if (rings.length > RINGS) rings.shift(); }
  function shake(v) { cam.shake = Math.min(1.2, cam.shake + v); }
  const act = (id, state) => { const s = vis.get(id); if (s && s.a) s.a.play(state, time); return s; };
  function fx(e, world) {
    const now = time;
    switch (e.k) {
      case 'atk': { const s = vis.get(e.a); if (s && s.a) { const list = (s.loot && LOOT_ATK[s.model]) || ATTACKS[s.model] || ['attack']; s.a.play(list[s.atkN++ % list.length], now); } break; }
      case 'hit': {
        const s = vis.get(e.b); const p = posOf(e.b, world);
        if (s) { s.hit = now; if (s.a && (now >= s.a.until || e.c || e.m)) s.a.play('hit', now); }
        if (!p) break;
        // knockback away from the attacker + a tiny hit-stop on both (crits and loot weapons hit harder)
        const sa = vis.get(e.a), heavy = e.c || e.m || (sa && sa.loot);
        if (s && !e.s) { const ax = sa ? sa.x : p.x - Math.cos(s.face), az = sa ? sa.z : p.z - Math.sin(s.face); const dx = p.x - ax, dz = p.z - az, d = Math.hypot(dx, dz) || 1; s.kb = { x: dx / d, z: dz / d, m: heavy ? 0.75 : 0.35, t0: now }; s.freeze = now + (heavy ? 0.09 : 0.05); }
        if (sa && !e.s) sa.freeze = now + (heavy ? 0.08 : 0.04);
        if (heavy && !e.s) emit(glow, 1, p.x, (p.y || 0) + 0.9, p.z, { color: 0xffffff, speed: 0, life: 0.12, size: 2.4, size1: 1, g: 0 });
        action.x += (p.x - action.x) * 0.15; action.z += (p.z - action.z) * 0.15; action.w = Math.min(8, action.w + 0.4);
        const big = e.c || e.m;
        emit(glow, big ? 14 : 6, p.x, (p.y || 0) + 0.8, p.z, { colors: e.s ? [0xb45cff, 0xe0a0ff] : big ? [0xffffff, 0xffe066, 0xff9a3c] : [0xffffff, 0xfff1a8], speed: big ? 7 : 4.5, life: 0.35, size: big ? 0.5 : 0.35, g: 6, up: 0.3 });
        if (big) { ring(p.x, p.z, { y: 0.8, r0: 0.2, r1: 1.6, color: 0xfff0c0, dur: 0.25 }); shake(e.m ? 0.25 : 0.12); }
        else if (Math.hypot(p.x - cam.tx, p.z - cam.tz) < 7) shake(0.03);
        break;
      }
      case 'block': { act(e.a, 'block'); const p = posOf(e.a, world); if (p) emit(glow, 6, p.x, 0.9, p.z, { color: 0x7fe7ff, speed: 3, life: 0.3, size: 0.35, g: 0 }); break; }
      case 'ko': {
        const p = posOf(e.b, world); if (!p) break;
        const s = vis.get(e.b);
        // the fallen fighter plays its death clip where it fell (pooled actor; sinks away after ~2 s)
        if (s && s.a && corpses.length < 8) { const a = s.a; s.a = null; a.play('die', now, { fade: 0.08 }); a.base = 'dead'; corpses.push({ a, t0: now, x: p.x, z: p.z }); }
        else if (s) detach(s);
        emit(glow, 22, p.x, 0.8, p.z, { colors: [0xffffff, 0xffe066, 0xff6ad5, 0x5ef0ff], speed: 7, life: 0.7, size: 0.5, g: 5, up: 0.6 });
        emit(solid, 10, p.x, 0.5, p.z, { colors: [0xf4efff, 0xd9d0f0], speed: 2.2, life: 0.8, size: 0.9, size1: 1.6, g: -0.5, alpha: 0.75, up: 0.3 });
        emit(glow, 1, p.x, 1.2, p.z, { color: 0xeafcff, speed: 0.1, life: 1.6, size: 2.2, size1: 1, g: -2.2, drag: 0.5, up: 1, alpha: 0.9 });
        ring(p.x, p.z, { r0: 0.3, r1: 3, color: 0xffd6ff, dur: 0.45 });
        shake(e.multi || e.streak ? 0.35 : 0.16);
        const final = e.left > 0 && e.left <= 1;
        if (e.a && (final || e.first || e.multi || e.streak || e.giant || (e.left > 0 && e.left <= 3)) && (final || !cam.kill || now > cam.kill.until + 3)) { cam.kill = { id: e.a, t0: now, until: now + (final ? 2.6 : 1.9), d: final ? 6.5 : 7.5, p: final ? 0.2 : 0.28 }; act(e.a, 'cheer'); cam.zoom = final ? 1 : 0.6; }
        // the fallen drop their weapon: the killer picks it up on their 2nd takedown (or any multi / streak)
        const sk = e.a ? vis.get(e.a) : null;
        if (sk && !looted.has(e.a) && !(e.s || e.m) && ((e.n || 0) >= 2 || e.multi || e.streak) && drops.length < CH) drops.push({ id: e.a, x: p.x, z: p.z, t0: now });
        vis.delete(e.b);
        break;
      }
      case 'dash': { act(e.a, 'dash'); const p = posOf(e.a, world); if (p) { ring(p.x, p.z, { r0: 0.3, r1: 1.4, color: 0xcfe8ff, dur: 0.3 }); emit(solid, 6, p.x, 0.2, p.z, { color: 0xd8cbe8, speed: 2, life: 0.5, size: 0.6, size1: 1, g: 0, alpha: 0.6 }); } break; }
      case 'shield': { act(e.a, 'block'); const p = posOf(e.a, world); if (p) ring(p.x, p.z, { r0: 0.4, r1: 1.6, color: 0x5ee8ff, dur: 0.4 }); break; }
      case 'spin': { const s = act(e.a, 'spin'); if (s) s.spinT = now; const p = posOf(e.a, world); if (p) { ring(p.x, p.z, { r0: 0.5, r1: 3, color: 0xffe36a, dur: 0.4 }); emit(glow, 16, p.x, 0.7, p.z, { color: 0xffe36a, speed: 6, life: 0.4, size: 0.4, g: 0, up: 0 }); shake(0.15); } break; }
      case 'heal': { const p = posOf(e.a, world); if (p) emit(glow, 4, p.x, 0.4, p.z, { color: 0x6dff9c, speed: 0.6, life: 0.9, size: 0.35, g: -2.5, up: 1, jitter: 0.6 }); break; }
      case 'drop': { const s = vis.get(e.a); if (s) s.spawn = now; break; }
      case 'land': { const p = posOf(e.a, world); if (p) { ring(p.x, p.z, { r0: 0.3, r1: 1.8, color: 0xfff1d0, dur: 0.35 }); emit(solid, 8, p.x, 0.15, p.z, { color: 0xc9b89a, speed: 2.5, life: 0.5, size: 0.5, size1: 0.9, g: 1, up: 0.1, alpha: 0.7 }); } break; }
      case 'meteor': meteors.push({ x: e.x, z: e.z, t0: now, d: Math.max(0.3, e.d) }); if (meteors.length > MET) meteors.shift(); ring(e.x, e.z, { kind: 'warn', r0: 2.4, dur: Math.max(0.3, e.d), color: 0xff3b2f }); break;
      case 'boom':
        emit(glow, 34, e.x, 0.5, e.z, { colors: [0xffffff, 0xffd36a, 0xff8a3d, 0xff4b1f], speed: 9, life: 0.7, size: 0.8, g: 4, up: 0.5 });
        emit(solid, 14, e.x, 0.6, e.z, { colors: [0x5a4a6e, 0x7d6a8f, 0x3a2f4a], speed: 3.5, life: 1.2, size: 1.2, size1: 2.4, g: -0.6, alpha: 0.8, up: 0.5 });
        ring(e.x, e.z, { r0: 0.5, r1: e.r * 1.6, color: 0xffb060, dur: 0.5 }); ring(e.x, e.z, { r0: 0.2, r1: e.r, color: 0xffffff, dur: 0.25 });
        emit(glow, 1, e.x, 1.2, e.z, { color: 0xffb060, speed: 0, life: 0.3, size: 9, size1: 3, g: 0, alpha: 0.9 });
        emit(solid, 10, e.x, 0.3, e.z, { colors: [0x6b5a44, 0x4a3b2c], speed: 6, life: 0.9, size: 0.3, g: 14, up: 1.2 });
        scorches.push({ x: e.x, z: e.z, t0: now, r: e.r * 1.4 + 1 }); if (scorches.length > SC) scorches.shift();
        shake(0.5); cam.zoom = Math.max(cam.zoom, 0.3); break;
      case 'nuke': shake(1.1); cam.zoom = 0.8; for (let i = 0; i < 6; i++) beam(Math.cos(i) * 8, Math.sin(i) * 8, { color: 0xff8af0, r: 1.4, h: 30, dur: 1.4 }); ring(0, 0, { r0: 1, r1: R, color: 0xff8af0, dur: 1.2, y: 0.3 }); emit(glow, 60, 0, 1, 0, { colors: [0xffffff, 0xff8af0, 0x9b5de5], speed: 22, life: 1, size: 1, g: 0, up: 0.1 }); break;
      case 'power': case 'revive': {
        // gift powers are shown, not written: a coloured pillar of light + ring on the viewer's fighter
        act(e.a, e.k === 'revive' ? 'rise' : 'summon');
        const p = posOf(e.a, world); if (!p) break;
        const col = { speed: 0xffe066, meteor: 0xff8a3d, giant: 0xffb347, revive: 0xff6fb5, nuke: 0xff8af0 }[e.tier] ?? 0xff6fb5;
        ring(p.x, p.z, { r0: 0.3, r1: 3.2, color: col, dur: 0.6 });
        for (let i = 0; i < 7; i++) emit(glow, 4, p.x, 0.2 + i * 0.55, p.z, { color: col, speed: 1.2, life: 0.9, size: 0.6, g: -4, up: 1, jitter: 0.5 });
        if (quality.halos) emit(glow, 1, p.x, 1.4, p.z, { color: col, speed: 0, life: 0.8, size: 5, size1: 2, g: 0, alpha: 0.6 });
        // a pillar of light from the sky onto the gifter + the camera swings over for a look
        beam(p.x, p.z, { color: col, r: e.tier === 'giant' ? 1.6 : 1.0, h: 24, dur: e.tier === 'giant' || e.k === 'revive' ? 1.8 : 1.1, follow: e.a });
        if (e.k === 'revive') for (let i = 0; i < 3; i++) emit(glow, 6, p.x, 0.3, p.z, { colors: [0x6dff9c, 0xffffff], speed: 1.5, life: 1.2, size: 0.4, g: -3, up: 1, jitter: 1.2 });
        if (e.tier === 'giant') { ring(p.x, p.z, { r0: 0.5, r1: 5, color: 0xffb347, dur: 0.7 }); emit(solid, 12, p.x, 0.2, p.z, { colors: [0x8a7a62, 0x6b5a44], speed: 5, life: 0.8, size: 0.35, g: 12, up: 1 }); shake(0.45); }
        if (!cam.kill || now > cam.kill.until) cam.kill = { id: e.a, t0: now, until: now + 1.6, d: 7.5, p: 0.3 };
        shake(0.2); break;
      }
      case 'gift': {
        // every gift also drops a loot chest from the sky next to the giver's fighter (one per fighter per round)
        if (!e.a || world.phase !== 'battle' || looted.has(e.a) || chests.some((c) => c.id === e.a) || chests.length >= CH) break;
        const p = posOf(e.a, world); if (!p) break;
        const a = Math.random() * TAU, x = p.x + Math.cos(a) * 1.3, z = p.z + Math.sin(a) * 1.3;
        chests.push({ id: e.a, x, z, t0: now }); beam(x, z, { color: 0xffd36a, r: 0.55, h: 18, dur: 1.0 });
        break;
      }
      case 'cmd': {
        if (e.c === 'attack' || e.c === 'revenge') { const p = posOf(e.b, world); if (p) ring(p.x, p.z, { kind: 'mark', r0: 0.9, dur: 1.5, color: 0xff3355 }); }
        if (e.c === 'dance') act(e.a, 'taunt');
        break;
      }
      case 'hype': for (let i = 0; i < 40; i++) emit(glow, 1, (Math.random() - 0.5) * 30, 9 + Math.random() * 4, (Math.random() - 0.5) * 30, { color: 0xff7ab8, speed: 0.5, life: 2.2, size: 0.6, g: 4, drag: 2.5 }); break;
      case 'win': confettiUntil = now + 6; shake(0.3); fireworkAt = now + 0.8; break;
      case 'phase': if (e.ph === 'battle') { ring(0, 0, { r0: 2, r1: R, color: 0xffffff, dur: 0.9, y: 0.2 }); shake(0.2); } break;
    }
  }
  let confettiUntil = 0, spotAt = 0;
  function confetti(now) {
    if (now < confettiUntil) emit(solid, 4, (Math.random() - 0.5) * 7, 7 + Math.random() * 2, (Math.random() - 0.5) * 4, { colors: [0xff4d5e, 0xffd23f, 0x3ec7ff, 0x9be564, 0xff6fb5, 0xffffff], speed: 1.2, life: 3.2, size: 0.32, g: 1.6, drag: 1.4, confetti: true, up: 0 });
  }

  // ------------------------------------------------------------------ public api
  const proj = new Vector3();
  const api = {
    kind: 'webgl', renderer, ready, scene,
    get loaded() { return !!kit; }, get error() { return loadErr; },
    resize(w, h, pr) {
      W = w; H = h; aspect = w / h;
      renderer.setPixelRatio(pr); renderer.setSize(w, h, false);
      camera.aspect = aspect; camera.fov = aspect < 0.7 ? 52 : 42;
      // portrait: lift the picture so the action sits in the upper-middle (TikTok's comments cover the bottom third)
      if (aspect < 0.8) camera.setViewOffset(w, h, 0, h * 0.1, w, h); else camera.clearViewOffset();
      camera.updateProjectionMatrix();
      const px = (h * pr) / (2 * Math.tan(MathUtils.degToRad(camera.fov / 2)));
      glow.mat.uniforms.px.value = px; solid.mat.uniforms.px.value = px;
    },
    setQuality(q) { quality = { ...quality, ...q }; partMult = q.particles ?? 1; },
    frame(world, dt, now) { confetti(now); frame(world, dt, now); },
    fx,
    project(x, y, z) { proj.set(x, y, z).project(camera); return { x: (proj.x * 0.5 + 0.5) * W, y: (-proj.y * 0.5 + 0.5) * H, z: proj.z, ok: proj.z < 1 && proj.z > -1 }; },
    drawn() { return selected.length ? selected : null; },
    headY(f) { const s = vis.get(f.id); return HEAD * (s ? s.gs : 1); },
    stats() { const i = renderer.info; let actors = 0; for (const s of vis.values()) if (s.a) actors++; return { calls: i.render.calls, tris: i.render.triangles, tex: i.memory.textures, geo: i.memory.geometries, chars: actors, corpses: corpses.length, parts: glow.list.length + solid.list.length, loaded: !!kit }; },
    dispose() {
      disposed = true;
      for (const s of vis.values()) detach(s); vis.clear();
      for (const c of corpses) kit && kit.release(c.a); corpses.length = 0;
      if (arena) { scene.remove(arena.group); arena.dispose(); }
      scene.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
      if (env) env.dispose(); if (kit) kit.dispose();
      for (const d of disposables) try { d.dispose(); } catch {}
      renderer.dispose();
    },
    loseContext() { try { renderer.forceContextLoss(); } catch {} },
  };
  return api;
}
