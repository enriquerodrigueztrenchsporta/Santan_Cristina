# Auditoría de contenido — santacristina.es

> Las citas de las secciones 4 a 9 reproducen literalmente la web anterior (por eso aparece "Pirineo" en singular).
> En la web nueva se escribe siempre "los Pirineos".

Auditoría realizada el **25/09/2026** sobre la web publicada en `https://www.santacristina.es/`
(descarga del HTML de todas las URLs del `sitemap.xml`, en los tres idiomas).
Este documento es la **fuente de verdad** del rediseño: todo texto, dato o cifra de la nueva web
procede de aquí. Lo que no aparece aquí no se ha publicado.

---

## 1. Plataforma actual

| Elemento | Valor |
|---|---|
| CMS | SiteMinder **Canvas** (webbox) — "Powered by Canvas" |
| Motor de reservas | SiteMinder **Direct Booking** |
| URL de reservas | `https://direct-book.com/properties/hotelsantacristinapetitspadirect` |
| Parámetros del widget | `GET` con `locale` (`es`/`en`/`fr`), `referrer=canvas`, `check_in_date`, `check_out_date` (formato `YYYY-MM-DD`), `number_adults` (1-10), `room_type` (vacío en todas las fichas), `from_widget=true` |
| CDN de imágenes | `webbox.imgix.net/images/gkumclnsibjtkwny/…` |
| Idioma raíz | **Inglés** en `/`; español en `/es/`; francés en `/fr/` |
| Estrellas publicadas | "Número de estrellas: 3.0" (home) |
| Formularios | Formulario de contacto de SiteMinder (Nombre, Teléfono, Email, Mensaje) |
| Analítica | No se detecta GA4 ni GTM propio |
| Páginas legales | **No existen** (ni aviso legal, ni privacidad, ni cookies) |

---

## 2. Mapa de URLs (sitemap.xml)

| Sección | ES | EN | FR |
|---|---|---|---|
| Inicio | `/es/index.html` | `/` | `/fr/index.html` |
| Sobre nosotros | `/es/hotel.html` | `/about-us.html` | `/fr/about-us.html` |
| Habitaciones | `/es/rooms.html` | `/rooms.html` | `/fr/rooms.html` |
| · Doble | `/es/rooms/doble.html` | `/rooms/double.html` | `/fr/rooms/double.html` |
| · Superior con Vistas Premium | `/es/rooms/superior-con-vistas-premium.html` | `/rooms/superior-with-premium-views.html` | `/fr/rooms/superieure-vues-premium.html` |
| · Doble con cama supletoria | `/es/rooms/doble-con-cama-supletoria.html` | `/rooms/double-with-extra-bed.html` | `/fr/rooms/double-avec-lit-d-appoint.html` |
| · Refugio Montaña para 4 | `/es/rooms/refugio-montana-para-4.html` | `/rooms/mountain-retreat-for-4.html` | `/fr/rooms/chambre-quadruple-avec-douche.html` |
| · Familiar | `/es/rooms/familiar.html` | `/rooms/family.html` | `/fr/rooms/familial.html` |
| El Boj restaurante | `/es/el-boj-restaurante-terraza-canfranc-candanchu.html` | `/el-boj-restaurant-terrace-Pyrenees-Canfranc-Candanchu.html` | `/fr/el-boj-restaurant-terrasse-canfranc-candanchu.html` |
| Petit Spa | `/es/petit-spa.html` | `/petit-spa.html` | `/fr/petit-spa.html` |
| Bodas y eventos | `/es/bodas.html` | `/wedding.html` | `/fr/mariages.html` |
| Fotos / Galería | `/es/fotos.html` | `/gallery.html` | `/fr/gallery.html` |
| Lugares | `/es/pirineo.html` | `/attractions.html` | `/fr/attractions.html` |
| Hotel Tobazo (ofertas) | `/es/hotel-tobazo.html` + `/es/hotel-tobazo/hotel-tobazo.html` | `/deals.html` + `/deals/hotel-tobazo.html` | `/fr/offres.html` + `/fr/offres/hotel-tobazo.html` |
| Contacto | `/es/contacto.html` | `/contact-us.html` | `/fr/contact-us.html` |
| 404 | `/es/404.html` | `/404.html` | `/fr/404.html` |

