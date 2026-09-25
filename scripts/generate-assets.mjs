/**
 * Genera los iconos (favicon PNG, apple-touch, manifest) y las imágenes
 * Open Graph (1200×630) a partir de public/favicon.svg y de las fotos de
 * src/assets. Ejecutar tras cambiar el logo o las fotos principales:
 *   node scripts/generate-assets.mjs
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';

const svg = await fs.readFile('public/favicon.svg');
const icons = [
  ['public/favicon-32.png', 32],
  ['public/icons/apple-touch-icon.png', 180],
  ['public/icons/icon-192.png', 192],
  ['public/icons/icon-512.png', 512],
];
for (const [out, size] of icons) {
  await sharp(svg, { density: 512 }).resize(size, size).png().toFile(out);
}

const og = [
  ['src/assets/img/hotel/hotel-valle-otono.jpg', 'public/og/santa-cristina.jpg', 'attention'],
  ['src/assets/img/el-boj/comedor.jpg', 'public/og/el-boj.jpg', 'centre'],
];
for (const [src, out, position] of og) {
  await sharp(src).resize(1200, 630, { fit: 'cover', position }).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
}
console.log('Iconos e imágenes OG generados.');
