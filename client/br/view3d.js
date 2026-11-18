// Battle Royale 3D view (Three.js), built for iPhone Safari:
// - instanced low-poly chibis (one draw call per body part for every fighter), toon shading, blob shadows
// - one procedural floor texture, gradient sky shader, no real-time shadows, no post-processing
// - "bloom" faked with additive glow sprites (one Points buffer) and additive rings
// - fixed-size pools (particles, rings, meteors): nothing is allocated per frame, everything is disposed on teardown
// - a cap on rendered fighters (the rest still fight on the server and show on the leaderboard)
import {
  WebGLRenderer, Scene, PerspectiveCamera, Color, Fog, HemisphereLight, DirectionalLight, AmbientLight,
  Mesh, InstancedMesh, Points, BufferGeometry, BufferAttribute, CylinderGeometry, CircleGeometry, SphereGeometry,
  CapsuleGeometry, OctahedronGeometry, DodecahedronGeometry, IcosahedronGeometry, PlaneGeometry, RingGeometry, TorusGeometry,
  MeshToonMaterial, MeshBasicMaterial, ShaderMaterial, CanvasTexture, DataTexture, RedFormat, NearestFilter,
  AdditiveBlending, NormalBlending, BackSide, DoubleSide, Matrix4, Vector3, Quaternion, Euler, Object3D, SRGBColorSpace,
  ACESFilmicToneMapping, MathUtils,
} from 'three';

const FLAG = { alive: 1, shield: 2, speed: 4, giant: 8, rage: 16, dash: 32, dance: 64, air: 128, crown: 256, cmd: 512, low: 1024, bot: 2048 };
const SKIN = [0xffd9b8, 0xf1c08f, 0xd9a066, 0xa86b45, 0x7a4a2c, 0xffe3cf];
const TAU = Math.PI * 2;

