// CC0 Quaternius monsters (Ultimate Monsters bundle, public domain): rigged + animated, vertex-coloured. Restyled at load
// into a "menace" palette (dark hides, blood-red accents, bone horns, glowing red eyes) and pooled like the KayKit
// actors: one SkeletonUtils clone + AnimationMixer per live monster, everything disposed with the view.
import { AnimationMixer, LoopOnce, LoopRepeat, MeshLambertMaterial, MeshBasicMaterial, Box3, Vector3, Mesh, SphereGeometry } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';

const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
// material name -> [colour, emissive] ; 'eye' / 'pupil' become unlit glowing materials
const MENACE = {
  Dragon_Main: [0x3b1a1c, 0x1a0302], Dragon_Secondary: [0x1c1014, 0x000000], Dragon_Horn: [0xd9ccb0, 0x000000],
  Demon_Main: [0x5c0e16, 0x220002], Black: [0x150b10, 0x000000],
  Ghost_Main: [0x241e30, 0x0c0414], Ghost_Secondary: [0xb4a68e, 0x140604],
  Eye_White: 'eye', Eye_Black: 'pupil',
};
const STATES = {
  idle: ['Flying_Idle', 'Idle'], move: ['Fast_Flying', 'Run', 'Walk'], attack: ['Punch', 'Weapon', 'Headbutt'], bite: ['Headbutt', 'Punch'],
  hit: ['HitReact'], die: ['Death'], roar: ['Yes', 'Jump', 'Punch'], taunt: ['No', 'Wave'],
  // KayKit-style names used by the game views
  combat: ['Flying_Idle', 'Idle'], run: ['Fast_Flying', 'Run'], walk: ['Fast_Flying', 'Walk'], cast: ['Punch', 'Weapon', 'Headbutt'], slash: ['Weapon', 'Punch', 'Headbutt'],
  spin: ['Headbutt', 'Weapon', 'Punch'], summon: ['Yes', 'Punch'], spawn: ['Yes', 'Punch'],
};
const qsE = typeof location !== 'undefined' ? new URLSearchParams(location.search) : new Map();
const EYE = { x: +(qsE.get('ex') || 0.2), y: +(qsE.get('ey') || 0.5), d: +(qsE.get('ed') || 0.12), r: +(qsE.get('er') || 0.09) };
const ONCE = new Set(['attack', 'bite', 'hit', 'die', 'roar', 'taunt', 'cast', 'slash', 'spin', 'summon', 'spawn']);

