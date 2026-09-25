import type { L, PageKey } from '../i18n/config';

/**
 * Títulos y descripciones de cada página (etiquetas <title> y meta description).
 * Redactados a partir de los textos oficiales, sin relleno de palabras clave.
 */
export const seo: Record<PageKey, { title: L; description: L }> = {
  home: {
    title: {
      es: 'Hotel Santa Cristina Petit Spa · Hotel de montaña en Canfranc, Pirineos de Aragón',
      en: 'Hotel Santa Cristina Petit Spa · Mountain hotel in Canfranc, Spanish Pyrenees',
      fr: 'Hôtel Santa Cristina Petit Spa · Hôtel de montagne à Canfranc, Pyrénées aragonaises',
    },
    description: {
      es: 'Hotel de montaña en plena naturaleza en los Pirineos de Aragón, entre Canfranc y Candanchú, a 4 km de Candanchú-Astún. Restaurante El Boj, Petit Spa y bodas.',
      en: 'Mountain hotel surrounded by nature in the Aragonese Pyrenees, between Candanchú and Canfranc, 4 km from the Candanchú-Astún ski domain. El Boj restaurant and weddings.',
      fr: 'Hôtel de montagne en pleine nature dans les Pyrénées aragonaises, entre Candanchú et Canfranc, à 4 km de Candanchú-Astún. Restaurant El Boj et mariages.',
    },
  },
  hotel: {
    title: {
      es: 'El hotel · Antigua aduana del siglo XIX en Canfranc | Hotel Santa Cristina',
      en: 'The hotel · A 19th-century customs house in Canfranc | Hotel Santa Cristina',
      fr: "L'hôtel · Ancienne douane du XIXe siècle à Canfranc | Hôtel Santa Cristina",
    },
    description: {
      es: 'Antigua aduana de Carabineros y cuartel de la Guardia Civil a 1.300 m, junto al río Aragón y en el Camino de Santiago: historia, servicios y terraza panorámica.',
      en: 'A former Carabineros customs house and Guardia Civil barracks at 1,300 m, beside the river Aragón on the Way of St. James: history, facilities and panoramic terrace.',
      fr: "Ancienne douane des Carabiniers et caserne de la Guardia Civil à 1 300 m, au bord de l'Aragón sur le Chemin de Saint-Jacques : histoire, services et terrasse panoramique.",
    },
  },
  rooms: {
    title: {
      es: 'Habitaciones con vistas a la montaña en Canfranc | Hotel Santa Cristina',
      en: 'Rooms with mountain views in Canfranc | Hotel Santa Cristina',
      fr: 'Chambres avec vue sur la montagne à Canfranc | Hôtel Santa Cristina',
    },
    description: {
      es: 'Doble, Superior con Vistas Premium, Doble con cama supletoria, Refugio Montaña para 4 y Familiar. Todas con TV, aire acondicionado y caja fuerte.',
      en: 'Double, Superior with Premium Views, Double with extra bed, Mountain Retreat for 4 and Family rooms. All with TV, air conditioning and safe.',
      fr: "Double, Supérieure Vues Premium, Double avec lit d'appoint, Chambre Quadruple et Familiale. Toutes avec télévision, climatisation et coffre-fort.",
    },
  },
  elBoj: {
    title: {
      es: 'Restaurante El Boj · Terraza panorámica en Canfranc-Estación, Pirineos',
      en: 'El Boj restaurant · Panoramic terrace in Canfranc, Spanish Pyrenees',
      fr: 'Restaurant El Boj · Terrasse panoramique à Canfranc, Pyrénées aragonaises',
    },
    description: {
      es: 'Cocina natural de temporada con producto de los Pirineos y de Aragón, vinos, recetas vegetarianas y terraza sobre el río Aragón. Pikoteo, almuerzos, cenas y celebraciones.',
      en: 'Seasonal natural cuisine with Pyrenean and Aragonese produce, wines, vegetarian recipes and a terrace above the river Aragón. Pikoteo, lunch, dinner and celebrations.',
      fr: "Cuisine naturelle de saison avec produits des Pyrénées et d'Aragon, vins, recettes végétariennes et terrasse sur l'Aragón. Pikoteo, déjeuners, dîners et célébrations.",
    },
  },
  spa: {
    title: {
      es: 'Petit Spa · Sauna, hidromasaje y piscina cubierta | Hotel Santa Cristina',
      en: 'Petit Spa · Sauna, hydromassage and indoor pool | Hotel Santa Cristina',
      fr: 'Petit Spa · Sauna, hydromassage et piscine couverte | Hôtel Santa Cristina',
    },
    description: {
      es: 'Área relax de 59 m² con sauna, bañera de hidromasaje y piscina cubierta con vistas. Actualmente cerrado por motivo de la sequía.',
      en: '59 m² relaxation area with sauna, hydromassage bath and indoor pool with views. Currently closed due to the drought.',
      fr: 'Espace détente de 59 m² avec sauna, hydromassage et piscine couverte avec vue. Actuellement fermé en raison de la sécheresse.',
    },
  },
  weddings: {
    title: {
      es: 'Bodas y eventos en los Pirineos, Canfranc | Hotel Santa Cristina',
      en: 'Weddings and events in the Pyrenees, Canfranc | Hotel Santa Cristina',
      fr: 'Mariages et événements dans les Pyrénées, Canfranc | Hôtel Santa Cristina',
    },
    description: {
      es: 'Bodas, celebraciones y reuniones en un hotel de montaña: terraza-mirador al valle, salón de El Boj, menús de cocina pirenaica y posibilidad de reservar todo el hotel.',
      en: 'Weddings, celebrations and meetings in a mountain hotel: panoramic terrace, El Boj dining room, Pyrenean menus and the option of reserving the whole hotel.',
      fr: "Mariages, célébrations et réunions dans un hôtel de montagne : terrasse panoramique, salle d'El Boj, menus pyrénéens et possibilité de réserver tout l'hôtel.",
    },
  },
  pyrenees: {
    title: {
      es: 'Qué ver cerca de Canfranc, Candanchú y Astún | Hotel Santa Cristina',
      en: 'Things to do near Canfranc, Candanchú and Astún | Hotel Santa Cristina',
      fr: 'Que voir près de Canfranc, Candanchú et Astún | Hôtel Santa Cristina',
    },
    description: {
      es: 'El Camino de Santiago, los ibones de Anayet, Estanés, Truchas y Escalar, la Estación de Canfranc, San Juan de la Peña y más lugares de los Pirineos.',
      en: 'The Way of St. James, Anayet, Estanés, Truchas and Escalar lakes, Canfranc Station, San Juan de la Peña and more spots in the Pyrenees.',
      fr: "Le chemin de Saint-Jacques, les lacs d'Anayet, d'Estanés, Truchas et Escalar, la gare de Canfranc, San Juan de la Peña et d'autres lieux des Pyrénées.",
    },
  },
  gallery: {
    title: {
      es: 'Galería de fotos | Hotel Santa Cristina Petit Spa',
      en: 'Photo gallery | Hotel Santa Cristina Petit Spa',
      fr: 'Galerie de photos | Hôtel Santa Cristina Petit Spa',
    },
    description: {
      es: 'Fotografías del hotel, las habitaciones, el restaurante El Boj, el Petit Spa, las bodas y el entorno de Canfranc.',
      en: 'Photos of the hotel, rooms, El Boj restaurant, Petit Spa, weddings and the Canfranc surroundings.',
      fr: "Photos de l'hôtel, des chambres, du restaurant El Boj, du Petit Spa, des mariages et des environs de Canfranc.",
    },
  },
  contact: {
    title: {
      es: 'Contacto y cómo llegar · Canfranc-Estación | Hotel Santa Cristina',
      en: 'Contact and directions · Canfranc | Hotel Santa Cristina',
      fr: 'Contact et accès · Canfranc | Hôtel Santa Cristina',
    },
    description: {
      es: 'Carretera a Candanchú-Astún (N330a km 669), 22880 Canfranc-Estación, Huesca. Teléfono 974 373 300, WhatsApp 686 285 283, info@santacristina.es.',
      en: 'N330a km 669 road to Candanchú-Astún, 22880 Canfranc-Estación, Huesca, Spain. Phone +34 974 373 300, WhatsApp +34 686 285 283, info@santacristina.es.',
      fr: 'Route N330a km 669 vers Candanchú-Astún, 22880 Canfranc-Estación, Huesca, Espagne. Tél. +34 974 373 300, WhatsApp +34 686 285 283, info@santacristina.es.',
    },
  },
  tobazo: {
    title: {
      es: 'Hotel Tobazo, a pie de pista en Candanchú | Hotel Santa Cristina',
      en: 'Hotel Tobazo, at the foot of the slopes in Candanchú | Hotel Santa Cristina',
      fr: 'Hôtel Tobazo, au pied des pistes à Candanchú | Hôtel Santa Cristina',
    },
    description: {
      es: 'Te recomendamos nuestro Hotel Tobazo a pie de pista en Candanchú y su gastrobar El Pikoteo.',
      en: 'We recommend our Hotel Tobazo at the foot of the slopes in Candanchú and its gastrobar El Pikoteo.',
      fr: "Nous vous recommandons l'hôtel Tobazo, au pied des pistes à Candanchú, et son gastro-bar El Pikoteo.",
    },
  },
};
