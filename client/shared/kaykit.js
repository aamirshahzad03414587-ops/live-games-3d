// Animated CC0 KayKit characters for iPhone Safari.
// - every character GLB (mesh + skeleton, no clips) is merged ONCE into a single SkinnedMesh (body parts + the chosen
//   weapon/hat/cape baked onto their bones) = 1 draw call per character (2 for skeletons: bones + glowing eyes)
// - all characters share one 41-bone rig, so one small anims.glb drives everyone (AnimationMixer per actor)
// - actors are cloned with SkeletonUtils (geometry + textures shared) and pooled; viewer colours are material variants
// - Lambert materials (cheap on mobile GPUs) + per-actor "flash" for hits, nothing allocated per frame
import {
  Group, SkinnedMesh, Skeleton, Matrix4, MeshLambertMaterial, MeshBasicMaterial, Color, AnimationMixer, LoopOnce, LoopRepeat,
  BufferAttribute, Box3, Sphere, Vector3, SRGBColorSpace, NearestMipmapLinearFilter, LinearFilter,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import { BufferAttribute as _BA } from 'three';
// getX..getW de-normalise quantized data (getComponent does not)
const GET = [_BA.prototype.getX, _BA.prototype.getY, _BA.prototype.getZ, _BA.prototype.getW];

// state -> clip (+ loop / speed)
export const CLIPS = {
  idle: ['Idle', 1, true], combat: ['Idle_Combat', 1, true], run: ['Running_A', 1, true], walk: ['Walking_A', 1, true],
  attack: ['1H_Melee_Attack_Chop', 1.25, false], slash: ['1H_Melee_Attack_Slice_Horizontal', 1.25, false], spin: ['2H_Melee_Attack_Spin', 1.3, false],
  shoot: ['1H_Ranged_Shoot', 1.2, false], cast: ['Spellcast_Shoot', 1.2, false], summon: ['Spellcast_Summon', 1, false], block: ['Block', 1.2, false],
  hit: ['Hit_A', 1.3, false], die: ['Death_A', 1, false], dead: ['Death_A_Pose', 1, true], cheer: ['Cheer', 1, true], dash: ['Dodge_Forward', 1.3, false],
  jump: ['Jump_Full_Short', 1, false], rise: ['Lie_StandUp', 1.4, false], taunt: ['Taunt', 1, false], spawn: ['Spawn_Ground_Skeletons', 1.2, false], use: ['Interact', 1.2, false],
};
// which accessories each character keeps (the rest of its weapons are dropped)
export const OUTFITS = {
  Knight: ['1H_Sword', 'Badge_Shield', 'Knight_Helmet', 'Knight_Cape'],
  Barbarian: ['1H_Axe', 'Barbarian_Round_Shield', 'Barbarian_Hat', 'Barbarian_Cape'],
  Mage: ['2H_Staff', 'Mage_Hat', 'Mage_Cape'],
  Rogue: ['1H_Crossbow', 'Knife_Offhand', 'Rogue_Cape'],
  Rogue_Hooded: ['Knife', 'Knife_Offhand', 'Rogue_Cape'],
  Skeleton_Minion: [], Skeleton_Warrior: ['Skeleton_Warrior_Helmet'], Skeleton_Rogue: ['Skeleton_Rogue_Hood', 'Skeleton_Rogue_Cape'], Skeleton_Mage: ['Skeleton_Mage_Hat'],
};

const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
const loadGLB = (url) => new Promise((ok, bad) => loader.load(url, ok, undefined, bad));

function lambertFrom(m, tex) {
  if (m && /glow/i.test(m.name || '')) return new MeshBasicMaterial({ color: 0x7af0ff, fog: true });
  const t = tex || m.map; if (t) { t.colorSpace = SRGBColorSpace; t.anisotropy = 2; }
  return new MeshLambertMaterial({ map: t || null, color: 0xffffff });
}

/** merge one KayKit character into a template Group { root bone, single SkinnedMesh } */
function buildTemplate(gltf, name) {
  const scene = gltf.scene; scene.updateMatrixWorld(true);
  const keepAcc = new Set(OUTFITS[name] || []);
  const skinned = []; const rigid = [];
  scene.traverse((o) => { if (o.isSkinnedMesh) skinned.push(o); else if (o.isMesh) rigid.push(o); });
  if (!skinned.length) throw new Error('no skinned mesh in ' + name);
  const base = skinned[0], skel = base.skeleton, bones = skel.bones;
  const boneIndex = new Map(bones.map((b, i) => [b, i]));
  const bindInv = base.bindMatrixInverse.clone();
  const mats = []; const matIdx = (m) => { let i = mats.findIndex((x) => x.src === m); if (i < 0) { mats.push({ src: m, mat: lambertFrom(m) }); i = mats.length - 1; } return i; };
  const parts = [];
  const prep = (g) => {
    g = g.index ? g.toNonIndexed() : g.clone();
    for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'skinIndex', 'skinWeight'].includes(k)) g.deleteAttribute(k);
    // de-quantize up front (meshopt/quantized ints) so transforms and merging work on plain floats
    for (const k of Object.keys(g.attributes)) { const a = g.attributes[k], n = a.itemSize; const arr = k === 'skinIndex' ? new Uint16Array(a.count * n) : new Float32Array(a.count * n); for (let i = 0; i < a.count; i++) for (let c = 0; c < n; c++) arr[i * n + c] = k === 'skinIndex' ? a.getComponent(i, c) : GET[c].call(a, i); g.setAttribute(k, new BufferAttribute(arr, n)); }
    return g;
  };
  for (const sm of skinned) {
    // skinned parts share the rig; bring each into the base mesh's bind space
    const g = prep(sm.geometry);
    // parts may carry their own (de-quantization) transform in their bind matrices: re-express in the base bind space
    if (sm !== base) {
      const pb = sm.skeleton.bones; const j = pb.findIndex((b) => boneIndex.has(b)); const bj = boneIndex.get(pb[j]);
      const m = new Matrix4().copy(bindInv).multiply(new Matrix4().copy(skel.boneInverses[bj]).invert()).multiply(sm.skeleton.boneInverses[j]).multiply(sm.bindMatrix);
      g.applyMatrix4(m);
    }
    // remap joints if this part's skeleton orders bones differently
    if (sm.skeleton !== skel) { const map = sm.skeleton.bones.map((b) => boneIndex.get(b) ?? 0); const si = g.attributes.skinIndex; for (let i = 0; i < si.count; i++) for (let c = 0; c < 4; c++) si.setComponent(i, c, map[si.getComponent(i, c)]); }
    parts.push({ g, m: matIdx(sm.material) });
  }
  for (const r of rigid) {
    if (!keepAcc.has(r.name) && !keepAcc.has(r.parent?.name)) continue;
    // a rigid accessory parented to a bone: bake it into bind space and weight it 100 % to that bone
    let b = r.parent; while (b && !b.isBone) b = b.parent; if (!b) continue;
    const bi = boneIndex.get(b); if (bi === undefined) continue;
    const local = new Matrix4(); { let o = r; local.copy(r.matrix); o = r.parent; while (o && o !== b) { local.premultiply(o.matrix); o = o.parent; } }
    const m = new Matrix4().copy(bindInv).multiply(new Matrix4().copy(skel.boneInverses[bi]).invert()).multiply(local);
    const g = prep(r.geometry); g.applyMatrix4(m);
    const n = g.attributes.position.count;
    const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4); for (let i = 0; i < n; i++) { si[i * 4] = bi; sw[i * 4] = 1; }
    g.setAttribute('skinIndex', new BufferAttribute(si, 4)); g.setAttribute('skinWeight', new BufferAttribute(sw, 4));
    parts.push({ g, m: matIdx(r.material) });
  }
  // one geometry, one group per material
  parts.sort((a, b) => a.m - b.m);
  const geo = mergeGeometries(parts.map((p) => p.g), mats.length > 1);
  if (mats.length > 1) { let start = 0; geo.clearGroups(); for (let mi = 0; mi < mats.length; mi++) { let cnt = 0; for (const p of parts) if (p.m === mi) cnt += p.g.attributes.position.count; if (cnt) geo.addGroup(start, cnt, mi); start += cnt; } }
  for (const p of parts) p.g.dispose();
  geo.computeBoundingBox(); geo.boundingSphere = new Sphere(new Vector3(0, 1.1, 0), 1.9);
  const tpl = new Group(); tpl.name = name;
  const rootBone = (() => { let r = bones[0]; while (r.parent && r.parent.isBone) r = r.parent; return r; })();
  tpl.add(rootBone);
  const mesh = new SkinnedMesh(geo, mats.length > 1 ? mats.map((x) => x.mat) : mats[0].mat);
  mesh.frustumCulled = true;
  tpl.add(mesh); tpl.updateMatrixWorld(true);
  mesh.bind(new Skeleton(bones, skel.boneInverses.map((m) => m.clone())), base.bindMatrix.clone());
  return { tpl, geo, mats: mats.map((x) => x.mat), height: 2.1 };
}

