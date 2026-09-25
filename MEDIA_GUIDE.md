# Guía de fotografía y vídeo

La web está preparada para vídeo, pero **todavía no hay vídeos**: no se ha descargado ningún vídeo de terceros.
Mientras falten, cada bloque de vídeo muestra su imagen *poster* (sin errores ni huecos).
En cuanto copies los archivos en `public/videos/` y vuelvas a publicar, el vídeo aparece solo.

---

## 1. Vídeos que hay que añadir

| Archivo | Dónde aparece | Contenido recomendado |
|---|---|---|
| `public/videos/hero-santa-cristina.webm` | Portada (hero), escritorio | Plano general del hotel en el valle, montaña, luz de mañana o atardecer. Movimiento lento (dron o travelling suave). |
| `public/videos/hero-santa-cristina.mp4` | Portada, escritorio (Safari y navegadores sin WebM) | El mismo montaje que el WebM. |
| `public/videos/hero-santa-cristina-mobile.mp4` | Portada, móvil | **Versión vertical 9:16** del mismo montaje, con el hotel centrado. Si no existe, el móvil muestra la foto (ahorra datos). |
| `public/videos/el-boj.webm` / `el-boj.mp4` | Home, bloque El Boj | Sala y terraza de El Boj, emplatado, vino sirviéndose, vistas desde la terraza. |
| `public/videos/el-boj-mobile.mp4` | Home, bloque El Boj (móvil) | Versión 4:5 o 9:16. Opcional. |

Las rutas se configuran en `src/config/site.ts` → `videos`.

### Especificaciones técnicas

| Parámetro | Escritorio | Móvil |
|---|---|---|
| Resolución | 1920 × 1080 (16:9) | 1080 × 1920 (9:16) o 1080 × 1350 (4:5) |
| Duración | 12–20 s, en bucle sin corte visible | 8–15 s |
| Fotogramas | 24 o 25 fps | 24 o 25 fps |
| Audio | **Sin pista de audio** (se reproduce silenciado) | Sin audio |
| Peso máximo | MP4 ≤ 6 MB · WebM ≤ 5 MB | MP4 ≤ 2,5 MB |
| Códec | MP4: H.264 (High, `yuv420p`, `+faststart`) · WebM: VP9 | H.264 |

Comandos de referencia con `ffmpeg`:

```bash
# MP4 escritorio (H.264, sin audio, arranque rápido)
ffmpeg -i original.mov -an -vf "scale=1920:-2,fps=25" -c:v libx264 -preset slow -crf 26 -pix_fmt yuv420p -movflags +faststart public/videos/hero-santa-cristina.mp4

# WebM escritorio (VP9)
ffmpeg -i original.mov -an -vf "scale=1920:-2,fps=25" -c:v libvpx-vp9 -b:v 0 -crf 36 -row-mt 1 public/videos/hero-santa-cristina.webm

# MP4 móvil vertical (recorte 9:16 centrado)
ffmpeg -i original.mov -an -vf "crop=ih*9/16:ih,scale=1080:-2,fps=25" -c:v libx264 -preset slow -crf 28 -pix_fmt yuv420p -movflags +faststart public/videos/hero-santa-cristina-mobile.mp4
```

Sube el `-crf` (p. ej. 28 → 30) si el archivo supera el peso máximo.

### Cómo se comporta el vídeo

- `autoplay`, `muted`, `loop`, `playsinline` y `preload="none"`: no se descarga nada hasta que el bloque es visible.
- **No se carga** si el usuario tiene activado *reducir movimiento* o *ahorro de datos*: se queda la foto.
- En móvil solo se reproduce la versión `-mobile.mp4`. Si no existe, se muestra la foto.
- Hay un botón de pausa accesible (WCAG 2.2.2) y el vídeo se pausa solo al salir de pantalla.
- El vídeo es decorativo: no debe contener textos ni información imprescindible.

---

## 2. Fotografía

