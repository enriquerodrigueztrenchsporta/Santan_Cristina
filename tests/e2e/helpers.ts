import fs from 'node:fs';

/** Todas las URLs publicadas según el sitemap generado en el build. */
export function sitemapPaths(): string[] {
  const xml = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]!).pathname);
}