/** load characters + the shared clips. names: KayKit character names. */
export async function loadKit({ base = '/models', names = [], onProgress } = {}) {
  const kit = { templates: new Map(), clips: new Map(), variants: new Map(), pools: new Map(), disposables: [] };
  const [anims, ...chars] = await Promise.all([loadGLB(`${base}/anims.glb`), ...names.map((n) => loadGLB(`${base}/chars/${n}.glb`))]);
  for (const c of anims.animations) kit.clips.set(c.name, c);
  names.forEach((n, i) => { const t = buildTemplate(chars[i], n); kit.templates.set(n, t); kit.disposables.push(t.geo, ...t.mats); for (const m of t.mats) if (m.map) kit.disposables.push(m.map); onProgress?.(n); });

  /** a material variant: the character's texture tinted toward a viewer colour (cached, shared by everyone with that tint) */
  kit.material = (name, tint = null, amount = 0.32) => {
    const t = kit.templates.get(name); if (tint === null) return t.mats.length > 1 ? t.mats : t.mats[0];
    const key = name + ':' + tint + ':' + amount;
    let v = kit.variants.get(key);
    if (!v) {
      const tc = new Color(tint), w = new Color(1, 1, 1).lerp(tc, amount);
      v = t.mats.map((m) => { if (m.isMeshBasicMaterial) return m; const c = m.clone(); c.color.copy(w); kit.disposables.push(c); return c; });
      v = v.length > 1 ? v : v[0]; kit.variants.set(key, v);
      if (kit.variants.size > 160) { /* keep the cache bounded: drop the oldest (its actors keep their material) */ const k0 = kit.variants.keys().next().value; kit.variants.delete(k0); }
    }
    return v;
  };

  /** get an actor (pooled) */
  kit.actor = (name, tint = null) => {
    const pool = kit.pools.get(name) || []; kit.pools.set(name, pool);
    let a = pool.pop();
    if (!a) {
      const t = kit.templates.get(name);
      const obj = skClone(t.tpl);
      let mesh = null; obj.traverse((o) => { if (o.isSkinnedMesh) mesh = o; });
      const mixer = new AnimationMixer(obj);
      a = { name, obj, mesh, mixer, actions: new Map(), state: '', base: 'idle', until: 0, tint: undefined, acc: 0, flashT: -9 };
      a.play = (state, now, { fade = 0.15, speed = 1 } = {}) => playState(kit, a, state, now, fade, speed);
    }
    if (a.tint !== tint) { a.mesh.material = kit.material(name, tint); a.tint = tint; }
    a.obj.visible = true; a.state = ''; a.base = 'idle'; a.until = 0; a.mixer.stopAllAction(); a.play('idle', 0, { fade: 0 });
    return a;
  };
  kit.release = (a) => { a.obj.visible = false; a.obj.parent?.remove(a.obj); a.mixer.stopAllAction(); (kit.pools.get(a.name) || []).push(a); };
  kit.dispose = () => { for (const d of kit.disposables) try { d.dispose(); } catch {} kit.pools.clear(); kit.variants.clear(); };
  return kit;
}