**Todas estas URLs tienen redirección 301** a su equivalente nueva (ver `public/_redirects`).

### Navegación actual (ES)
Inicio · El Boj restaurante · Petit Spa · Habitaciones · Bodas · Fotos · Nosotros · Hotel Tobazo · Contacto · Lugares · [Reservar ahora]
Cabecera con modal "Contáctenos" (teléfono 1 y 2).

### Enlaces rotos detectados en la web actual
- `/es/hotel.html` enlaza a `https://www.santacristina.es/es/el-boj-restaurante.html` → **404**
- `/about-us.html` enlaza a `https://www.santacristina.es/el-boj-restaurant.html` → **404**
- PDF de menús de boda en español (`…/34f5cf38-4e77-4bd7-a25f-ce7e8fc0d3df.pdf`) → **403 (no accesible)**
- El PDF francés (`…/1a600967-0e3e-48a2-b1f1-0234964120c4.pdf`) sí responde 200.
- La página de boda en inglés no enlaza ningún PDF.

---

## 3. Datos NAP y contacto

| Dato | Valor publicado | Fuente |
|---|---|---|
| Nombre | **Hotel Santa Cristina Petit Spa** | todas las páginas |
| Dirección ES | Carretera a Candanchú-Astún (N330a km. 669), Canfranc-Estación, Huesca 22880, Spain | home ES, contacto ES |
| Dirección EN/FR | Road N330a km. 669 to France, Canfranc, Huesca 22880, Spain | contacto EN / FR |
| Coordenadas | **42.76847032, -0.51095009** | enlaces de mapa de la web oficial |
| Teléfono 1 | **+34 974 373 300** | todas |
| Teléfono 2 / WhatsApp | **+34 686 285 283** | contacto, El Boj, Petit Spa |
| Email general | **info@santacristina.es** | todas |
| Email comercial (reuniones, bodas) | **comercial@santacristina.es** | hotel, bodas |
| Facebook | https://www.facebook.com/SantaCristinaHotel/ | footer |
| Instagram | https://www.instagram.com/hotelsantacristina/ | footer |
| TripAdvisor | https://www.tripadvisor.es/Hotel_Review-g1079274-d285007-Reviews-Hotel_Santa_Cristina-Canfranc_Province_of_Huesca_Aragon.html | footer |

### Google Maps (verificado el 25/09/2026 con navegador)

| Ficha | Valoración | Reseñas | Otros datos |
|---|---|---|---|
| **Hotel Santa Cristina Petit Spa** | 4,5 | 1.346 | "Hotel de 3 estrellas". CID `13320388481419000376` |
| **El Boj restaurante** | 4,3 | 352 | Restaurante. "hacia Candanchú-Astún, Desvío entre N-330, km. 669, y 670, 22880 Canfranc-Estación, Huesca". "Se encuentra en: Hotel Santa Cristina Petit Spa". Tel. 974 37 33 00. Web santacristina.es. Apertura 12:00. CID `16862618669853813279` |

Google muestra además "20–30 € por persona (notificado por 25 personas)": es un dato de usuarios, **no se publica**.

---

## 4. Textos principales

### Home (ES)
- Titular carrusel: "Bienvenido al Pirineo: senderos, ibones, GR11, pozas y pueblos de montaña."
- Subtítulo: "Reserva ahora con cancelación gratuita y descuentos especiales"
- Intro: "Bienvenido a Hotel Santa Cristina, tu refugio en Pirineos para disfrutar y explorar la naturaleza, valles y pueblos de montaña que nos rodean, tanto del Pirineo aragonés como del francés"
- Sobre nosotros: "El HOTEL SANTA CRISTINA PETIT SPA se encuentra en el corazón del PIRINEO ARAGONÉS, a solo 4 km del dominio de esquí de 100 km CANDANCHU-ASTUN y a 3 km del túnel de SOMPORT que conecta Francia y España. Los alrededores son ideales para el senderismo, ciclismo, escalada y deportes de invierno. Tanto la ruta transpirenaica GR11 como el CAMINO DE SANTIAGO pasan junto al hotel y el PARQUE NACIONAL DE LOS PIRINEOS (Francia) está a solo 4,8 km. Punto de partida para explorar encantadores valles y pueblos del Pirineo aragonés y francés en moto o en coche."
- "El edificio del hotel fue en el siglo XIX cuartel-aduana del desaparecido cuerpo de Carabineros, que custodiaba las fronteras, a 5 kilómetros del Col de Somport, el paso natural hacia Francia por el Pirineo aragonés desde Jaca."
- Partners: Hotel Tobazo Candanchú · "Tu gran día" (bodas) · Marqués de Vitoria (bodega).