Las fotos actuales proceden de la web oficial y del CDN del hotel. Muchas son antiguas, con objetivo ojo de pez y de
1024 px o menos. Funcionan, pero **una sesión nueva mejoraría mucho la web**, sobre todo en habitaciones y El Boj.

### Lista de fotografías recomendadas (por prioridad)

1. **Habitaciones** (máxima prioridad para reservas): cada tipo de habitación, horizontal, luz natural, sin gran angular extremo.
   Mínimo 3 por habitación: vista general, detalle de cama/textil, baño. Y la **vista real desde la ventana** de la Superior con Vistas Premium.
2. **El Boj**: 6–10 platos de temporada, la sala preparada, la terraza con gente, detalle de vinos, el bosque de boj.
3. **Exterior del hotel** en las cuatro estaciones (sobre todo verano verde e invierno con nieve), con el valle.
4. **Terraza panorámica** al atardecer.
5. **Bodas**: ceremonia en la terraza, banquete, detalles (solo fotos con autorización de los novios y del fotógrafo).
6. **Zonas comunes**: salón con chimenea, bar, recepción.
7. **Petit Spa** cuando reabra.

### Especificaciones

| Uso | Tamaño mínimo | Proporción |
|---|---|---|
| Portadas a sangre (hero) | 2400 px de ancho | 3:2 o 16:9, con una versión vertical 3:4 para móvil |
| Bloques editoriales | 1800 px | 4:5, 3:2 |
| Habitaciones | 1800 px | 4:3 |
| Galería | 1600 px | libre |

- Formato de entrega: **JPG de alta calidad** (o TIFF). No hace falta convertir a WebP/AVIF: la web lo hace sola.
- Nombres descriptivos en minúsculas y con guiones: `terraza-atardecer.jpg`, `doble-cama-matrimonio.jpg`.
- Con permiso de uso comercial por escrito del fotógrafo.

---

## 3. Cómo sustituir o añadir fotos

1. Copia la foto en la carpeta correspondiente de `src/assets/img/` (`hotel/`, `rooms/`, `el-boj/`, `spa/`, `bodas/`, `pirineo/`).
2. Si sustituye a una existente con **el mismo nombre**, no hay que tocar nada más.
3. Si es nueva, impórtala donde se use:
   - Habitaciones: `src/content/rooms.ts` (campo `images` de cada habitación; la primera es la portada).
   - Galería: `src/content/gallery.ts` (una línea por foto, con texto alternativo en ES/EN/FR).
   - Portadas de página: el `import heroImg …` al principio de cada archivo de `src/views/`.
4. `npm run build`. Astro genera automáticamente AVIF, WebP y JPG en varios tamaños.
5. Imágenes para redes sociales (Open Graph) y favicon: `npm run assets`.

**Texto alternativo**: describe lo que se ve en la foto, en los tres idiomas. No escribas "foto de…" ni repitas palabras clave.

## 4. Láminas botánicas de fondo

Las ramas de haya, boj, abeto y roble son grabados de **dominio público** de «Flora von Deutschland, Österreich und der
Schweiz» (Otto Wilhelm Thomé, 1885; grabados de Walther Müller), obtenidos de Wikimedia Commons:
`Illustration_Fagus_sylvatica0.jpg`, `Illustration_Buxus_sempervirens0.jpg`, `Illustration_Abies_alba0.jpg` e
`Illustration_Quercus_robur0.jpg`.

`scripts/botanical.mjs` recorta cada planta, borra rótulos y despieces, elimina el papel (transparencia real) y aplica un
mapa de degradado en tintas otoñales. El resultado está en `src/assets/botanica/`. Para añadir otra especie: descarga la
lámina de Commons, añade su recorte al script y ejecútalo con la carpeta de las láminas como argumento.

## 5. Logotipo

El logotipo oficial solo existe en JPG con fondo blanco. Mientras tanto la web usa un logotipo tipográfico
(`src/components/Wordmark.astro`). **Pide al hotel el logo en SVG** (o PDF/AI vectorial) para sustituirlo.
