/**
 * Eventos de analítica. Se envían a `dataLayer` (GTM) y, si GA4 está
 * instalado directamente, también con `gtag('event')`.
 * Sin GTM/GA4 configurados, los eventos quedan en `dataLayer` sin efecto.
 *
 * Eventos: booking_click, booking_submit, restaurant_booking_click,
 * whatsapp_click, phone_click, email_click, wedding_enquiry,
 * wedding_enquiry_click, room_view, map_load, directions_click.
 * Documentación: README.md → Analítica.
 */
type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __ga4Direct?: boolean;
  }
}

export function track(event: string, params: Params = {}) {
  const payload = { event, page_lang: document.documentElement.lang, page_type: document.body.dataset.page, ...params };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (window.__ga4Direct && typeof window.gtag === 'function') {
    const { event: name, ...rest } = payload;
    window.gtag('event', name, rest);
  }
}

export function initTracking() {
  document.addEventListener('click', (e) => {
    const link = (e.target as Element).closest<HTMLElement>('a, button');
    if (!link) return;
    const explicit = link.dataset.track;
    const location = link.dataset.trackLocation;
    const href = link instanceof HTMLAnchorElement ? link.href : '';
    if (explicit) track(explicit, { location, link_url: href || undefined });
    if (explicit === 'booking_click' && link.hasAttribute('data-booking-open')) return;
    if (href.startsWith('tel:')) track('phone_click', { location, phone: href.slice(4) });
    else if (href.startsWith('mailto:')) track('email_click', { location, email: href.slice(7).split('?')[0] });
    else if (href.includes('wa.me/')) track('whatsapp_click', { location });
    else if (href.includes('google.com/maps/dir')) track('directions_click', { location });
  });

  const room = document.querySelector<HTMLElement>('[data-room-view]');
  if (room) track('room_view', { room_id: room.dataset.roomView, room_name: room.dataset.roomName });
}
