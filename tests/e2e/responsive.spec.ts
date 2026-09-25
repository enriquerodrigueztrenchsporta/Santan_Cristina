import { expect, test } from '@playwright/test';

const WIDTHS = [320, 375, 390, 430, 768, 1024, 1440, 1920];
const PATHS = [
  '/',
  '/hotel/',
  '/habitaciones/',
  '/habitaciones/refugio-montana-para-4/',
  '/restaurante-el-boj/',
  '/petit-spa/',
  '/bodas-y-eventos/',
  '/pirineos/',
  '/galeria/',
  '/contacto/',
  '/fr/mariages-et-evenements/',
  '/en/el-boj-restaurant/',
];

test('sin scroll horizontal en ningún ancho', async ({ page, isMobile }) => {
  test.skip(isMobile, 'los anchos se recorren desde el proyecto de escritorio');
  test.setTimeout(240_000);
  const problems: string[] = [];
  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of PATHS) {
      await page.goto(path, { waitUntil: 'domcontentloaded' });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (overflow > 0) problems.push(`${width}px ${path} (+${overflow}px)`);
    }
  }
  expect(problems).toEqual([]);
});

test('el hero ocupa casi toda la primera pantalla', async ({ page }) => {
  await page.goto('/');
  const vh = page.viewportSize()!.height;
  const h = await page.locator('.hero').evaluate((el) => el.getBoundingClientRect().height);
  expect(h).toBeGreaterThan(vh * 0.85);
});

test('los titulares grandes no se desbordan de su contenedor', async ({ page }) => {
  await page.goto('/');
  const clipped = await page.$$eval('h1, h2', (hs) => hs.filter((h) => h.scrollWidth > h.clientWidth + 1).map((h) => h.textContent));
  expect(clipped).toEqual([]);
});