Existen traducciones oficiales EN y FR de todos estos textos (se usan tal cual).

### Sobre nosotros (ES `/es/hotel.html`)
- "Santa Cristina es un lugar privilegiado en el corazón del Pirineo para los que buscan placeres y experiencias únicos."
- "Un lugar pensado para que el viajero sienta la tranquilidad y serenidad que da la naturaleza."
- Ubicación: entre Canfranc y Candanchú, a la vera del río Aragón, en el Camino de Santiago, junto a Candanchú-Astún y Le Somport, a pocos km de Jaca.
- Habitaciones con vistas; todas con TV, aire acondicionado y caja fuerte. WiFi gratuito en zonas comunes y gimnasio gratuito.
- Servicios: guarda-bicicletas y herramientas, gimnasio con máquinas cardiovasculares (gratuito), estacionamiento público exterior gratuito frente al hotel, bar, "la mejor terraza panorámica del valle", salas de estar, billar y futbolín.
- Reuniones: "Si buscas un lugar para tus reuniones, presentaciones, jornadas de trabajo o convenciones…" · servicio de restauración personalizado · comercial@santacristina.es
- Historia: construido a finales del s. XIX como Aduana del Cuerpo de Carabineros, **1.300 m de altitud**, 5 km del Col de Somport. Nombre del monasterio de Santa Cristina de Somport (ruinas a 4 km, en Candanchú), uno de los tres hospitales-albergues de peregrinos más importantes de la cristiandad. Hotel desde **1991**; reforma integral (Petit Spa, El Boj, terraza-mirador, decoración de **Vicente García Plana**, arquitecto **Ignacio Arzubialde**).

### Hotel Tobazo
"Te recomendamos nuestro Hotel Tobazo a pie de pista en Candanchú y su gastrobar El Pikoteo para tardeo después de la jornada de esquí" → `https://www.hoteltobazo.es/es/index.html`.

---

## 5. Habitaciones

| Habitación (ES / EN / FR) | Superficie | Ocupación | Descripción oficial (ES) |
|---|---|---|---|
| **Doble** / Double / Double | 14 m² (151 ft²) | 1 persona: 2 camas · 2 personas: 2 camas / 1 cama doble | Habitación exterior con bañera o ducha |
| **Superior con Vistas Premium** / Superior with Premium Views / Supérieure Vues Premium | 22 m² (237 ft²) | 2 personas · 3 personas | Amplia y exterior con bonitas vistas a la montaña, zona de salón con sofá cama, cama doble |
| **Doble con cama supletoria** / Double with extra bed / Double avec lit d'appoint | 18 m² (194 ft²) | 2 adultos + 1 niño | Exterior con bañera o ducha: 2 camas individuales / 1 cama doble + 1 cama supletoria |
| **Refugio Montaña para 4** / Mountain Retreat for 4 / Chambre Quadruple avec Douche | 21 m² (EN: 237 ft² ≈ 22 m²) ⚠️ | 4 adultos · 2 adultos + 2 niños | Cuádruple con 4 literas de gran formato (1,10 m de ancho), baño con ducha doble, doble poza |
| **Familiar** / Family / Familial | 20 m² (215 ft²) | 3 adultos · 2 adultos + 2 niños | Espaciosa y exterior con bañera, 2 camas individuales + 1 sofá cama |

