/**
 * Subcarpeta donde se publica la web.
 * - Dominio propio (santacristina.es): '' → las rutas quedan igual ('/hotel/').
 * - GitHub Pages: '/Santan_Cristina' → '/Santan_Cristina/hotel/'.
 * Se configura con la variable BASE_PATH al hacer el build (ver astro.config.mjs).
 */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Añade la subcarpeta a una ruta interna absoluta ('/hotel/' → '/Santan_Cristina/hotel/'). */
export function withBase(path: string): string {
  if (!BASE || !path.startsWith('/') || path.startsWith('//')) return path;
  return path.startsWith(`${BASE}/`) ? path : `${BASE}${path}`;
}

/** Quita la subcarpeta: las URLs canónicas y de Schema.org apuntan siempre al dominio oficial. */
export function stripBase(path: string): string {
  if (!BASE) return path;
  return path.startsWith(`${BASE}/`) ? path.slice(BASE.length) : path;
}
