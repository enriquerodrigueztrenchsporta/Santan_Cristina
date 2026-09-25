# Despliegue

La web es **100 % estática**: `npm run build` genera la carpeta `dist/`, que puede publicarse en cualquier hosting estático.
Recomendado: **Netlify** o **Cloudflare Pages** (CDN global, HTTPS, compresión y redirecciones 301 incluidas y gratis
para este volumen de tráfico). También sirve **Vercel** o un servidor propio con Apache/Nginx.

> Antes de cambiar el dominio, lee la sección **"Paso a producción"**: la web actual está alojada en SiteMinder Canvas
> y el cambio de DNS hay que coordinarlo con el hotel.

---

## 1. Preparación (una vez)

1. Sube el repositorio a GitHub: `https://github.com/enriquerodrigueztrenchsporta/Santan_Cristina`.
2. Comprueba en local que todo pasa:
   ```bash
   npm ci
   npx playwright install chromium
   npm run check
   ```
3. Si vas a usar analítica o formularios con servicio externo, ten a mano los valores de `.env.example`
   (`PUBLIC_GTM_ID`, `PUBLIC_GA4_ID`, `PUBLIC_FORM_ENDPOINT`). Pueden dejarse vacíos.

---

## 2·0. GitHub Pages (previsualización)

El repositorio incluye `.github/workflows/deploy-pages.yml`, que publica una copia de la web en
**https://enriquerodrigueztrenchsporta.github.io/Santan_Cristina/** cada vez que se sube un cambio a `main`.

- La web se compila con `BASE_PATH=/Santan_Cristina/` (todas las rutas llevan esa subcarpeta) y con
  `PUBLIC_PREVIEW=true`, que añade `noindex` para que Google no confunda la copia con la web oficial.
- Activación (una sola vez): en GitHub, **Settings → Pages → Build and deployment → Source: GitHub Actions**.
- GitHub Pages no admite redirecciones 301: para la web oficial en `santacristina.es` usa una de las opciones siguientes.
- Para probarlo en local igual que en Pages:
  ```bash
  BASE_PATH=/Santan_Cristina/ npm run build     # en Git Bash de Windows: MSYS_NO_PATHCONV=1 BASE_PATH=…
  node scripts/serve.mjs 4321 /Santan_Cristina  # abre http://127.0.0.1:4321/Santan_Cristina/
  ```

## 2A. Netlify (recomendado para la web oficial)

1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → GitHub → elige el repositorio.
2. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: en *Site configuration → Environment variables* añade `NODE_VERSION = 22`.
3. (Opcional) Añade `PUBLIC_GTM_ID`, `PUBLIC_FORM_ENDPOINT`, etc. en *Environment variables*.
4. **Deploy**. Netlify da una URL provisional `https://<nombre>.netlify.app` para revisar la web.
5. Las redirecciones 301 (`public/_redirects`) y las cabeceras de caché (`public/_headers`) se aplican solas.

Cada `git push` a `main` vuelve a publicar la web automáticamente.

## 2B. Cloudflare Pages

1. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git** → repositorio.
2. **Framework preset**: Astro · **Build command**: `npm run build` · **Output directory**: `dist`.
3. Variable de entorno `NODE_VERSION = 22` (y las opcionales de `.env.example`).
4. **Save and Deploy**. `_redirects` y `_headers` también funcionan en Cloudflare Pages.

## 2C. Vercel

1. [vercel.com/new](https://vercel.com/new) → importa el repositorio. Vercel detecta Astro.
2. Output directory: `dist`. Node 22.
3. Las redirecciones y cabeceras se leen de `vercel.json` (generado por `npm run build`).

## 2D. Servidor propio (Apache / Nginx / FTP)

1. En local: `npm ci && npm run build`.
2. Sube **el contenido** de `dist/` a la raíz pública del dominio (por FTP/SFTP o `rsync`).
3. Convierte `redirects.json` a reglas del servidor. Ejemplo:
   - **Apache** (`.htaccess`): `Redirect 301 /es/bodas.html /bodas-y-eventos/`
   - **Nginx**: `location = /es/bodas.html { return 301 /bodas-y-eventos/; }`
4. Activa HTTPS, compresión gzip/brotli y caché larga para `/_astro/` (los nombres llevan hash).
5. Configura `404.html` como página de error.

---

## 3. Paso a producción (dominio santacristina.es)

1. **Revisa la URL provisional** con el hotel: textos, teléfonos, reservas de prueba (sin completar el pago) y los tres idiomas.
2. **Antes de tocar el DNS**, pide al hotel/SiteMinder que confirme que el motor
   `direct-book.com/properties/hotelsantacristinapetitspadirect` sigue activo **independientemente** de la web Canvas
   (el motor de reservas es un producto distinto del constructor de webs; no debe darse de baja).
3. En el hosting elegido añade el dominio `www.santacristina.es` y también `santacristina.es` (redirigido a `www`).
4. En el proveedor del dominio cambia los registros DNS a los que indique el hosting
   (Netlify/Cloudflare/Vercel muestran exactamente qué registros `A`/`CNAME` poner). **No borres los registros `MX`**
   (correo de `info@` y `comercial@`).
5. Espera a que el hosting emita el certificado HTTPS (minutos u horas).
6. Comprueba:
   - `https://www.santacristina.es/` carga la nueva web.
   - Las URLs antiguas redirigen: `https://www.santacristina.es/es/bodas.html` → `/bodas-y-eventos/`.
   - `https://www.santacristina.es/sitemap-index.xml` responde.
7. **Google Search Console**: verifica la propiedad, envía `sitemap-index.xml` y usa *Inspección de URLs* en las
   páginas principales. Revisa *Páginas* durante las semanas siguientes por si aparece algún 404.
8. **Google Business Profile** (ficha del hotel y de El Boj): comprueba que el sitio web apunte a
   `https://www.santacristina.es/` (hotel) y `https://www.santacristina.es/restaurante-el-boj/` (restaurante).
9. Da de baja la web de SiteMinder Canvas **solo** cuando todo lo anterior esté verificado.

---

## 4. Si cambias de dominio

Cambia `SITE` en `astro.config.mjs` y `SITE_URL` en `src/config/site.ts` (se usan en canonical, hreflang, sitemap y Schema.org),
y la línea `Sitemap:` de `public/robots.txt`.

## 5. Mantenimiento

- Actualizar contenidos: ver `README.md` → *Cómo actualizar el contenido*. Cada `push` republica la web.
- Revisar cada pocos meses la valoración de Google (`src/config/site.ts` → `googleRatings`).
- Dependencias: `npm outdated` y `npm update`; ejecuta `npm run check` antes de publicar.