export function createView3D(canvas, opts = {}) {
  const ctxAttrs = { antialias: !!opts.aa, alpha: false, depth: true, stencil: false, powerPreference: 'default', preserveDrawingBuffer: !!opts.preserve, failIfMajorPerformanceCaveat: false };
  const renderer = new WebGLRenderer({ canvas, ...ctxAttrs });
  if (!renderer.getContext()) throw new Error('no webgl');
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = false;
  renderer.info.autoReset = true;

  const scene = new Scene();
  scene.background = new Color(0x1a0f33);
  scene.fog = new Fog(0x3a1f5c, 45, 120);
  const camera = new PerspectiveCamera(46, 9 / 16, 0.5, 400);
  const disposables = [];
  const keep = (x) => { disposables.push(x); return x; };

  // ------------------------------------------------------------------ lights + toon ramp
  scene.add(new HemisphereLight(0xc9b6ff, 0x4a2a3a, 1.35));
  scene.add(new AmbientLight(0x6a5a8a, 0.35));
  const sun = new DirectionalLight(0xffe2c4, 2.1); sun.position.set(-12, 22, 10); scene.add(sun);
  const ramp = keep(new DataTexture(new Uint8Array([90, 170, 255]), 3, 1, RedFormat)); ramp.minFilter = ramp.magFilter = NearestFilter; ramp.needsUpdate = true;
  const toon = (color, extra = {}) => keep(new MeshToonMaterial({ color, gradientMap: ramp, ...extra }));

  // ------------------------------------------------------------------ textures (all procedural, small)
  function canvasTex(size, draw, { mip = true } = {}) {
    const c = document.createElement('canvas'); c.width = c.height = size; draw(c.getContext('2d'), size);
    const t = keep(new CanvasTexture(c)); t.colorSpace = SRGBColorSpace; t.generateMipmaps = mip; if (!mip) t.minFilter = 1006; t.anisotropy = 4; return t;
  }
  const floorTex = canvasTex(opts.floorSize || 512, (g, S) => {
    const c = S / 2;
    const rg = g.createRadialGradient(c, c, 0, c, c, c); rg.addColorStop(0, '#5b4b8a'); rg.addColorStop(0.7, '#3d3170'); rg.addColorStop(1, '#2a2050');
    g.fillStyle = rg; g.fillRect(0, 0, S, S);
    // rings of stone tiles
    const rings = 9;
    for (let i = 1; i <= rings; i++) {
      const r0 = (c * (i - 1)) / rings, r1 = (c * i) / rings, n = Math.max(6, Math.round(i * 7));
      for (let k = 0; k < n; k++) {
        const a0 = (k / n) * TAU + i * 0.3, a1 = ((k + 1) / n) * TAU + i * 0.3;
        g.beginPath(); g.arc(c, c, r1 - 1.5, a0 + 0.012, a1 - 0.012); g.arc(c, c, r0 + 1.5, a1 - 0.012, a0 + 0.012, true); g.closePath();
        const l = 34 + ((k * 37 + i * 11) % 9) * 2.2 + (i % 2) * 5;
        g.fillStyle = `hsl(${255 + ((k * 13) % 20) - 10}, ${30 + (i % 3) * 6}%, ${l}%)`; g.fill();
      }
    }
    // glowing rune circles + center star
    g.strokeStyle = 'rgba(255,214,120,0.85)'; g.lineWidth = S / 170;
    for (const rr of [0.16, 0.2, 0.62, 0.64]) { g.beginPath(); g.arc(c, c, c * rr, 0, TAU); g.stroke(); }
    g.lineWidth = S / 120; g.strokeStyle = 'rgba(255,190,90,0.9)';
    g.beginPath(); for (let k = 0; k <= 10; k++) { const a = (k / 10) * TAU - Math.PI / 2, rr = k % 2 ? c * 0.07 : c * 0.155; g.lineTo(c + Math.cos(a) * rr, c + Math.sin(a) * rr); } g.closePath(); g.stroke();
    g.fillStyle = 'rgba(255,200,110,0.18)'; g.fill();
    g.font = `${Math.round(S / 26)}px serif`; g.fillStyle = 'rgba(255,214,140,0.75)'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const runes = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ';
    for (let k = 0; k < 24; k++) { const a = (k / 24) * TAU; g.save(); g.translate(c + Math.cos(a) * c * 0.63, c + Math.sin(a) * c * 0.63); g.rotate(a + Math.PI / 2); g.fillText(runes[k], 0, 0); g.restore(); }
    // gold edge band
    g.lineWidth = S / 40; g.strokeStyle = '#d9a441'; g.beginPath(); g.arc(c, c, c - S / 80, 0, TAU); g.stroke();
    g.lineWidth = S / 200; g.strokeStyle = '#fff1b8'; g.beginPath(); g.arc(c, c, c - S / 45, 0, TAU); g.stroke();
  });
  const softTex = canvasTex(64, (g, S) => { const rg = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2); rg.addColorStop(0, 'rgba(0,0,0,0.55)'); rg.addColorStop(0.6, 'rgba(0,0,0,0.25)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = rg; g.fillRect(0, 0, S, S); }, { mip: false });

  // ------------------------------------------------------------------ sky
  const sky = new Mesh(keep(new SphereGeometry(180, 24, 12)), keep(new ShaderMaterial({
    side: BackSide, depthWrite: false, fog: false,
    uniforms: { time: { value: 0 } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP; uniform float time;
      void main(){ float h = vP.y;
        vec3 top = vec3(0.06,0.03,0.18), mid = vec3(0.32,0.12,0.48), hor = vec3(1.0,0.48,0.38), low = vec3(0.12,0.05,0.2);
        vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0, 0.22, h)), top, smoothstep(0.2, 0.85, h)) : mix(hor*0.7, low, smoothstep(0.0, -0.25, h));
        float a = atan(vP.z, vP.x);
        float aur = sin(a*3.0 + time*0.15) * sin(a*5.0 - time*0.1) * 0.5 + 0.5;
        c += vec3(0.25,0.6,0.55) * aur * smoothstep(0.15, 0.35, h) * smoothstep(0.7, 0.4, h) * 0.22;
        gl_FragColor = vec4(c, 1.0); }`,
  })));
  scene.add(sky);
  // stars
  const starGeo = keep(new BufferGeometry());
  { const n = 320, p = new Float32Array(n * 3), s = new Float32Array(n); for (let i = 0; i < n; i++) { const a = Math.random() * TAU, h = 0.25 + Math.random() * 0.75, rr = Math.sqrt(1 - h * h) * 170; p.set([Math.cos(a) * rr, h * 170, Math.sin(a) * rr], i * 3); s[i] = Math.random(); } starGeo.setAttribute('position', new BufferAttribute(p, 3)); starGeo.setAttribute('seed', new BufferAttribute(s, 1)); }
  const stars = new Points(starGeo, keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, fog: false, uniforms: { time: { value: 0 }, px: { value: 1 } },
    vertexShader: 'attribute float seed; uniform float time; uniform float px; varying float vA; void main(){ vA = 0.45 + 0.55*sin(time*(1.0+seed*2.0) + seed*40.0); gl_PointSize = (1.5 + seed*2.5) * px; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'varying float vA; void main(){ float d = length(gl_PointCoord-0.5); gl_FragColor = vec4(vec3(1.0,0.95,0.9)*vA*smoothstep(0.5,0.0,d), 1.0); }',
  })));
  scene.add(stars);

  // ------------------------------------------------------------------ arena
  const R = opts.platform || 20;
  const platGeo = keep(new CylinderGeometry(R, R * 0.82, 2.2, 64, 1, false)); platGeo.translate(0, -1.1, 0);
  const platform = new Mesh(platGeo, [toon(0x3b2d5c), keep(new MeshBasicMaterial({ map: floorTex })), toon(0x241a3a)]);
  scene.add(platform);
  const rim = new Mesh(keep(new TorusGeometry(R, 0.22, 6, 72)), toon(0xe8b54a, { emissive: 0x6a4210 })); rim.rotation.x = Math.PI / 2; rim.position.y = 0.02; scene.add(rim);
  // floating rocks below and around
  const rockGeo = keep(new DodecahedronGeometry(1, 0));
  const rocks = new InstancedMesh(rockGeo, toon(0x40305e), 14); rocks.frustumCulled = false; scene.add(rocks);
  const rockData = []; for (let i = 0; i < 14; i++) rockData.push({ a: (i / 14) * TAU + Math.random() * 0.3, d: R + 6 + Math.random() * 14, y: -6 + Math.random() * 7, s: 0.7 + Math.random() * 2.2, ph: Math.random() * TAU });
  // crystal pillars on the rim (emissive colours + halos = cheap bloom)
  const CRY = 12;
  const crystals = new InstancedMesh(keep(new OctahedronGeometry(1, 0)), keep(new MeshBasicMaterial({ color: 0xffffff })), CRY); crystals.frustumCulled = false; scene.add(crystals);
  const cryCols = [0x5ef0ff, 0xff6ad5, 0xffd36a];
  const cryData = []; for (let i = 0; i < CRY; i++) { const col = new Color(cryCols[i % 3]); crystals.setColorAt(i, col); cryData.push({ a: (i / CRY) * TAU + 0.13, col }); }
  const bases = new InstancedMesh(keep(new CylinderGeometry(0.8, 1.1, 1.2, 6)), toon(0x2c2146), CRY); bases.frustumCulled = false; scene.add(bases);
  { const m = new Matrix4(); for (let i = 0; i < CRY; i++) { const a = cryData[i].a; m.makeTranslation(Math.cos(a) * (R + 1.6), 0.0, Math.sin(a) * (R + 1.6)); bases.setMatrixAt(i, m); } bases.instanceMatrix.needsUpdate = true; }

  // storm: glowing wall + tinted floor outside the safe zone + dashed next-zone ring
  const wallGeo = keep(new CylinderGeometry(1, 1, 1, 72, 1, true)); wallGeo.translate(0, 0.5, 0);
  const stormU = { time: { value: 0 }, r: { value: 18 }, rt: { value: 18 }, showT: { value: 0 } };
  const wall = new Mesh(wallGeo, keep(new ShaderMaterial({
    transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide, uniforms: stormU,
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec2 vUv; uniform float time;
      void main(){ float s = sin(vUv.x*150.0 + vUv.y*9.0 - time*2.5)*0.5+0.5; float s2 = sin(vUv.x*61.0 - vUv.y*5.0 + time*1.7)*0.5+0.5;
        float a = pow(1.0 - vUv.y, 1.6) * (0.35 + 0.45*s*s2) + exp(-vUv.y*18.0)*0.8;
        vec3 c = mix(vec3(0.55,0.15,0.95), vec3(1.0,0.45,0.95), s*s2);
        gl_FragColor = vec4(c * a, 1.0); }`,
  })));
  wall.renderOrder = 3; scene.add(wall);
  const stormDisc = new Mesh(keep(new CircleGeometry(R + 0.4, 72)), keep(new ShaderMaterial({
    transparent: true, depthWrite: false, uniforms: stormU,
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
    fragmentShader: `varying vec3 vW; uniform float r, rt, time, showT;
      void main(){ float d = length(vW.xz);
        float outside = smoothstep(r - 0.1, r + 0.5, d);
        float edge = exp(-abs(d - r) * 2.5);
        float ang = atan(vW.z, vW.x);
        float dash = step(0.45, fract(ang * 16.0 / 6.2832 + time * 0.25));
        float tgt = (1.0 - smoothstep(0.03, 0.12, abs(d - rt))) * dash * showT;
        vec3 c = mix(vec3(0.35,0.06,0.5), vec3(1.0,0.55,1.0), edge);
        c = mix(c, vec3(1.0), tgt);
        float a = clamp(outside * 0.6 + edge * 0.55 + tgt * 0.9, 0.0, 0.92);
        gl_FragColor = vec4(c, a); }`,
  })));
  stormDisc.rotation.x = -Math.PI / 2; stormDisc.position.y = 0.03; stormDisc.renderOrder = 1; scene.add(stormDisc);

  // podium (ceremony)
  const podium = new Object3D(); scene.add(podium);
  const podSpots = [[0, 1.5, 0, 0xffd34d], [-2.1, 1.0, 0.5, 0xd7e2f0], [2.1, 0.6, 0.5, 0xd9894a]];
  const podMeshes = podSpots.map(([x, h, z, col]) => { const g = keep(new CylinderGeometry(0.95, 1.1, h, 8)); g.translate(0, h / 2, 0); const m = new Mesh(g, toon(col, { emissive: new Color(col).multiplyScalar(0.18) })); m.position.set(x, 0, z); podium.add(m); return m; });
  podium.visible = false;

  // ------------------------------------------------------------------ chibis (instanced parts)
  const CAP = opts.maxChars || 64;
  const part = (geo, mat, n = 1) => { const m = new InstancedMesh(keep(geo), mat, CAP * n); m.frustumCulled = false; m.count = 0; const c = new Color(1, 1, 1); for (let i = 0; i < CAP * n; i++) m.setColorAt(i, c); scene.add(m); return m; };
  const P = {
    body: part(new CapsuleGeometry(0.27, 0.24, 3, 10), toon(0xffffff)),
    head: part(new SphereGeometry(0.36, 14, 10), toon(0xffffff)),
    hair: part(new SphereGeometry(0.385, 14, 8, 0, TAU, 0, Math.PI * 0.52), toon(0xffffff)),
    eyes: part(new SphereGeometry(0.058, 8, 6), keep(new MeshBasicMaterial({ color: 0x1b1430 })), 2),
    hands: part(new SphereGeometry(0.13, 10, 8), toon(0xffffff), 2),
    feet: part(new SphereGeometry(0.12, 8, 6), toon(0x2a2238), 2),
    shadow: part(new PlaneGeometry(1, 1).rotateX(-Math.PI / 2), keep(new MeshBasicMaterial({ map: softTex, transparent: true, depthWrite: false, color: 0xffffff }))),
  };
  P.shadow.renderOrder = 2;
  const bubble = part(new IcosahedronGeometry(1, 2), keep(new ShaderMaterial({
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
  })));
  const crownGeo = keep(new CylinderGeometry(0.22, 0.17, 0.2, 5, 1, true));
  const crown = new Mesh(crownGeo, toon(0xffd34d, { emissive: 0x7a5200, side: DoubleSide })); crown.visible = false; scene.add(crown);

  // rings: shockwaves, meteor warnings, viewer markers, attack reticles (additive: fading = darker colour)
  const RINGS = 64;
  const ringMesh = new InstancedMesh(keep(new RingGeometry(0.86, 1, 40).rotateX(-Math.PI / 2)), keep(new MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide })), RINGS);
  ringMesh.frustumCulled = false; ringMesh.renderOrder = 4; { const c = new Color(0, 0, 0); for (let i = 0; i < RINGS; i++) ringMesh.setColorAt(i, c); } scene.add(ringMesh);
  const rings = []; // { x, z, y, t0, dur, r0, r1, col: Color, kind }

  // meteors
  const MET = 12;
  const metMesh = new InstancedMesh(keep(new IcosahedronGeometry(0.55, 0)), toon(0xff8a3d, { emissive: 0xff5a10 }), MET); metMesh.frustumCulled = false; metMesh.count = 0; scene.add(metMesh);
  const meteors = []; // { x, z, t0, d }

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

  // ------------------------------------------------------------------ per-fighter visual state
  const vis = new Map(); // id -> state
  const M = new Matrix4(), L2 = new Matrix4(), Q = new Quaternion(), E = new Euler(), V = new Vector3(), S = new Vector3(), ROOT = new Matrix4();
  const white = new Color(1, 1, 1), cA = new Color(), cB = new Color();
  function vstate(f, now) {
    let s = vis.get(f.id);
    if (!s) { s = { x: f.x, y: f.y, z: f.z, face: f.face, walk: Math.random() * 10, punch: -9, hit: -9, flash: 0, gs: 1, seen: now, spawn: now, blink: now + 2 + Math.random() * 3, spinT: -9, skin: SKIN[f.id % SKIN.length], hp: f.hp, cmdT: -9, tgtT: -9 }; vis.set(f.id, s); }
    return s;
  }
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

  // ------------------------------------------------------------------ camera
  const cam = { tx: 0, ty: 0, tz: 0, dist: 34, yaw: 0.6, pitch: 0.95, kill: null, shake: 0, orbit: 0 };
  let aspect = 9 / 16, W = 390, H = 844;
  const action = { x: 0, z: 0, w: 0 }, cluster = { x: 0, z: 0, at: 0 };   // where the recent hits happen (the camera leans toward the action)
  function updateCamera(world, dt, now) {
    let tx = 0, tz = 0, ty = 0.8, dist = 30, pitch = 0.8;
    const ph = world.phase, fs = world.fighters;
    cam.orbit += dt * (ph === 'lobby' ? 0.09 : ph === 'ceremony' ? 0.16 : 0.03);
    action.w *= Math.exp(-dt * 0.8);
    if (ph === 'battle' && fs.length) {
      // follow the busiest crowd (portrait screens are narrow: 50 fighters never fit at a nice size), with hysteresis
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
      const spread = Math.max(ds.length ? ds[Math.min(ds.length - 1, Math.max(2, Math.floor(ds.length * 0.5)))] : 3, 2.5);
      dist = MathUtils.clamp(8 + spread * (aspect < 0.7 ? 1.6 : 1.1), 11, 27);
      pitch = 0.78;
    } else if (ph === 'ceremony') { tx = 0; tz = 0.2; ty = 1.9; dist = 9.5; pitch = 0.34; }
    else { const ds = fs.map((f) => Math.hypot(f.x, f.z)).sort((a, b) => a - b); const sp = ds.length ? ds[Math.floor(ds.length * 0.75)] : 4; dist = MathUtils.clamp(9 + sp * (aspect < 0.7 ? 1.7 : 1.2), 13, 28); pitch = 0.72; }
    // kill cam: a short push-in on the killer
    if (cam.kill && now < cam.kill.until) {
      const k = cam.kill, f = fs.find((x) => x.id === k.id) || k.last;
      if (f) { k.last = f; const w = Math.min(1, (now - k.t0) / 0.25, (k.until - now) / 0.35); tx = MathUtils.lerp(tx, f.x, w); tz = MathUtils.lerp(tz, f.z, w); ty = MathUtils.lerp(ty, 0.9, w); dist = MathUtils.lerp(dist, 8, w); pitch = MathUtils.lerp(pitch, 0.5, w); }
    }
    const k = 1 - Math.exp(-dt * 2.4), kd = 1 - Math.exp(-dt * 1.6);
    cam.tx += (tx - cam.tx) * k; cam.ty += (ty - cam.ty) * k; cam.tz += (tz - cam.tz) * k; cam.dist += (dist - cam.dist) * kd; cam.pitch += (pitch - cam.pitch) * kd;
    focus.set(cam.tx, 0, cam.tz);
    const yaw = cam.yaw + cam.orbit;
    const cx = cam.tx + Math.cos(yaw) * Math.cos(cam.pitch) * cam.dist, cy = cam.ty + Math.sin(cam.pitch) * cam.dist, cz = cam.tz + Math.sin(yaw) * Math.cos(cam.pitch) * cam.dist;
    cam.shake = Math.max(0, cam.shake - dt * 1.8);
    const sh = cam.shake * cam.shake * 0.9;
    camera.position.set(cx + (Math.sin(now * 47) + Math.sin(now * 29)) * sh, cy + Math.sin(now * 53) * sh, cz + Math.cos(now * 41) * sh);
    camera.lookAt(cam.tx, cam.ty, cam.tz);
  }

  // ------------------------------------------------------------------ frame
  let quality = { maxChars: CAP, halos: true, stars: true, particles: 1 };
  const halos = [];
  let time = 0;
  function frame(world, dt, now) {
    time = now;
    stormU.time.value = now; sky.material.uniforms.time.value = now; stars.material.uniforms.time.value = now; bubble.material.uniforms.time.value = now;
    stars.visible = quality.stars;
    // storm
    const sr = world.phase === 'battle' ? world.r : R + 2;
    stormU.r.value = sr; stormU.rt.value = world.rt; stormU.showT.value = world.phase === 'battle' && world.rt < world.r - 0.3 ? 1 : 0;
    wall.visible = world.phase === 'battle' && sr < R + 0.5;
    wall.scale.set(sr, 7 + Math.sin(now * 2) * 0.3, sr);
    // decorations
    for (let i = 0; i < 14; i++) { const r = rockData[i]; M.compose(V.set(Math.cos(r.a + now * 0.01) * r.d, r.y + Math.sin(now * 0.5 + r.ph) * 0.4, Math.sin(r.a + now * 0.01) * r.d), Q.setFromEuler(E.set(r.ph + now * 0.05, r.ph, 0)), S.set(r.s, r.s * 0.8, r.s)); rocks.setMatrixAt(i, M); }
    rocks.instanceMatrix.needsUpdate = true;
    halos.length = 0;
    for (let i = 0; i < CRY; i++) {
      const c = cryData[i], y = 2.2 + Math.sin(now * 1.3 + i) * 0.25, x = Math.cos(c.a) * (R + 1.6), z = Math.sin(c.a) * (R + 1.6);
      M.compose(V.set(x, y, z), Q.setFromEuler(E.set(0, now * 0.6 + i, 0)), S.set(0.55, 1.5, 0.55)); crystals.setMatrixAt(i, M);
      if (quality.halos) halos.push([x, y, z, c.col.r, c.col.g, c.col.b, 0.55 + 0.2 * Math.sin(now * 2 + i), 4.2]);
    }
    crystals.instanceMatrix.needsUpdate = true;
    halos.push([-60, 70, -120, 1, 0.9, 0.8, 0.8, 60]);  // moon glow
    // podium
    podium.visible = world.phase === 'ceremony';
    if (podium.visible) { const k = MathUtils.clamp((now - (world.phaseStart || now)) / 0.8, 0.01, 1); podMeshes.forEach((m) => (m.scale.y = 1 - Math.pow(1 - k, 3))); }

    // fighters
    const fs = selectFighters(world.fighters, now, quality.maxChars);
    updateCamera(world, dt, now);
    let n = 0, nb = 0, crownF = null;
    for (const f of fs) {
      if (n >= CAP) break;
      const s = vstate(f, now);
      const prevX = s.x, prevZ = s.z;
      s.x = f.x; s.y = f.y; s.z = f.z; s.seen = now;
      let df = f.face - s.face; df = Math.atan2(Math.sin(df), Math.cos(df)); s.face += df * Math.min(1, dt * 12);
      const speed = Math.hypot(s.x - prevX, s.z - prevZ) / Math.max(dt, 1e-3);
      const moving = Math.min(1, speed / 3);
      s.walk += dt * (6 + speed * 2.2);
      const giant = f.flags & FLAG.giant; s.gs += ((giant ? 2 : 1) - s.gs) * Math.min(1, dt * 5);
      s.flash = Math.max(0, 1 - (now - s.hit) / 0.14);
      const air = f.flags & FLAG.air, dance = f.flags & FLAG.dance, dash = f.flags & FLAG.dash;
      const bob = Math.abs(Math.sin(s.walk)) * 0.09 * moving;
      const hitK = Math.max(0, 1 - (now - s.hit) / 0.2);
      let sy = 1 + hitK * -0.18 + (air ? 0.22 : 0) + (dash ? -0.1 : 0), sxz = 1 + hitK * 0.12 + (dash ? 0.1 : 0);
      const spawnK = Math.min(1, (now - s.spawn) / 0.25); sy *= spawnK; sxz *= spawnK;
      let yaw = Math.PI / 2 - s.face;
      if (dance) yaw += now * 9; else if (now - s.spinT < 0.45) yaw += (now - s.spinT) * 30;
      const hop = dance ? Math.abs(Math.sin(now * 9)) * 0.35 : 0;
      const gsc = s.gs;
      ROOT.compose(V.set(s.x, s.y + bob + hop, s.z), Q.setFromEuler(E.set(dash ? 0.25 : moving * 0.12, yaw, 0)), S.set(gsc * sxz, gsc * sy, gsc * sxz));
      const lean = (now - s.punch) < 0.22 ? Math.sin(((now - s.punch) / 0.22) * Math.PI) : 0;
      const info = f.info || {};
      cA.set(info.color ?? 0xffffff); if (s.flash > 0) cA.lerp(white, s.flash);
      cB.set(s.skin); if (s.flash > 0) cB.lerp(white, s.flash);
      // body
      L2.compose(V.set(0, 0.47, lean * 0.08), Q.setFromEuler(E.set(lean * 0.2, 0, 0)), S.set(1, 1, 1)); M.multiplyMatrices(ROOT, L2); P.body.setMatrixAt(n, M); P.body.setColorAt(n, cA);
      // head + hair (big head, wobbles)
      const wob = Math.sin(s.walk * 0.5) * 0.06 * moving;
      L2.compose(V.set(0, 0.98, lean * 0.12), Q.setFromEuler(E.set(lean * 0.25 - 0.05, 0, wob)), S.set(1, 1, 1)); M.multiplyMatrices(ROOT, L2); P.head.setMatrixAt(n, M); P.head.setColorAt(n, cB);
      L2.compose(V.set(0, 1.02, lean * 0.12 - 0.02), Q.setFromEuler(E.set(lean * 0.25 - 0.3, 0, wob)), S.set(1, 1, 1)); M.multiplyMatrices(ROOT, L2); P.hair.setMatrixAt(n, M); P.hair.setColorAt(n, cA);
      // eyes (blink)
      if (now > s.blink + 0.12) s.blink = now + 2 + Math.random() * 3;
      const eyeY = now > s.blink ? 0.15 : 1;
      for (let e = 0; e < 2; e++) { L2.compose(V.set(e ? 0.125 : -0.125, 0.97, 0.315 + lean * 0.12), Q.identity(), S.set(1, 1.35 * eyeY, 0.6)); M.multiplyMatrices(ROOT, L2); P.eyes.setMatrixAt(n * 2 + e, M); }
      // hands: swing while walking, right jab on attack, both up while dancing
      const sw = Math.sin(s.walk) * 0.18 * moving;
      for (let e = 0; e < 2; e++) {
        const side = e ? 1 : -1, punch = e ? lean : 0;
        const hy = dance ? 1.05 + Math.sin(now * 9 + e * 3) * 0.12 : 0.48 + punch * 0.12;
        L2.compose(V.set(side * (0.36 - punch * 0.16), hy, (e ? -sw : sw) + punch * 0.5), Q.identity(), S.set(1, 1, 1)); M.multiplyMatrices(ROOT, L2); P.hands.setMatrixAt(n * 2 + e, M); P.hands.setColorAt(n * 2 + e, cA);
      }
      // feet
      for (let e = 0; e < 2; e++) { const st = Math.sin(s.walk + e * Math.PI) * 0.16 * moving; L2.compose(V.set(e ? 0.13 : -0.13, 0.06 + Math.max(0, st) * 0.3, st), Q.identity(), S.set(1, 0.65, 1.35)); M.multiplyMatrices(ROOT, L2); P.feet.setMatrixAt(n * 2 + e, M); }
      // blob shadow (shrinks while airborne)
      const shs = (0.9 + (giant ? 0.9 : 0)) * (air ? Math.max(0.3, 1 - s.y / 14) : 1) * spawnK;
      M.compose(V.set(s.x, 0.04, s.z), Q.identity(), S.set(shs, 1, shs)); P.shadow.setMatrixAt(n, M);
      // shield bubble / rage aura / giant aura
      if (f.flags & (FLAG.shield | FLAG.rage)) {
        const sh = f.flags & FLAG.shield; const r = (sh ? 0.85 : 0.75) * gsc * (1 + Math.sin(now * 8) * 0.03);
        M.compose(V.set(s.x, s.y + 0.6 * gsc, s.z), Q.identity(), S.set(r, r * 1.05, r)); bubble.setMatrixAt(nb, M); bubble.setColorAt(nb, sh ? tmpC.setRGB(0.35, 0.85, 1) : tmpC.setRGB(1, 0.25, 0.2)); nb++;
      }
      if (f.flags & FLAG.crown) crownF = { f, s, gsc, yaw };
      // speed / dash / air trails
      if ((f.flags & FLAG.speed) && moving > 0.3 && Math.random() < 0.5) emit(glow, 1, s.x, s.y + 0.2, s.z, { color: 0xffe066, speed: 0.4, life: 0.4, size: 0.35, g: -0.5 });
      if (dash) emit(glow, 2, s.x, s.y + 0.5, s.z, { color: info.color ?? 0xffffff, speed: 0.3, life: 0.35, size: 0.6, g: 0 });
      if (air) emit(glow, 1, s.x, s.y + 0.8, s.z, { color: 0xbfe9ff, speed: 0.2, life: 0.5, size: 0.4, g: -2, up: 1 });
      if ((f.flags & FLAG.cmd) && quality.halos) halos.push([s.x, 0.15, s.z, cA.r * 0.6, cA.g * 0.6, cA.b * 0.6, 0.6, 2.2 * gsc]);
      if (giant && quality.halos) halos.push([s.x, s.y + 1.2, s.z, 1, 0.75, 0.3, 0.35, 7]);
      n++;
    }
    for (const k of ['body', 'head', 'hair', 'shadow']) { P[k].count = n; P[k].instanceMatrix.needsUpdate = true; if (P[k].instanceColor) P[k].instanceColor.needsUpdate = true; }
    for (const k of ['eyes', 'hands', 'feet']) { P[k].count = n * 2; P[k].instanceMatrix.needsUpdate = true; if (P[k].instanceColor) P[k].instanceColor.needsUpdate = true; }
    bubble.count = nb; bubble.instanceMatrix.needsUpdate = true; if (bubble.instanceColor) bubble.instanceColor.needsUpdate = true;
    crown.visible = !!crownF;
    if (crownF) { const { s, gsc, yaw } = crownF; crown.position.set(s.x, s.y + 1.5 * gsc + Math.sin(now * 3) * 0.05, s.z); crown.rotation.set(-0.15, yaw + now, 0); crown.scale.setScalar(gsc); if (quality.halos) halos.push([s.x, s.y + 1.5 * gsc, s.z, 1, 0.8, 0.3, 0.7, 2.4]); }
    // forget fighters not drawn for a while
    if (vis.size > CAP * 3) for (const [id, s] of vis) if (now - s.seen > 5) vis.delete(id);

    // rings
    let rn = 0;
    for (let i = rings.length - 1; i >= 0; i--) { const r = rings[i]; if (now - r.t0 > r.dur) rings.splice(i, 1); }
    for (const r of rings) {
      if (rn >= RINGS) break;
      const k = (now - r.t0) / r.dur;
      let rad, a;
      if (r.kind === 'warn') { rad = r.r0 * (0.9 + 0.1 * Math.sin(now * 18)); a = 0.5 + 0.5 * Math.sin(now * 14); }
      else if (r.kind === 'mark') { rad = r.r0; a = 1 - k; }
      else { rad = r.r0 + (r.r1 - r.r0) * (1 - Math.pow(1 - k, 3)); a = 1 - k; }
      M.compose(V.set(r.x, r.y ?? 0.08, r.z), Q.identity(), S.set(rad, 1, rad)); ringMesh.setMatrixAt(rn, M);
      ringMesh.setColorAt(rn, tmpC.copy(r.col).multiplyScalar(Math.max(0, a))); rn++;
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

    updateParticles(glow, dt, halos);
    updateParticles(solid, dt, null);
    renderer.render(scene, camera);
  }

  // ------------------------------------------------------------------ event juice
  function posOf(id, world) { const f = world.fighters.find((x) => x.id === id); if (f) return f; const s = vis.get(id); return s ? { x: s.x, y: s.y, z: s.z, id } : null; }
  function ring(x, z, o) { rings.push({ x, z, y: o.y, t0: time, dur: o.dur || 0.5, r0: o.r0 ?? 0.2, r1: o.r1 ?? 2, col: new Color(o.color ?? 0xffffff), kind: o.kind || 'wave' }); if (rings.length > RINGS) rings.shift(); }
  function shake(v) { cam.shake = Math.min(1.2, cam.shake + v); }
  function fx(e, world) {
    const now = time;
    switch (e.k) {
      case 'atk': { const s = vis.get(e.a); if (s) s.punch = now; break; }
      case 'hit': {
        const s = vis.get(e.b); const p = posOf(e.b, world); if (s) s.hit = now;
        if (!p) break;
        action.x += (p.x - action.x) * 0.15; action.z += (p.z - action.z) * 0.15; action.w = Math.min(8, action.w + 0.4);
        const big = e.c || e.m;
        emit(glow, big ? 14 : 6, p.x, (p.y || 0) + 0.7, p.z, { colors: e.s ? [0xb45cff, 0xe0a0ff] : big ? [0xffffff, 0xffe066, 0xff9a3c] : [0xffffff, 0xfff1a8], speed: big ? 7 : 4.5, life: 0.35, size: big ? 0.5 : 0.35, g: 6, up: 0.3 });
        if (big) { ring(p.x, p.z, { y: 0.7, r0: 0.2, r1: 1.6, color: 0xfff0c0, dur: 0.25 }); shake(e.m ? 0.25 : 0.12); }
        else if (Math.hypot(p.x - cam.tx, p.z - cam.tz) < 7) shake(0.03);
        break;
      }
      case 'block': { const p = posOf(e.a, world); if (p) emit(glow, 6, p.x, 0.8, p.z, { color: 0x7fe7ff, speed: 3, life: 0.3, size: 0.35, g: 0 }); break; }
      case 'ko': {
        const p = posOf(e.b, world); if (!p) break;
        const s = vis.get(e.b), col = s ? null : null;
        emit(glow, 22, p.x, 0.7, p.z, { colors: [0xffffff, 0xffe066, 0xff6ad5, 0x5ef0ff], speed: 7, life: 0.7, size: 0.5, g: 5, up: 0.6 });
        emit(solid, 10, p.x, 0.5, p.z, { colors: [0xf4efff, 0xd9d0f0], speed: 2.2, life: 0.8, size: 0.9, size1: 1.6, g: -0.5, alpha: 0.75, up: 0.3 });
        emit(glow, 1, p.x, 1, p.z, { color: 0xeafcff, speed: 0.1, life: 1.6, size: 2.2, size1: 1, g: -2.2, drag: 0.5, up: 1, alpha: 0.9 });   // the little soul floating up
        ring(p.x, p.z, { r0: 0.3, r1: 3, color: 0xffd6ff, dur: 0.45 });
        shake(e.multi || e.streak ? 0.35 : 0.16);
        if (e.a && (e.first || e.multi || e.streak || e.giant || (e.left > 0 && e.left <= 3)) && (!cam.kill || now > cam.kill.until + 3)) cam.kill = { id: e.a, t0: now, until: now + 1.7 };
        vis.delete(e.b);
        break;
      }
      case 'dash': { const p = posOf(e.a, world); if (p) { ring(p.x, p.z, { r0: 0.3, r1: 1.4, color: 0xcfe8ff, dur: 0.3 }); emit(solid, 6, p.x, 0.2, p.z, { color: 0xd8cbe8, speed: 2, life: 0.5, size: 0.6, size1: 1, g: 0, alpha: 0.6 }); } break; }
      case 'shield': { const p = posOf(e.a, world); if (p) ring(p.x, p.z, { r0: 0.4, r1: 1.6, color: 0x5ee8ff, dur: 0.4 }); break; }
      case 'spin': { const s = vis.get(e.a); if (s) s.spinT = now; const p = posOf(e.a, world); if (p) { ring(p.x, p.z, { r0: 0.5, r1: 3, color: 0xffe36a, dur: 0.4 }); emit(glow, 16, p.x, 0.6, p.z, { color: 0xffe36a, speed: 6, life: 0.4, size: 0.4, g: 0, up: 0 }); shake(0.15); } break; }
      case 'heal': { const p = posOf(e.a, world); if (p) emit(glow, 4, p.x, 0.4, p.z, { color: 0x6dff9c, speed: 0.6, life: 0.9, size: 0.35, g: -2.5, up: 1, jitter: 0.6 }); break; }
      case 'drop': { const s = vis.get(e.a); if (s) s.spawn = now; break; }
      case 'land': { const p = posOf(e.a, world); if (p) { ring(p.x, p.z, { r0: 0.3, r1: 1.8, color: 0xd9ccff, dur: 0.35 }); emit(solid, 8, p.x, 0.15, p.z, { color: 0xcfc3e6, speed: 2.5, life: 0.5, size: 0.5, size1: 0.9, g: 1, up: 0.1, alpha: 0.7 }); } break; }
      case 'meteor': meteors.push({ x: e.x, z: e.z, t0: now, d: Math.max(0.3, e.d) }); if (meteors.length > MET) meteors.shift(); ring(e.x, e.z, { kind: 'warn', r0: 2.4, dur: Math.max(0.3, e.d), color: 0xff3b2f }); break;
      case 'boom':
        emit(glow, 34, e.x, 0.5, e.z, { colors: [0xffffff, 0xffd36a, 0xff8a3d, 0xff4b1f], speed: 9, life: 0.7, size: 0.8, g: 4, up: 0.5 });
        emit(solid, 14, e.x, 0.6, e.z, { colors: [0x5a4a6e, 0x7d6a8f, 0x3a2f4a], speed: 3.5, life: 1.2, size: 1.2, size1: 2.4, g: -0.6, alpha: 0.8, up: 0.5 });
        ring(e.x, e.z, { r0: 0.5, r1: e.r * 1.6, color: 0xffb060, dur: 0.5 }); ring(e.x, e.z, { r0: 0.2, r1: e.r, color: 0xffffff, dur: 0.25 });
        shake(0.5); break;
      case 'nuke': shake(1.1); ring(0, 0, { r0: 1, r1: R, color: 0xff8af0, dur: 1.2, y: 0.3 }); emit(glow, 60, 0, 1, 0, { colors: [0xffffff, 0xff8af0, 0x9b5de5], speed: 22, life: 1, size: 1, g: 0, up: 0.1 }); break;
      case 'power': case 'revive': {
        const p = posOf(e.a, world); if (!p) break;
        const col = { speed: 0xffe066, meteor: 0xff8a3d, giant: 0xffb347, revive: 0xff6fb5, nuke: 0xff8af0 }[e.tier] ?? 0xff6fb5;
        ring(p.x, p.z, { r0: 0.3, r1: 3.2, color: col, dur: 0.6 });
        for (let i = 0; i < 6; i++) emit(glow, 4, p.x, 0.2 + i * 0.5, p.z, { color: col, speed: 1.2, life: 0.9, size: 0.6, g: -4, up: 1, jitter: 0.5 });
        shake(0.2); break;
      }
      case 'cmd': {
        if (e.c === 'attack' || e.c === 'revenge') { const p = posOf(e.b, world); if (p) ring(p.x, p.z, { kind: 'mark', r0: 0.8, dur: 1.5, color: 0xff3355 }); }
        const s = vis.get(e.a); if (s) s.cmdT = now; break;
      }
      case 'hype': for (let i = 0; i < 40; i++) emit(glow, 1, (Math.random() - 0.5) * 30, 9 + Math.random() * 4, (Math.random() - 0.5) * 30, { color: 0xff7ab8, speed: 0.5, life: 2.2, size: 0.6, g: 4, drag: 2.5 }); break;
      case 'win': confettiUntil = now + 4.5; shake(0.3); break;
      case 'phase': if (e.ph === 'battle') { ring(0, 0, { r0: 2, r1: R, color: 0xffffff, dur: 0.9, y: 0.2 }); shake(0.2); } break;
    }
  }
  let confettiUntil = 0;
  function confetti(now) {
    if (now < confettiUntil) emit(solid, 4, (Math.random() - 0.5) * 7, 7 + Math.random() * 2, (Math.random() - 0.5) * 4, { colors: [0xff4d5e, 0xffd23f, 0x3ec7ff, 0x9be564, 0xff6fb5, 0xffffff], speed: 1.2, life: 3.2, size: 0.32, g: 1.6, drag: 1.4, confetti: true, up: 0 });
  }

  // ------------------------------------------------------------------ public api
  const proj = new Vector3();
  const api = {
    kind: 'webgl', renderer,
    resize(w, h, pr) {
      W = w; H = h; aspect = w / h;
      renderer.setPixelRatio(pr); renderer.setSize(w, h, false);
      camera.aspect = aspect; camera.fov = aspect < 0.7 ? 58 : 44;
      // the action sits just below the HUD band at the top (TikTok's comments cover the bottom third)
      camera.setViewOffset(w, h, 0, aspect < 0.8 ? -h * 0.03 : 0, w, h);
      camera.updateProjectionMatrix();
      const px = (h * pr) / (2 * Math.tan(MathUtils.degToRad(camera.fov / 2)));
      glow.mat.uniforms.px.value = px; solid.mat.uniforms.px.value = px; stars.material.uniforms.px.value = pr;
    },
    setQuality(q) { quality = { ...quality, ...q }; partMult = q.particles ?? 1; },
    frame(world, dt, now) { confetti(now); frame(world, dt, now); },
    fx,
    project(x, y, z) { proj.set(x, y, z).project(camera); return { x: (proj.x * 0.5 + 0.5) * W, y: (-proj.y * 0.5 + 0.5) * H, z: proj.z, ok: proj.z < 1 && proj.z > -1 }; },
    drawn() { return selected.length ? selected : null; },
    headY(f) { const s = vis.get(f.id); return 1.55 * (s ? s.gs : 1); },
    stats() { const i = renderer.info; return { calls: i.render.calls, tris: i.render.triangles, tex: i.memory.textures, geo: i.memory.geometries, chars: P.body.count, parts: glow.list.length + solid.list.length }; },
    dispose() {
      for (const d of disposables) try { d.dispose(); } catch {}
      scene.traverse((o) => { if (o.isInstancedMesh) o.dispose(); });
      renderer.dispose();
    },
    loseContext() { try { renderer.forceContextLoss(); } catch {} },
  };
  return api;
}
