// Builds the iPhone-sized character + animation GLBs from the CC0 KayKit packs (run tools/assets/fetch.sh first).
// - chars/<Name>.glb: mesh + skeleton only (no animations), 256 px texture, quantized + meshopt-compressed
// - anims.glb: the shared animation clips (all KayKit characters share one 41-bone rig), resampled + compressed
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, resample, quantize, meshopt, weld } from '@gltf-transform/functions';
// positions stay float: quantized positions move a dequantization transform onto nodes/bind matrices, which breaks
// merging skinned parts + accessories at runtime. Normals/UVs/weights are still quantized, everything meshopt-compressed.
const QPAT = /^(NORMAL|TEXCOORD_\d+|JOINTS_\d+|WEIGHTS_\d+)$/;
import { MeshoptEncoder } from 'meshoptimizer';

const SRC = process.env.ASSETS_SRC || path.resolve('../assets-src');
const OUT = 'public/models';
const ADV = `${SRC}/KayKit-Character-Pack-Adventures-1.0/addons/kaykit_character_pack_adventures/Characters/gltf`;
const SKL = `${SRC}/KayKit-Character-Pack-Skeletons-1.0/addons/kaykit_character_pack_skeletons/Characters/gltf`;
export const CLIPS = (process.env.CLIPS || 'Idle,Idle_Combat,Running_A,Walking_A,1H_Melee_Attack_Chop,1H_Melee_Attack_Slice_Horizontal,2H_Melee_Attack_Spin,1H_Ranged_Shoot,Spellcast_Shoot,Spellcast_Summon,Block,Hit_A,Death_A,Death_A_Pose,Cheer,Dodge_Forward,Jump_Full_Short,Lie_StandUp,Taunt,Spawn_Ground_Skeletons,Interact').split(',');
await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
fs.mkdirSync(`${OUT}/chars`, { recursive: true });

function dropAnim(a) { for (const sm of a.listSamplers()) { const i = sm.getInput(), o = sm.getOutput(); sm.dispose(); if (i && !i.listParents().some((x) => x.propertyType !== 'Root')) i.dispose(); if (o && !o.listParents().some((x) => x.propertyType !== 'Root')) o.dispose(); } for (const c of a.listChannels()) c.dispose(); a.dispose(); }
function shrinkTextures(doc, size) {
  for (const t of doc.getRoot().listTextures()) {
    const tmp = '/tmp/_tex_in.png', out = '/tmp/_tex_out.png';
    fs.writeFileSync(tmp, Buffer.from(t.getImage()));
    execFileSync('python3', ['-c', `from PIL import Image; im=Image.open('${tmp}').convert('RGB'); im.resize((${size},${size}), Image.LANCZOS).save('${out}', optimize=True)`]);
    t.setImage(new Uint8Array(fs.readFileSync(out))).setMimeType('image/png');
  }
}
async function finish(doc, file) {
  await doc.transform(dedup(), weld(), prune({ keepLeaves: false, keepAttributes: false }), resample({ tolerance: 0.0005 }), quantize({ pattern: QPAT, quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12, quantizeWeight: 8 }), meshopt({ encoder: MeshoptEncoder, level: 'medium', pattern: QPAT }));
  await io.write(file, doc);
  return fs.statSync(file).size;
}
const chars = [[ADV, 'Knight'], [ADV, 'Barbarian'], [ADV, 'Mage'], [ADV, 'Rogue'], [ADV, 'Rogue_Hooded'], [SKL, 'Skeleton_Minion'], [SKL, 'Skeleton_Warrior'], [SKL, 'Skeleton_Rogue'], [SKL, 'Skeleton_Mage']];
let total = 0;
for (const [dir, name] of chars) {
  const doc = await io.read(`${dir}/${name}.glb`);
  for (const a of doc.getRoot().listAnimations()) dropAnim(a);
  shrinkTextures(doc, Number(process.env.TEX || 256));
  const n = await finish(doc, `${OUT}/chars/${name}.glb`); total += n;
  console.log(name, (n / 1024).toFixed(0) + ' KB');
}
// shared clips (from the Skeletons pack: the same rig, plus skeleton-only clips)
{
  const doc = await io.read(`${SKL}/Skeleton_Minion.glb`);
  const keep = new Set(CLIPS);
  for (const a of doc.getRoot().listAnimations()) if (!keep.has(a.getName())) dropAnim(a);
  // drop channels of the IK / control helper bones (no vertex weights) and redundant scale tracks
  for (const a of doc.getRoot().listAnimations()) for (const c of a.listChannels()) {
    const nm = c.getTargetNode()?.getName() || '';
    if (/IK|control-/.test(nm) || c.getTargetPath() === 'scale') { const sm = c.getSampler(); c.dispose(); if (sm && !sm.listParents().some((x) => x.propertyType === 'AnimationChannel')) { const i = sm.getInput(), o = sm.getOutput(); sm.dispose(); if (o && o.listParents().length <= 1) o.dispose(); if (i && i.listParents().length <= 1) i.dispose(); } }
  }
  for (const n of doc.getRoot().listNodes()) if (n.getMesh()) { n.getMesh().dispose(); n.setSkin(null); }
  for (const t of doc.getRoot().listTextures()) t.dispose();
  const n = await finish(doc, `${OUT}/anims.glb`); total += n;
  console.log('anims', doc.getRoot().listAnimations().map((a) => a.getName()).join(' '), (n / 1024).toFixed(0) + ' KB');
}
console.log('total', (total / 1024).toFixed(0) + ' KB');
