/**
 * Visor de imágenes accesible basado en <dialog>.
 * Marcado: <a href="imagen-grande" data-lightbox="grupo"><img alt="…"></a>
 */
export function initLightbox() {
  const triggers = [...document.querySelectorAll<HTMLAnchorElement>('a[data-lightbox]')];
  const dialog = document.querySelector<HTMLDialogElement>('#lightbox');
  if (!triggers.length || !dialog) return;

  const img = dialog.querySelector<HTMLImageElement>('[data-lb-img]')!;
  const caption = dialog.querySelector<HTMLElement>('[data-lb-caption]')!;
  const counter = dialog.querySelector<HTMLElement>('[data-lb-counter]')!;
  let group: HTMLAnchorElement[] = [];
  let index = 0;

  const show = (i: number) => {
    index = (i + group.length) % group.length;
    const a = group[index]!;
    const alt = a.querySelector('img')?.alt ?? '';
    img.src = a.href;
    img.alt = alt;
    caption.textContent = alt;
    counter.textContent = `${index + 1} / ${group.length}`;
  };

  triggers.forEach((a) => {
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      group = triggers.filter((t) => t.dataset.lightbox === a.dataset.lightbox && t.offsetParent !== null);
      show(group.indexOf(a));
      dialog.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
  });

  dialog.addEventListener('close', () => {
    document.documentElement.style.overflow = '';
    group[index]?.focus();
  });
  dialog.querySelector('[data-lb-prev]')?.addEventListener('click', () => show(index - 1));
  dialog.querySelector('[data-lb-next]')?.addEventListener('click', () => show(index + 1));
  dialog.querySelector('[data-lb-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });

  let startX = 0;
  dialog.addEventListener('touchstart', (e) => (startX = e.touches[0]?.clientX ?? 0), { passive: true });
  dialog.addEventListener(
    'touchend',
    (e) => {
      const dx = (e.changedTouches[0]?.clientX ?? 0) - startX;
      if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    },
    { passive: true },
  );
}