export async function loadMonsters({ base = '/models/monsters', names = [], eye = 0xff2a14 } = {}) {
  const lib = { templates: new Map(), pools: new Map(), disposables: [] };
  const mats = new Map();
  const matFor = (m) => {
    const key = m.name; if (mats.has(key)) return mats.get(key);
    const p = MENACE[key]; let out;
    if (p === 'eye') out = new MeshBasicMaterial({ color: eye, fog: false, toneMapped: false });
    else if (p === 'pupil') out = new MeshBasicMaterial({ color: 0xffd060, fog: false, toneMapped: false });
    else if (p) out = new MeshLambertMaterial({ color: p[0], emissive: p[1], vertexColors: false });
    else out = new MeshLambertMaterial({ color: (m.color && m.color.getHex()) || 0x333333 });
    mats.set(key, out); lib.disposables.push(out); return out;
  };
  const gltfs = await Promise.all(names.map((n) => new Promise((ok, bad) => loader.load(`${base}/${n}.glb`, ok, undefined, bad))));
  names.forEach((n, i) => {
    const g = gltfs[i];
    g.scene.traverse((o) => { if (o.isMesh) { o.material = Array.isArray(o.material) ? o.material.map(matFor) : matFor(o.material); o.frustumCulled = false; lib.disposables.push(o.geometry); } });
    // the flying demon wears a small halo ring: drop it (narrow part floating above the head)
    if (n === 'Demon2') {
      g.scene.updateMatrixWorld(true);
      const all = new Box3().setFromObject(g.scene), H = all.max.y - all.min.y, W = all.max.x - all.min.x;
      g.scene.traverse((o) => { if (!o.isMesh || o.material.isMeshBasicMaterial) return; const b = new Box3().setFromObject(o); if ((b.min.y - all.min.y) / H > 0.6 && (b.max.x - b.min.x) / W < 0.45) o.visible = false; });
    }
    // the skull ghost has empty sockets: give it burning eyes, parented to the head bone so they follow the animation
    if (n === 'Ghost_Skull') {
      g.scene.updateMatrixWorld(true);
      let head = null, skull = null; g.scene.traverse((o) => { if (o.isBone && o.name === 'Head') head = o; if (o.isMesh && o.material === mats.get('Ghost_Secondary')) skull = o; });
      if (head && skull) {
        const b = new Box3().setFromObject(skull), w = b.max.x - b.min.x, h = b.max.y - b.min.y, cx = (b.min.x + b.max.x) / 2;
        const geo = new SphereGeometry(1, 10, 8); lib.disposables.push(geo);
        const em = mats.get('Eye_White') || matFor({ name: 'Eye_White' });
        for (const sx of [-1, 1]) {
          const e = new Mesh(geo, em); e.name = 'burning_eye'; e.frustumCulled = false;
          const wp = new Vector3(cx + sx * w * EYE.x, b.min.y + h * EYE.y, b.max.z - w * EYE.d);
          head.add(e); e.position.copy(head.worldToLocal(wp.clone()));
          const sc = new Vector3(); head.getWorldScale(sc); e.scale.setScalar(w * EYE.r / sc.x);
        }
      }
    }
    g.scene.updateMatrixWorld(true);
    const box = new Box3().setFromObject(g.scene), size = box.getSize(new Vector3());
    const clips = new Map(g.animations.map((c) => [c.name, c]));
    lib.templates.set(n, { scene: g.scene, clips, height: size.y || 1, minY: box.min.y });
  });
  /** a pooled monster: obj (put it in the scene), play(state), tick(dt); unit = scale for 1 m of height */
  lib.actor = (name) => {
    const pool = lib.pools.get(name) || []; lib.pools.set(name, pool);
    let a = pool.pop();
    if (!a) {
      const t = lib.templates.get(name);
      const obj = skClone(t.scene); const mixer = new AnimationMixer(obj);
      a = { name, obj, mixer, state: '', until: 0, cur: null, unit: 1 / t.height, minY: t.minY };
      a.play = (state, now = 0, { fade = 0.15, speed = 1 } = {}) => {
        if (state === 'dead') return;   // the death clip clamps on its last frame
        const list = STATES[state] || [state]; let clip = null; for (const c of list) if (t.clips.has(c)) { clip = t.clips.get(c); break; }
        if (!clip) return; if (a.state === state && !ONCE.has(state)) return;
        const act = mixer.clipAction(clip); act.reset(); act.setLoop(ONCE.has(state) ? LoopOnce : LoopRepeat, Infinity); act.clampWhenFinished = state === 'die'; act.timeScale = speed;
        if (a.cur && a.cur !== act) a.cur.crossFadeTo(act, fade, false); act.play();
        a.cur = act; a.state = state; a.until = ONCE.has(state) ? now + clip.duration / speed * 0.92 : 0;
      };
      a.tick = (dt, now) => { if (a.until && now >= a.until && a.state !== 'die') { a.until = 0; a.play(a.base || 'idle', now, { fade: 0.2 }); } mixer.update(dt); };
    }
    a.obj.visible = true; a.state = ''; a.base = 'idle'; a.until = 0; a.mixer.stopAllAction(); a.cur = null; a.play('idle', 0, { fade: 0 });
    return a;
  };
  lib.release = (a) => { a.obj.visible = false; a.obj.parent?.remove(a.obj); a.mixer.stopAllAction(); a.cur = null; (lib.pools.get(a.name) || []).push(a); };
  lib.dispose = () => { for (const d of lib.disposables) try { d.dispose(); } catch {} };
  return lib;
}
