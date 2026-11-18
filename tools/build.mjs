// Bundles the overlay (three.js tree-shaken + our modules) into public/br/app.js. Run: node tools/build.mjs
import { build } from 'esbuild';
await build({ entryPoints: ['client/br/main.js'], bundle: true, minify: true, format: 'iife', target: ['safari15', 'chrome100'], outfile: 'public/br/app.js', legalComments: 'none', sourcemap: false, logLevel: 'info' });
