// Packs the CC0 Quaternius "Ultimate Monsters" models we use (rigged + animated, vertex-coloured materials, no
// textures) into small meshopt-compressed GLBs: public/models/monsters/<Name>.glb.
// Source: https://poly.pizza/bundle/Ultimate-Monsters-Bundle-5oyGWAmOB6 (Quaternius, Public Domain / CC0).
// Usage: node tools/assets/build-monsters.mjs   (expects ../assets-src/quaternius-monsters/<Name>.glb)
import fs from 'node:fs';
import path from 'node:path';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, quantize, meshopt, weld, resample } from '@gltf-transform/functions';
import { MeshoptEncoder } from 'meshoptimizer';

const SRC = process.env.ASSETS_SRC || path.resolve('../assets-src');
const OUT = 'public/models/monsters';
const NAMES = ['Dragon_Evolved', 'Demon', 'Demon2', 'Ghost_Skull'];
const QPAT = /^(NORMAL|TEXCOORD_\d+|JOINTS_\d+|WEIGHTS_\d+)$/;
await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
fs.mkdirSync(OUT, { recursive: true });
for (const n of NAMES) {
  const doc = await io.read(`${SRC}/quaternius-monsters/${n}.glb`);
  // shorter clip names: "CharacterArmature|Fast_Flying" -> "Fast_Flying"
  for (const a of doc.getRoot().listAnimations()) a.setName(a.getName().replace(/^.*\|/, ''));
  await doc.transform(dedup(), weld(), prune(), resample({ tolerance: 0.0005 }), quantize({ pattern: QPAT, quantizeNormal: 8, quantizeWeight: 8 }), meshopt({ encoder: MeshoptEncoder, level: 'medium', pattern: QPAT }));
  await io.write(`${OUT}/${n}.glb`, doc);
  console.log(n, (fs.statSync(`${OUT}/${n}.glb`).size / 1024).toFixed(0) + ' KB');
}
