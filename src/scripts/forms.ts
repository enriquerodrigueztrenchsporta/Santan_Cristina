import { track } from './analytics';

/**
 * Formularios de consulta.
 * - Con `data-endpoint` (PUBLIC_FORM_ENDPOINT): envío por fetch (Formspree, Getform…).
 * - Sin endpoint: se abre el programa de correo con la consulta ya redactada
 *   para el email del hotel. No se pierde ningún mensaje por falta de backend.
 */
export function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-enquiry]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-form-status]');
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const { endpoint = '', to = '', subject = '', event = 'contact_enquiry' } = form.dataset;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      if (data.get('_gotcha')) return; // campo trampa anti-spam

      track(event, { form: form.id });

      if (!endpoint) {
        const lines: string[] = [];
        form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[name]').forEach((field) => {
          if (field.name.startsWith('_') || !field.value) return;
          const label = form.querySelector(`label[for="${field.id}"] [data-label]`)?.textContent?.trim() ?? field.name;
          lines.push(`${label}: ${field.value}`);
        });
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
        if (status) {
          status.hidden = false;
          status.textContent = `${form.dataset.mailtoMsg ?? ''} ${to}`;
        }
        return;
      }

      button?.setAttribute('disabled', '');
      const original = button?.textContent ?? '';
      if (button) button.textContent = form.dataset.sendingMsg ?? original;
      try {
        data.append('_subject', subject);
        const res = await fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' },
          signal: AbortSignal.timeout(15000),
        });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        if (status) {
          status.hidden = false;
          status.textContent = form.dataset.sentMsg ?? '';
        }
      } catch {
        // Error de red, timeout o respuesta no válida: se ofrece el email directo.
        if (status) {
          status.hidden = false;
          status.textContent = `${form.dataset.errorMsg ?? ''} ${to}`;
        }
      } finally {
        button?.removeAttribute('disabled');
        if (button) button.textContent = original;
      }
    });
  });
}
