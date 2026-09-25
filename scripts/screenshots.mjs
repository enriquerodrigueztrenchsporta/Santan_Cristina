/**
 * Capturas de página completa para revisión visual.
 *   node scripts/screenshots.mjs [baseUrl] [filtro]
 * Genera PNG en screenshots/ (ignorado por git).
 */
import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';

const base = process.argv[2] ?? 'http://127.0.0.1:4321';
const filter = process.argv[3] ?? '';
const pages = [
  ['home', '/'],
  ['hotel', '/hotel/'],
  ['habitaciones', '/habitaciones/'],
  ['habitacion-superior', '/habitaciones/superior-vistas-premium/'],
  ['el-boj', '/restaurante-el-boj/'],
  ['petit-spa', '/petit-spa/'],
  ['bodas', '/bodas-y-eventos/'],
  ['pirineos', '/pirineos/'],
  ['galeria', '/galeria/'],
  ['contacto', '/contacto/'],
  ['en-home', '/en/'],
  ['fr-el-boj', '/fr/restaurant-el-boj/'],
];
const viewports = [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
];

await fs.mkdir('screenshots', { recursive: true });
const browser = await chromium.launch();
for (const [vpName, vp] of viewports) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  for (const [name, path] of pages) {
    if (filter && !name.includes(filter)) continue;
    await page.goto(base + path, { waitUntil: 'load', timeout: 30000 });
    await page.addStyleTag({ content: '[data-reveal],[data-reveal-zoom] img{opacity:1!important;transform:none!important;transition:none!important} main>section{content-visibility:visible!important}' });
    // Recorre la página para cargar imágenes lazy.
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      document.querySelectorAll('img').forEach((i) => { i.loading = 'eager'; i.decoding = 'sync'; });
      await Promise.race([
        Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; })))),
        new Promise((r) => setTimeout(r, 8000)),
      ]);
      await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
    });
    await page.waitForTimeout(300);
    await page.screenshot({ path: `screenshots/${name}-${vpName}.png`, fullPage: true });
    console.log('ok', name, vpName);
  }
  if (errors.length) console.log('ERRORES CONSOLA', vpName, errors);
  await ctx.close();
}
await browser.close();