function action(kit, a, state) {
  let act = a.actions.get(state);
  if (!act) {
    const [clipName, ts, loop] = CLIPS[state] || CLIPS.idle;
    const clip = kit.clips.get(clipName) || kit.clips.get('Idle');
    act = a.mixer.clipAction(clip); act.timeScaleBase = ts; act.loopMode = loop;
    if (loop) act.setLoop(LoopRepeat, Infinity); else { act.setLoop(LoopOnce, 1); act.clampWhenFinished = true; }
    a.actions.set(state, act);
  }
  return act;
}
/** loops (idle/run/cheer/dead…) become the base; one-shots (attack/hit…) play over it then fade back */
function playState(kit, a, state, now, fade, speed) {
  const act = action(kit, a, state);
  if (act.loopMode) {
    a.base = state;
    if (now < a.until || a.state === state) return;
  } else { a.until = now + act.getClip().duration / (act.timeScaleBase * speed) * 0.92; }
  const prev = a.actions.get(a.state);
  act.reset(); act.timeScale = act.timeScaleBase * speed; act.enabled = true; act.setEffectiveWeight(1);
  if (prev && prev !== act && fade > 0) act.crossFadeFrom(prev, fade, false); else if (prev && prev !== act) prev.stop();
  act.play(); a.state = state;
}
/** per frame: return to the base loop after a one-shot, advance the mixer (callers throttle far actors) */
export function tickActor(kit, a, dt, now) {
  if (a.state !== a.base && now >= a.until && a.base) {
    const act = action(kit, a, a.base), prev = a.actions.get(a.state);
    act.reset(); act.timeScale = act.timeScaleBase; act.enabled = true; act.setEffectiveWeight(1); if (prev) act.crossFadeFrom(prev, 0.18, false); act.play(); a.state = a.base;
  }
  a.mixer.update(dt);
}
