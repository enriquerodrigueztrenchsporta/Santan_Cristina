import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const KEY_PAGES = [
  '/',
  '/hotel/',
  '/habitaciones/',
  '/habitaciones/superior-vistas-premium/',
  '/restaurante-el-boj/',
  '/petit-spa/',
  '/bodas-y-eventos/',
  '/pirineos/',
  '/galeria/',
  '/contacto/',
  '/en/',
  '/fr/restaurant-el-boj/',
];

for (const path of KEY_PAGES) {
  test(`accesibilidad (axe, WCAG 2.2 AA) ${path}`, async ({ page }) => {
    await page.goto(path);
    // Muestra el contenido animado para que axe evalúe el estado final.
    await page.addStyleTag({ content: '[data-reveal]{opacity:1!important;transform:none!important;transition:none!important}' });
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
    const serious = results.violations
      .filter((v) => v.impact === 'serious' || v.impact === 'critical')
      .map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).slice(0, 3).join(' | ')}`);
    expect(serious).toEqual([]);
  });
}

test('Schema.org: Hotel y Restaurant enlazados con NAP coherente', async ({ page }) => {
  await page.goto('/');
  const graphs = (await page.locator('script[type="application/ld+json"]').allTextContents()).map((j) => JSON.parse(j));
  const nodes = graphs.flatMap((g) => g['@graph'] ?? [g]);
  const hotel = nodes.find((n) => n['@type'] === 'Hotel');
  const restaurant = nodes.find((n) => n['@type'] === 'Restaurant');
  expect(hotel.name).toBe('Hotel Santa Cristina Petit Spa');
  expect(hotel.telephone).toBe('+34974373300');
  expect(hotel.address.postalCode).toBe('22880');
  expect(hotel.geo.latitude).toBeCloseTo(42.7684, 3);
  expect(hotel.starRating.ratingValue).toBe('3');
  expect(hotel.containsPlace['@id']).toBe(restaurant['@id']);
  expect(restaurant.containedInPlace['@id']).toBe(hotel['@id']);
  expect(restaurant.telephone).toBe(hotel.telephone);
  // Las valoraciones de Google no se marcan como propias.
  expect(JSON.stringify(nodes)).not.toContain('aggregateRating');
});

test('Schema.org: BreadcrumbList y HotelRoom en las fichas', async ({ page }) => {
  await page.goto('/en/rooms/mountain-retreat-for-4/');
  const nodes = JSON.parse(await page.locator('script[type="application/ld+json"]').first().textContent() ?? '{}')['@graph'];
  const room = nodes.find((n: { '@type': string }) => n['@type'] === 'HotelRoom');
  expect(room.floorSize.value).toBe(21);
  expect(room.occupancy.maxValue).toBe(4);
  const crumbs = nodes.find((n: { '@type': string }) => n['@type'] === 'BreadcrumbList');
  expect(crumbs.itemListElement).toHaveLength(3);
});

test('robots.txt y sitemap publicados', async ({ request }) => {
  expect((await request.get('/robots.txt')).status()).toBe(200);
  const sitemap = await (await request.get('/sitemap-0.xml')).text();
  expect(sitemap).toContain('hreflang="fr"');
  expect(sitemap).not.toContain('404');
});
