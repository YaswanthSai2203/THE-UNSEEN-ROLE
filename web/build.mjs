// Bundles the game into dist/ (static: open dist/index.html via any web server, or deploy the folder).
// Also writes dist/standalone.html with everything inlined (one file, no other requests except web fonts).
import * as esbuild from 'esbuild';
import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
const result = await esbuild.build({
  entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'esm', target: 'es2020',
  outfile: 'dist/game.js', legalComments: 'none', metafile: true,
  alias: { 'three/addons': './node_modules/three/examples/jsm' },
});
const css = await readFile('src/style.css', 'utf8');
const html = await readFile('src/index.html', 'utf8');
await writeFile('dist/index.html', html.replace('<!--CSS-->', `<link rel="stylesheet" href="style.css">`).replace('<!--JS-->', '<script type="module" src="game.js"></script>'));
await writeFile('dist/style.css', css);
const js = await readFile('dist/game.js', 'utf8');
await writeFile('dist/standalone.html', html.replace('<!--CSS-->', `<style>${css}</style>`).replace('<!--JS-->', () => `<script type="module">${js.replace(/<\/script/g, '<\\/script')}</script>`));
// dist/artifact.html: the same single-file game without the outer document tags (for hosts that add their own).
const head = html.match(/<title>[\s\S]*?<\/title>/)[0] + '\n' + (html.match(/<link rel="preconnect"[^>]*>\s*<link rel="stylesheet"[^>]*>/) || [''])[0];
const body = html.match(/<body>([\s\S]*)<\/body>/)[1];
await writeFile('dist/artifact.html', `${head}\n<style>${css}</style>\n` + body.replace('<!--JS-->', () => `<script type="module">${js.replace(/<\/script/g, '<\\/script')}</script>`));
const kb = Object.values(result.metafile.outputs).reduce((a, o) => a + o.bytes, 0) / 1024;
console.log(`built dist/ (${kb.toFixed(0)} KB js)`);
