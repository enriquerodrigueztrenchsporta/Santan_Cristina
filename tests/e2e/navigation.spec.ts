import { expect, test } from '@playwright/test';

test('el selector de idioma conserva la página equivalente', async ({ page, isMobile }) => {
  await page.goto('/habitaciones/doble/');
  if (isMobile) {
    await page.getByRole('button', { name: /menú/i }).click();
    await page.locator('#mobile-menu').getByRole('link', { name: 'English' }).click();
  } else {
    await page.locator('header .lang-switch a[hreflang="en"]').click();
  }
  await expect(page).toHaveURL(/\/en\/rooms\/double\/$/);
  await expect(page.locator('h1')).toHaveText('Double');

  if (isMobile) {
    await page.getByRole('button', { name: /menu/i }).click();
    await page.locator('#mobile-menu').getByRole('link', { name: 'Français' }).click();
  } else {
    await page.locator('header .lang-switch a[hreflang="fr"]').click();
  }
  await expect(page).toHaveURL(/\/fr\/chambres\/double\/$/);
});

test('la navegación principal lleva a cada sección', async ({ page, isMobile }) => {
  const targets = [
    ['Habitaciones', '/habitaciones/'],
    ['El Boj', '/restaurante-el-boj/'],
    ['Petit Spa', '/petit-spa/'],
    ['Bodas y eventos', '/bodas-y-eventos/'],
    ['Contacto', '/contacto/'],
  ] as const;
  for (const [label, url] of targets) {
    await page.goto('/');
    if (isMobile) {
      await page.getByRole('button', { name: /menú/i }).click();
      await page.locator('#mobile-menu').getByRole('link', { name: label, exact: true }).click();
    } else {
      await page.locator('.site-nav').getByRole('link', { name: label, exact: true }).click();
    }
    await expect(page).toHaveURL(new RegExp(`${url}$`));
    await expect(page.locator('h1')).toBeVisible();
  }
});

test('el menú móvil se abre y se cierra con Escape', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'solo móvil');
  await page.goto('/');
  await page.getByRole('button', { name: /menú/i }).click();
  await expect(page.locator('#mobile-menu')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#mobile-menu')).toBeHidden();
});

test('la barra de reserva móvil es visible y cambia en El Boj', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'solo móvil');
  await page.goto('/');
  await expect(page.locator('[data-mobile-bar]')).toBeVisible();
  await page.goto('/restaurante-el-boj/');
  await expect(page.locator('[data-mobile-bar]').getByRole('link', { name: 'Reservar mesa' })).toBeVisible();
});

test('navegación por teclado: enlace de salto al contenido', async ({ page, isMobile }) => {
  test.skip(isMobile, 'teclado físico');
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main')).toBeFocused();
});
