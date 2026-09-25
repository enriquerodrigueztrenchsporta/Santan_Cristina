import { LANGS, type Lang, type PageKey, pagePath, roomPath } from '../i18n/config';
import { useT, type UiKey } from '../i18n/ui';
import type { Room } from '../content/rooms';
import type { Crumb } from '../components/Breadcrumbs.astro';

const NAV_LABEL: Record<PageKey, UiKey> = {
  home: 'nav.home',
  hotel: 'nav.hotel',
  rooms: 'nav.rooms',
  elBoj: 'nav.elBojFull',
  spa: 'nav.spa',
  weddings: 'nav.weddings',
  pyrenees: 'nav.pyrenees',
  gallery: 'nav.gallery',
  contact: 'nav.contact',
  tobazo: 'nav.tobazo',
};

export function alternatesFor(key: PageKey): Record<Lang, string> {
  return Object.fromEntries(LANGS.map((l) => [l, pagePath(key, l)])) as Record<Lang, string>;
}

export function roomAlternates(room: Room): Record<Lang, string> {
  return Object.fromEntries(LANGS.map((l) => [l, roomPath(room.slug, l)])) as Record<Lang, string>;
}

export function crumbsFor(lang: Lang, key: PageKey, room?: Room): Crumb[] {
  const t = useT(lang);
  const crumbs: Crumb[] = [{ name: t('nav.home'), path: pagePath('home', lang) }];
  if (key !== 'home') crumbs.push({ name: t(NAV_LABEL[key]), path: pagePath(key, lang) });
  if (room) crumbs.push({ name: room.name[lang], path: roomPath(room.slug, lang) });
  return crumbs;
}
