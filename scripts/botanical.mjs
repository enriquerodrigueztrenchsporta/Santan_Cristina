/**
 * Prepara las ilustraciones botánicas de fondo a partir de láminas de
 * dominio público de «Flora von Deutschland, Österreich und der Schweiz»
 * (O. W. Thomé, 1885; grabados de W. Müller) — Wikimedia Commons:
 *   File:Illustration_Fagus_sylvatica0.jpg       (haya)
 *   File:Illustration_Buxus_sempervirens0.jpg    (boj)
 *   File:Illustration_Abies_alba0.jpg            (abeto)
 *   File:Illustration_Quercus_robur0.jpg         (roble)
 *
 *   node scripts/botanical.mjs <carpeta-con-las-laminas>
 *
 * Para cada lámina: conserva la planta completa, borra con máscara
 * difuminada los rótulos, números y despieces, elimina el papel
 * (transparencia real) y aplica un mapa de degradado en tintas de hayedo
 * otoñal que mantiene todo el sombreado del grabado.
 * Resultado: PNG con alfa en src/assets/botanica/ (Astro los convierte a
 * AVIF/WebP en el build).
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const SRC = process.argv[2];
if (!SRC) {
  console.error('Uso: node scripts/botanical.mjs <carpeta-con-las-laminas>');
  process.exit(1);
}
const OUT = 'src/assets/botanica';

/**
 * crop: [left, top, right, bottom] en píxeles de la lámina.
 * erase: zonas a borrar (rótulos, despieces): [left, top, right, bottom].
 */
const PLATES = {
  haya: {
    file: 'haya.jpg',
    crop: [12, 150, 1405, 2130],
    minPart: 0.004,
    erase: [
      [821, 83, 1048, 600],
      [1135, 230, 1280, 495],
      [30, 1110, 140, 1530],
      [255, 1150, 435, 1730],
      [445, 1515, 600, 1995],
      [660, 1810, 795, 2010],
      [1150, 1335, 1295, 1495],
      [500, 1160, 560, 1225],
      [985, 1330, 1045, 1395],
      [85, 1930, 340, 1995],
      [400, 1945, 470, 2015],
      [615, 1945, 690, 2015],
    ],
  },
  boj: {
    file: 'boj.jpg',
    crop: [178, 20, 1369, 2190],
    minPart: 0.004,
    erase: [
      [40, 255, 340, 600],
      [65, 135, 480, 210],
      [1075, 195, 1350, 495],
      [1125, 575, 1340, 745],
      [40, 875, 245, 1210],
      [65, 1420, 185, 1675],
      [65, 1835, 195, 2090],
      [1135, 1505, 1340, 1795],
      [800, 1740, 1200, 2140],
      [275, 2050, 330, 2115],
    ],
  },
  abeto: {
    file: 'abeto.jpg',
    crop: [540, 1230, 1040, 1960],
    minPart: 0.01,
    erase: [
      [950, 1320, 1005, 1380],
      [520, 1530, 575, 1585],
    ],
  },
  roble: {
    file: 'roble.jpg',
    crop: [20, 60, 1462, 2180],
    minPart: 0.004,
    erase: [
      [100, 672, 222, 758],
      [315, 742, 470, 925],
      [112, 910, 400, 1412],
      [410, 1005, 520, 1175],
      [88, 1470, 222, 1698],
      [780, 88, 1078, 470],
      [1183, 207, 1365, 495],
      [1207, 553, 1376, 720],
      [220, 545, 270, 600],
      [1112, 1850, 1162, 1900],
      [970, 1945, 1220, 1995],
      [898, 2040, 1365, 2235],
      [40, 60, 230, 150],
      [1000, 60, 1420, 150],
    ],
  },
};

/** Mapa de degradado: tintas del hayedo en otoño (oscuro → claro). */
const STOPS = [
  [0.0, [38, 18, 9]],
  [0.3, [96, 40, 16]],
  [0.55, [156, 72, 30]],
  [0.78, [206, 124, 58]],
  [1.0, [238, 190, 122]],
];

