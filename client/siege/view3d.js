// Dark Dimension Siege, 3D view (Three.js), iPhone Safari first:
// - one static night scene: a ruined low-poly city, the last citadel wall, and the rift (a cheap swirl shader)
// - instanced chibi defenders with class props, instanced creatures (imp / brute / wraith), three hand-built bosses
// - glow halos + additive particles for every spell; camera shakes; no real-time shadows, no post-processing
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, PointLight, AmbientLight,
  Mesh, InstancedMesh, Points, Group, BufferGeometry, BufferAttribute, CylinderGeometry, SphereGeometry, CapsuleGeometry,
  BoxGeometry, PlaneGeometry, RingGeometry, TorusGeometry, ConeGeometry, OctahedronGeometry, CircleGeometry, IcosahedronGeometry,
  MeshToonMaterial, MeshBasicMaterial, ShaderMaterial, CanvasTexture, DataTexture, RedFormat, NearestFilter,
  AdditiveBlending, NormalBlending, BackSide, DoubleSide, Matrix4, Vector3, Quaternion, Euler, SRGBColorSpace, ACESFilmicToneMapping,
} from 'three';
import { WALL_Z, WALL_Y, GATE_Z, RIFT_Z, CLASSES } from '../../public/shared/siege-data.js';
import { SFLAG } from '../../public/shared/siege-sim.js';

const TAU = Math.PI * 2;
const SKIN = [0xffd9b8, 0xf1c08f, 0xd9a066, 0xa86b45, 0x7a4a2c, 0xffe3cf];
const CLS_COL = CLASSES.map((c) => c.color);
const SHOT_COL = { m: [0xc070ff, 0xff7a3a], a: [0x7ff0ff, 0xffffff], h: [0x7dffa8, 0xffffff], v: [0xffd34d, 0xff6ad5], g: [0xffe080, 0xffffff], w: [0xffffff, 0xff8a6a] };
const WALL_FRONT = GATE_Z, WALL_BACK = 6.2, RIFT_Y = 7.5;

