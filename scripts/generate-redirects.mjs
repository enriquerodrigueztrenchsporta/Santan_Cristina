/**
 * Genera las redirecciones 301 para los distintos hostings a partir de redirects.json:
 *  - public/_redirects  → Netlify y Cloudflare Pages
 *  - vercel.json        → Vercel
 * Ver DEPLOYMENT.md para Apache/Nginx.
 */
import fs from 'node:fs';

const { redirects } = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));
const entries = Object.entries(redirects);

const netlify = ['# Generado por scripts/generate-redirects.mjs — no editar a mano', ...entries.map(([from, to]) => `${from}  ${to}  301`)];
fs.writeFileSync('public/_redirects', netlify.join('\n') + '\n');

const vercel = {
  trailingSlash: true,
  redirects: entries.map(([source, destination]) => ({ source, destination, permanent: true })),
  headers: [
    {
      source: '/_astro/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
  ],
};
fs.writeFileSync('vercel.json', JSON.stringify(vercel, null, 2) + '\n');
console.log(`${entries.length} redirecciones generadas.`);
