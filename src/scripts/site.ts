/**
 * JavaScript global del sitio. Sin dependencias.
 * Todo es mejora progresiva: sin JS la web sigue siendo navegable
 * y los botones de reserva enlazan directamente al motor.
 */
import { buildBookingUrl, isIsoDate } from '../lib/booking';
import { isLang } from '../i18n/config';
import { initTracking, track } from './analytics';
import { initLightbox } from './lightbox';
import { initForms } from './forms';
import { initMedia, initVideoToggles } from './media';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Cabecera ---------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ---------- Diálogos (menú y reserva) ---------- */
function openDialog(dialog: HTMLDialogElement | null) {
  if (!dialog || dialog.open) return;
  dialog.showModal();
  document.documentElement.style.overflow = 'hidden';
}
function closeDialog(dialog: HTMLDialogElement | null) {
  dialog?.close();
}
function wireDialog(dialog: HTMLDialogElement | null) {
  if (!dialog) return;
  dialog.addEventListener('close', () => {
    document.documentElement.style.overflow = '';
  });
  // Cerrar al pulsar fuera del contenido.
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });
  dialog.querySelectorAll('[data-dialog-close], [data-menu-close]').forEach((btn) =>
    btn.addEventListener('click', () => closeDialog(dialog)),
  );
}

function initMenu() {
  const menu = document.querySelector<HTMLDialogElement>('#mobile-menu');
  wireDialog(menu);
  document.querySelector('[data-menu-open]')?.addEventListener('click', () => openDialog(menu));
  // Navegar a un ancla dentro del menú cierra el diálogo.
  menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => closeDialog(menu)));
}

function initBooking() {
  const dialog = document.querySelector<HTMLDialogElement>('#booking-dialog');
  const form = dialog?.querySelector<HTMLFormElement>('[data-booking-form]');
  if (!dialog || !form) return;
  wireDialog(dialog);

  const checkIn = form.querySelector<HTMLInputElement>('[data-checkin]')!;
  const checkOut = form.querySelector<HTMLInputElement>('[data-checkout]')!;
  const error = form.querySelector<HTMLElement>('[data-booking-error]')!;
  const today = new Date();
  const iso = (d: Date) => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  checkIn.min = iso(today);
  checkOut.min = iso(new Date(today.getTime() + 86400000));

  checkIn.addEventListener('change', () => {
    if (!isIsoDate(checkIn.value)) return;
    const next = new Date(`${checkIn.value}T12:00:00`);
    next.setDate(next.getDate() + 1);
    checkOut.min = iso(next);
    if (!checkOut.value || checkOut.value <= checkIn.value) checkOut.value = iso(next);
    error.hidden = true;
  });

  document.addEventListener('click', (event) => {
    const trigger = (event.target as Element).closest<HTMLElement>('[data-booking-open]');
    if (!trigger) return;
    const e = event as MouseEvent;
    // Ctrl/Cmd/Shift+clic: se respeta la apertura directa del motor en otra pestaña.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    event.preventDefault();
    closeDialog(document.querySelector('#mobile-menu'));
    openDialog(dialog);
    window.setTimeout(() => checkIn.focus(), 50);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const lang = form.dataset.lang;
    const data = new FormData(form);
    const inDate = String(data.get('check_in_date') ?? '');
    const outDate = String(data.get('check_out_date') ?? '');
    if (inDate && outDate && outDate <= inDate) {
      error.hidden = false;
      checkOut.focus();
      return;
    }
    const url = buildBookingUrl({
      lang: isLang(lang) ? lang : 'es',
      checkIn: inDate,
      checkOut: outDate,
      adults: Number(data.get('number_adults')),
    });
    track('booking_submit', { location: 'dialog', check_in: inDate, check_out: outDate });
    window.open(url, '_blank', 'noopener');
    closeDialog(dialog);
  });
}

/* ---------- Revelado al hacer scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-zoom]');
  if (!('IntersectionObserver' in window) || reduceMotion.matches) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Parallax mínimo en imágenes de cabecera ---------- */
function initParallax() {
  if (reduceMotion.matches) return;
  const layers = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (!layers.length) return;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    for (const el of layers) {
      if (y < window.innerHeight * 1.2) el.style.transform = `translate3d(0, ${(y * 0.18).toFixed(1)}px, 0)`;
    }
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
}

/* ---------- Deriva suave de las ilustraciones botánicas ---------- */
function initDrift() {
  if (reduceMotion.matches) return;
  const items = [...document.querySelectorAll<HTMLElement>('[data-drift]')];
  if (!items.length) return;
  // Solo se animan las ramas visibles; nada se calcula al cargar la página.
  const active = new Set<HTMLElement>();
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) active.add(e.target as HTMLElement);
        else active.delete(e.target as HTMLElement);
      }
    },
    { rootMargin: '200px 0px' },
  );
  items.forEach((el) => io.observe(el));
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    // Primero todas las lecturas y después todas las escrituras (sin recálculos forzados).
    const reads = [...active].map((el) => ({ el, r: (el.parentElement ?? el).getBoundingClientRect(), k: Number(el.dataset.drift) || 0 }));
    for (const { el, r, k } of reads) {
      el.style.translate = `0 ${((r.top + r.height / 2 - vh / 2) * -k).toFixed(1)}px`;
    }
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
}

/* ---------- Mapa bajo demanda (sin cookies de Google hasta hacer clic) ---------- */
function initMaps() {
  document.querySelectorAll<HTMLButtonElement>('[data-map-load]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const holder = btn.closest<HTMLElement>('[data-map]');
      if (!holder) return;
      const iframe = document.createElement('iframe');
      iframe.src = btn.dataset.src ?? '';
      iframe.title = btn.dataset.title ?? '';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'no-referrer-when-downgrade';
      iframe.allowFullscreen = true;
      iframe.className = 'map__iframe';
      holder.append(iframe);
      holder.classList.add('is-loaded');
      iframe.focus();
      track('map_load', {});
    });
  });
}

initHeader();
initMenu();
initBooking();
initReveal();
initParallax();
initDrift();
initMaps();
initTracking();
initLightbox();
initForms();
initMedia();
initVideoToggles();