function ramp(t) {
  for (let i = 1; i < STOPS.length; i++) {
    const [t1, c1] = STOPS[i];
    const [t0, c0] = STOPS[i - 1];
    if (t <= t1) {
      const k = (t - t0) / (t1 - t0);
      return c0.map((v, j) => v + (c1[j] - v) * k);
    }
  }
  return STOPS[STOPS.length - 1][1];
}

const smooth = (e0, e1, x) => {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
};

/** Color del papel: mediana de los píxeles más claros de la lámina. */
function paperColor(data) {
  const samples = [[], [], []];
  for (let i = 0; i < data.length; i += 3 * 7) {
    const l = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    if (l > 200) for (let c = 0; c < 3; c++) samples[c].push(data[i + c]);
  }
  return samples.map((s) => s.sort((a, b) => a - b)[Math.floor(s.length / 2)]);
}

/**
 * Elimina los trazos aislados pequeños (letras, números, restos de despieces):
 * etiqueta las zonas de tinta conectadas y borra las que ocupan menos de
 * `minPart` de la tinta total.
 */
function removeSmallParts(rgba, w, h, minPart) {
  const n = w * h;
  const labels = new Int32Array(n).fill(-1);
  const sizes = [];
  const stack = new Int32Array(n);
  let total = 0;
  for (let p = 0; p < n; p++) {
    if (labels[p] !== -1 || rgba[p * 4 + 3] < 40) continue;
    const id = sizes.length;
    let size = 0;
    let top = 0;
    stack[top++] = p;
    labels[p] = id;
    while (top) {
      const q = stack[--top];
      size++;
      const x = q % w;
      const y = (q - x) / w;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
          const r = ny * w + nx;
          if (labels[r] === -1 && rgba[r * 4 + 3] >= 40) {
            labels[r] = id;
            stack[top++] = r;
          }
        }
      }
    }
    sizes.push(size);
    total += size;
  }
  const min = total * minPart;
  for (let p = 0; p < n; p++) {
    const id = labels[p];
    if (id === -1) {
      // Velo muy tenue fuera de la tinta: se elimina.
      if (rgba[p * 4 + 3] < 40) rgba[p * 4 + 3] = 0;
    } else if (sizes[id] < min) rgba[p * 4 + 3] = 0;
  }
}

await fs.mkdir(OUT, { recursive: true });

for (const [name, { file, crop, erase, minPart }] of Object.entries(PLATES)) {
  const plate = path.join(SRC, file);
  const { data: full, info: fi } = await sharp(plate).raw().toBuffer({ resolveWithObject: true });
  const paper = paperColor(full);
  const [cl, ct, cr, cb] = crop;
  const w = cr - cl;
  const h = cb - ct;
  const out = Buffer.alloc(w * h * 4);
  const feather = 60; // difuminado de los bordes del recorte
  const eraseFeather = 18; // difuminado de las zonas borradas

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const gx = x + cl;
      const gy = y + ct;
      const i = (gy * fi.width + gx) * 3;
      const r = full[i];
      const g = full[i + 1];
      const b = full[i + 2];
      const d = Math.hypot(r - paper[0], g - paper[1], b - paper[2]);
      let a = smooth(42, 115, d);
      for (const [el, et, er, eb] of erase) {
        const dx = Math.max(el - gx, 0, gx - er);
        const dy = Math.max(et - gy, 0, gy - eb);
        a *= smooth(0, eraseFeather, Math.hypot(dx, dy));
      }
      const edge = Math.min(x, y, w - 1 - x, h - 1 - y);
      a *= smooth(0, feather, edge);
      // Luminancia relativa al papel → tinta otoñal.
      const l = (0.299 * r + 0.587 * g + 0.114 * b) / (0.299 * paper[0] + 0.587 * paper[1] + 0.114 * paper[2]);
      const [nr, ng, nb] = ramp(Math.min(1, Math.max(0, l)) ** 1.1);
      const o = (y * w + x) * 4;
      out[o] = nr;
      out[o + 1] = ng;
      out[o + 2] = nb;
      out[o + 3] = Math.round(a * 255);
    }
  }

  removeSmallParts(out, w, h, minPart);

  const target = path.join(OUT, `${name}.png`);
  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .trim({ threshold: 1 })
    .resize({ width: 1100, height: 1500, fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: false })
    .toFile(target);
  console.log('✓', target);
}
