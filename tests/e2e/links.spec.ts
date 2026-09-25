import fs from 'node:fs';
import { expect, test } from '@playwright/test';
import { sitemapPaths } from './helpers';

test('todos los enlaces internos responden 200', async ({ page, request }) => {
  const internal = new Set<string>();
  for (const path of sitemapPaths()) {
    await page.goto(path);
    const hrefs = await page.$$eval('a[href]', (as) => as.map((a) => a.getAttribute('href')!));
    for (const href of hrefs) {
      if (href.startsWith('/') && !href.startsWith('//')) internal.add(href.split('#')[0]!);
    }
  }
  const broken: string[] = [];
  for (const href of internal) {
    const res = await request.get(href);
    if (res.status() !== 200) broken.push(`${res.status()} ${href}`);
  }
  expect(broken).toEqual([]);
  expect(internal.size).toBeGreaterThan(40);
});

test('las anclas internas existen en su página', async ({ page }) => {
  const anchors: [string, string][] = [
    ['/restaurante-el-boj/', 'reservar-mesa'],
    ['/restaurante-el-boj/', 'carta'],
    ['/bodas-y-eventos/', 'solicitar-informacion'],
    ['/pirineos/', 'anayet'],
    ['/', 'hotel'],
    ['/pirineos/', 'camino'],
  ];
  for (const [path, id] of anchors) {
    await page.goto(path);
    await expect(page.locator(`#${id}`)).toHaveCount(1);
  }
});

test('todas las redirecciones 301 apuntan a páginas existentes', () => {
  const { redirects } = JSON.parse(fs.readFileSync('redirects.json', 'utf8')) as { redirects: Record<string, string> };
  const missing = Object.values(redirects).filter((to) => {
    const file = to.endsWith('/') ? `dist${to}index.html` : `dist${to}`;
    return !fs.existsSync(file);
  });
  expect(missing).toEqual([]);
});