export function createSiegeView(canvas, opts = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: !!opts.aa, alpha: false, depth: true, stencil: false, powerPreference: 'default', preserveDrawingBuffer: !!opts.preserve, failIfMajorPerformanceCaveat: false });
  if (!renderer.getContext()) throw new Error('no webgl');
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = false;

  const scene = new Scene();
  const FOG = new Color(0x1c0f30);
  scene.background = FOG.clone();
  scene.fog = new Fog(0x1c0f30, 34, 95);
  const camera = new PerspectiveCamera(50, 9 / 16, 0.5, 260);
  const global = [];
  const keep = (x) => { global.push(x); return x; };

  // ------------------------------------------------------------------ light
  const hemi = new HemisphereLight(0x8fa0ff, 0x2a1426, 1.05); scene.add(hemi);
  const amb = new AmbientLight(0x6a4a8a, 0.35); scene.add(amb);
  const moon = new DirectionalLight(0xb8c4ff, 0.9); moon.position.set(-20, 30, 10); scene.add(moon);
  const riftLight = new PointLight(0xb040ff, 60, 60, 1.4); riftLight.position.set(0, 6, RIFT_Z + 4); scene.add(riftLight);
  const wallLight = new PointLight(0xffa050, 14, 22, 1.6); wallLight.position.set(0, 5, 2); scene.add(wallLight);
  const ramp = keep(new DataTexture(new Uint8Array([70, 160, 255]), 3, 1, RedFormat)); ramp.minFilter = ramp.magFilter = NearestFilter; ramp.needsUpdate = true;
  const toon = (color, extra = {}) => keep(new MeshToonMaterial({ color, gradientMap: ramp, ...extra }));
  const basic = (color, extra = {}) => keep(new MeshBasicMaterial({ color, ...extra }));

  // ------------------------------------------------------------------ procedural textures
  let seed = 11; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  function canvasTex(w, h, draw, { repeat = null } = {}) {
    const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
    const t = keep(new CanvasTexture(c)); t.colorSpace = SRGBColorSpace; t.anisotropy = 2;
    if (repeat) { t.wrapS = t.wrapT = 1000; t.repeat.set(repeat[0], repeat[1]); }
    return t;
  }
  const stoneTex = canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = '#4c4658'; g.fillRect(0, 0, W, H);
    for (let r = 0; r < 6; r++) for (let c = -1; c < 4; c++) {
      const h = H / 6, w = W / 3, x = (c + (r % 2) * 0.5) * w, y = r * h;
      g.fillStyle = `hsl(${255 + rnd() * 25}, ${7 + rnd() * 8}%, ${30 + rnd() * 16}%)`; g.fillRect(x + 3, y + 3, w - 6, h - 6);
      g.fillStyle = 'rgba(255,255,255,0.06)'; g.fillRect(x + 3, y + 3, w - 6, 5);
    }
    g.strokeStyle = 'rgba(10,0,20,0.5)'; g.lineWidth = 2;
    for (let i = 0; i < 5; i++) { g.beginPath(); let x = rnd() * W, y = rnd() * H; g.moveTo(x, y); for (let k = 0; k < 4; k++) { x += (rnd() - 0.5) * 50; y += rnd() * 40; g.lineTo(x, y); } g.stroke(); }
  }, { repeat: [6, 1] });
  const groundTex = canvasTex(256, 256, (g, W, H) => {
    g.fillStyle = '#2a2232'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '255,255,255' : '0,0,0'},${0.03 + rnd() * 0.06})`; g.fillRect(rnd() * W, rnd() * H, 2 + rnd() * 6, 2 + rnd() * 6); }
    g.strokeStyle = 'rgba(180,60,255,0.28)'; g.lineWidth = 2.2;
    for (let i = 0; i < 7; i++) { g.beginPath(); let x = rnd() * W, y = rnd() * H; g.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (rnd() - 0.5) * 60; y += (rnd() - 0.5) * 60; g.lineTo(x, y); } g.stroke(); }
  }, { repeat: [7, 9] });
  const winTex = canvasTex(128, 256, (g, W, H) => {
    g.fillStyle = '#3a3448'; g.fillRect(0, 0, W, H);
    for (let y = 10; y < H - 10; y += 26) for (let x = 10; x < W - 10; x += 28) {
      const lit = rnd(); g.fillStyle = lit < 0.12 ? '#ffb04a' : lit < 0.2 ? '#b060ff' : '#14101c'; g.fillRect(x, y, 14, 16);
    }
    g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, 0, W, 6);
  });
  const softTex = canvasTex(64, 64, (g, W) => { const gr = g.createRadialGradient(W / 2, W / 2, 0, W / 2, W / 2, W / 2); gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, W, W); });

  const G = {
    box: keep(new BoxGeometry(1, 1, 1)), sph: keep(new SphereGeometry(1, 14, 10)), sphLo: keep(new SphereGeometry(1, 8, 6)),
    cone: keep(new ConeGeometry(1, 1, 7)), cyl: keep(new CylinderGeometry(1, 1, 1, 10)), plane: keep(new PlaneGeometry(1, 1)),
    oct: keep(new OctahedronGeometry(1, 0)), ico: keep(new IcosahedronGeometry(1, 0)),
  };

  // ------------------------------------------------------------------ sky, moon, stars
  const sky = new Mesh(keep(new SphereGeometry(200, 24, 14)), keep(new ShaderMaterial({
    side: BackSide, depthWrite: false, fog: false, uniforms: { end: { value: 0 }, dawn: { value: 0 } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP; uniform float end; uniform float dawn;
      void main(){ float h = clamp(vP.y, -0.2, 1.0); float rift = pow(max(0.0, dot(normalize(vec3(vP.x, vP.y*1.6, vP.z)), vec3(0.0, 0.12, -1.0))), 6.0);
        vec3 top = vec3(0.03, 0.02, 0.09), hor = vec3(0.22, 0.07, 0.24);
        vec3 c = mix(hor, top, smoothstep(-0.05, 0.55, h)) + vec3(0.55, 0.12, 0.6) * rift * 0.75;
        vec3 dc = mix(vec3(1.0, 0.62, 0.38), vec3(0.35, 0.55, 0.95), smoothstep(-0.05, 0.6, h));
        c = mix(c, dc, dawn); c = mix(c, vec3(0.35, 0.02, 0.04) * (0.6 + rift), end);
        gl_FragColor = vec4(c, 1.0); }`,
  })));
  sky.renderOrder = -10; scene.add(sky);
  const moonMesh = new Mesh(G.plane, basic(0xf4ecff, { fog: false, transparent: true, map: canvasTex(128, 128, (g, W) => { const gr = g.createRadialGradient(W / 2, W / 2, W * 0.2, W / 2, W / 2, W / 2); gr.addColorStop(0, '#fff8f0'); gr.addColorStop(0.42, '#efe2ff'); gr.addColorStop(0.47, 'rgba(200,170,255,0.5)'); gr.addColorStop(1, 'rgba(120,80,200,0)'); g.fillStyle = gr; g.fillRect(0, 0, W, W); g.fillStyle = 'rgba(160,140,200,0.35)'; for (const [x, y, r] of [[52, 50, 9], [74, 70, 6], [60, 78, 5]]) { g.beginPath(); g.arc(x, y, r, 0, TAU); g.fill(); } }) }));
  moonMesh.position.set(-34, 46, -120); moonMesh.scale.set(30, 30, 1); moonMesh.lookAt(0, 8, 20); scene.add(moonMesh);
  const starGeo = keep(new BufferGeometry());
  { const n = 260, p = new Float32Array(n * 3); for (let i = 0; i < n; i++) { const a = rnd() * TAU, e = 0.12 + rnd() * 1.3; p.set([Math.cos(a) * Math.cos(e) * 180, Math.sin(e) * 180, Math.sin(a) * Math.cos(e) * 180 - 20], i * 3); } starGeo.setAttribute('position', new BufferAttribute(p, 3)); }
  const stars = new Points(starGeo, keep(new ShaderMaterial({ transparent: true, depthWrite: false, fog: false, uniforms: { time: { value: 0 }, op: { value: 1 } },
    vertexShader: 'uniform float time; varying float vA; void main(){ vA = 0.45 + 0.55 * sin(time * 2.0 + position.x * 0.7 + position.z); gl_PointSize = 2.2; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform float op; varying float vA; void main(){ gl_FragColor = vec4(vec3(1.0, 0.95, 1.0) * vA * op, 1.0); }' })));
  stars.renderOrder = -9; scene.add(stars);

  // ------------------------------------------------------------------ ground, road, ruined city
  const ground = new Mesh(keep(new PlaneGeometry(140, 160).rotateX(-Math.PI / 2)), toon(0x8a7c98, { map: groundTex }));
  ground.position.set(0, 0, -30); scene.add(ground);
  const road = new Mesh(keep(new PlaneGeometry(9, 44).rotateX(-Math.PI / 2)), toon(0x5a4c66, { transparent: true, opacity: 0.5 }));
  road.position.set(0, 0.02, -18); scene.add(road);
  // buildings: instanced boxes with lit windows, some leaning / broken
  const BLD = 46;
  const bld = new InstancedMesh(G.box, toon(0xffffff, { map: winTex }), BLD); bld.frustumCulled = false;
  const roofs = new InstancedMesh(G.cone, toon(0x2a2234), BLD); roofs.frustumCulled = false;
  const rubble = new InstancedMesh(G.ico, toon(0x5a5064), 70); rubble.frustumCulled = false;
  const M4 = new Matrix4(), V = new Vector3(), Q = new Quaternion(), E = new Euler(), S = new Vector3(), C = new Color();
  const put = (im, i, x, y, z, sx, sy, sz, rx = 0, ry = 0, rz = 0, col = null) => { im.setMatrixAt(i, M4.compose(V.set(x, y, z), Q.setFromEuler(E.set(rx, ry, rz)), S.set(sx, sy, sz))); if (col !== null) im.setColorAt(i, C.setHex(col)); };
  {
    let n = 0, r = 0;
    for (const side of [-1, 1]) for (let i = 0; i < BLD / 2; i++) {
      const row = i % 3, z = -48 + Math.floor(i / 3) * 6.6 + rnd() * 2, x = side * (10.5 + row * 5.5 + rnd() * 2.5);
      const w = 3 + rnd() * 2.6, d = 3 + rnd() * 2.6, h = 3.5 + rnd() * (row === 0 ? 7 : 13), broken = rnd() < 0.35;
      const lean = broken ? (rnd() - 0.5) * 0.18 : 0;
      put(bld, n, x, h / 2, z, w, h, d, lean * 0.5, rnd() * 0.3, lean, rnd() < 0.5 ? 0x9a8cb0 : 0x7e7494);
      if (!broken && rnd() < 0.45) put(roofs, n, x, h + 1, z, w * 0.75, 2, d * 0.75, 0, Math.PI / 4, 0); else put(roofs, n, 0, -50, 0, 0.01, 0.01, 0.01);
      n++;
      if (r < 70 && broken) for (let k = 0; k < 3 && r < 70; k++) put(rubble, r++, x - side * (w * 0.6 + rnd() * 2), 0.3, z + (rnd() - 0.5) * 4, 0.5 + rnd() * 0.9, 0.4 + rnd() * 0.7, 0.5 + rnd() * 0.9, rnd(), rnd() * 3, rnd());
    }
    while (r < 70) { const s = rnd() < 0.5 ? -1 : 1; put(rubble, r++, s * (6.5 + rnd() * 3), 0.25, -40 + rnd() * 38, 0.3 + rnd() * 0.7, 0.3 + rnd() * 0.5, 0.3 + rnd() * 0.7, rnd(), rnd() * 3, rnd()); }
    bld.count = n; roofs.count = n;
  }
  scene.add(bld, roofs, rubble);

  // ------------------------------------------------------------------ the citadel wall + gate + towers + torches
  const wall = new Group(); scene.add(wall);
  const stoneM = toon(0xc8bcd8, { map: stoneTex });
  const wallBody = new Mesh(G.box, stoneM); wallBody.scale.set(22, WALL_Y, WALL_BACK - WALL_FRONT); wallBody.position.set(0, WALL_Y / 2, (WALL_FRONT + WALL_BACK) / 2); wall.add(wallBody);
  const walkway = new Mesh(G.box, toon(0x6a5e78)); walkway.scale.set(22, 0.12, WALL_BACK - WALL_FRONT - 0.3); walkway.position.set(0, WALL_Y + 0.02, (WALL_FRONT + WALL_BACK) / 2 + 0.1); wall.add(walkway);
  const cren = new InstancedMesh(G.box, toon(0xb4a8c8), 24); cren.frustumCulled = false;
  for (let i = 0; i < 24; i++) put(cren, i, -10.6 + i * 0.92, WALL_Y + 0.42, WALL_FRONT + 0.22, 0.56, 0.84, 0.44);
  wall.add(cren);
  const gateArch = new Mesh(G.box, toon(0x3a2c48)); gateArch.scale.set(3.2, 2.1, 0.3); gateArch.position.set(0, 1.05, WALL_FRONT - 0.05); wall.add(gateArch);
  const gateRune = new Mesh(G.plane, basic(0xb050ff, { transparent: true, opacity: 0.7, blending: AdditiveBlending, depthWrite: false, map: canvasTex(128, 96, (g, W, H) => { g.strokeStyle = '#fff'; g.lineWidth = 5; g.beginPath(); g.arc(W / 2, H * 0.62, H * 0.32, 0, TAU); g.stroke(); g.beginPath(); for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; g.moveTo(W / 2, H * 0.62); g.lineTo(W / 2 + Math.cos(a) * H * 0.3, H * 0.62 + Math.sin(a) * H * 0.3); } g.stroke(); }) }));
  gateRune.scale.set(2.8, 2, 1); gateRune.position.set(0, 1.05, WALL_FRONT - 0.22); wall.add(gateRune);
  const towers = [];
  for (const sx of [-1, 1]) {
    const t = new Group(); t.position.set(sx * 11.6, 0, (WALL_FRONT + WALL_BACK) / 2);
    const body = new Mesh(G.cyl, stoneM); body.scale.set(1.9, 5.6, 1.9); body.position.y = 2.8; t.add(body);
    const top = new Mesh(G.cyl, toon(0xb4a8c8)); top.scale.set(2.2, 0.6, 2.2); top.position.y = 5.9; t.add(top);
    const roof = new Mesh(G.cone, toon(0x5a2a6a)); roof.scale.set(2.5, 3.2, 2.5); roof.position.y = 7.8; t.add(roof);
    const flag = new Mesh(G.plane, basic(0xffc23a, { side: DoubleSide })); flag.scale.set(1.3, 0.8, 1); flag.position.set(0.7, 10.1, 0); t.add(flag);
    const pole = new Mesh(G.cyl, toon(0x3a2c48)); pole.scale.set(0.06, 1.8, 0.06); pole.position.y = 10; t.add(pole);
    wall.add(t); towers.push({ t, flag });
  }
  // the keep behind the wall (the citadel the survivors hide in)
  const keepG = new Group(); keepG.position.set(0, 0, 30);
  { const b = new Mesh(G.box, stoneM); b.scale.set(9, 7, 5); b.position.y = 3.5; keepG.add(b); const r = new Mesh(G.cone, toon(0x5a2a6a)); r.scale.set(5, 4, 5); r.rotation.y = Math.PI / 4; r.position.y = 9; keepG.add(r);
    for (const sx of [-1, 1]) { const tw = new Mesh(G.cyl, stoneM); tw.scale.set(1.4, 10, 1.4); tw.position.set(sx * 4.6, 5, 0); keepG.add(tw); const tr = new Mesh(G.cone, toon(0x5a2a6a)); tr.scale.set(1.8, 3, 1.8); tr.position.set(sx * 4.6, 11.5, 0); keepG.add(tr); } }
  scene.add(keepG);
  const TORCH = [-9.6, -6.2, -2.4, 2.4, 6.2, 9.6];
  const torchM = new InstancedMesh(G.cyl, toon(0x3a2418), TORCH.length); torchM.frustumCulled = false;
  TORCH.forEach((x, i) => put(torchM, i, x, WALL_Y + 0.6, WALL_FRONT + 0.15, 0.07, 1.2, 0.07));
  scene.add(torchM);

  // ------------------------------------------------------------------ the rift (swirl shader) + a portal ring
  const riftMat = keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide, fog: false,
    uniforms: { time: { value: 0 }, power: { value: 1 }, hue: { value: 0 } },
    vertexShader: 'varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec2 vU; uniform float time; uniform float power; uniform float hue;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
      void main(){ vec2 p = (vU - 0.5) * vec2(1.0, 1.25); float r = length(p) * 2.0; float a = atan(p.y, p.x);
        float sw = n(vec2(a * 2.0 + r * 4.0 - time * 1.4, r * 3.0 - time * 0.6)) * 0.7 + n(vec2(a * 5.0 - time * 2.0, r * 8.0)) * 0.3;
        float edge = smoothstep(1.0, 0.82, r) * smoothstep(0.0, 0.5, r + sw * 0.4);
        float core = smoothstep(0.55, 0.0, r);
        vec3 purple = vec3(0.62, 0.18, 1.0), red = vec3(1.0, 0.12, 0.28), white = vec3(1.0, 0.85, 1.0);
        vec3 c = mix(purple, red, clamp(sw * 1.3 - 0.2 + hue, 0.0, 1.0)) * (0.55 + sw * 0.9) * edge;
        c += white * pow(smoothstep(0.96, 0.84, r) * smoothstep(0.7, 0.86, r), 2.0) * 0.6;
        c = mix(c, vec3(0.05, 0.0, 0.08), core * 0.75) + purple * core * sw * 0.35;
        gl_FragColor = vec4(c * power, 1.0); }`,
  }));
  const rift = new Mesh(keep(new PlaneGeometry(13, 16)), riftMat); rift.position.set(0, RIFT_Y, RIFT_Z - 1); scene.add(rift);
  const riftRing = new Mesh(keep(new TorusGeometry(1, 0.05, 6, 48)), basic(0xd080ff, { transparent: true, opacity: 0.8, blending: AdditiveBlending, depthWrite: false, fog: false }));
  riftRing.scale.set(6.2, 7.8, 6); riftRing.position.copy(rift.position); riftRing.position.z += 0.2; scene.add(riftRing);
  const riftPool = new Mesh(keep(new CircleGeometry(1, 40).rotateX(-Math.PI / 2)), basic(0x9a30ff, { transparent: true, opacity: 0.5, blending: AdditiveBlending, depthWrite: false }));
  riftPool.scale.set(9, 1, 4); riftPool.position.set(0, 0.04, RIFT_Z + 1.5); scene.add(riftPool);
  const SH = 16;
  const shards = new InstancedMesh(G.oct, toon(0x3a1a50, { emissive: 0x7a20c0 }), SH); shards.frustumCulled = false; scene.add(shards);

  // ------------------------------------------------------------------ barrier (the Ascension dome over the wall)
  const barrierMat = keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide, uniforms: { time: { value: 0 }, a: { value: 0 }, hit: { value: 0 }, col: { value: new Color(0x5ac8ff) } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }',
    fragmentShader: `varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float time; uniform float a; uniform float hit; uniform vec3 col;
      void main(){ float f = 1.0 - abs(dot(vN, vV)); vec2 g = abs(fract(vec2(atan(vP.x, vP.z) * 5.0, vP.y * 6.0)) - 0.5);
        float hex = smoothstep(0.42, 0.5, max(g.x, g.y)); float band = 0.5 + 0.5 * sin(vP.y * 18.0 - time * 3.0);
        float k = pow(f, 2.4) * 0.6 + hex * 0.2 + band * 0.05; gl_FragColor = vec4(mix(col, vec3(1.0), hit * 0.6) * k * a, 1.0); }`,
  }));
  // a curved shield wall standing just in front of the battlements (open cylinder arc facing the rift)
  const barrier = new Mesh(keep(new CylinderGeometry(1, 1, 1, 36, 1, true, Math.PI - 0.95, 1.9).translate(0, 0.5, 0)), barrierMat);
  barrier.scale.set(14, 7, 14); barrier.position.set(0, 0, WALL_FRONT + 13.2); barrier.renderOrder = 8; scene.add(barrier);

  // ------------------------------------------------------------------ defenders (instanced chibis + class props)
  const CAP = opts.maxChars || 70;
  const part = (geo, m, n = 1) => { const im = new InstancedMesh(geo, m, CAP * n); im.frustumCulled = false; im.count = 0; const c = new Color(1, 1, 1); for (let i = 0; i < CAP * n; i++) im.setColorAt(i, c); scene.add(im); return im; };
  const P = {
    body: part(keep(new CapsuleGeometry(0.27, 0.24, 3, 10)), toon(0xffffff)),
    head: part(keep(new SphereGeometry(0.36, 14, 10)), toon(0xffffff)),
    hair: part(keep(new SphereGeometry(0.385, 14, 8, 0, TAU, 0, Math.PI * 0.52)), toon(0xffffff)),
    eyes: part(keep(new SphereGeometry(0.058, 8, 6)), basic(0x1b1430), 2),
    hands: part(keep(new SphereGeometry(0.13, 10, 8)), toon(0xffffff), 2),
    feet: part(keep(new SphereGeometry(0.12, 8, 6)), toon(0x2a2238), 2),
    staff: part(keep(new CylinderGeometry(0.04, 0.05, 1.3, 6)), toon(0x6a4a2a)),
    orb: part(keep(new SphereGeometry(0.15, 10, 8)), toon(0xffffff, { emissive: 0x6040a0 })),
    hat: part(keep(new ConeGeometry(0.4, 0.62, 8)), toon(0xffffff)),
    sword: part(keep(new BoxGeometry(0.09, 0.85, 0.05)), toon(0xe8eef8, { emissive: 0x303848 })),
    shield: part(keep(new CylinderGeometry(0.28, 0.28, 0.07, 10).rotateX(Math.PI / 2)), toon(0xffffff)),
    bow: part(keep(new TorusGeometry(0.4, 0.03, 5, 14, Math.PI)), toon(0x8a5a2a)),
    halo: part(keep(new TorusGeometry(0.22, 0.035, 5, 16).rotateX(Math.PI / 2)), basic(0xfff2a0)),
    shadow: part(keep(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2)), keep(new MeshBasicMaterial({ map: softTex, transparent: true, depthWrite: false }))),
  };
  P.shadow.renderOrder = 2;

  // ------------------------------------------------------------------ creatures (instanced, by kind)
  const ECAP = 130;
  const epart = (geo, m, n = 1) => { const im = new InstancedMesh(geo, m, ECAP * n); im.frustumCulled = false; im.count = 0; const c = new Color(1, 1, 1); for (let i = 0; i < ECAP * n; i++) im.setColorAt(i, c); scene.add(im); return im; };
  const eyeM = basic(0xffe14a);
  const EN = {
    impBody: epart(G.sph, toon(0xffffff)), impHorn: epart(G.cone, toon(0x1a0a10), 2), impEye: epart(G.sphLo, eyeM, 2), impWing: epart(keep(new ConeGeometry(0.5, 0.9, 3)), toon(0x40101c), 2),
    bruBody: epart(G.sph, toon(0xffffff)), bruArm: epart(keep(new CapsuleGeometry(0.28, 0.9, 3, 8)), toon(0xffffff), 2), bruHorn: epart(G.cone, toon(0xe8dcc8), 2), bruEye: epart(G.sphLo, basic(0xff4a2a), 2),
    wrBody: epart(G.cone, toon(0xffffff, { emissive: 0x30104a, transparent: true, opacity: 0.88 })), wrHood: epart(G.sph, toon(0x281838)), wrEye: epart(G.sphLo, basic(0x8af0ff), 2),
    eShadow: epart(keep(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2)), keep(new MeshBasicMaterial({ map: softTex, transparent: true, depthWrite: false }))),
  };
  EN.eShadow.renderOrder = 2;
  const ECOL = [0xd02a3a, 0x6a4a8a, 0x9a5aff];

  // ------------------------------------------------------------------ bosses (one at a time)
  function mk(geo, mat, x, y, z, sx, sy, sz, parent) { const m = new Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); parent.add(m); return m; }
  const BOSS = {};
  function buildScientist(unbound) {
    const g = new Group(); const P2 = {};
    const coat = toon(unbound ? 0x3a2a40 : 0xe8e4ee, { emissive: unbound ? 0x30001a : 0x000000 });
    const skin = toon(unbound ? 0xb8a0c8 : 0xe0c8b8), dark = toon(0x201828), glowP = basic(0xc060ff), glowR = basic(0xff2a4a);
    mk(G.cyl, dark, -0.35, 0.8, 0, 0.22, 1.6, 0.22, g); mk(G.cyl, dark, 0.35, 0.8, 0, 0.22, 1.6, 0.22, g);
    P2.coat = mk(keep(new CylinderGeometry(0.62, 1.05, 2.2, 9)), coat, 0, 2.5, 0, 1, 1, 1, g);
    mk(G.sph, coat, 0, 3.55, 0, 0.75, 0.45, 0.6, g);
    P2.head = mk(G.sph, skin, 0, 4.25, 0.05, 0.5, 0.56, 0.5, g);
    const hairM = toon(unbound ? 0xf0f0ff : 0xbab4c4);
    mk(G.sph, hairM, 0, 4.55, -0.05, 0.56, 0.4, 0.52, g);
    for (let i = 0; i < 5; i++) mk(G.cone, hairM, -0.4 + i * 0.2, 4.85, -0.1, 0.13, 0.4, 0.13, g).rotation.z = (i - 2) * 0.35;
    for (const s of [-1, 1]) mk(G.sph, unbound ? glowR : glowP, s * 0.19, 4.3, 0.46, 0.13, 0.11, 0.06, g);
    mk(G.box, dark, 0, 4.3, 0.47, 0.6, 0.06, 0.04, g);
    P2.armL = new Group(); P2.armL.position.set(-0.85, 3.4, 0); g.add(P2.armL); mk(G.cyl, coat, 0, -0.6, 0, 0.17, 1.2, 0.17, P2.armL);
    P2.armR = new Group(); P2.armR.position.set(0.85, 3.4, 0); g.add(P2.armR); mk(G.cyl, coat, 0, -0.6, 0, 0.17, 1.2, 0.17, P2.armR);
    P2.book = mk(G.box, toon(0x3a1030, { emissive: 0x5a1050 }), -1.3, 2.6, 0.6, 0.55, 0.7, 0.18, g);
    P2.stone = mk(G.oct, toon(0x200810, { emissive: 0xc0102a }), 1.3, 3.0, 0.6, 0.32, 0.45, 0.32, g);
    if (unbound) {
      P2.core = mk(G.oct, basic(0xff2a4a), 0, 3.0, 0.62, 0.28, 0.36, 0.1, g); P2.wings = [];
      for (const s of [-1, 1]) { const w = mk(keep(new ConeGeometry(1.4, 3.6, 3)), toon(0x1a0820, { emissive: 0x4a0a3a, transparent: true, opacity: 0.85 }), s * 1.5, 3.8, -0.4, 1, 1, 0.12, g); w.rotation.z = s * 1.0; P2.wings.push(w); }
    }
    g.scale.setScalar(unbound ? 1.75 : 1.5);
    return { g, P: P2, top: unbound ? 9.4 : 7.8, aura: unbound ? [1, 0.2, 0.35] : [0.7, 0.3, 1] };
  }
  function buildMastermind() {
    const g = new Group(); const P2 = {};
    const robe = toon(0x1a1024, { emissive: 0x12000a }), gold = toon(0xd8a830, { emissive: 0x402800 }), mask = toon(0xf4f0f8), red = basic(0xff2030);
    P2.robe = mk(keep(new ConeGeometry(1.5, 4.4, 10)), robe, 0, 2.2, 0, 1, 1, 1, g);
    mk(G.sph, robe, 0, 4.3, 0, 1.0, 0.55, 0.75, g);
    for (const s of [-1, 1]) mk(G.cone, gold, s * 0.95, 4.75, 0, 0.22, 0.8, 0.22, g).rotation.z = -s * 0.5;
    P2.cape = mk(keep(new PlaneGeometry(2.6, 4.2)), toon(0x5a0818, { side: DoubleSide }), 0, 2.5, -0.7, 1, 1, 1, g); P2.cape.rotation.x = 0.12;
    P2.head = mk(G.sph, robe, 0, 5.1, 0, 0.62, 0.7, 0.62, g);
    mk(G.sph, mask, 0, 5.05, 0.33, 0.42, 0.5, 0.32, g);
    for (const s of [-1, 1]) mk(G.sph, red, s * 0.16, 5.12, 0.62, 0.09, 0.05, 0.04, g);
    for (let i = 0; i < 5; i++) { const h = mk(G.cone, gold, -0.5 + i * 0.25, 5.75 + (i === 2 ? 0.2 : 0), 0, 0.09, i === 2 ? 0.8 : 0.55, 0.09, g); h.rotation.z = (2 - i) * 0.22; }
    P2.handL = mk(G.sph, toon(0x2a1a34), -1.45, 3.2, 0.4, 0.3, 0.3, 0.3, g); P2.handR = mk(G.sph, toon(0x2a1a34), 1.45, 3.2, 0.4, 0.3, 0.3, 0.3, g);
    P2.orb = mk(G.sph, basic(0xff2a50, { transparent: true, opacity: 0.9 }), 1.45, 3.9, 0.5, 0.42, 0.42, 0.42, g);
    P2.souls = []; for (let i = 0; i < 6; i++) P2.souls.push(mk(G.sphLo, basic(0x9ae8ff, { transparent: true, opacity: 0.85 }), 0, 3, 0, 0.16, 0.22, 0.16, g));
    g.scale.setScalar(1.85);
    return { g, P: P2, top: 12, aura: [1, 0.1, 0.25] };
  }
  BOSS.scientist = buildScientist(false); BOSS.scientist2 = buildScientist(true); BOSS.mastermind = buildMastermind();
  for (const b of Object.values(BOSS)) { b.g.visible = false; scene.add(b.g); b.mats = []; b.g.traverse((o) => { if (o.material && o.material.isMeshToonMaterial) b.mats.push([o.material, o.material.emissive.clone()]); }); }
  const bossVis = { id: '', x: 0, z: -30, hitT: -9, atkT: -9, born: 0, dieT: -9 };

  // ------------------------------------------------------------------ allies: guardians (golden knights) + the dragon
  const GUARD = [];
  for (let i = 0; i < 6; i++) {
    const g = new Group(); const gold = toon(0xffd25a, { emissive: 0x4a3000 }), steel = toon(0xe8eef8, { emissive: 0x202838 });
    mk(G.cyl, steel, -0.25, 0.45, 0, 0.16, 0.9, 0.16, g); mk(G.cyl, steel, 0.25, 0.45, 0, 0.16, 0.9, 0.16, g);
    mk(keep(new CapsuleGeometry(0.5, 0.6, 3, 10)), gold, 0, 1.45, 0, 1, 1, 1, g);
    mk(G.sph, steel, 0, 2.35, 0, 0.42, 0.45, 0.42, g); mk(G.box, basic(0x7ff0ff), 0, 2.36, 0.38, 0.4, 0.07, 0.05, g);
    mk(G.cone, basic(0xff4a5a), 0, 2.85, -0.05, 0.1, 0.5, 0.25, g);
    mk(keep(new CylinderGeometry(0.55, 0.55, 0.1, 6).rotateX(Math.PI / 2)), gold, -0.65, 1.4, 0.45, 1, 1.2, 1, g);
    const arm = new Group(); arm.position.set(0.62, 1.8, 0.1); g.add(arm); mk(G.box, toon(0xf4f8ff, { emissive: 0x405070 }), 0, 0.7, 0.2, 0.12, 1.6, 0.06, arm);
    g.scale.setScalar(1.25); g.visible = false; scene.add(g); GUARD.push({ g, arm, id: 0, x: 0, z: 0, born: 0, seen: 0, atk: -9 });
  }
  const dragon = (() => {
    const g = new Group(); const sc = toon(0xd8402a, { emissive: 0x401000 }), belly = toon(0xffc860, { emissive: 0x402000 }), horn = toon(0xfff0d0);
    mk(keep(new CapsuleGeometry(0.9, 2.4, 4, 10).rotateX(Math.PI / 2)), sc, 0, 0, 0, 1, 1, 1, g);
    mk(keep(new CapsuleGeometry(0.7, 2.0, 4, 10).rotateX(Math.PI / 2)), belly, 0, -0.25, 0.1, 1, 1, 1, g);
    const neck = mk(keep(new CapsuleGeometry(0.42, 1.4, 3, 8)), sc, 0, 0.9, 1.9, 1, 1, 1, g); neck.rotation.x = 0.9;
    const head = new Group(); head.position.set(0, 1.6, 2.9); g.add(head);
    mk(G.box, sc, 0, 0, 0.3, 0.8, 0.6, 1.2, head); const jaw = mk(G.box, belly, 0, -0.35, 0.35, 0.7, 0.2, 1.0, head);
    for (const s of [-1, 1]) { mk(G.cone, horn, s * 0.3, 0.5, -0.1, 0.12, 0.7, 0.12, head).rotation.x = -0.7; mk(G.sphLo, basic(0xffff60), s * 0.3, 0.15, 0.75, 0.1, 0.1, 0.1, head); }
    const wings = [];
    for (const s of [-1, 1]) { const piv = new Group(); piv.position.set(s * 0.7, 0.5, 0.2); g.add(piv); const w = mk(keep(new ConeGeometry(1.6, 4.4, 3).rotateZ(-s * Math.PI / 2)), toon(0xa02818, { emissive: 0x300800, side: DoubleSide }), s * 2.2, 0, 0, 1, 1, 0.08, piv); w.rotation.x = Math.PI / 2; wings.push(piv); }
    mk(keep(new ConeGeometry(0.6, 3.4, 8).rotateX(-Math.PI / 2)), sc, 0, -0.1, -3.0, 1, 1, 1, g);
    g.scale.setScalar(1.25); g.visible = false; scene.add(g);
    return { g, head, jaw, wings, id: 0, born: 0, px: 0, pz: 0 };
  })();

  // ------------------------------------------------------------------ rings (shockwaves), beams, particles
  const RINGS = 16;
  const ringMesh = new InstancedMesh(keep(new RingGeometry(0.86, 1, 40).rotateX(-Math.PI / 2)), keep(new MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide })), RINGS);
  ringMesh.frustumCulled = false; ringMesh.renderOrder = 4; { const c = new Color(0, 0, 0); for (let i = 0; i < RINGS; i++) ringMesh.setColorAt(i, c); } scene.add(ringMesh);
  const rings = [];
  const ring = (x, y, z, col, r1, life = 0.6) => { if (rings.length < RINGS) rings.push({ x, y, z, col, r1, life, t: 0 }); };
  const BEAMS = 14;
  const beamMesh = new InstancedMesh(keep(new CylinderGeometry(1, 1, 1, 10, 1, true)), keep(new MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide })), BEAMS);
  beamMesh.frustumCulled = false; beamMesh.renderOrder = 7; { const c = new Color(0, 0, 0); for (let i = 0; i < BEAMS; i++) beamMesh.setColorAt(i, c); } scene.add(beamMesh);
  const beams = [];
  const beam = (ax, ay, az, bx, by, bz, col, w, life) => { if (beams.length < BEAMS) beams.push({ a: new Vector3(ax, ay, az), b: new Vector3(bx, by, bz), col, w, life, t: 0 }); };

  function particleSystem(cap, additive) {
    const geo = keep(new BufferGeometry());
    const pos = new Float32Array(cap * 3), col = new Float32Array(cap * 4), size = new Float32Array(cap);
    geo.setAttribute('position', new BufferAttribute(pos, 3)); geo.setAttribute('col', new BufferAttribute(col, 4)); geo.setAttribute('size', new BufferAttribute(size, 1));
    const m = keep(new ShaderMaterial({
      transparent: true, depthWrite: false, blending: additive ? AdditiveBlending : NormalBlending, uniforms: { px: { value: 400 } },
      vertexShader: 'attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }',
      fragmentShader: additive
        ? 'varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }'
        : 'varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }',
    }));
    const pts = new Points(geo, m); pts.frustumCulled = false; scene.add(pts);
    return { geo, pos, col, size, mat: m, pts, list: [], cap };
  }
  const glow = particleSystem(opts.particles || 900, true);
  const solid = particleSystem(Math.round((opts.particles || 900) * 0.4), false);
  glow.pts.renderOrder = 9; solid.pts.renderOrder = 5;
  let partMult = 1;
  const tmpC = new Color();
  function emit(sys, n, x, y, z, o) {
    n = Math.max(1, Math.round(n * partMult));
    for (let i = 0; i < n && sys.list.length < sys.cap - 60; i++) {
      const a = Math.random() * TAU, el = (o.up ?? 0.5) + Math.random() * (o.spreadUp ?? 0.5), sp = (o.speed || 4) * (0.4 + Math.random() * 0.8);
      tmpC.set(o.colors ? o.colors[(Math.random() * o.colors.length) | 0] : o.color);
      sys.list.push({ x: x + (Math.random() - 0.5) * (o.jitter || 0), y: y + (Math.random() - 0.5) * (o.jy || 0), z: z + (Math.random() - 0.5) * (o.jitter || 0), vx: Math.cos(a) * sp * (1 - el * 0.6) + (o.vx || 0), vy: sp * el * (o.vyMul ?? 1), vz: Math.sin(a) * sp * (1 - el * 0.6) + (o.vz || 0),
        g: o.g ?? 9, drag: o.drag ?? 1.5, life: (o.life || 0.6) * (0.7 + Math.random() * 0.6), t: 0, s0: o.size || 0.3, s1: o.size1 ?? (o.size || 0.3) * 0.3, r: tmpC.r, gg: tmpC.g, b: tmpC.b, a: o.alpha ?? 1, conf: !!o.confetti, spin: Math.random() * TAU });
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
    const putP = (x, y, z, r, g, b, a, s) => { sys.pos[n * 3] = x; sys.pos[n * 3 + 1] = y; sys.pos[n * 3 + 2] = z; sys.col[n * 4] = r; sys.col[n * 4 + 1] = g; sys.col[n * 4 + 2] = b; sys.col[n * 4 + 3] = a; sys.size[n] = s; n++; };
    if (halos) for (const h of halos) if (n < sys.cap - 1) putP(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7]);
    for (const p of L) { if (n >= sys.cap) break; const k = p.t / p.life; const fade = p.conf ? 1 : 1 - k * k; putP(p.x, p.y, p.z, p.r, p.gg, p.b, p.conf ? -1 : p.a * fade, p.s0 + (p.s1 - p.s0) * k); }
    sys.geo.setDrawRange(0, n);
    for (const k of ['position', 'col', 'size']) { const at = sys.geo.attributes[k]; at.needsUpdate = true; at.clearUpdateRanges?.(); at.addUpdateRange?.(0, n * at.itemSize); }
  }
  // embers rising from the field: GPU-animated (no per-frame CPU work)
  const emberGeo = keep(new BufferGeometry());
  { const n = 170, p = new Float32Array(n * 3); for (let i = 0; i < n; i++) p.set([Math.random(), Math.random(), Math.random()], i * 3); emberGeo.setAttribute('position', new BufferAttribute(p, 3)); }
  const embers = new Points(emberGeo, keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { time: { value: 0 }, px: { value: 300 }, tint: { value: new Color(0xd070ff) }, tint2: { value: new Color(0xff5a3a) } },
    vertexShader: `uniform float time; uniform float px; varying float vA; varying float vK;
      void main(){ vec3 s = position; float t = time * (0.05 + s.x * 0.05); float fy = fract(s.y + t);
        vec3 p = vec3((s.x - 0.5) * 34.0 + sin(t * 6.0 + s.z * 9.0) * 1.5, fy * 18.0, -40.0 + s.z * 46.0 + fy * 4.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vK = s.z;
        vA = smoothstep(0.0, 0.1, fy) * smoothstep(1.0, 0.7, fy) * (0.5 + 0.5 * sin(time * 3.0 + s.x * 50.0));
        gl_PointSize = min((0.1 + s.y * 0.12) * px / max(1.0, -mv.z), 10.0); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: 'uniform vec3 tint; uniform vec3 tint2; varying float vA; varying float vK; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(mix(tint, tint2, step(0.6, vK)) * vA * max(0.0, 1.0-d), 1.0); }',
  })));
  embers.frustumCulled = false; embers.renderOrder = 3; scene.add(embers);

  // ------------------------------------------------------------------ per-frame state
  const vis = new Map(), evis = new Map();
  const white = new Color(1, 1, 1), cA = new Color(), cB = new Color(), grey = new Color(0x707080), tmpV = new Vector3(), up = new Vector3(0, 1, 0);
  let quality = { particles: 1, labels: 22, dust: true, props: true };
  let time = 0, shake = 0, flashT = -9, barrierHit = -9, ultT = -9;
  let endState = null;   // { saved, t0 }
  const camPos = new Vector3(0, 13, 18), camLook = new Vector3(0, 1.5, -9), tgtPos = new Vector3(), tgtLook = new Vector3();
  const drawn = [];         // label anchors for the HUD
  const epos = new Map();   // enemy id -> { x, y, z, k } (for shots / damage pops)
  const bolts = [];         // projectiles in flight
  const BOLTS = 90;
  const ROOT = new Matrix4(), L2 = new Matrix4(), M = new Matrix4();
  const setP = (im, i, lx, ly, lz, sx, sy, sz, rx = 0, rz = 0, col = null, ry = 0) => { L2.compose(V.set(lx, ly, lz), Q.setFromEuler(E.set(rx, ry, rz)), S.set(sx, sy, sz)); M.multiplyMatrices(ROOT, L2); im.setMatrixAt(i, M); if (col) im.setColorAt(i, col); };
  const defY = (m) => (m.z < WALL_FRONT - 0.1 ? 0 : WALL_Y + 0.08);

  function frame(w, dt, now) {
    time = now;
    const ending = w.phase === 'ending' && endState;
    const dawn = ending && endState.saved ? Math.min(1, (now - endState.t0) / 4) : 0;
    const doom = ending && !endState.saved ? Math.min(1, (now - endState.t0) / 3) : 0;
    // ---------------- sky + rift
    sky.material.uniforms.dawn.value = dawn * 0.85; sky.material.uniforms.end.value = doom * 0.9;
    stars.material.uniforms.time.value = now; stars.material.uniforms.op.value = 1 - dawn;
    const bossOn = !!w.bo;
    const riftPow = (ending ? (endState.saved ? Math.max(0, 1 - dawn * 1.2) : 1.5) : 1) * (bossOn ? 1.25 : 1) * (1 + 0.12 * Math.sin(now * 3));
    riftMat.uniforms.time.value = now; riftMat.uniforms.power.value = riftPow; riftMat.uniforms.hue.value = (w.ch || 1) * 0.12 + (bossOn ? 0.2 : 0) + doom * 0.4;
    const rs = ending ? (endState.saved ? Math.max(0.01, 1 - dawn) : 1 + doom * 0.8) : 1 + ((w.ch || 1) - 1) * 0.12;
    rift.scale.set(rs, rs, 1); riftRing.scale.set(6.2 * rs, 7.8 * rs, 6); riftRing.rotation.z = now * 0.2; riftRing.visible = rs > 0.05;
    riftLight.intensity = 50 * riftPow * (1 + 0.15 * Math.sin(now * 2.3)); riftLight.color.setHex(doom > 0 ? 0xff2040 : bossOn ? 0xd030c0 : 0xa040ff);
    riftPool.material.opacity = 0.35 * riftPow;
    for (let i = 0; i < SH; i++) { const a = i / SH * TAU + now * 0.15 * (i % 2 ? 1 : -1), r = 7.5 + (i % 3) * 1.6; put(shards, i, Math.cos(a) * r * rs, RIFT_Y + Math.sin(a) * r * 0.9 * rs + Math.sin(now + i) * 0.4, RIFT_Z - 0.5 + (i % 4) * 0.4, 0.3 + (i % 3) * 0.2, 0.5 + (i % 2) * 0.3, 0.3, now * (0.5 + i * 0.05), i, 0); }
    shards.instanceMatrix.needsUpdate = true;
    hemi.intensity = 0.95 + dawn * 1.2 - doom * 0.4 + (now - flashT < 0.12 ? 1.6 : 0) + (now - ultT < 0.5 ? (0.5 - (now - ultT)) * 4 : 0);
    hemi.color.setHex(dawn > 0.3 ? 0xffe0c0 : 0x8fa0ff);
    moon.intensity = 0.9 + dawn;
    scene.fog.color.copy(FOG).lerp(cB.setHex(0xe8a080), dawn * 0.7).lerp(cA.setHex(0x3a0610), doom * 0.8);
    // ---------------- barrier dome
    const bar = Math.max(0, Math.min(100, w.bar || 0)) / 100;
    barrier.visible = bar > 0.02 || now - barrierHit < 0.4;
    barrierMat.uniforms.time.value = now; barrierMat.uniforms.a.value = 0.12 + bar * 0.4 + (now - barrierHit < 0.3 ? 0.5 : 0);
    barrierMat.uniforms.hit.value = Math.max(0, 1 - (now - barrierHit) / 0.3);
    barrierMat.uniforms.col.value.setHex(bar > 0.66 ? 0x7ad8ff : bar > 0.33 ? 0x5ab0ff : 0x7a70ff);
    barrier.scale.y = 6 + bar * 1.5;
    for (const t of towers) t.flag.rotation.y = Math.sin(now * 2.2 + t.t.position.x) * 0.35;
    wallLight.intensity = 12 + Math.sin(now * 11) * 2;

    // ---------------- camera: intro pans, steady siege shot, boss push-in, vote close-up, ending orbit
    const k = w.pd > 0 ? 1 - Math.max(0, Math.min(1, w.tl / w.pd)) : 1;
    if (w.phase === 'intro') {
      const e = k * k * (3 - 2 * k);
      tgtPos.set(Math.sin(e * 1.4 - 0.7) * 10, 6 + e * 6, -6 + e * 24); tgtLook.set(0, RIFT_Y - e * 5, RIFT_Z + e * 22);
    } else if (w.phase === 'gather' || w.phase === 'chapter') {
      tgtPos.set(Math.sin(now * 0.12) * 2.5, 12.5, 18.5); tgtLook.set(0, 0.8, -3);
    } else if (w.phase === 'boss' && w.bo) {
      tgtPos.set(Math.sin(now * 0.2) * 1.5, 14.5, 20); tgtLook.set(bossVis.x * 0.3, 0.8, Math.max(-10, bossVis.z * 0.35 - 3));
    } else if (w.phase === 'vote' || w.phase === 'choice') {
      tgtPos.set(Math.sin(now * 0.25) * 3, 11, 17); tgtLook.set(0, 3.5, -14);
    } else if (w.phase === 'ending') {
      const a = now * 0.12; tgtPos.set(Math.sin(a) * 14, 9 + dawn * 3, 10 + Math.cos(a) * 8); tgtLook.set(0, 3 + dawn * 2, -6);
    } else { tgtPos.set(Math.sin(now * 0.15) * 1.2, 14, 19.5); tgtLook.set(0, 0.3, -4); }
    const ck = Math.min(1, dt * (w.phase === 'intro' ? 1.6 : 1.8));
    if (camPos.distanceTo(tgtPos) > 45) { camPos.copy(tgtPos); camLook.copy(tgtLook); }
    camPos.lerp(tgtPos, ck); camLook.lerp(tgtLook, ck);
    shake = Math.max(0, shake - dt * 2.4);
    const sx = (Math.random() - 0.5) * shake * 0.6, sy = (Math.random() - 0.5) * shake * 0.6;
    camera.position.set(camPos.x + sx, camPos.y + sy + Math.sin(now * 0.5) * 0.08, camPos.z);
    camera.lookAt(camLook.x + sx * 0.6, camLook.y + sy * 0.6, camLook.z);

    const halos = [];
    TORCH.forEach((x, i) => { const fl = 0.75 + 0.25 * Math.sin(now * (9 + i) + i * 2); halos.push([x, WALL_Y + 1.35, WALL_FRONT + 0.15, 1, 0.55 * fl, 0.18 * fl, 0.9 * fl, 2.2]); halos.push([x, WALL_Y + 1.3, WALL_FRONT + 0.15, 1, 0.9, 0.6, 1, 0.5]); if (Math.random() < dt * 3 * partMult) emit(glow, 1, x, WALL_Y + 1.4, WALL_FRONT + 0.15, { color: 0xffa040, up: 1, speed: 0.8, g: -2, life: 0.7, size: 0.18 }); });
    gateRune.material.opacity = 0.45 + 0.3 * Math.sin(now * 2) + bar * 0.3;
    halos.push([0, RIFT_Y, RIFT_Z, 0.7, 0.25, 1, 0.5 * riftPow, 20]);
    if (Math.random() < dt * 8 * partMult && rs > 0.1) { const a = Math.random() * TAU; emit(glow, 1, Math.cos(a) * 5.6 * rs, RIFT_Y + Math.sin(a) * 7 * rs, RIFT_Z, { colors: [0xc060ff, 0xff3a6a], up: 0.2, speed: 1.5, g: -0.5, life: 1.4, size: 0.5 }); }

    // ---------------- defenders
    drawn.length = 0;
    const list = w.members.length > CAP ? w.members.slice(0, CAP) : w.members;
    let n = 0, hatN = 0, staffN = 0, swordN = 0, bowN = 0, haloN = 0;
    for (const m of list) {
      let s = vis.get(m.id);
      if (!s) { s = { walk: Math.random() * 10, spawn: now, skin: SKIN[m.id % SKIN.length], x: m.x, z: m.z, y: defY(m), atk: -9 }; vis.set(m.id, s); }
      s.seen = now;
      const sp = Math.hypot(m.x - s.x, m.z - s.z) / Math.max(dt, 1e-3);
      s.x = m.x; s.z = m.z;
      const down = m.flags & SFLAG.down, asc = m.flags & SFLAG.asc, moving = sp > 0.4 && !down;
      s.walk += dt * (moving ? 11 : 0);
      const y0 = defY(m); s.y = y0;
      const pa = Math.min(1, (now - s.spawn) / 0.35), sc = (0.3 + 0.7 * pa) * (1 + 0.15 * Math.sin(pa * Math.PI)) * (asc ? 1.18 : 1);
      const atkK = Math.max(0, 1 - (now - s.atk) / 0.25);
      const hop = (moving ? Math.abs(Math.sin(s.walk)) * 0.12 : 0) + (m.flags & SFLAG.cmd ? Math.abs(Math.sin(now * 12 + m.id)) * 0.16 : 0) + (asc ? 0.25 + Math.sin(now * 3) * 0.08 : 0);
      ROOT.compose(V.set(m.x, y0 + hop, m.z), Q.setFromEuler(E.set(down ? -1.45 : 0, Math.PI + (m.cls === 1 ? 0 : Math.sin(now * 0.7 + m.id) * 0.15), 0)), S.set(sc, sc, sc));
      if (down) ROOT.multiply(L2.makeTranslation(0, 0.3, 0));
      const info = m.info || {};
      cA.setHex(info.color ?? 0xffffff); if (down) cA.lerp(grey, 0.7);
      const flashC = atkK > 0 ? cB.copy(cA).lerp(white, atkK * 0.5) : cA;
      const sw = moving ? Math.sin(s.walk) : 0;
      setP(P.body, n, 0, 0.52, 0, 1, 1, 1, 0, 0, flashC);
      cB.setHex(s.skin); if (down) cB.lerp(grey, 0.5); setP(P.head, n, 0, 1.06, 0, 1, 1, 1, 0, 0, cB);
      cB.copy(cA).multiplyScalar(0.55); setP(P.hair, n, 0, 1.1, -0.02, 1, 1, 1, -0.15, 0, cB);
      const blink = down ? 0.15 : ((now + m.id * 0.37) % 4.2) < 0.12 ? 0.15 : 1;
      setP(P.eyes, n * 2, -0.13, 1.08, 0.31, 1, blink, 1); setP(P.eyes, n * 2 + 1, 0.13, 1.08, 0.31, 1, blink, 1);
      const swing = m.cls === 1 ? -atkK * 1.6 : -atkK * 0.8;
      setP(P.hands, n * 2, -0.36, 0.5 + sw * 0.05, sw * 0.12, 1, 1, 1, 0, 0, cA);
      setP(P.hands, n * 2 + 1, 0.36, 0.62 + atkK * 0.2, 0.22, 1, 1, 1, 0, 0, cA);
      setP(P.feet, n * 2, -0.13, 0.08, sw * 0.18, 1, 1, 1); setP(P.feet, n * 2 + 1, 0.13, 0.08, -sw * 0.18, 1, 1, 1);
      const cc = cB.setHex(CLS_COL[m.cls] ?? 0xffffff);
      if (quality.props) {
        if (m.cls === 0 || m.cls === 3) { setP(P.staff, staffN, 0.4, 0.75 + atkK * 0.15, 0.2, 1, 1, 1, swing * 0.4, 0); setP(P.orb, staffN, 0.4, 1.45 + atkK * 0.2, 0.2, 1 + atkK * 0.5, 1 + atkK * 0.5, 1 + atkK * 0.5, 0, 0, cc); staffN++; }
        if (m.cls === 0) { setP(P.hat, hatN, 0, 1.55, -0.03, 1, 1, 1, -0.2, 0.1, cc); hatN++; }
        if (m.cls === 1) { setP(P.sword, swordN, 0.42, 0.95, 0.3, 1, 1, 1, -0.6 + swing, -0.2); setP(P.shield, swordN, -0.42, 0.6, 0.32, 1, 1, 1, 0, 0, cc); swordN++; }
        if (m.cls === 2) { setP(P.bow, bowN, -0.35, 0.72, 0.36, 1, 1, 1, 0, Math.PI / 2 + 0.1, null, Math.PI / 2); bowN++; }
        if (m.cls === 3 || (m.flags & SFLAG.bless)) { setP(P.halo, haloN, 0, 1.62, 0, 1, 1, 1, 0, 0, null); haloN++; }
      }
      L2.compose(V.set(m.x, y0 + 0.03, m.z), Q.identity(), S.set(1.1, 1, 1.1)); P.shadow.setMatrixAt(n, L2);
      if (asc) { halos.push([m.x, y0 + 0.8, m.z, 1, 0.85, 0.3, 0.9 + 0.3 * Math.sin(now * 8), 3.2]); if (Math.random() < dt * 8 * partMult) emit(glow, 1, m.x, y0 + 0.4, m.z, { color: 0xffd34d, up: 1, speed: 1.4, g: -3, life: 0.6, size: 0.25, jitter: 0.6 }); }
      else if ((m.cls === 0 || m.cls === 3) && quality.props && (n < 30 || atkK > 0)) { V.set(0.4, 1.45, 0.2).applyMatrix4(ROOT); halos.push([V.x, V.y, V.z, cc.r, cc.g, cc.b, 0.6 + atkK, 0.9 + atkK * 1.4]); }
      if (m.flags & SFLAG.gift) halos.push([m.x, y0 + 0.9, m.z, 1, 0.5, 0.9, 0.9, 2.6]);
      drawn.push({ id: m.id, x: m.x, y: y0 + hop + 1.62 * sc + (m.cls === 0 ? 0.35 : 0), z: m.z, info, flags: m.flags, cls: m.cls, hp: m.hp });
      n++;
    }
    const cnt = { eyes: n * 2, hands: n * 2, feet: n * 2, staff: staffN, orb: staffN, hat: hatN, sword: swordN, shield: swordN, bow: bowN, halo: haloN };
    for (const key of Object.keys(P)) { const im = P[key]; im.count = cnt[key] ?? n; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; }
    if (vis.size > list.length + 40) for (const [id, s] of vis) if (now - s.seen > 5) vis.delete(id);

    // ---------------- creatures
    epos.clear();
    const ec = { imp: 0, bru: 0, wr: 0, sh: 0 };
    let bossE = null;
    for (const e of w.enemies) {
      if (e.k === 3) { bossE = e; continue; }
      let s = evis.get(e.id);
      if (!s) { s = { born: now, hit: -9, ph: Math.random() * TAU }; evis.set(e.id, s); }
      s.seen = now;
      const hitK = Math.max(0, 1 - (now - s.hit) / 0.18);
      const pa = Math.min(1, (now - s.born) / 0.5), sc = 0.2 + 0.8 * pa;
      const bob = Math.abs(Math.sin(now * 9 + s.ph)) * 0.12;
      cA.setHex(ECOL[e.k]); if (hitK > 0) cA.lerp(white, hitK * 0.85);
      if (e.k === 0) {
        const i = ec.imp++;
        ROOT.compose(V.set(e.x, bob, e.z), Q.setFromEuler(E.set(0, Math.sin(now * 4 + s.ph) * 0.2, Math.sin(now * 9 + s.ph) * 0.12)), S.set(sc, sc, sc));
        setP(EN.impBody, i, 0, 0.55, 0, 0.45, 0.52, 0.42, 0, 0, cA);
        setP(EN.impHorn, i * 2, -0.18, 0.98, 0, 0.08, 0.3, 0.08, 0, 0.35); setP(EN.impHorn, i * 2 + 1, 0.18, 0.98, 0, 0.08, 0.3, 0.08, 0, -0.35);
        setP(EN.impEye, i * 2, -0.13, 0.66, 0.36, 0.07, 0.06, 0.05); setP(EN.impEye, i * 2 + 1, 0.13, 0.66, 0.36, 0.07, 0.06, 0.05);
        const fl = Math.sin(now * 22 + s.ph) * 0.5;
        setP(EN.impWing, i * 2, -0.42, 0.7, -0.15, 1, 1, 0.2, 0, 1.2 + fl); setP(EN.impWing, i * 2 + 1, 0.42, 0.7, -0.15, 1, 1, 0.2, 0, -1.2 - fl);
        epos.set(e.id, { x: e.x, y: 0.7, z: e.z, k: 0 });
      } else if (e.k === 1) {
        const i = ec.bru++, st = Math.sin(now * 5 + s.ph);
        ROOT.compose(V.set(e.x, Math.abs(st) * 0.1, e.z), Q.setFromEuler(E.set(0.12, 0, st * 0.06)), S.set(sc, sc, sc));
        setP(EN.bruBody, i, 0, 1.15, 0, 0.95, 1.1, 0.8, 0, 0, cA);
        setP(EN.bruArm, i * 2, -0.95, 0.95, 0.1, 1, 1, 1, st * 0.4, 0.25, cA); setP(EN.bruArm, i * 2 + 1, 0.95, 0.95, 0.1, 1, 1, 1, -st * 0.4, -0.25, cA);
        setP(EN.bruHorn, i * 2, -0.45, 2.05, 0.1, 0.13, 0.5, 0.13, -0.3, 0.6); setP(EN.bruHorn, i * 2 + 1, 0.45, 2.05, 0.1, 0.13, 0.5, 0.13, -0.3, -0.6);
        setP(EN.bruEye, i * 2, -0.25, 1.55, 0.72, 0.1, 0.08, 0.06); setP(EN.bruEye, i * 2 + 1, 0.25, 1.55, 0.72, 0.1, 0.08, 0.06);
        epos.set(e.id, { x: e.x, y: 1.3, z: e.z, k: 1 });
      } else {
        const i = ec.wr++, fy = 3.2 + Math.sin(now * 2 + s.ph) * 0.4;
        ROOT.compose(V.set(e.x, fy, e.z), Q.setFromEuler(E.set(0.25, Math.sin(now + s.ph) * 0.3, Math.sin(now * 1.7 + s.ph) * 0.15)), S.set(sc, sc, sc));
        setP(EN.wrBody, i, 0, -0.2, 0, 0.55, -1.5, 0.55, 0, 0, cA);
        setP(EN.wrHood, i, 0, 0.62, 0, 0.42, 0.45, 0.42);
        setP(EN.wrEye, i * 2, -0.13, 0.62, 0.34, 0.07, 0.05, 0.05); setP(EN.wrEye, i * 2 + 1, 0.13, 0.62, 0.34, 0.07, 0.05, 0.05);
        if (Math.random() < dt * 4 * partMult) emit(glow, 1, e.x, fy - 0.8, e.z, { color: 0x9a5aff, up: -0.2, speed: 0.6, g: 1, life: 0.6, size: 0.35 });
        epos.set(e.id, { x: e.x, y: fy + 0.3, z: e.z, k: 2 });
      }
      if (e.k !== 2) { L2.compose(V.set(e.x, 0.03, e.z), Q.identity(), S.set(e.k === 1 ? 2.2 : 1.2, 1, e.k === 1 ? 2.2 : 1.2)); EN.eShadow.setMatrixAt(ec.sh++, L2); }
      if (e.k === 1 || ec.imp < 40) halos.push([e.x, e.k === 1 ? 1.55 : e.k === 2 ? 3.8 : 0.66, e.z + (e.k === 1 ? 0.75 : 0.38), e.k === 2 ? 0.5 : 1, e.k === 1 ? 0.3 : e.k === 2 ? 0.9 : 0.85, e.k === 2 ? 1 : 0.2, 0.5, e.k === 1 ? 0.9 : 0.5]);
    }
    const ecount = { impBody: ec.imp, impHorn: ec.imp * 2, impEye: ec.imp * 2, impWing: ec.imp * 2, bruBody: ec.bru, bruArm: ec.bru * 2, bruHorn: ec.bru * 2, bruEye: ec.bru * 2, wrBody: ec.wr, wrHood: ec.wr, wrEye: ec.wr * 2, eShadow: ec.sh };
    for (const key of Object.keys(EN)) { const im = EN[key]; im.count = ecount[key]; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; }
    if (evis.size > 200) for (const [id, s] of evis) if (now - s.seen > 3) evis.delete(id);

    // ---------------- boss
    for (const [id, b] of Object.entries(BOSS)) {
      const on = (bossE && w.bo && w.bo.id === id) || (bossVis.id === id && now - bossVis.dieT < 1.6);
      b.g.visible = !!on;
      if (!on) continue;
      if (bossVis.id !== id) { bossVis.id = id; bossVis.born = now; bossVis.dieT = -9; bossVis.x = bossE ? bossE.x : 0; bossVis.z = bossE ? bossE.z : -30; }
      const dying = now - bossVis.dieT < 1.6;
      if (bossE && !dying) { bossVis.x += (bossE.x - bossVis.x) * Math.min(1, dt * 6); bossVis.z += (bossE.z - bossVis.z) * Math.min(1, dt * 6); }
      const rise = Math.min(1, (now - bossVis.born) / 1.6), atk = Math.max(0, 1 - (now - bossVis.atkT) / 0.8);
      const dk = dying ? Math.min(1, (now - bossVis.dieT) / 1.5) : 0;
      b.g.position.set(bossVis.x + (dying ? (Math.random() - 0.5) * 0.3 : 0), (rise - 1) * 6 - dk * 3 + (id === 'mastermind' ? 0.6 + Math.sin(now * 1.4) * 0.3 : 0), bossVis.z);
      b.g.rotation.set(dk * 0.4, Math.sin(now * 0.6) * 0.2, 0);
      const base = id === 'mastermind' ? 1.85 : id === 'scientist2' ? 1.75 : 1.5;
      b.g.scale.setScalar(base * (1 + atk * 0.08) * (1 - dk * 0.5));
      const hitK = Math.max(0, 1 - (now - bossVis.hitT) / 0.15);
      for (const [mat, em] of b.mats) mat.emissive.copy(em).lerp(white, hitK * 0.6);
      const P2 = b.P;
      if (P2.armL) { P2.armL.rotation.z = -0.3 - atk * 1.2 + Math.sin(now * 2) * 0.1; P2.armR.rotation.z = 0.3 + atk * 1.4 - Math.sin(now * 2) * 0.1; P2.armR.rotation.x = -atk * 1.2; }
      if (P2.book) { P2.book.position.y = 2.6 + Math.sin(now * 2) * 0.15; P2.book.rotation.y = now * 0.8; P2.stone.position.set(Math.cos(now * 1.5) * 1.3, 3.2 + Math.sin(now * 3) * 0.3, Math.sin(now * 1.5) * 0.9 + 0.3); P2.stone.rotation.y = now * 3; }
      if (P2.wings) P2.wings.forEach((wg, i) => { wg.rotation.z = (i ? 1 : -1) * (1.0 + Math.sin(now * 3) * 0.15); });
      if (P2.souls) P2.souls.forEach((so, i) => { const a = now * 1.2 + i / 6 * TAU; so.position.set(Math.cos(a) * 1.9, 3.4 + Math.sin(now * 2 + i) * 0.5, Math.sin(a) * 1.2); });
      if (P2.orb) P2.orb.scale.setScalar(0.42 * (1 + atk * 0.8 + Math.sin(now * 6) * 0.05));
      if (P2.cape) P2.cape.rotation.x = 0.12 + Math.sin(now * 1.8) * 0.08;
      const top = b.top;
      halos.push([b.g.position.x, b.g.position.y + top * 0.5, bossVis.z - 0.5, b.aura[0], b.aura[1], b.aura[2], 0.55 + atk * 0.6, 12 + atk * 6]);
      if (Math.random() < dt * 14 * partMult) emit(glow, 1, bossVis.x + (Math.random() - 0.5) * 3, Math.random() * top * 0.7, bossVis.z, { color: id === 'scientist' ? 0xb060ff : 0xff3060, up: 1, speed: 1.2, g: -2.5, life: 1.0, size: 0.5 });
      if (dying && Math.random() < dt * 30) emit(glow, 3, bossVis.x + (Math.random() - 0.5) * 4, Math.random() * top, bossVis.z, { colors: [0xffffff, 0xffd34d, 0xc060ff], speed: 6, g: 2, life: 0.8, size: 0.7 });
      if (bossE) epos.set(bossE.id, { x: bossVis.x, y: top * 0.55, z: bossVis.z, k: 3 });
    }

    // ---------------- allies
    const seenG = new Set();
    for (const a of w.allies) {
      if (a.k === 0) {
        let g = GUARD.find((x) => x.id === a.id) || GUARD.find((x) => !x.id);
        if (!g) continue;
        if (g.id !== a.id) { g.id = a.id; g.born = now; g.x = a.x; g.z = a.z; emit(glow, 30, a.x, 1.5, a.z, { colors: [0xffe080, 0xffffff], speed: 6, up: 0.6, g: 3, life: 0.7, size: 0.5 }); ring(a.x, 0.1, a.z, 0xffd34d, 4, 0.7); beam(a.x, 0, a.z, a.x, 30, a.z, 0xffe080, 1.2, 0.6); }
        seenG.add(g);
        const mv = Math.hypot(a.x - g.x, a.z - g.z) / Math.max(dt, 1e-3);
        g.x = a.x; g.z = a.z;
        const pa = Math.min(1, (now - g.born) / 0.4);
        g.g.visible = true; g.g.position.set(a.x, mv > 0.3 ? Math.abs(Math.sin(now * 10)) * 0.15 : 0, a.z); g.g.rotation.y = Math.PI; g.g.scale.setScalar(1.25 * pa);
        g.arm.rotation.x = -Math.max(0, 1 - (now - g.atk) / 0.3) * 2.2 + 0.3;
        halos.push([a.x, 1.6, a.z, 1, 0.82, 0.35, 0.55, 4.5]);
      } else {
        const d = dragon;
        if (d.id !== a.id) { d.id = a.id; d.born = now; d.px = a.x; d.pz = a.z; ring(0, 0.2, 0, 0xff6a2a, 10, 1.0); shake = Math.max(shake, 0.8); }
        const vx = (a.x - d.px) / Math.max(dt, 1e-3), vz = (a.z - d.pz) / Math.max(dt, 1e-3); d.px = a.x; d.pz = a.z;
        const pa = Math.min(1, (now - d.born) / 1.2);
        d.g.visible = true; d.g.position.set(a.x, 9.5 + (1 - pa) * 12 + Math.sin(now * 2) * 0.5, a.z);
        if (Math.hypot(vx, vz) > 0.1) d.g.rotation.y = Math.atan2(vx, vz);
        d.g.rotation.z = Math.sin(now * 1.3) * 0.15;
        d.wings[0].rotation.z = Math.sin(now * 6) * 0.6; d.wings[1].rotation.z = -Math.sin(now * 6) * 0.6;
        d.jaw.rotation.x = 0.25 + Math.sin(now * 8) * 0.15;
        d.g.updateMatrixWorld(); V.set(0, 0, 1.2).applyMatrix4(d.head.matrixWorld);
        const fx = a.x + Math.sin(d.g.rotation.y) * 2, fz = a.z + Math.cos(d.g.rotation.y) * 2 + 3;
        if (pa >= 1) emit(glow, 3, V.x, V.y, V.z, { colors: [0xffd040, 0xff6a20, 0xff2a10], speed: 1, vx: (fx - V.x) * 1.4, vz: (fz - V.z) * 1.4, up: -0.9, vyMul: 1, g: 6, life: 0.7, size: 0.9, size1: 1.6, drag: 0.5 });
        halos.push([a.x, d.g.position.y, a.z, 1, 0.5, 0.2, 0.6, 9]);
      }
    }
    for (const g of GUARD) if (!seenG.has(g)) { if (g.g.visible) emit(glow, 16, g.x, 1.4, g.z, { color: 0xffe080, speed: 4, g: -1, life: 0.6, size: 0.4 }); g.g.visible = false; g.id = 0; }
    if (dragon.g.visible && !w.allies.some((a) => a.k === 1)) { dragon.g.visible = false; dragon.id = 0; emit(glow, 30, dragon.px, 9, dragon.pz, { colors: [0xffd040, 0xff6a20], speed: 7, g: 0, life: 0.8, size: 0.6 }); }

    // ---------------- projectiles
    for (let i = bolts.length - 1; i >= 0; i--) {
      const b = bolts[i]; const k2 = (now - b.t0) / b.dur;
      const tp = epos.get(b.to); if (tp) b.last = tp;
      if (k2 >= 1) {
        const c = SHOT_COL[b.c] || SHOT_COL.v;
        emit(glow, b.c === 'm' ? 9 : 4, b.last.x, b.last.y, b.last.z, { colors: c, speed: b.c === 'm' ? 5 : 3, g: 2, life: 0.35, size: b.c === 'm' ? 0.55 : 0.35 });
        if (b.c === 'm') ring(b.last.x, 0.15, b.last.z, 0xc070ff, 1.9, 0.35);
        bolts.splice(i, 1); continue;
      }
      const x = b.sx + (b.last.x - b.sx) * k2, z = b.sz + (b.last.z - b.sz) * k2, y = b.sy + (b.last.y - b.sy) * k2 + Math.sin(k2 * Math.PI) * b.arc;
      const c = b.col;
      halos.push([x, y, z, c.r, c.g, c.b, 1, b.c === 'm' ? 1.3 : b.c === 'v' ? 1.0 : 0.7]);
      if (b.c !== 'a' || Math.random() < 0.5) emit(glow, 1, x, y, z, { color: b.c === 'm' ? 0xff8a3a : (SHOT_COL[b.c] || SHOT_COL.v)[0], speed: 0.3, g: 0, life: 0.25, size: b.c === 'm' ? 0.6 : 0.35 });
    }

    // ---------------- rings + beams
    for (let i = 0; i < rings.length; i++) {
      const r = rings[i]; r.t += dt; const kk = r.t / r.life; if (kk >= 1) { rings.splice(i--, 1); continue; }
      const rr = 0.3 + r.r1 * (1 - Math.pow(1 - kk, 3));
      ringMesh.setMatrixAt(i, M4.compose(V.set(r.x, r.y, r.z), Q.identity(), S.set(rr, 1, rr)));
      ringMesh.setColorAt(i, C.setHex(r.col).multiplyScalar(1 - kk));
    }
    ringMesh.count = rings.length; ringMesh.instanceMatrix.needsUpdate = true; if (ringMesh.instanceColor) ringMesh.instanceColor.needsUpdate = true;
    for (let i = 0; i < beams.length; i++) {
      const b = beams[i]; b.t += dt; const kk = b.t / b.life; if (kk >= 1) { beams.splice(i--, 1); continue; }
      const len = b.a.distanceTo(b.b); V.copy(b.a).add(b.b).multiplyScalar(0.5);
      Q.setFromUnitVectors(up, tmpV.copy(b.b).sub(b.a).normalize());
      const wv = b.w * (kk < 0.2 ? kk / 0.2 : 1 - (kk - 0.2) / 0.8);
      beamMesh.setMatrixAt(i, M4.compose(V, Q, S.set(wv, len, wv)));
      beamMesh.setColorAt(i, C.setHex(b.col).multiplyScalar(0.8 * (1 - kk) * (1 - kk * 0.3)));
    }
    beamMesh.count = beams.length; beamMesh.instanceMatrix.needsUpdate = true; if (beamMesh.instanceColor) beamMesh.instanceColor.needsUpdate = true;

    // ---------------- ending ceremony: dawn + fireworks + confetti, or the dark swallowing everything
    if (ending) {
      const te = now - endState.t0;
      if (endState.saved) {
        if (Math.random() < dt * 3 && te < 14) { const x = (Math.random() - 0.5) * 24, y = 10 + Math.random() * 8, z = -8 - Math.random() * 14; emit(glow, 40, x, y, z, { colors: [[0xffd34d, 0xff6ad5, 0x7ff0ff, 0x7dff8a][(Math.random() * 4) | 0], 0xffffff], speed: 7, up: 0, spreadUp: 1, vyMul: 1, g: 3, drag: 1.2, life: 1.3, size: 0.45 }); }
        if (Math.random() < dt * 30 * partMult) emit(solid, 1, (Math.random() - 0.5) * 16, 12, -2 + Math.random() * 8, { colors: [0xff4d8a, 0xffd34d, 0x4dc6ff, 0x7dff8a, 0xc77dff], up: 0, speed: 1, g: 2.5, drag: 1.4, life: 4, size: 0.35, confetti: true });
        halos.push([0, 20, -60, 1, 0.75, 0.45, dawn * 0.8, 70]);
      } else {
        if (Math.random() < dt * 20 * partMult) emit(glow, 1, (Math.random() - 0.5) * 24, Math.random() * 3, -20 + Math.random() * 24, { colors: [0xff2a3a, 0x9a20ff], up: 1, speed: 2, g: -3, life: 1.6, size: 0.8 });
        if (Math.random() < dt * 2) shake = Math.max(shake, 0.5);
      }
    }

    embers.material.uniforms.time.value = now; embers.visible = quality.dust;
    updateParticles(glow, dt, halos);
    updateParticles(solid, dt, null);
    renderer.render(scene, camera);
  }

  // ------------------------------------------------------------------ events -> effects
  function fx(e) {
    const now = time;
    switch (e.k) {
      case 'shot': {
        const tp = epos.get(e.e); if (!tp) break;
        if (e.c === 'w' || e.c === 'g') {
          emit(glow, 4, tp.x, tp.y + 0.3, tp.z + 0.4, { colors: [0xffffff, e.c === 'g' ? 0xffd34d : 0xff8a6a], speed: 4, g: 2, life: 0.25, size: 0.35 });
          if (e.c === 'w') { const s = vis.get(e.s); if (s) s.atk = now; }
          else { const g = GUARD.find((x) => x.id === -e.s); if (g) g.atk = now; ring(tp.x, 0.1, tp.z, 0xffd34d, 2.4, 0.3); }
          const es = evis.get(e.e); if (es) es.hit = now;
          break;
        }
        if (bolts.length >= BOLTS) break;
        let sx, sy, sz;
        const s = e.s ? vis.get(e.s) : null;
        if (s) { sx = s.x; sy = s.y + 1.4; sz = s.z; s.atk = now; } else { sx = (Math.random() - 0.5) * 14; sy = WALL_Y + 3; sz = WALL_Z; }
        bolts.push({ sx, sy, sz, to: e.e, last: tp, t0: now, dur: Math.max(0.12, e.d || 0.3), c: e.c, col: new Color((SHOT_COL[e.c] || SHOT_COL.v)[0]), arc: e.c === 'm' ? 1.6 : e.c === 'v' ? 2.4 : 0.4 });
        break;
      }
      case 'dmg': { const s = evis.get(e.e); if (s) s.hit = now; else if (epos.get(e.e)?.k === 3) bossVis.hitT = now; if (e.c === 2) shake = Math.max(shake, 0.35); break; }
      case 'kill': {
        const y = e.q === 2 ? 3.2 : 0.8;
        emit(glow, e.q === 1 ? 14 : 8, e.x, y, e.z, { colors: [0xc060ff, 0xff3a6a, 0xffffff], speed: 4.5, g: 3, life: 0.5, size: 0.45 });
        emit(solid, e.q === 1 ? 8 : 4, e.x, y, e.z, { color: 0x1a0a20, speed: 2.5, up: 0.8, g: -1, life: 0.9, size: 0.6, alpha: 0.7 });
        evis.delete(e.e);
        break;
      }
      case 'heal': { const a = vis.get(e.s), b = vis.get(e.t); if (a && b) { beam(a.x, a.y + 1.4, a.z, b.x, b.y + 1, b.z, 0x5dff9a, 0.08, 0.4); emit(glow, 6, b.x, b.y + 1, b.z, { color: 0x7dffa8, up: 1, speed: 1.5, g: -2, life: 0.6, size: 0.3 }); } break; }
      case 'down': { const s = vis.get(e.id); if (s) emit(glow, 8, s.x, s.y + 0.6, s.z, { color: 0xff4060, speed: 3, life: 0.4, size: 0.35 }); break; }
      case 'rise': { const s = vis.get(e.id); if (s) { emit(glow, 10, s.x, s.y + 0.5, s.z, { color: 0x7dffa8, up: 1, speed: 2, g: -2, life: 0.6, size: 0.35 }); beam(s.x, s.y, s.z, s.x, s.y + 6, s.z, 0x7dffa8, 0.25, 0.5); } break; }
      case 'wallhit': emit(glow, 10, e.x, 1.2, WALL_FRONT - 0.2, { colors: [0xff3a3a, 0xffa040], speed: 4, g: 4, life: 0.4, size: 0.4 }); emit(solid, 5, e.x, 1, WALL_FRONT - 0.2, { color: 0x6a5e78, speed: 3, up: 0.5, g: 9, life: 0.8, size: 0.3 }); shake = Math.max(shake, 0.25 + Math.min(0.4, (e.d || 1) * 0.1)); flashT = now; break;
      case 'block': barrierHit = now; emit(glow, 6, e.x, 2.5, WALL_FRONT - 1.2, { color: 0x7ad8ff, speed: 3, life: 0.35, size: 0.4 }); break;
      case 'toll': shake = Math.max(shake, 1.2); flashT = now; break;
      case 'boss': shake = Math.max(shake, 1.0); ring(0, 0.2, RIFT_Z + 4, 0xff3a6a, 14, 1.2); break;
      case 'bossatk': {
        bossVis.atkT = now;
        const bx = bossVis.x, bz = bossVis.z, top = BOSS[bossVis.id]?.top || 8;
        if (e.kind === 'summon') { ring(bx, 0.2, bz, 0xb040ff, 7, 0.9); emit(glow, 30, bx, 1, bz, { colors: [0xb040ff, 0xff3a6a], speed: 6, up: 0.4, g: 2, life: 0.8, size: 0.6 }); break; }
        if (e.kind === 'beam') beam(bx, top * 0.6, bz + 1, e.x, e.blocked ? 3.2 : 1.5, e.blocked ? WALL_FRONT - 1.4 : WALL_FRONT, e.blocked ? 0x7ad8ff : 0xff2a5a, 0.55, 0.7);
        else { ring(bx, 0.15, bz, 0xff3a6a, 16, 0.9); emit(solid, 20, bx, 0.3, bz, { color: 0x4a3a58, speed: 6, up: 0.6, g: 12, life: 0.9, size: 0.5 }); }
        if (e.blocked) barrierHit = now; else flashT = now;
        shake = Math.max(shake, e.blocked ? 0.5 : 1.0);
        emit(glow, 18, e.x, 2, WALL_FRONT - 0.5, { colors: e.blocked ? [0x7ad8ff, 0xffffff] : [0xff2a5a, 0xffa040], speed: 6, g: 3, life: 0.5, size: 0.6 });
        break;
      }
      case 'bossdown': case 'retreat':
        bossVis.dieT = now; shake = Math.max(shake, 1.4); flashT = now;
        ring(bossVis.x, 0.2, bossVis.z, 0xffd34d, 16, 1.2); beam(bossVis.x, 0, bossVis.z, bossVis.x, 40, bossVis.z, e.k === 'bossdown' ? 0xffe080 : 0xb040ff, 2.4, 1.2);
        break;
      case 'ult': {
        ultT = now; shake = Math.max(shake, 1.1); flashT = now;
        let i = 0; for (const [, p] of epos) { if (i++ > 9) break; beam(p.x, 0, p.z, p.x, 30, p.z, e.p < 1 ? 0x7ad8ff : 0xffe080, 0.9, 0.7); emit(glow, 6, p.x, 0.5, p.z, { colors: [0xffffff, 0xffe080], speed: 5, g: 2, life: 0.5, size: 0.6 }); }
        ring(0, 0.2, -10, 0xffe080, 20, 1.0);
        break;
      }
      case 'pulse': barrierHit = now; ring(0, WALL_Y, WALL_FRONT, 0x7ad8ff, 14, 0.9); break;
      case 'volley': { const s = vis.get(e.id); if (s) { ring(s.x, s.y + 0.1, s.z, 0xffd34d, 1.6, 0.5); emit(glow, 12, s.x, s.y + 1.2, s.z, { colors: [0xffd34d, 0xff6ad5], up: 1, speed: 3, g: 1, life: 0.6, size: 0.4 }); } break; }
      case 'gift': {
        const s = vis.get(e.id);
        if (s) emit(glow, 14, s.x, s.y + 1, s.z, { colors: [0xff6ad5, 0xffd34d, 0x7ff0ff], up: 1, speed: 3.5, g: 2, life: 0.7, size: 0.4 });
        if (e.tier === 'rune') { barrierHit = now; ring(0, WALL_Y, WALL_FRONT + 0.5, 0x7ad8ff, 12, 0.8); }
        if (e.tier === 'awaken' && s) beam(s.x, s.y, s.z, s.x, 30, s.z, 0xffe080, 0.7, 1.0);
        break;
      }
      case 'bless': { const s = vis.get(e.id); if (s) beam(s.x, s.y, s.z, s.x, 25, s.z, e.why === 'share' ? 0x7ad8ff : 0xfff0a0, 0.35, 0.8); if (e.why === 'share') barrierHit = now; break; }
      case 'class': { const s = vis.get(e.id); if (s) { ring(s.x, s.y + 0.1, s.z, CLS_COL[e.c] || 0xffffff, 1.2, 0.4); emit(glow, 8, s.x, s.y + 0.8, s.z, { color: CLS_COL[e.c] || 0xffffff, up: 1, speed: 2, g: -1, life: 0.5, size: 0.3 }); } break; }
      case 'join': { const s = vis.get(e.id); if (s) emit(glow, 6, s.x, s.y + 0.6, s.z, { color: 0xffffff, speed: 2, life: 0.4, size: 0.3 }); break; }
      case 'wave': ring(0, 0.2, RIFT_Z + 3, 0xb040ff, 10, 1.0); break;
      case 'chapter': shake = Math.max(shake, 0.6); ring(0, 0.2, RIFT_Z + 3, 0xff3a6a, 18, 1.4); break;
      case 'end': endState = { saved: !!e.saved, t0: now }; shake = Math.max(shake, 1.2); flashT = now; break;
      case 'intro': case 'gather': endState = null; bolts.length = 0; break;
    }
  }

  // ------------------------------------------------------------------ API
  let W = 390, H = 844;
  const pv = new Vector3();
  const project = (x, y, z) => { pv.set(x, y, z).project(camera); return { x: (pv.x * 0.5 + 0.5) * W, y: (-pv.y * 0.5 + 0.5) * H, vis: pv.z < 1 && pv.z > -1 }; };
  return {
    kind: 'webgl', renderer,
    resize(w, h, pr) { W = w; H = h; renderer.setPixelRatio(pr); renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = w / h < 0.7 ? 52 : 42; camera.updateProjectionMatrix(); glow.mat.uniforms.px.value = solid.mat.uniforms.px.value = h * pr * 0.9; embers.material.uniforms.px.value = h * pr * 0.5; },
    setQuality(q) { quality = q; partMult = q.particles; },
    frame, fx, project,
    enemyTop(id) { const p = epos.get(id); if (!p) return null; return project(p.x, p.y + (p.k === 1 ? 1.4 : p.k === 3 ? 0 : 0.8), p.z); },
    bossTop() { const b = BOSS[bossVis.id]; if (!b || !b.g.visible) return null; return project(bossVis.x, b.top + 0.5, bossVis.z); },
    riftAt() { return project(0, RIFT_Y, RIFT_Z); },
    drawn: () => drawn,
    shake(v) { shake = Math.max(shake, v); },
    stats() { const i = renderer.info; return { calls: i.render.calls, tris: i.render.triangles, tex: i.memory.textures, geo: i.memory.geometries, chars: P.body.count, enemies: EN.impBody.count + EN.bruBody.count + EN.wrBody.count, parts: glow.list.length + solid.list.length, bolts: bolts.length }; },
    dispose() { scene.traverse((o) => { if (o.isInstancedMesh) o.dispose(); }); for (const x of global) x.dispose?.(); renderer.dispose(); },
    loseContext() { try { renderer.forceContextLoss(); } catch {} },
  };
}
