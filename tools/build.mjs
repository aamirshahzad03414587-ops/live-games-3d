// Bundles the overlays (three.js tree-shaken + our modules) into public/<game>/app.js. Run: node tools/build.mjs
import { build } from 'esbuild';
const opts = { bundle: true, minify: true, format: 'iife', target: ['safari15', 'chrome100'], legalComments: 'none', sourcemap: false, logLevel: 'info' };
for (const g of ['br', 'tower']) await build({ ...opts, entryPoints: [`client/${g}/main.js`], outfile: `public/${g}/app.js` });
