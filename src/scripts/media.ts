/**
 * Vídeo de fondo: solo se carga si el usuario no ha pedido reducir
 * movimiento ni ahorrar datos. En móvil se usa la versión ligera si existe;
 * si no existe, en móvil se queda la imagen poster.
 */
export function initMedia() {
  const videos = document.querySelectorAll<HTMLVideoElement>('video[data-bg-video]');
  if (!videos.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  const saveData = conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? '');
  if (reduce || saveData) return;
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  videos.forEach((video) => {
    const mobileSrc = video.dataset.mobileSrc;
    if (isMobile && !mobileSrc) return;
    const sources = isMobile
      ? [{ src: mobileSrc!, type: 'video/mp4' }]
      : [
          { src: video.dataset.webm, type: 'video/webm' },
          { src: video.dataset.mp4, type: 'video/mp4' },
        ].filter((s): s is { src: string; type: string } => !!s.src);
    if (!sources.length) return;

    const start = () => {
      for (const s of sources) {
        const el = document.createElement('source');
        el.src = s.src;
        el.type = s.type;
        video.append(el);
      }
      video.load();
      video.addEventListener('playing', () => video.closest('[data-video-wrap]')?.classList.add('is-playing'), { once: true });
      void video.play().catch(() => {
        /* autoplay bloqueado: queda el poster */
      });
    };

    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        start();
      }
    });
    io.observe(video);

    // Pausa cuando no está visible para ahorrar batería.
    new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!video.currentSrc) continue;
        if (e.isIntersecting) void video.play().catch(() => undefined); // autoplay bloqueado: queda el poster
        else video.pause();
      }
    }).observe(video);
  });
}

/** Botón de pausa para el vídeo (WCAG 2.2.2). */
export function initVideoToggles() {
  document.querySelectorAll<HTMLButtonElement>('[data-video-toggle]').forEach((btn) => {
    const video = btn.closest('[data-video-wrap]')?.querySelector('video');
    if (!video) return;
    btn.addEventListener('click', () => {
      if (video.paused) {
        void video.play();
        btn.setAttribute('aria-pressed', 'false');
      } else {
        video.pause();
        btn.setAttribute('aria-pressed', 'true');
      }
    });
  });
}