### Comodidades publicadas por habitación (ES)
- **Doble**: Aire acondicionado, Cunas disponibles, Escritorio, Secador de pelo, Calefacción, Ascensor de acceso, Para no fumadores, Caja fuerte, Televisión, Habitación para minusválidos, Cama doble, Cama individual, Ropa de cama y toallas.
- **Superior con Vistas Premium**: Aire acondicionado, 2º baño, Cunas disponibles, Escritorio, Cama doble, Secador de pelo, Ascensor de acceso, Ropa de cama y toallas, Salón social, Para no fumadores, Mini-frigorífico, Caja fuerte, Ducha independiente, Sofá-cama, Vistas, 2 TVs.
- **Doble con cama supletoria**: Aire acondicionado, Cunas disponibles, Escritorio, Cama doble, Secador de pelo, Calefacción, Ascensor de acceso, Ropa de cama y toallas, Para no fumadores, Caja fuerte, Televisión, Cama individual, Sofá-cama.
- **Refugio Montaña para 4**: Aire acondicionado, Literas, Escritorio, Secador de pelo, Calefacción, Ascensor de acceso, Ropa de cama y toallas, Para no fumadores, Caja fuerte, Ducha independiente, Televisión.
- **Familiar**: Aire acondicionado, Cunas disponibles, Escritorio, Secador de pelo, Calefacción, Ascensor de acceso, Ropa de cama y toallas, Para no fumadores, Caja fuerte, Sofá-cama, Ducha sobre la bañera, Cama individual, Televisión.

Las listas EN y FR son las traducciones estándar de SiteMinder (recogidas en `src/content/rooms.ts`).
**No se publican precios de habitación** en la web actual (se consultan en el motor).

Galerías: cada ficha tiene 3-6 fotografías (IDs en `src/content/rooms.ts`).

---

## 6. Restaurante El Boj

- Tesis oficial: "El restaurante El Boj ofrece cocina natural de temporada, con especial atención al producto de Pirineo y aragonés, un toque actual, buena selección de vinos, recetas vegetarianas, vistas al bosque de boj y montañas desde nuestra terraza panorámica."
- Terraza "situada sobre el río Aragón y con preciosas vistas del valle de Canfranc y el Fuerte de Col de Ladrones".
- Celebraciones: fiestas familiares, cumpleaños, bautizos, reuniones de amigos, grupos y bodas. "Atención personalizada y profesional. Salones privados."
- **Pikoteo**: raciones para compartir, pizza, bocadillos y bebidas, **12:00 – 20:00**, en terraza, bar o restaurante.
- **Almuerzos**: 13:00 – 15:30 · **Cenas**: 20:00 – 22:30. Ensaladas, arroces, pasta, verduras, pescado, carnes y postres.
- **Plato infantil desde 15,00 €.**
- Reservas: info@santacristina.es · 974 373 300 · WhatsApp 686 285 283.
- Meta description ES menciona "Menú Navidad y Año Nuevo" (no hay contenido asociado → no se publica).

---

## 7. Petit Spa

- **"ACTUALMENTE CERRADO POR MOTIVO DE LA SEQUÍA"** (ES) · "CURRENTLY CLOSED DUE TO THE DROUGHT" (EN) · "ACTUELLEMENT FERMÉ EN RAISON DE LA SÉCHERESSE" (FR, con errata "SEÇCHE" en el original).
- Área relax de **59 m²** con sauna, bañera de hidromasaje, vestuario y piscina cubierta con vistas de **28 m²** y **1,20 m** de profundidad.
- Tarifas: alojados 10 €/persona/45 min · no alojados 15 €/persona/45 min. Niños acompañados. Reserva de horario obligatoria, aforo limitado. Bañador, chanclas y gorro obligatorios (a la venta en recepción). Toallas incluidas.
- Oferta **Relax&Food** (no alojados): con servicio de restauración en El Boj o terraza, el Petit Spa pasa a 10 €.
- Reservas: info@santacristina.es · 974 373 300 · WhatsApp 686 285 283.

---

## 8. Bodas y eventos

