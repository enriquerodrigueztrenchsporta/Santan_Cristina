export const LANGS = ['es', 'en', 'fr'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'es';

/** Texto traducido a los tres idiomas. */
export type L<T = string> = Record<Lang, T>;

export const LANG_META: Record<Lang, { label: string; short: string; hreflang: string; ogLocale: string; bookingLocale: string }> = {
  es: { label: 'Español', short: 'ES', hreflang: 'es', ogLocale: 'es_ES', bookingLocale: 'es' },
  en: { label: 'English', short: 'EN', hreflang: 'en', ogLocale: 'en_GB', bookingLocale: 'en' },
  fr: { label: 'Français', short: 'FR', hreflang: 'fr', ogLocale: 'fr_FR', bookingLocale: 'fr' },
};

export type PageKey =
  | 'home'
  | 'hotel'
  | 'rooms'
  | 'elBoj'
  | 'spa'
  | 'weddings'
  | 'pyrenees'
  | 'gallery'
  | 'contact'
  | 'tobazo';

/** Slug de cada página por idioma. El español vive en la raíz. */
export const PAGE_SLUGS: Record<PageKey, L> = {
  home: { es: '', en: '', fr: '' },
  hotel: { es: 'hotel', en: 'hotel', fr: 'hotel' },
  rooms: { es: 'habitaciones', en: 'rooms', fr: 'chambres' },
  elBoj: { es: 'restaurante-el-boj', en: 'el-boj-restaurant', fr: 'restaurant-el-boj' },
  spa: { es: 'petit-spa', en: 'petit-spa', fr: 'petit-spa' },
  weddings: { es: 'bodas-y-eventos', en: 'weddings-and-events', fr: 'mariages-et-evenements' },
  pyrenees: { es: 'pirineos', en: 'pyrenees', fr: 'pyrenees' },
  gallery: { es: 'galeria', en: 'gallery', fr: 'galerie' },
  contact: { es: 'contacto', en: 'contact', fr: 'contact' },
  tobazo: { es: 'hotel-tobazo', en: 'hotel-tobazo', fr: 'hotel-tobazo' },
};

function prefix(lang: Lang): string {
  return lang === DEFAULT_LANG ? '/' : `/${lang}/`;
}

/** URL relativa (con barra final) de una página en un idioma. */
export function pagePath(key: PageKey, lang: Lang): string {
  const slug = PAGE_SLUGS[key][lang];
  return slug ? `${prefix(lang)}${slug}/` : prefix(lang);
}

/** URL de una ficha de habitación. */
export function roomPath(roomSlug: L, lang: Lang): string {
  return `${pagePath('rooms', lang)}${roomSlug[lang]}/`;
}

export function isLang(value: string | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}
