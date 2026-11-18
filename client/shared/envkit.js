// Loads a packed environment GLB (tools/assets/build-env.mjs: one texture atlas, one node per prop) and turns every prop
// into a single merged BufferGeometry so a whole forest / ocean is ONE InstancedMesh draw call.
import { MeshLambertMaterial, InstancedMesh, Matrix4, Object3D, SRGBColorSpace, BufferAttribute, Sphere, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BufferAttribute as _BA } from 'three';
// getX..getW de-normalise quantized data (getComponent does not)
const GET = [_BA.prototype.getX, _BA.prototype.getY, _BA.prototype.getZ, _BA.prototype.getW];

const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);

export async function loadEnv(url) {
  const gltf = await new Promise((ok, bad) => loader.load(url, ok, undefined, bad));
  const root = gltf.scene; root.updateMatrixWorld(true);
  const geos = new Map(); const disposables = []; let tex = null;
  for (const top of root.children) {
    const parts = []; // props sit at the origin; node transforms carry the de-quantization scale/offset -> bake them
    const inv = new Matrix4().copy(top.parent.matrixWorld).invert();
    top.traverse((o) => {
      if (!o.isMesh) return;
      if (!tex && o.material.map) tex = o.material.map;
      let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
      for (const k of ['position', 'normal', 'uv']) { const a = g.attributes[k]; if (!a || (a.array instanceof Float32Array && !a.normalized)) continue; const arr = new Float32Array(a.count * a.itemSize); for (let i = 0; i < a.count; i++) for (let c = 0; c < a.itemSize; c++) arr[i * a.itemSize + c] = GET[c].call(a, i); g.setAttribute(k, new BufferAttribute(arr, a.itemSize)); }
      if (!g.attributes.normal) g.computeVertexNormals();
      if (!g.attributes.uv) g.setAttribute('uv', new BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      g.applyMatrix4(new Matrix4().multiplyMatrices(inv, o.matrixWorld));
      parts.push(g);
    });
    if (!parts.length) continue;
    const g = parts.length > 1 ? mergeGeometries(parts) : parts[0];
    if (parts.length > 1) parts.forEach((p) => p.dispose());
    g.computeBoundingSphere(); geos.set(top.name, g); disposables.push(g);
  }
  if (tex) { tex.colorSpace = SRGBColorSpace; tex.anisotropy = 4; disposables.push(tex); }
  gltf.scene.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); } });
  const mat = new MeshLambertMaterial({ map: tex }); disposables.push(mat);
  const env = {
    geos, mat, has: (n) => geos.has(n),
    /** place many copies of a prop: items = [{x,y,z,ry,s}] -> one InstancedMesh */
    instanced(name, items, { material = mat } = {}) {
      const g = geos.get(name); if (!g || !items.length) return null;
      const im = new InstancedMesh(g, material, items.length); const o = new Object3D();
      let maxR = 0;
      items.forEach((it, i) => { o.position.set(it.x, it.y || 0, it.z); o.rotation.set(0, it.ry || 0, 0); o.scale.setScalar(it.s || 1); o.updateMatrix(); im.setMatrixAt(i, o.matrix); maxR = Math.max(maxR, Math.hypot(it.x, it.z) + (it.s || 1) * 3); });
      im.instanceMatrix.needsUpdate = true;
      im.geometry.boundingSphere; im.boundingSphere = new Sphere(new Vector3(), maxR); im.frustumCulled = false;
      return im;
    },
    dispose() { for (const d of disposables) try { d.dispose(); } catch {} },
  };
  return env;
}