- "Un día inolvidable y exclusivo con la tranquilidad y naturaleza por testigos."
- Ambientes: terraza-mirador al valle y al río Aragón; salón principal de El Boj con vistas al bosque de boj.
- Menús especiales con inspiración en la cocina natural pirenaica y gran bodega.
- "Cuéntenos cómo le gustaría que fuese su gran día y le ayudaremos a conseguirlo."
- Posibilidad de reservar todo el hotel si se alojan los invitados.
- Contacto: **comercial@santacristina.es**. PDF de menús (ES roto, FR disponible).
- Reuniones y empresas: ver apartado "Sobre nosotros".

---

## 9. Lugares para descubrir (`/es/pirineo.html`)

1. **Ibones de Anayet por Canal Roya** — desde la puerta del hotel, 4 h por Canal Roya (GR11) hasta 2.240 m; Pico Anayet 2.545 m. Ruta Wikiloc.
2. **Monasterio de San Juan de la Peña** — Ctra. A-1603, Jaca. monasteriosanjuan.com
3. **Ibón de Estanés** — Ansó, 1.754 m, 29 ha. Salidas desde Candanchú o Sansanet. 2 rutas Wikiloc.
4. **Estación Internacional de Canfranc** — inaugurada en 1928; visitas guiadas desde la Oficina de Turismo de Canfranc.
5. **Cueva de Las Güixas** — Villanúa.
6. **Parc'Ours** — Borce (Francia), 7 ha, recomendado para niños.
7. **Ibón de Truchas y Escalar** — Astún, 2.144 m; nacimiento del río Aragón; Lacs d'Ayous; telesilla en verano.
8. **Ecoparque El Juncaral** — Villanúa, N-330 km 656,4.

---

## 10. Galería
`/es/fotos.html`: 77 fotografías sin texto alternativo (alt vacío). 109 imágenes únicas en todo el sitio (incluidos logos y carteles).

---

## 11. Contradicciones e incoherencias (NO resueltas arbitrariamente)

| # | Tema | Versión A | Versión B | Decisión en la nueva web |
|---|---|---|---|---|
| C1 | Superficie Refugio Montaña para 4 | 21 m² (ES, FR) | 237 ft² ≈ 22 m² (EN) | Se muestra **21 m²** (2 de 3 idiomas) con nota en el contenido; **confirmar con el hotel** |
| C2 | Equipamiento Petit Spa | Hidromasaje, **baño de vapor**, sauna y piscina (página Hotel, ES/EN/FR) | Sauna, hidromasaje, vestuario y piscina, **sin baño de vapor** (página Petit Spa) | Se usa la ficha Petit Spa (sin vapor). **Confirmar** |
| C3 | Siglo del monasterio de Santa Cristina | Siglo XI (ES, FR) | "ninth century" (EN) | Se usa **siglo XI** en los tres idiomas. Confirmar |
| C4 | Año de la reforma integral | 2006 (ES; FR "décembre 2006") | 2005 (EN) | Se usa **2006**. Confirmar |
| C5 | Horario Pikoteo | 12:00–20:00 (web ES/EN/FR) | 11:30–20:00 (cartel Petit Spa + Boj) | Se usa **12:00–20:00** (web). Confirmar |
| C6 | Horario Petit Spa | 10:00–22:00 (cartel) | Sin horario en la web; cerrado | No se publica horario (spa cerrado) |
| C7 | Dirección | "Carretera a Candanchú-Astún (N330a km. 669), Canfranc-Estación" (ES) | "Road N330a km. 669 to France, Canfranc" (EN/FR) · Google: "Desvío entre N-330 km 669 y 670" | NAP unificado con la versión ES (la más precisa) en los tres idiomas |
| C8 | Traducciones FR incompletas | — | "Estanés Lake" y "Parc'Ours" aparecen en inglés en la página FR | Se ha traducido al francés desde el texto oficial en español (marcado `frFromSpanish` en `src/content/places.ts`); **pendiente de validación por el hotel** |
| C9 | Refugio: "doble poza" (ES) | "double lavabo" (FR) | EN no lo menciona | Se mantiene cada texto oficial |
| C10 | Mensaje hero | "Reserva ahora con cancelación gratuita y descuentos especiales" | Condiciones no documentadas en la web | Se conserva la frase solo junto al CTA de reserva directa, sin cifras |
| C11 | Meta description El Boj ES | "Menú Navidad y Año Nuevo" | Sin contenido | No se publica |
| C12 | Nombre de la terraza | "la mejor terraza panorámica del valle" | — | Afirmación oficial; se cita solo en la página Hotel |
| C13 | Oferta Relax&Food | Publicada como vigente | El Petit Spa está cerrado | Se muestra solo dentro de las tarifas publicadas del spa, bajo el aviso de cierre; no se promociona en El Boj |
| C14 | PDF de menús de boda | FR disponible | ES → 403, EN sin PDF | Solo se enlaza el PDF francés; en ES/EN se ofrece solicitarlo por email |

