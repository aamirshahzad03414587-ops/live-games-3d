// Packs selected CC0 KayKit environment props into one small GLB per game (meshes named after the prop, one shared
// atlas texture each), quantized + meshopt-compressed. Usage: node tools/assets/build-env.mjs <game>
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, quantize, meshopt, weld, mergeDocuments, unpartition, flatten, join } from '@gltf-transform/functions';
// positions stay float: quantized positions move a dequantization transform onto nodes/bind matrices, which breaks
// merging skinned parts + accessories at runtime. Normals/UVs/weights are still quantized, everything meshopt-compressed.
const QPAT = /^(NORMAL|TEXCOORD_\d+|JOINTS_\d+|WEIGHTS_\d+)$/;
import { MeshoptEncoder } from 'meshoptimizer';

const SRC = process.env.ASSETS_SRC || path.resolve('../assets-src');
const HEX = `${SRC}/KayKit-Medieval-Hexagon-Pack-1.0/addons/kaykit_medieval_hexagon_pack/Assets/gltf`;
const DUN = `${SRC}/KayKit-Dungeon-Remastered-1.0/addons/kaykit_dungeon_remastered/Assets/gltf`;
const HAL = `${SRC}/KayKit-Halloween-Bits-1.0/addons/kaykit_halloween_bits/Assets/gltf`;
const CITY = `${SRC}/KayKit-City-Builder-Bits-1.0/addons/kaykit_city_builder_bits/Assets/gltf`;
export const SETS = {
  br: { dirs: [HEX], props: ['hex_grass', 'hex_water', 'hex_coast_A', 'hex_grass_sloped_low', 'tree_single_A', 'tree_single_B', 'trees_A_medium', 'trees_B_large', 'trees_B_small', 'rock_single_A', 'rock_single_C', 'rock_single_E', 'hills_A_trees', 'hill_single_B', 'mountain_A_grass_trees', 'mountain_B_grass', 'building_castle_red', 'building_tower_A_blue', 'building_windmill_yellow', 'building_tavern_green', 'building_home_A_red', 'building_church_blue', 'tent', 'flag_red', 'flag_blue', 'flag_yellow', 'flag_green', 'barrel', 'crate_A_big', 'weaponrack', 'cloud_big', 'cloud_small', 'fence_wood_straight', 'target'] },
};
await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
const find = (dirs, name) => { for (const d of dirs) { for (const ext of ['.gltf', '.gltf.glb', '.glb']) { const hit = execFileSync('find', [d, '-name', `${name}${ext}`]).toString().trim().split('\n')[0]; if (hit) return hit; } } throw new Error('missing ' + name); };

const game = process.argv[2] || 'br', set = SETS[game];
const doc = new (await import('@gltf-transform/core')).Document();
doc.createBuffer();
const scene = doc.createScene('props');
for (const name of set.props) {
  const src = await io.read(find(set.dirs, name));
  const map = mergeDocuments(doc, src);
  const s0 = src.getRoot().listScenes()[0];
  const g = doc.createNode(name);
  for (const n of s0.listChildren()) g.addChild(map.get(n));
  scene.addChild(g);
}
for (const s of doc.getRoot().listScenes()) if (s !== scene) s.dispose();
const TEX = Number(process.env.TEX || 512);
await doc.transform(unpartition(), dedup(), flatten(), join({ keepNamed: true }), weld(), prune());
for (const t of doc.getRoot().listTextures()) {
  fs.writeFileSync('/tmp/_e_in.png', Buffer.from(t.getImage()));
  execFileSync('python3', ['-c', `from PIL import Image; im=Image.open('/tmp/_e_in.png').convert('RGB'); s=min(${TEX}, im.size[0]); im.resize((s,s), Image.LANCZOS).save('/tmp/_e_out.png', optimize=True)`]);
  t.setImage(new Uint8Array(fs.readFileSync('/tmp/_e_out.png'))).setMimeType('image/png');
}
await doc.transform(quantize({ pattern: QPAT, quantizePosition: 14, quantizeNormal: 8, quantizeTexcoord: 12 }), meshopt({ encoder: MeshoptEncoder, level: 'medium', pattern: QPAT }));
const file = `public/models/env-${game}.glb`;
await io.write(file, doc);
console.log(file, (fs.statSync(file).size / 1024).toFixed(0) + ' KB', 'textures', doc.getRoot().listTextures().length, 'meshes', doc.getRoot().listMeshes().length);
