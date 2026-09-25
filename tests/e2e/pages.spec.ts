import { expect, test } from '@playwright/test';
import { sitemapPaths } from './helpers';

const paths = sitemapPaths();

test('el sitemap contiene las 45 páginas (15 × 3 idiomas)', () => {
  expect(paths.length).toBe(45);
});

for (const path of paths) {
  test(`página ${path}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(e.message));
    const failed: string[] = [];
    page.on('response', (r) => r.status() >= 400 && failed.push(`${r.status()} ${r.url()}`));

    const res = await page.goto(path);
    expect(res?.status()).toBe(200);

    const lang = path.startsWith('/en/') ? 'en' : path.startsWith('/fr/') ? 'fr' : 'es';
    await expect(page.locator('html')).toHaveAttribute('lang', lang);
    await expect(page.locator('h1')).toHaveCount(1);
    expect((await page.title()).length).toBeGreaterThan(15);
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description?.length ?? 0).toBeGreaterThan(50);

    // SEO multidioma
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.santacristina.es${path}`);
    for (const hl of ['es', 'en', 'fr', 'x-default']) {
      await expect(page.locator(`link[rel="alternate"][hreflang="${hl}"]`)).toHaveCount(1);
    }

    // Datos estructurados válidos
    for (const json of await page.locator('script[type="application/ld+json"]').allTextContents()) {
      expect(() => JSON.parse(json)).not.toThrow();
    }

    // Sin textos de prueba ni placeholders
    const text = (await page.locator('body').innerText()).toLowerCase();
    for (const bad of ['lorem', 'ipsum', 'todo:', 'placeholder', 'undefined', 'null', '[object']) {
      expect(text, `texto sospechoso "${bad}"`).not.toContain(bad);
    }

    // Imágenes: todas con alt y sin romper
    await page.evaluate(async () => {
      document.querySelectorAll('img').forEach((i) => (i.loading = 'eager'));
      await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; }))));
    });
    const broken = await page.evaluate(() =>
      [...document.images].filter((i) => !i.closest('dialog') && (!i.complete || i.naturalWidth === 0)).map((i) => i.currentSrc || i.src),
    );
    expect(broken).toEqual([]);
    const noAlt = await page.locator('img:not([alt])').count();
    expect(noAlt).toBe(0);

    expect(failed).toEqual([]);
    expect(errors).toEqual([]);
  });
}