---

## 12. Recursos gráficos existentes

- Logo del hotel: `e125a962…jpg` (JPG 1587×420, fondo blanco). **Se necesita el logo vectorial (SVG)**. Mientras tanto, la nueva web usa un logotipo tipográfico.
- Logo El Boj: `b01e2c77…jpg` (JPG, fondo blanco).
- Logos de partners: Hotel Tobazo, Marqués de Vitoria, Parc'Ours.
- **No existen vídeos.** Ver `MEDIA_GUIDE.md`.
- Muchas fotos interiores son antiguas, con objetivo ojo de pez y resolución 1024 px o menos → se recomienda nueva sesión (ver `MEDIA_GUIDE.md`).

---

## 13. Trazabilidad de los textos de la nueva web

- **Textos editoriales**: literales de la web oficial en cada idioma (`src/content/*.ts`), con correcciones mínimas
  de ortografía (p. ej. "SEÇCHE" → "SÉCHERESSE", "Therooms" → "The rooms").
- **Titulares cortos** extraídos de frases oficiales: "En el corazón de los Pirineos", "Tu refugio en los Pirineos",
  "Cocina natural de temporada", "Pon a tono cuerpo y mente", "Bienvenido a los Pirineos", "Con la naturaleza por testigo",
  "Entre Canfranc y Candanchú", "Habitaciones con vistas a las montañas". Otros titulares nuevos no contienen datos
  ("Dormir frente a la montaña", "Una casa en el Camino", "Una mesa con historia", "Los Pirineos, desde nuestra puerta").
- **Textos de interfaz nuevos** (botones, etiquetas, avisos de formulario, mensaje de WhatsApp prellenado,
  "Consulta con recepción el estado del Petit Spa antes de tu visita"): `src/i18n/ui.ts`. No contienen datos del hotel.
- **Textos alternativos** de imagen: descripciones nuevas de lo que muestra cada foto (la web anterior no tenía).
- **Traducciones nuevas**: solo donde la web oficial no tenía versión en un idioma (C8) y en algunos párrafos EN/FR
  de Historia y Lugares que la web anterior resumía; siempre a partir del texto oficial en español, sin añadir datos.

## 14. Decisiones de migración

- Español pasa a ser el idioma principal en la raíz; inglés en `/en/`, francés en `/fr/`.
- Las 54 URLs antiguas (incluidos los dos enlaces que ya daban 404) redirigen con 301 (`redirects.json`).
- "Ofertas" (EN/FR) y "Hotel Tobazo" (ES) eran la misma página: se unifican en `/hotel-tobazo/`.
- El formulario de contacto de SiteMinder se sustituye por formularios propios (contacto → info@, bodas/grupos → comercial@).

## 15. Datos aportados por el hotel (fuera de la web anterior)

| Dato | Fuente | Uso |
|---|---|---|
| Tras la aduana de Carabineros, el edificio fue **cuartel de la Guardia Civil** antes de ser hotel y restaurante | Indicación del cliente, 25/09/2026 | Línea temporal de la página Hotel, portada y El Boj. El contexto (integración de los Carabineros en la Guardia Civil en 1940) es un hecho histórico público; **conviene que el hotel confirme las fechas del cuartel** si quiere añadirlas |
| Recorrido del **Camino de Santiago aragonés** (Somport → Candanchú → Canfranc → Jaca) | Dato geográfico público; la web anterior ya indicaba que el Camino pasa junto al hotel | Portada, Hotel ("Una casa en el Camino") y los Pirineos (primer lugar) |
