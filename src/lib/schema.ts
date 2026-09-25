import { SITE_URL, booking, hotel, restaurant } from '../config/site';
import { aboutPage } from '../content/hotel';
import { elBoj } from '../content/restaurant';
import type { Room } from '../content/rooms';
import { LANG_META, type Lang, pagePath, roomPath } from '../i18n/config';

/**
 * Datos estructurados Schema.org.
 * - Solo se publican datos verificados (CONTENT_AUDIT.md).
 * - No se incluye `aggregateRating`: las valoraciones de Google son de un
 *   tercero y las directrices de Google no permiten marcarlas como propias.
 * - No se incluyen precios ni horarios por día (la web oficial no los publica).
 */

const HOTEL_ID = `${SITE_URL}/#hotel`;
const RESTAURANT_ID = `${SITE_URL}/#el-boj`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const abs = (path: string) => new URL(path, SITE_URL).toString();

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: hotel.address.street,
    addressLocality: hotel.address.locality,
    addressRegion: `${hotel.address.region}, ${hotel.address.regionFull}`,
    postalCode: hotel.address.postalCode,
    addressCountry: hotel.address.country,
  };
}

const geo = { '@type': 'GeoCoordinates', latitude: hotel.geo.lat, longitude: hotel.geo.lng };

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: abs('/'),
    name: hotel.name,
    inLanguage: ['es', 'en', 'fr'],
    publisher: { '@id': HOTEL_ID },
  };
}

export function hotelSchema(lang: Lang, image: string) {
  return {
    '@type': 'Hotel',
    '@id': HOTEL_ID,
    name: hotel.name,
    alternateName: hotel.shortName,
    description: aboutPage.location[lang],
    url: abs(pagePath('home', lang)),
    image,
    logo: abs('/icons/icon-512.png'),
    telephone: hotel.phone.tel,
    email: hotel.email,
    address: postalAddress(),
    geo,
    hasMap: hotel.googleMaps.place,
    starRating: { '@type': 'Rating', ratingValue: String(hotel.starRating) },
    amenityFeature: aboutPage.services[lang].map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    containsPlace: { '@id': RESTAURANT_ID },
    sameAs: [hotel.social.facebook, hotel.social.instagram, hotel.social.tripadvisor],
    availableLanguage: ['es', 'en', 'fr'].map((l) => LANG_META[l as Lang].label),
    potentialAction: {
      '@type': 'ReserveAction',
      target: { '@type': 'EntryPoint', urlTemplate: booking.baseUrl },
    },
  };
}

export function restaurantSchema(lang: Lang, image: string) {
  return {
    '@type': 'Restaurant',
    '@id': RESTAURANT_ID,
    name: restaurant.name,
    description: elBoj.lead[lang],
    url: abs(pagePath('elBoj', lang)),
    image,
    telephone: hotel.phone.tel,
    email: hotel.email,
    address: postalAddress(),
    geo,
    hasMap: restaurant.googleMaps.place,
    servesCuisine: {
      es: ['Cocina natural de temporada', 'Pirenaica', 'Aragonesa', 'Vegetariana'],
      en: ['Seasonal natural cuisine', 'Pyrenean', 'Aragonese', 'Vegetarian'],
      fr: ['Cuisine naturelle de saison', 'Pyrénéenne', 'Aragonaise', 'Végétarienne'],
    }[lang],
    acceptsReservations: true,
    containedInPlace: { '@id': HOTEL_ID },
  };
}

export function roomSchema(room: Room, lang: Lang, image: string) {
  return {
    '@type': 'HotelRoom',
    '@id': `${abs(roomPath(room.slug, lang))}#room`,
    name: room.name[lang],
    description: room.description[lang],
    url: abs(roomPath(room.slug, lang)),
    image,
    floorSize: { '@type': 'QuantitativeValue', value: room.size, unitCode: 'MTK' },
    occupancy: { '@type': 'QuantitativeValue', maxValue: room.maxGuests },
    containedInPlace: { '@id': HOTEL_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
