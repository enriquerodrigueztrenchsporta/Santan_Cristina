/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 * ------------------------------------------------------------------
 * Todos los datos de contacto, reservas y valoraciones viven aquí.
 * Cualquier cambio se refleja automáticamente en cabecera, pie,
 * páginas, datos estructurados (Schema.org) y enlaces.
 *
 * Fuente de cada dato: CONTENT_AUDIT.md
 */

export const SITE_URL = 'https://www.santacristina.es';

export const hotel = {
  name: 'Hotel Santa Cristina Petit Spa',
  shortName: 'Hotel Santa Cristina',
  /** Categoría publicada en la web oficial y en Google ("Hotel de 3 estrellas"). */
  starRating: 3,
  /** Altitud publicada en la página "Sobre nosotros". */
  altitude: 1300,
  address: {
    street: 'Carretera a Candanchú-Astún (N330a km. 669)',
    locality: 'Canfranc-Estación',
    region: 'Huesca',
    regionFull: 'Aragón',
    postalCode: '22880',
    country: 'ES',
    countryName: { es: 'España', en: 'Spain', fr: 'Espagne' },
  },
  /** Coordenadas publicadas en los enlaces de mapa de la web oficial. */
  geo: { lat: 42.76847032, lng: -0.51095009 },
  phone: { display: '+34 974 373 300', tel: '+34974373300' },
  mobile: { display: '+34 686 285 283', tel: '+34686285283' },
  whatsapp: { display: '686 285 283', number: '34686285283' },
  email: 'info@santacristina.es',
  /** Email para reuniones, grupos y bodas. */
  salesEmail: 'comercial@santacristina.es',
  social: {
    facebook: 'https://www.facebook.com/SantaCristinaHotel/',
    instagram: 'https://www.instagram.com/hotelsantacristina/',
    tripadvisor:
      'https://www.tripadvisor.es/Hotel_Review-g1079274-d285007-Reviews-Hotel_Santa_Cristina-Canfranc_Province_of_Huesca_Aragon.html',
  },
  googleMaps: {
    /** Ficha de Google Maps del hotel (CID verificado el 25/09/2026). */
    place: 'https://maps.google.com/?cid=13320388481419000376',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=42.76847032,-0.51095009',
    embed: 'https://www.google.com/maps?q=Hotel+Santa+Cristina+Petit+Spa,+Canfranc-Estaci%C3%B3n&ll=42.76847032,-0.51095009&z=14&output=embed',
  },
} as const;

export const restaurant = {
  name: 'El Boj restaurante',
  /** Dirección tal y como figura en Google Maps. */
  addressNote: 'Hacia Candanchú-Astún, desvío entre N-330 km 669 y 670',
  googleMaps: {
    place: 'https://maps.google.com/?cid=16862618669853813279',
  },
} as const;

/**
 * MOTOR DE RESERVAS
 * ------------------------------------------------------------------
 * SiteMinder Direct Booking, el mismo que usa la web actual.
 * NO cambiar sin confirmar con el hotel / SiteMinder.
 */
export const booking = {
  provider: 'SiteMinder Direct Booking',
  baseUrl: 'https://direct-book.com/properties/hotelsantacristinapetitspadirect',
  /** Valor que la web actual envía como `referrer`. */
  referrer: 'canvas',
  maxAdults: 10,
  /** Abrir el motor en una pestaña nueva, igual que la web actual. */
  newTab: true,
} as const;

/**
 * VALORACIONES DE GOOGLE
 * ------------------------------------------------------------------
 * Datos variables. Actualizar a mano consultando Google Maps y cambiar
 * `checkedAt`. Si `show` es false, el bloque no se publica.
 * No se publican opiniones, nombres ni citas de reseñas.
 */
export const googleRatings = {
  hotel: {
    show: true,
    rating: 4.5,
    reviews: 1346,
    checkedAt: '2026-09-25',
    url: hotel.googleMaps.place,
  },
  restaurant: {
    show: true,
    rating: 4.3,
    reviews: 352,
    checkedAt: '2026-09-25',
    url: restaurant.googleMaps.place,
  },
} as const;

/**
 * ANALÍTICA Y FORMULARIOS
 * ------------------------------------------------------------------
 * Se configuran por variables de entorno (ver .env.example).
 * Vacías = no se carga nada.
 */
export const integrations = {
  gtmId: import.meta.env.PUBLIC_GTM_ID ?? '',
  ga4Id: import.meta.env.PUBLIC_GA4_ID ?? '',
  /** Endpoint compatible con Formspree / Getform / Basin. Vacío = envío por email (mailto). */
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
} as const;

/**
 * VÍDEOS
 * ------------------------------------------------------------------
 * Rutas dentro de /public. Si el archivo no existe en el momento del
 * build, el componente muestra solo la imagen `poster` (sin errores 404).
 * Ver MEDIA_GUIDE.md.
 */
export const videos = {
  hero: {
    webm: '/videos/hero-santa-cristina.webm',
    mp4: '/videos/hero-santa-cristina.mp4',
    mobileMp4: '/videos/hero-santa-cristina-mobile.mp4',
  },
  elBoj: {
    webm: '/videos/el-boj.webm',
    mp4: '/videos/el-boj.mp4',
    mobileMp4: '/videos/el-boj-mobile.mp4',
  },
} as const;
