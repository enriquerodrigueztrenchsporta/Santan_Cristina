/**
 * Servidor estático mínimo para probar dist/ localmente y en los tests E2E.
 * Imita el comportamiento de un hosting estático: /ruta/ → /ruta/index.html,
 * 404.html para rutas inexistentes y redirecciones 301 de redirects.json.
 *   node scripts/serve.mjs [puerto]
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const PORT = Number(process.argv[2] ?? 4400);
const ROOT = path.resolve('dist');
const { redirects } = JSON.parse(fs.readFileSync('redirects.json', 'utf8'));
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.webmanifest': 'application/manifest+json',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

function send(req, res, status, file) {
  const type = TYPES[path.extname(file)] ?? 'application/octet-stream';
  const compressible = /text|javascript|json|xml|svg|manifest/.test(type);
  const gzip = compressible && /gzip/.test(req.headers['accept-encoding'] ?? '');
  res.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': file.includes(`${path.sep}_astro${path.sep}`) ? 'public, max-age=31536000, immutable' : 'no-cache',
    ...(gzip ? { 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' } : {}),
  });
  const stream = fs.createReadStream(file);
  stream.on('error', () => res.destroy());
  (gzip ? stream.pipe(zlib.createGzip()) : stream).pipe(res);
}

http
  .createServer((req, res) => {
    const url = new URL(req.url ?? '/', 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    if (redirects[pathname]) {
      res.writeHead(301, { Location: redirects[pathname] });
      return res.end();
    }
    let file = path.join(ROOT, pathname);
    if (!file.startsWith(ROOT)) {
      res.writeHead(403);
      return res.end();
    }
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      if (!pathname.endsWith('/')) {
        res.writeHead(301, { Location: `${pathname}/${url.search}` });
        return res.end();
      }
      file = path.join(file, 'index.html');
    }
    if (fs.existsSync(file)) return send(req, res, 200, file);
    return send(req, res, 404, path.join(ROOT, '404.html'));
  })
  .listen(PORT, '127.0.0.1', () => console.log(`dist/ servido en http://127.0.0.1:${PORT}/`));
