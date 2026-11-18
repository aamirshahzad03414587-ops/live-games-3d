// The BR world: a grassy hex island (KayKit Medieval Hexagon, CC0) in a calm sea, with a castle, villages, windmills,
// mountains and forests on the surrounding islands, drifting clouds, a gradient sky. Everything static is instanced
// (one draw call per prop type), built once, disposed with the view.
import { Group, Mesh, SphereGeometry, ShaderMaterial, BackSide, CircleGeometry, MeshLambertMaterial, Color } from 'three';

const TAU = Math.PI * 2;
const HEX_W = 2, HEX_ROW = 1.7320508; // KayKit hex: 2 wide (flat sides on x), rows 1.732 apart
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

export function buildArena(env, { R = 20, tile = 1.15, sky = {} } = {}) {
  const group = new Group(); const own = [];
  const rnd = rng(7);
  const add = (name, items) => { const m = env.instanced(name, items); if (m) { m.name = name; group.add(m); } return m; };
  // ---------------------------------------------------------------- hex grid
  const grass = [], low = [], water = [], cells = [];
  const span = Math.ceil((R + 34) / (tile * HEX_ROW));
  for (let r = -span; r <= span; r++) for (let q = -span; q <= span; q++) {
    const x = (q + (r & 1 ? 0.5 : 0)) * HEX_W * tile, z = r * HEX_ROW * tile, d = Math.hypot(x, z);
    cells.push({ x, z, d });
  }
  // outer islands: blobs of land in the sea ring
  const islands = [];
  for (let i = 0; i < 7; i++) { const a = (i / 7) * TAU + 0.35 + rnd() * 0.3; const d = R + 14 + rnd() * 9; islands.push({ x: Math.cos(a) * d, z: Math.sin(a) * d, r: 5 + rnd() * 4, i }); }
  const landOf = (c) => { for (const is of islands) if (Math.hypot(c.x - is.x, c.z - is.z) < is.r) return is; return null; };
  const islandCells = new Map();
  for (const c of cells) {
    if (c.d < R + tile * 1.2) { grass.push({ x: c.x, y: 0, z: c.z, s: tile }); continue; }
    if (c.d < R + tile * 2.6) { low.push({ x: c.x, y: -0.25 * tile, z: c.z, s: tile }); continue; }
    const is = landOf(c);
    if (is) { const h = (Math.hypot(c.x - is.x, c.z - is.z) < is.r * 0.55 ? 0.25 : -0.1) * tile; grass.push({ x: c.x, y: h, z: c.z, s: tile }); (islandCells.get(is) || islandCells.set(is, []).get(is)).push({ ...c, y: h }); continue; }
  }
  // KayKit's grass swatch is olive; a multiply tint makes it a fresher meadow green (shares the atlas texture)
  const grassMat = env.mat.clone(); grassMat.color.setRGB(0.62, 0.92, 0.6); own.push(grassMat);
  { const all = grass.concat(low); const m = env.instanced('hex_grass', all, { material: grassMat });
    if (m) { const c = new Color(); all.forEach((it, i) => { const v = 0.9 + rnd() * 0.16; m.setColorAt(i, c.setRGB(v, v * (0.97 + rnd() * 0.06), v * 0.95)); }); m.instanceColor.needsUpdate = true; group.add(m); } }
  // far sea (flat disc under the hex water, same colour), fades into the fog
  const seaMat = new MeshLambertMaterial({ color: 0x2f8fd0 }); own.push(seaMat);
  const seaGeo = new CircleGeometry(400, 48); seaGeo.rotateX(-Math.PI / 2); own.push(seaGeo);
  const sea = new Mesh(seaGeo, seaMat); sea.position.y = -0.38; group.add(sea);

  // ---------------------------------------------------------------- scenery on the outer islands
  const S = 3.0; // props are hex-scale miniatures: scale them up so they read next to the fighters
  const P = {}; const put = (n, it) => (P[n] || (P[n] = [])).push(it);
  // each island: one landmark at its heart, a couple of cottages, the rest forest, hills and mountains
  const themes = [
    { mark: ['building_castle_red'], extra: ['building_home_A_red', 'flag_red'], fill: ['trees_A_medium', 'trees_A_medium'] },
    { mark: ['mountain_A_grass_trees'], extra: [], fill: ['mountain_B_grass', 'trees_A_medium', 'hills_A_trees'] },
    { mark: ['building_windmill_yellow', 'building_windmill_top_yellow', 'building_windmill_top_fan_yellow'], extra: ['building_home_A_red', 'tent'], fill: ['trees_A_medium', 'trees_B_small'] },
    { mark: ['mountain_B_grass'], extra: [], fill: ['hills_A_trees', 'trees_A_medium', 'mountain_A_grass_trees'] },
    { mark: ['building_church_blue'], extra: ['building_tavern_green', 'building_home_A_red'], fill: ['trees_B_small', 'trees_A_medium'] },
    { mark: ['mountain_A_grass_trees'], extra: [], fill: ['trees_A_medium', 'trees_A_medium', 'mountain_B_grass'] },
    { mark: ['building_tower_A_blue', 'building_tower_A_top_blue'], extra: ['tent', 'tent', 'flag_blue'], fill: ['trees_A_medium', 'hills_A_trees'] },
  ];
  for (const is of islands) {
    const th = themes[is.i % themes.length];
    const cs = (islandCells.get(is) || []).sort((a, b) => Math.hypot(a.x - is.x, a.z - is.z) - Math.hypot(b.x - is.x, b.z - is.z));
    const big = (n) => n.startsWith('mountain') || n.startsWith('hills');
    let used = 0;
    cs.forEach((c, k) => {
      const face = Math.atan2(-c.x, -c.z); // buildings look at the arena
      if (k === 0) { for (const n of th.mark) put(n, { x: c.x, y: c.y, z: c.z, ry: face, s: S * (big(n) ? 1.2 : 1) }); return; }
      if (k % 2 === 1 && used < th.extra.length) { const n = th.extra[used++]; put(n, { x: c.x, y: c.y, z: c.z, ry: face + (rnd() - 0.5) * 0.6, s: S * (n.startsWith('flag') ? 1.6 : 0.9) }); return; }
      if (rnd() < 0.7) { const n = th.fill[k % th.fill.length]; put(n, { x: c.x + (rnd() - 0.5) * tile, y: c.y, z: c.z + (rnd() - 0.5) * tile, ry: rnd() * TAU, s: S * (big(n) ? 1.1 : 0.85 + rnd() * 0.3) }); }
    });
  }
  // the arena rim: banners, small camps, barrels, trees on the sloped edge (outside the fighting area)
  const cols = ['flag_red', 'flag_blue', 'flag_yellow', 'flag_green'];
  for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; put(cols[i % 4], { x: Math.cos(a) * (R + 0.9), y: 0, z: Math.sin(a) * (R + 0.9), ry: -a, s: 5.1 }); }
  for (let i = 0; i < 26; i++) { const a = rnd() * TAU, d = R + tile * (1.6 + rnd() * 0.8); put(rnd() < 0.6 ? 'tree_single_A' : 'tree_single_B', { x: Math.cos(a) * d, y: -0.25 * tile, z: Math.sin(a) * d, ry: rnd() * TAU, s: S * (0.9 + rnd() * 0.5) }); }
  for (let i = 0; i < 10; i++) { const a = (i / 10) * TAU + 0.2, d = R + 0.4; put(['barrel', 'crate_A_big', 'weaponrack', 'rock_single_C', 'rock_single_E'][i % 5], { x: Math.cos(a) * d, y: 0, z: Math.sin(a) * d, ry: rnd() * TAU, s: 3.5 }); }
  for (const [n, items] of Object.entries(P)) add(n, items);
  // clouds (instanced, drift slowly)
  const cloudItems = []; for (let i = 0; i < 9; i++) { const a = rnd() * TAU, d = R + 20 + rnd() * 40; cloudItems.push({ x: Math.cos(a) * d, y: 16 + rnd() * 14, z: Math.sin(a) * d, ry: rnd() * TAU, s: 3 + rnd() * 3 }); }
  const cloudMat = new MeshLambertMaterial({ color: 0xffffff, emissive: 0x6d7fa0, transparent: true, opacity: 0.92 }); own.push(cloudMat);
  const clouds = env.instanced('cloud_big', cloudItems, { material: cloudMat }); if (clouds) group.add(clouds);

  // ---------------------------------------------------------------- sky dome (gradient + sun glow), no texture
  const top = new Color(sky.top ?? 0x2f7fd8), hor = new Color(sky.horizon ?? 0xfde8cf), bot = new Color(sky.mid ?? 0x8cc8f0);
  const skyMat = new ShaderMaterial({
    side: BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: top }, hor: { value: hor }, bot: { value: bot }, sunDir: { value: sky.sunDir || [-0.5, 0.25, -0.83] } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP; uniform vec3 top, hor, bot; uniform vec3 sunDir;
      void main(){ float h = max(vP.y, 0.0);
        vec3 c = mix(hor, mix(bot, top, smoothstep(0.12, 0.6, h)), smoothstep(0.0, 0.12, h));
        float s = max(dot(vP, normalize(sunDir)), 0.0); c += vec3(1.0,0.82,0.55) * (pow(s, 12.0) * 0.45 + pow(s, 400.0) * 1.2);
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  const skyGeo = new SphereGeometry(450, 24, 12); own.push(skyMat, skyGeo);
  const skyMesh = new Mesh(skyGeo, skyMat); skyMesh.renderOrder = -1; group.add(skyMesh);

  return {
    group, horizon: hor, skyMesh,
    update(now) { if (clouds) { clouds.rotation.y = now * 0.004; } },
    dispose() { for (const o of own) o.dispose(); },
  };
}
