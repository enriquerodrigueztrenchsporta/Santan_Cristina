import { expect, test } from '@playwright/test';

const ENGINE = 'https://direct-book.com/properties/hotelsantacristinapetitspadirect';

test.beforeEach(async ({ context }) => {
  // No se llama al motor real durante los tests.
  await context.route('https://direct-book.com/**', (route) => route.fulfill({ status: 200, body: 'ok' }));
});

test('el botón Reservar abre el diálogo y envía al motor con fechas', async ({ page, context }) => {
  await page.goto('/');
  await page.locator('.hero').getByRole('link', { name: 'Reservar estancia' }).click();
  const dialog = page.locator('#booking-dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog.locator('[data-checkin]')).toBeFocused();

  await dialog.locator('[data-checkin]').fill('2027-01-15');
  await dialog.locator('[data-checkin]').dispatchEvent('change');
  await expect(dialog.locator('[data-checkout]')).toHaveValue('2027-01-16');
  await dialog.locator('[data-checkout]').fill('2027-01-18');
  await dialog.locator('select[name="number_adults"]').selectOption('3');

  const popupPromise = context.waitForEvent('page');
  await dialog.getByRole('button', { name: 'Ver disponibilidad' }).click();
  const popup = await popupPromise;
  await popup.waitForLoadState();
  const url = new URL(popup.url());
  expect(`${url.origin}${url.pathname}`).toBe(ENGINE);
  expect(url.searchParams.get('check_in_date')).toBe('2027-01-15');
  expect(url.searchParams.get('check_out_date')).toBe('2027-01-18');
  expect(url.searchParams.get('number_adults')).toBe('3');
  expect(url.searchParams.get('locale')).toBe('es');
  await expect(dialog).toBeHidden();
});

test('rechaza una salida anterior a la llegada', async ({ page }) => {
  await page.goto('/en/');
  await page.locator('.hero').getByRole('link', { name: 'Book your stay' }).click();
  const dialog = page.locator('#booking-dialog');
  await dialog.locator('[data-checkin]').fill('2027-02-10');
  await dialog.locator('[data-checkout]').fill('2027-02-05');
  await dialog.getByRole('button', { name: 'Check availability' }).click();
  await expect(dialog.locator('[data-booking-error]')).toBeVisible();
});

test('todos los CTA de reserva apuntan al motor oficial', async ({ page }) => {
  for (const path of ['/', '/habitaciones/', '/habitaciones/familiar/', '/fr/', '/en/rooms/family/']) {
    await page.goto(path);
    const hrefs = await page.$$eval('[data-booking-open]', (els) => els.map((e) => e.getAttribute('href')));
    expect(hrefs.length).toBeGreaterThan(1);
    for (const href of hrefs) expect(href).toContain(ENGINE);
  }
});

test('sin JavaScript, Reservar es un enlace directo al motor', async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto('/fr/');
  const href = await page.locator('header [data-booking-open]').getAttribute('href');
  expect(href).toContain(`${ENGINE}?locale=fr`);
  await ctx.close();
});
