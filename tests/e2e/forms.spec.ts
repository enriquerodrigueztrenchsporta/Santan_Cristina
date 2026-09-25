import { expect, test } from '@playwright/test';

test('formulario de bodas: valida campos y registra la consulta', async ({ page }) => {
  await page.goto('/bodas-y-eventos/');
  const form = page.locator('#wedding-form');
  await expect(form).toHaveAttribute('data-to', 'comercial@santacristina.es');

  await form.getByRole('button', { name: 'Enviar consulta' }).click();
  // El navegador bloquea el envío: el nombre es obligatorio.
  expect(await form.locator('#wedding-form-name').evaluate((el: HTMLInputElement) => el.validity.valid)).toBe(false);
  await expect(form.locator('[data-form-status]')).toBeHidden();

  // Evita abrir el cliente de correo durante el test.
  await page.route('mailto:*', (route) => route.abort());
  await form.locator('#wedding-form-name').fill('Prueba');
  await form.locator('#wedding-form-email').fill('prueba@example.com');
  await form.locator('#wedding-form-message').fill('Consulta de disponibilidad');
  await form.getByRole('button', { name: 'Enviar consulta' }).click();
  await expect(form.locator('[data-form-status]')).toContainText('comercial@santacristina.es');
  const events = await page.evaluate(() => (window as unknown as { dataLayer: { event: string }[] }).dataLayer.map((e) => e.event));
  expect(events).toContain('wedding_enquiry');
});

test('formulario de contacto: cada campo tiene su etiqueta', async ({ page }) => {
  await page.goto('/en/contact/');
  const form = page.locator('#contact-form');
  for (const label of ['Name', 'Email', 'Telephone', 'Message']) {
    await expect(form.getByLabel(label).first()).toBeVisible();
  }
});
