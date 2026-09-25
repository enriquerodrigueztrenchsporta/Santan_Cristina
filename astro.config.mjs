// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio de producción. Cambiar aquí si se publica en otro dominio.
const SITE = 'https://www.santacristina.es';
// Subcarpeta de publicación: '/' en el dominio propio, '/Santan_Cristina/' en GitHub Pages.
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  build: { format: 'directory' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      // effort bajo = builds mucho más rápidos con un peso casi idéntico.
      config: { avif: { effort: 2 }, webp: { effort: 4 }, jpeg: { mozjpeg: true } },
    },
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Fraunces',
      cssVariable: '--font-display',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/fraunces/files/fraunces-latin-standard-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
          {
            src: ['@fontsource-variable/fraunces/files/fraunces-latin-standard-italic.woff2'],
            weight: '100 900',
            style: 'italic',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Hanken Grotesk',
      cssVariable: '--font-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/hanken-grotesk/files/hanken-grotesk-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en', fr: 'fr' },
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
