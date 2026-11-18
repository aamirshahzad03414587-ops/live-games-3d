// quick look-dev scene: new BR arena + KayKit fighters in a mid-battle pose (for the pre-implementation still)
import { WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight, Fog, ACESFilmicToneMapping, SRGBColorSpace, Mesh, CircleGeometry, MeshBasicMaterial, CanvasTexture } from 'three';
import { loadKit, tickActor } from '../client/shared/kaykit.js';
import { loadEnv } from '../client/shared/envkit.js';
import { buildArena } from '../client/br/arena3d.js';
const W = 540, H = 960;
const canvas = document.createElement('canvas'); document.body.appendChild(canvas);
const renderer = new WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setSize(W, H); renderer.outputColorSpace = SRGBColorSpace; renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.0;
const scene = new Scene(); scene.fog = new Fog(0xf3dcc0, 45, 170);
scene.add(new HemisphereLight(0xd8ecff, 0x4f6a3a, 1.15));
const sun = new DirectionalLight(0xffe6c4, 2.0); sun.position.set(-12, 20, 18); scene.add(sun);
const cam = new PerspectiveCamera(42, W / H, 0.3, 600);
const [env, kit] = await Promise.all([loadEnv('/models/env-br.glb'), loadKit({ names: ['Knight', 'Barbarian', 'Mage', 'Rogue', 'Rogue_Hooded'] })]);
const arena = buildArena(env, { R: 20, sky: { sunDir: [-0.45, 0.3, 0.84] } }); scene.add(arena.group);
const cols = [0xff4d6d, 0x4dabff, 0xffd23f, 0x5ef08a, 0xc77dff, 0xff8c42, 0x2ee6d6, 0xffffff];
const names = ['Knight', 'Barbarian', 'Mage', 'Rogue', 'Rogue_Hooded'];
const states = ['attack', 'run', 'combat', 'slash', 'block', 'cast', 'hit', 'run', 'spin', 'shoot', 'idle', 'dash'];
const actors = [];
const ringTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); g.strokeStyle = '#fff'; g.lineWidth = 7; g.beginPath(); g.arc(32, 32, 26, 0, 7); g.stroke(); const t = new CanvasTexture(c); return t; })();
const ringGeo = new CircleGeometry(0.55, 24); ringGeo.rotateX(-Math.PI / 2);
let i = 0;
for (let k = 0; k < 22; k++) {
  const a = k * 2.4, d = 1 + Math.sqrt(k) * 2.2; const x = Math.cos(a) * d, z = Math.sin(a) * d - 2;
  const nm = names[k % 5], col = cols[k % cols.length];
  const act = kit.actor(nm, col); act.obj.position.set(x, 0, z); act.obj.scale.setScalar(0.68);
  act.obj.rotation.y = Math.atan2(-x, -z) + (k % 2 ? 0.4 : -0.6) + (k % 3 === 0 ? Math.PI : 0);
  scene.add(act.obj); actors.push(act);
  const st = states[k % states.length]; act.play(st === 'run' || st === 'idle' || st === 'combat' ? st : 'combat', 0, { fade: 0 }); if (!['run', 'idle', 'combat'].includes(st)) act.play(st, 0, { fade: 0 });
  act.mixer.update(0.1 + (k % 5) * 0.12);
  const ring = new Mesh(ringGeo, new MeshBasicMaterial({ color: col, map: ringTex, transparent: true, depthWrite: false })); ring.position.set(x, 0.03, z); scene.add(ring);
}
// winner-ish hero up front
const hero = kit.actor('Knight', null); hero.obj.position.set(0.5, 0, 4.5); hero.obj.scale.setScalar(0.85); hero.obj.rotation.y = 0.5; hero.play('combat', 0, { fade: 0 }); hero.play('slash', 0, { fade: 0 }); hero.mixer.update(0.35); scene.add(hero.obj);
cam.position.set(7, 8.5, 17); cam.lookAt(0, 0.8, -1.5);
renderer.render(scene, cam);
window.__done = true;
for (const n of ['hex_grass', 'flag_red', 'tree_single_A']) { const g = env.geos.get(n); g.computeBoundingBox(); console.log(n, JSON.stringify(g.boundingBox), g.attributes.position.array.constructor.name); }
for (const [n, t] of kit.templates) { console.log(n, JSON.stringify(t.geo.boundingBox), t.geo.attributes.position.count); }
