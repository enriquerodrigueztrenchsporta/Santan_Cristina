# Hotel Santa Cristina Petit Spa · Web oficial

Rediseño completo de [santacristina.es](https://www.santacristina.es/): el hotel de montaña de Canfranc, en los Pirineos de Aragón,
y su restaurante **El Boj**. Web estática, rápida y multidioma (ES · EN · FR), con el mismo motor de reservas que la web anterior.

| Documento | Contenido |
|---|---|
| [`CONTENT_AUDIT.md`](CONTENT_AUDIT.md) | Auditoría de la web anterior: todas las URLs, textos, datos, contradicciones detectadas |
| [`MEDIA_GUIDE.md`](MEDIA_GUIDE.md) | Vídeos y fotos: qué falta, formatos, pesos, cómo sustituirlos |
| [`DEPLOYMENT.md`](DEPLOYMENT.md) | Despliegue paso a paso, dominio, redirecciones |

---

## Stack y por qué

- **[Astro 7](https://astro.build/)** + **TypeScript estricto**: genera HTML estático. Casi cero JavaScript (≈13 KB para toda la web),
  máximo rendimiento y SEO, y se puede alojar en cualquier hosting estático.
- **CSS propio con tokens** (sin Tailwind): el diseño editorial necesita control fino; los tokens están en `src/styles/tokens.css`.
- **Imágenes**: `astro:assets` + sharp generan AVIF, WebP y JPG en varios tamaños (`src/components/Photo.astro`).
- **Fuentes autoalojadas**: Fraunces con tamaño óptico (titulares) + Hanken Grotesk (texto), servidas por la API de fuentes de Astro
  con precarga y *fallbacks* métricos (sin saltos de maquetación).
- **Tests**: Vitest (lógica de reservas) + Playwright (86 pruebas E2E: páginas, enlaces, idiomas, reservas, formularios,
  responsive de 320 a 1920 px, accesibilidad con axe, datos estructurados y redirecciones).

Resultados medidos en local (Lighthouse 12): escritorio 99 · 100 · 100 · 100; móvil home 91 · 100 · 100 · 100 (CLS 0, TBT 0 ms).

---

## Puesta en marcha

Requisitos: Node.js 22 o superior.

```bash
npm install
npm run dev          # desarrollo en http://localhost:4321
npm run build        # genera dist/ (también las redirecciones)
npm run serve        # sirve dist/ en http://127.0.0.1:4321
```

### Calidad

```bash
npm run typecheck    # astro check (TypeScript)
npm run lint         # ESLint
npm test             # tests unitarios (Vitest)
npx playwright install chromium   # solo la primera vez
npm run test:e2e     # tests end-to-end sobre dist/ (hacer build antes)
npm run check        # todo lo anterior en cadena
npm run screenshots  # capturas de página completa en screenshots/ (con npm run serve activo en :4321)
```

---

## Estructura

```
src/
  config/site.ts        ← DATOS CENTRALES: NAP, motor de reservas, valoraciones Google, vídeos, analítica
  content/              ← Textos oficiales en ES/EN/FR (uno por sección)
    hotel.ts  rooms.ts  restaurant.ts  spa.ts  weddings.ts  places.ts  gallery.ts  seo.ts
  i18n/
    config.ts           ← idiomas y URLs traducidas de cada página
    ui.ts               ← textos de interfaz (botones, menús, formularios)
  components/           ← Header, Footer, BookingDialog, Photo, BackgroundVideo, MapBlock, GoogleRating…
  views/                ← una vista por tipo de página (HomeView, ElBojView, RoomView…)
  pages/[...path].astro ← genera todas las páginas en los 3 idiomas
  pages/topo.svg.ts     ← curvas de nivel (motivo gráfico) generadas en el build
  scripts/              ← JS del navegador: reservas, menú, reveal, galería, formularios, analítica
  lib/                  ← booking.ts (URL del motor), schema.ts (Schema.org), page.ts, topo.ts
  styles/               ← tokens.css (sistema visual) + global.css
  assets/img/           ← fotografías originales (se optimizan en el build)
public/
  videos/               ← vídeos (ver MEDIA_GUIDE.md)
  og/  icons/           ← imágenes para redes sociales e iconos (npm run assets)
  _redirects  _headers  robots.txt
redirects.json          ← 301 de las URLs antiguas
tests/unit  tests/e2e
```

---

## Identidad visual

- **Paleta del hayedo en otoño** (`src/styles/tokens.css`): castaño de corteza para textos y fondos oscuros, cobre de
  hoja de haya para acentos, ámbar solo para el botón de reserva, oro sobre fondos oscuros y fondos crema y arena. Nunca blanco puro.
- **Láminas botánicas realistas** de haya, boj, abeto y roble: grabados de dominio público de O. W. Thomé,
  *Flora von Deutschland* (1885), recortados sin rótulos, sin papel y entintados en tonos de hayedo otoñal.
  Se colocan con `<Botanical plant="haya" style="right:-6%;top:30%" width="30vw" rotate={20} />`, normalmente
  asomando por detrás de las fotos en arco y siempre como marca de agua (nunca sobre el texto).
  Para regenerarlas: `node scripts/botanical.mjs <carpeta-con-las-láminas>` (ver MEDIA_GUIDE.md).
- **Arcos de medio punto** en algunas fotos (`<Photo arch />`), guiño a las portadas románicas del Camino de Santiago.
- **Perfil de cumbres** como transición hacia las secciones oscuras y el pie (`<Ridge above="…" />`).
- **Etiquetas** de sección en cursiva con un filete fino, sin numeración; botones redondeados y sin mayúsculas.
- **Arcos con doble filete** (*passe-partout*) y una textura de papel muy sutil en los fondos claros.

### Normas de redacción

- Escribir siempre **«los Pirineos»**, nunca «el Pirineo».
- **No repetir información** entre páginas: la portada presenta y cada página interior desarrolla. Si un dato tiene que
  aparecer en dos sitios (dirección, teléfono), se presenta con otras palabras o en otro formato.
- No añadir numeración junto a los títulos.

## Cómo actualizar el contenido

Todo el texto está en `src/content/` y `src/i18n/ui.ts`, siempre con las tres versiones `es`, `en`, `fr`.
Edita el texto, guarda y haz `npm run build`. No hace falta tocar componentes.

| Quiero cambiar… | Archivo |
|---|---|
| Teléfonos, email, dirección, redes, coordenadas | `src/config/site.ts` → `hotel` |
| Textos del hotel, historia, servicios | `src/content/hotel.ts` |
| Habitaciones (superficie, ocupación, comodidades, fotos) | `src/content/rooms.ts` |
| Restaurante El Boj (horarios, carta, textos) | `src/content/restaurant.ts` |
| Petit Spa (estado abierto/cerrado, tarifas) | `src/content/spa.ts` → `status.closed` |
| Bodas y eventos | `src/content/weddings.ts` |
| Lugares de los Pirineos | `src/content/places.ts` |
| Títulos y descripciones para Google | `src/content/seo.ts` |
| Botones y menús | `src/i18n/ui.ts` |

**Regla de contenido**: la web solo publica información verificada en la web oficial anterior (ver `CONTENT_AUDIT.md`).
Si cambias un dato (precio, horario, superficie), cámbialo en los tres idiomas.

### Petit Spa cerrado / abierto

`src/content/spa.ts` → `status.closed: true` muestra el aviso "Actualmente cerrado por motivo de la sequía" en la home y en la
página del spa. Al reabrir, pon `false` y el aviso desaparece de toda la web.

### Valoraciones de Google

En `src/config/site.ts` → `googleRatings`:

```ts
restaurant: { show: true, rating: 4.3, reviews: 352, checkedAt: '2026-09-25', url: … }
```

1. Abre la ficha en Google Maps (enlaces en el mismo archivo).
2. Copia la nota y el número de reseñas; actualiza `checkedAt` con la fecha de consulta (se muestra en la web).
3. `show: false` oculta el bloque.

No se publican opiniones, nombres ni citas de reseñas. Tampoco se marcan como `aggregateRating` en Schema.org
(Google no permite marcar como propias las valoraciones de terceros).

### Imágenes y vídeos

Ver [`MEDIA_GUIDE.md`](MEDIA_GUIDE.md).

---

## Motor de reservas

Se conserva **SiteMinder Direct Booking**, el mismo de la web anterior:

```
https://direct-book.com/properties/hotelsantacristinapetitspadirect
```

Configuración única en `src/config/site.ts` → `booking`. La URL se construye en `src/lib/booking.ts` con los mismos
parámetros que usaba el widget anterior: `locale` (es/en/fr), `referrer=canvas`, `check_in_date`, `check_out_date`
(formato `AAAA-MM-DD`) y `number_adults`.

- Todos los botones **Reservar** (cabecera, hero, habitaciones, fichas, pie, barra móvil) abren un diálogo de fechas y
  huéspedes y después el motor en una pestaña nueva.
- Sin JavaScript, o con Ctrl/Cmd+clic, son enlaces directos al motor.
- La web anterior no usaba códigos de tipo de habitación (`room_type` vacío), así que las fichas abren el motor general.
  Si SiteMinder facilita los identificadores, se pueden añadir en `rooms.ts`.

**El Boj** no tiene motor de reservas: "Reservar mesa" ofrece teléfono, WhatsApp (con mensaje preparado) y email,
tal como indica la web oficial.

---

## Idiomas y URLs

| | Español (principal) | Inglés | Francés |
|---|---|---|---|
| Inicio | `/` | `/en/` | `/fr/` |
| Hotel | `/hotel/` | `/en/hotel/` | `/fr/hotel/` |
| Habitaciones | `/habitaciones/` | `/en/rooms/` | `/fr/chambres/` |
| El Boj | `/restaurante-el-boj/` | `/en/el-boj-restaurant/` | `/fr/restaurant-el-boj/` |
| Bodas | `/bodas-y-eventos/` | `/en/weddings-and-events/` | `/fr/mariages-et-evenements/` |

Todas las rutas están en `src/i18n/config.ts`. Cada página incluye `canonical`, `hreflang` (es, en, fr, x-default),
metadatos Open Graph por idioma y un selector de idioma que lleva a la **página equivalente**.

La web anterior tenía el inglés en la raíz. Todas sus URLs (54) redirigen con **301** a su equivalente nueva
(`redirects.json`). Nota: la antigua portada inglesa `/` pasa a ser la portada española; los usuarios de habla
inglesa llegan a `/en/` desde Google gracias a `hreflang`.

---

## SEO y datos estructurados

- Schema.org (`src/lib/schema.ts`): `Hotel` (con `starRating` 3, geo, servicios), `Restaurant` enlazado con
  `containedInPlace`, `HotelRoom` por habitación, `BreadcrumbList`, `WebSite`, `ItemList` de lugares.
- NAP idéntico en cabecera, pie, contacto y datos estructurados (una sola fuente: `site.ts`).
- `sitemap-index.xml` con alternativas por idioma y `robots.txt`.
- Sin precios, estrellas ni servicios inventados.

---

## Analítica (preparada, sin instalar)

Crea un archivo `.env` a partir de `.env.example`:

```
PUBLIC_GTM_ID=GTM-XXXXXXX     # recomendado
PUBLIC_GA4_ID=G-XXXXXXXXXX    # solo si no se usa GTM
```

Sin identificadores no se carga ningún script de Google. Con ellos, se activa **Consent Mode v2** con todo denegado por
defecto: **antes de publicar con analítica hay que instalar un banner de consentimiento (CMP)** compatible
(p. ej. Cookiebot, CookieYes, Complianz) y una política de cookies.

Eventos enviados a `dataLayer` (y a GA4 si se usa directamente):

| Evento | Cuándo | Parámetros |
|---|---|---|
| `booking_click` | Clic en cualquier botón Reservar | `location` (header, hero, room_card_…, mobile_bar…) |
| `booking_submit` | Envío del diálogo de fechas al motor | `check_in`, `check_out` |
| `restaurant_booking_click` | "Reservar mesa", teléfono/WhatsApp/email de El Boj | `location` |
| `whatsapp_click` | Cualquier enlace a WhatsApp | `location` |
| `phone_click` | Cualquier enlace `tel:` | `phone`, `location` |
| `email_click` | Cualquier enlace `mailto:` | `email`, `location` |
| `wedding_enquiry_click` | Botones "Solicitar información" de bodas | `location` |
| `wedding_enquiry` | Envío del formulario de bodas | `form` |
| `contact_enquiry` | Envío del formulario de contacto | `form` |
| `room_view` | Visita a una ficha de habitación | `room_id`, `room_name` |
| `map_load` | El usuario carga el mapa interactivo | — |
| `directions_click` | "Cómo llegar" (Google Maps) | `location` |

Todos incluyen `page_lang` y `page_type`. En GA4 conviene marcar `booking_submit`, `restaurant_booking_click`,
`wedding_enquiry` y `phone_click` como conversiones clave.

---

## Formularios

Los formularios de contacto y de bodas funcionan **sin servidor**: si `PUBLIC_FORM_ENDPOINT` está vacío, al enviar se abre
el programa de correo del usuario con la consulta ya redactada para `info@` o `comercial@santacristina.es`.
Para recibirlos directamente, crea un formulario en un servicio compatible (Formspree, Getform, Basin…) y pon su URL
en `PUBLIC_FORM_ENDPOINT`. Incluyen un campo trampa anti-spam.

---

## Pendiente por parte del hotel

1. **Vídeos** y, idealmente, una sesión de fotos nueva (`MEDIA_GUIDE.md`).
2. **Logo vectorial** (SVG).
3. **Aviso legal, política de privacidad y de cookies**: la web anterior no los tenía y son obligatorios en España
   (LSSI y RGPD), sobre todo si se activan formularios con endpoint o analítica. Deben redactarlos el hotel o su asesor
   con los datos de la empresa titular; la web está lista para enlazarlos desde el pie.
4. Confirmar las contradicciones de `CONTENT_AUDIT.md` §11 (superficie del Refugio, baño de vapor, siglo del monasterio,
   año de la reforma, horario del Pikoteo).
5. El PDF de menús de boda en español devuelve 403 en la web anterior: facilitar una versión actualizada.
6. Traducción oficial al francés de dos lugares (Ibón de Estanés y Parc'Ours) que la web anterior mostraba en inglés.
