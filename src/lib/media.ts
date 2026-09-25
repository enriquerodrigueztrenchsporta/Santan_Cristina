import fs from 'node:fs';
import path from 'node:path';

/**
 * Devuelve la ruta pública del vídeo solo si el archivo existe en /public.
 * Así la web nunca pide vídeos inexistentes (sin 404) y basta con copiar
 * los archivos en public/videos/ y volver a hacer build para activarlos.
 */
export function publicFile(src: string | undefined): string | undefined {
  if (!src) return undefined;
  return fs.existsSync(path.join(process.cwd(), 'public', src)) ? src : undefined;
}

export function videoSources(v: { webm?: string; mp4?: string; mobileMp4?: string }) {
  const webm = publicFile(v.webm);
  const mp4 = publicFile(v.mp4);
  const mobile = publicFile(v.mobileMp4);
  return { webm, mp4, mobile, any: !!(webm || mp4 || mobile) };
}
