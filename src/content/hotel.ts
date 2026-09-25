import type { L } from '../i18n/config';

/**
 * Textos del hotel. Procedencia: páginas Home y "Sobre nosotros" de la
 * web oficial en ES / EN / FR (CONTENT_AUDIT.md §4), más los datos
 * aportados por el hotel el 25/09/2026 (etapa como cuartel de la Guardia
 * Civil). Se escribe siempre "los Pirineos", nunca "el Pirineo".
 * Cada texto aparece en una sola página; si un dato se repite, se
 * redacta con otras palabras.
 */

export const heroCopy = {
  eyebrow: { es: 'Canfranc · Pirineos de Aragón', en: 'Canfranc · Aragonese Pyrenees', fr: 'Canfranc · Pyrénées aragonaises' },
  title: { es: 'Hotel Santa Cristina', en: 'Hotel Santa Cristina', fr: 'Hôtel Santa Cristina' },
  subtitle: {
    es: 'En el corazón de los Pirineos',
    en: 'At the heart of the Pyrenees',
    fr: 'Au cœur des Pyrénées',
  },
  location: {
    es: 'Entre Canfranc y Candanchú · 1.300 m',
    en: 'Between Canfranc and Candanchú · 1,300 m',
    fr: 'Entre Canfranc et Candanchú · 1 300 m',
  },
} satisfies Record<string, L>;

/** Cifras de situación publicadas en la web oficial (solo en la portada). */
export const locationFacts: { value: L; label: L }[] = [
  {
    value: { es: '1.300 m', en: '1,300 m', fr: '1 300 m' },
    label: { es: 'de altitud', en: 'above sea level', fr: "d'altitude" },
  },
  {
    value: { es: '4 km', en: '4 km', fr: '4 km' },
    label: {
      es: 'del dominio de esquí Candanchú-Astún (100 km)',
      en: 'from the 100 km Candanchú-Astún ski domain',
      fr: 'du domaine skiable Candanchú-Astún (100 km)',
    },
  },
  {
    value: { es: '3 km', en: '3 km', fr: '3 km' },
    label: {
      es: 'del túnel de Somport, entre España y Francia',
      en: 'from the Somport tunnel between Spain and France',
      fr: 'du tunnel du Somport entre la France et l’Espagne',
    },
  },
  {
    value: { es: '4,8 km', en: '4.8 km', fr: '4,8 km' },
    label: {
      es: 'del Parque Nacional de los Pirineos (Francia)',
      en: 'from the Pyrenees National Park (France)',
      fr: 'du Parc national des Pyrénées (France)',
    },
  },
];

/* ------------------------------------------------------------------ */
/* PORTADA                                                             */
/* ------------------------------------------------------------------ */

export const homeIntro = {
  eyebrow: { es: 'El hotel', en: 'The hotel', fr: "L'hôtel" },
  title: {
    es: 'Tu refugio en los Pirineos',
    en: 'Your mountain retreat in the Pyrenees',
    fr: 'Votre refuge dans les Pyrénées',
  },
  lead: {
    es: 'Bienvenido a Hotel Santa Cristina, tu refugio para disfrutar y explorar la naturaleza, los valles y los pueblos de montaña que nos rodean, a uno y otro lado de los Pirineos.',
    en: 'Welcome to your mountain retreat in the Pyrenees, to enjoy and explore the nature, valleys and mountain villages around us, on both sides of the border.',
    fr: 'Bienvenue à l’Hôtel Santa Cristina, votre refuge pour profiter et découvrir la nature, les vallées et les villages de montagne qui nous entourent, des deux côtés des Pyrénées.',
  },
  body: {
    es: 'Ante la puerta pasa el Camino de Santiago, que entra en España por el Somport. La casa, que fue aduana y más tarde cuartel, lleva el nombre del antiguo hospital de peregrinos de Santa Cristina.',
    en: 'The Way of St. James, which enters Spain at the Somport pass, runs past our door. The house, once a customs post and later a barracks, is named after the old Santa Cristina pilgrim hospital.',
    fr: 'Le chemin de Saint-Jacques, qui entre en Espagne par le Somport, passe devant notre porte. La maison, ancienne douane puis caserne, porte le nom de l’ancien hôpital de pèlerins de Santa Cristina.',
  },
  cta: { es: 'Conocer el hotel', en: 'Discover the hotel', fr: "Découvrir l'hôtel" },
  insetCaption: {
    es: 'La antigua aduana, siglo XIX',
    en: 'The former customs house, 19th century',
    fr: "L'ancienne douane, XIXe siècle",
  },
} satisfies Record<string, L>;

export const homeRooms = {
  eyebrow: { es: 'Habitaciones', en: 'Rooms', fr: 'Chambres' },
  title: {
    es: 'Dormir frente a la montaña',
    en: 'Sleep facing the mountains',
    fr: 'Dormir face à la montagne',
  },
  lead: {
    es: 'Cinco maneras de alojarse: de la doble clásica a la superior con salón o el refugio con literas para cuatro.',
    en: 'Five ways to stay: from the classic double to the superior with lounge or the mountain retreat with bunks for four.',
    fr: 'Cinq façons de séjourner : de la double classique à la supérieure avec salon ou la chambre quadruple à lits superposés.',
  },
} satisfies Record<string, L>;

export const homeBoj = {
  title: {
    es: 'Sabores de temporada frente al bosque de boj',
    en: 'Seasonal flavours facing the boxwood forest',
    fr: 'Saveurs de saison face à la forêt de buis',
  },
  text: {
    es: 'Desde el pikoteo de mediodía hasta la cena, en el comedor o en la terraza sobre el río Aragón.',
    en: 'From midday sharing plates to dinner, in the dining room or on the terrace above the river Aragón.',
    fr: 'Du pikoteo de midi au dîner, en salle ou sur la terrasse au-dessus de l’Aragón.',
  },
} satisfies Record<string, L>;

export const homeSpa = {
  title: {
    es: 'Sauna, hidromasaje y piscina cubierta',
    en: 'Sauna, hydromassage and indoor pool',
    fr: 'Sauna, hydromassage et piscine couverte',
  },
  text: {
    es: 'Un área de relax con una piscina que mira al bosque.',
    en: 'A relaxation area with a pool overlooking the forest.',
    fr: 'Un espace détente avec une piscine tournée vers la forêt.',
  },
} satisfies Record<string, L>;

export const homePyrenees = {
  eyebrow: { es: 'Los Pirineos', en: 'The Pyrenees', fr: 'Les Pyrénées' },
  title: { es: 'Bienvenido a los Pirineos', en: 'Welcome to the Pyrenees', fr: 'Bienvenue dans les Pyrénées' },
  lead: {
    es: 'Senderos, ibones, GR11, pozas y pueblos de montaña.',
    en: 'Hiking trails, mountain lakes, the GR11, natural pools and mountain villages.',
    fr: 'Sentiers, lacs, GR11, bassins naturels et villages de montagne.',
  },
  activities: {
    es: ['Senderismo', 'Ciclismo', 'Escalada', 'Deportes de invierno', 'GR11', 'Camino de Santiago'],
    en: ['Hiking', 'Cycling', 'Climbing', 'Winter sports', 'GR11', 'Way of St. James'],
    fr: ['Randonnée', 'Cyclisme', 'Escalade', "Sports d'hiver", 'GR11', 'Chemin de Saint-Jacques'],
  },
  cta: { es: 'Lugares para descubrir', en: 'Spots to discover', fr: 'Endroits à découvrir' },
} satisfies Record<string, L | L<string[]>>;

export const homeWeddings = {
  text: {
    es: 'La terraza sobre el valle, el salón de El Boj y, si lo deseáis, el hotel entero para vuestros invitados.',
    en: 'The terrace above the valley, the El Boj dining room and, if you wish, the whole hotel for your guests.',
    fr: 'La terrasse sur la vallée, la salle d’El Boj et, si vous le souhaitez, tout l’hôtel pour vos invités.',
  },
} satisfies Record<string, L>;

export const homeLocation = {
  eyebrow: { es: 'Cómo llegar', en: 'Getting here', fr: 'Accès' },
  title: { es: 'Entre Canfranc y Candanchú', en: 'Between Canfranc and Candanchú', fr: 'Entre Canfranc et Candanchú' },
} satisfies Record<string, L>;

/* ------------------------------------------------------------------ */
/* PÁGINA DEL HOTEL                                                    */
/* ------------------------------------------------------------------ */

export const aboutPage = {
  eyebrow: { es: 'Sobre nosotros', en: 'About us', fr: 'À propos de nous' },
  title: {
    es: 'Un hotel de montaña pensado para disfrutar de la naturaleza',
    en: 'A mountain hotel designed to enjoy nature',
    fr: 'Un hôtel de montagne conçu pour profiter de la nature',
  },
  quote1: {
    es: 'Santa Cristina es un lugar privilegiado en el corazón de los Pirineos para los que buscan placeres y experiencias únicos.',
    en: 'Santa Cristina is a privileged spot in the heart of the Pyrenees for those seeking pleasures and unique experiences.',
    fr: 'Santa Cristina est un endroit privilégié au cœur des Pyrénées pour ceux qui recherchent des plaisirs et des expériences uniques.',
  },
  quote2: {
    es: 'Un lugar pensado para que el viajero sienta la tranquilidad y serenidad que da la naturaleza.',
    en: 'A place designed for the traveller to feel the tranquillity and serenity that nature gives.',
    fr: 'Un lieu conçu pour que le voyageur ressente la tranquillité et la sérénité que donne la nature.',
  },
  location: {
    es: 'Entre Canfranc y Candanchú, en los Pirineos de Huesca, a la vera del río Aragón, comunicado con Francia a través del Parque Nacional de los Pirineos, junto a las estaciones de esquí de Candanchú-Astún y Le Somport, y a pocos kilómetros de Jaca.',
    en: 'Between Canfranc and Candanchú, in the Pyrenees of Huesca, beside the river Aragón, connected to France through the Pyrénées National Park, near the ski resorts of Candanchú-Astún and Le Somport, and a few kilometres from Jaca.',
    fr: 'Entre Canfranc et Candanchú, dans les Pyrénées de Huesca, au bord de la rivière Aragón, relié à la France par le Parc national des Pyrénées, à proximité des stations de Candanchú-Astún et du Somport, et à quelques kilomètres de Jaca.',
  },
  servicesTitle: { es: 'Lo que encontrarás en la casa', en: 'What you will find here', fr: 'Ce que vous trouverez sur place' },
  services: {
    es: [
      'WiFi gratuito en las zonas comunes',
      'Gimnasio con máquinas cardiovasculares (gratuito)',
      'Espacio guarda-bicicletas y herramientas',
      'Estacionamiento público exterior gratuito frente al hotel',
      'Bar y la mejor terraza panorámica del valle',
      'Salas de estar',
      'Billar y futbolín',
      'Restaurante El Boj',
      'Petit Spa (de pago)',
    ],
    en: [
      'Free WiFi in common areas',
      'Gym with cardio machines (free of charge)',
      'Bike storage space and tools',
      'Free public outdoor parking in front of the hotel',
      'Bar and the best panoramic terrace in the valley',
      'Living rooms',
      'Snooker table and table football',
      'El Boj restaurant',
      'Petit Spa (extra charge)',
    ],
    fr: [
      'Wi-Fi gratuit dans les parties communes',
      'Salle de sport avec appareils cardio-vasculaires (gratuit)',
      'Espace de stockage de vélos et outils',
      "Parking public extérieur gratuit devant l'hôtel",
      'Bar et la meilleure terrasse panoramique de la vallée',
      'Salons',
      'Billard et baby-foot',
      'Restaurant El Boj',
      'Petit Spa (avec supplément)',
    ],
  },
  caminoEyebrow: { es: 'Camino de Santiago', en: 'Way of St. James', fr: 'Chemin de Saint-Jacques' },
  caminoTitle: { es: 'Una casa en el Camino', en: 'A house on the Way', fr: 'Une maison sur le Chemin' },
  caminoText: {
    es: 'El Camino de Santiago aragonés cruza los Pirineos por el puerto de Somport y baja por el valle del Aragón hacia Canfranc y Jaca, justo al lado del hotel. A 4 km, en Candanchú, quedan las ruinas del monasterio de Santa Cristina de Somport: llegó a ser uno de los tres hospitales-albergues de peregrinos más importantes de la cristiandad y atendía a quienes venían de Oloron. De él toma su nombre la casa.',
    en: 'The Aragonese Way of St. James crosses the Pyrenees at the Somport pass and follows the Aragón valley down to Canfranc and Jaca, right beside the hotel. Four kilometres away, in Candanchú, lie the ruins of the monastery of Santa Cristina de Somport: one of the three main pilgrim hospitals of Christendom, which cared for walkers arriving from France. The house takes its name from it.',
    fr: 'Le chemin de Saint-Jacques aragonais franchit les Pyrénées au col du Somport et descend la vallée de l’Aragón vers Canfranc et Jaca, juste à côté de l’hôtel. À 4 km, à Candanchú, se trouvent les ruines du monastère de Santa Cristina du Somport : l’un des trois grands hôpitaux de pèlerins de la chrétienté, qui accueillait ceux venant de la vallée d’Aspe. La maison porte son nom.',
  },
  meetingsTitle: { es: 'Reuniones y empresas', en: 'Meetings and companies', fr: 'Réunions et entreprises' },
  meetingsShort: {
    es: '¿Una reunión, una presentación o una jornada de trabajo lejos de la ciudad? Preparamos la sala y la comida a vuestra medida.',
    en: 'A meeting, a presentation or a working day away from the city? We prepare the room and the catering to suit you.',
    fr: 'Une réunion, une présentation ou une journée de travail loin de la ville ? Nous préparons la salle et la restauration sur mesure.',
  },
  meetings: {
    es: 'Si buscas un lugar para tus reuniones, presentaciones, jornadas de trabajo o convenciones, Santa Cristina es el lugar perfecto para tomar decisiones desde la calma y serenidad que proporciona la ubicación en plena naturaleza. Le ofrecemos un servicio de restauración personalizado, sólo díganos lo que necesita.',
    en: 'If you are looking for a place for meetings, presentations, workshops and conventions, Santa Cristina is the perfect place to make decisions from the calm and serenity of a location in natural surroundings. We offer a personalised restaurant service, just tell us what you need.',
    fr: 'Si vous cherchez un endroit pour vos réunions, présentations, journées de travail ou conventions, Santa Cristina est l’endroit parfait pour prendre des décisions dans le calme et la sérénité qu’apporte un emplacement en pleine nature. Nous vous offrons un service de restauration personnalisé, dites-nous simplement ce dont vous avez besoin.',
  },
  meetingsCta: { es: 'Solicitar información', en: 'Request information', fr: 'Demander des informations' },
  historyTitle: { es: 'Historia', en: 'History', fr: 'Histoire' },
  historyEyebrow: { es: 'De aduana a hotel', en: 'From customs house to hotel', fr: "De la douane à l'hôtel" },
} satisfies Record<string, L | L<string[]>>;

export const history: { year: L; title: L; text: L }[] = [
  {
    year: { es: 'Siglo XI', en: '11th century', fr: 'XIe siècle' },
    title: { es: 'El nombre', en: 'The name', fr: 'Le nom' },
    text: {
      es: 'Santa Cristina de Somport, el hospital de peregrinos del Camino levantado en el puerto, presta su nombre a la casa.',
      en: 'Santa Cristina de Somport, the pilgrim hospital built on the pass, lends its name to the house.',
      fr: 'Santa Cristina du Somport, l’hôpital de pèlerins bâti sur le col, donne son nom à la maison.',
    },
  },
  {
    year: { es: 'Finales del s. XIX', en: 'Late 19th century', fr: 'Fin du XIXe siècle' },
    title: { es: 'Aduana del Cuerpo de Carabineros', en: 'Carabineros customs house', fr: 'Douane du Corps des Carabiniers' },
    text: {
      es: 'Se construye el edificio de montaña como aduana y cuartel del Cuerpo de Carabineros, que custodiaba la frontera, a 1.300 metros de altitud y a 5 km del Col de Somport.',
      en: 'The mountain building is erected as a customs house and barracks for the Carabineros corps, who guarded the border, at 1,300 metres and 5 km from Col de Somport.',
      fr: 'Le bâtiment de montagne est construit comme douane et caserne du Corps des Carabiniers, qui gardait la frontière, à 1 300 mètres d’altitude et à 5 km du col du Somport.',
    },
  },
  {
    year: { es: 'Siglo XX', en: '20th century', fr: 'XXe siècle' },
    title: { es: 'Cuartel de la Guardia Civil', en: 'Guardia Civil barracks', fr: 'Caserne de la Guardia Civil' },
    text: {
      es: 'Cuando los Carabineros se integran en la Guardia Civil, el edificio pasa a ser cuartel de la Guardia Civil. Así fue hasta convertirse en hotel y restaurante.',
      en: 'When the Carabineros were merged into the Guardia Civil, the building became a Guardia Civil barracks, which it remained until it was turned into a hotel and restaurant.',
      fr: 'Lorsque les Carabiniers sont intégrés à la Guardia Civil, le bâtiment devient une caserne de la Guardia Civil, jusqu’à sa transformation en hôtel et restaurant.',
    },
  },
  {
    year: { es: '1991', en: '1991', fr: '1991' },
    title: { es: 'Nace el hotel', en: 'The hotel opens', fr: "Naissance de l'hôtel" },
    text: {
      es: 'El antiguo cuartel abre sus puertas como hotel.',
      en: 'The former barracks opens its doors as a hotel.',
      fr: 'L’ancienne caserne ouvre ses portes en tant qu’hôtel.',
    },
  },
  {
    year: { es: '2006', en: '2006', fr: '2006' },
    title: { es: 'Reforma integral', en: 'Full renovation', fr: 'Rénovation intégrale' },
    text: {
      es: 'Una reforma de instalaciones, servicios y equipamientos incorpora el Petit Spa, el restaurante El Boj, la terraza y mirador y la decoración única de Vicente García Plana. El proyecto lo dirige el arquitecto Ignacio Arzubialde.',
      en: 'A full renovation adds the Petit Spa, El Boj restaurant, the panoramic terrace and the unique decoration by Vicente García Plana. The project is directed by architect Ignacio Arzubialde.',
      fr: 'Une rénovation intégrale ajoute le Petit Spa, le restaurant El Boj, la terrasse panoramique et la décoration unique de Vicente García Plana. Le projet est dirigé par l’architecte Ignacio Arzubialde.',
    },
  },
];

/* ------------------------------------------------------------------ */
/* PÁGINA DE LOS PIRINEOS                                              */
/* ------------------------------------------------------------------ */

export const pyreneesIntro = {
  title: {
    es: 'Los Pirineos, desde nuestra puerta',
    en: 'The Pyrenees from our doorstep',
    fr: 'Les Pyrénées depuis notre porte',
  },
  lead: {
    es: 'Los alrededores son ideales para el senderismo, el ciclismo, la escalada y los deportes de invierno. Tanto la ruta transpirenaica GR11 como el Camino de Santiago pasan junto al hotel, punto de partida para recorrer en moto o en coche los valles y pueblos de ambas vertientes de los Pirineos.',
    en: 'The surrounding area is popular for hiking, cycling, climbing and winter sports. Both the GR11 trekking route and the Way of St. James pass by the hotel, a starting point for exploring the valleys and villages on both sides of the Pyrenees by motorbike or car.',
    fr: 'Les environs sont parfaits pour la randonnée, le cyclisme, l’escalade et les sports d’hiver. La GR11 et le chemin de Saint-Jacques passent à côté de l’hôtel, point de départ pour explorer en moto ou en voiture les vallées et villages des deux versants des Pyrénées.',
  },
  routeTitle: { es: 'El valle, de sur a norte', en: 'The valley, from south to north', fr: 'La vallée, du sud au nord' },
} satisfies Record<string, L>;

/** Recorrido del valle, de sur a norte (distancias publicadas). */
export const valleyRoute: { name: L; note: L; highlight?: boolean }[] = [
  { name: { es: 'Jaca', en: 'Jaca', fr: 'Jaca' }, note: { es: 'A pocos kilómetros', en: 'A few kilometres away', fr: 'À quelques kilomètres' } },
  { name: { es: 'Canfranc-Estación', en: 'Canfranc-Estación', fr: 'Canfranc-Estación' }, note: { es: 'Valle de Canfranc', en: 'Canfranc Valley', fr: 'Vallée de Canfranc' } },
  {
    name: { es: 'Hotel Santa Cristina', en: 'Hotel Santa Cristina', fr: 'Hôtel Santa Cristina' },
    note: { es: 'N330a km 669 · 1.300 m', en: 'N330a km 669 · 1,300 m', fr: 'N330a km 669 · 1 300 m' },
    highlight: true,
  },
  { name: { es: 'Candanchú · Astún', en: 'Candanchú · Astún', fr: 'Candanchú · Astún' }, note: { es: '4 km', en: '4 km', fr: '4 km' } },
  { name: { es: 'Col de Somport · Francia', en: 'Col de Somport · France', fr: 'Col du Somport · France' }, note: { es: '5 km', en: '5 km', fr: '5 km' } },
];

export const tobazo = {
  title: { es: 'Hotel Tobazo', en: 'Hotel Tobazo', fr: 'Hôtel Tobazo' },
  text: {
    es: 'Te recomendamos nuestro Hotel Tobazo a pie de pista en Candanchú y su gastrobar El Pikoteo para tardeo después de la jornada de esquí.',
    en: 'We recommend our Hotel Tobazo at the foot of the slopes in Candanchú and its gastrobar El Pikoteo for after skiing.',
    fr: "Nous vous recommandons l'hôtel Tobazo, situé au pied des pistes à Candanchú, et son gastro-bar El Pikoteo pour l'après-ski.",
  },
  teaser: {
    es: 'Para quien quiere dormir junto a las pistas: el Hotel Tobazo, nuestra otra casa en Candanchú.',
    en: 'For those who want to sleep by the slopes: Hotel Tobazo, our other house in Candanchú.',
    fr: 'Pour dormir au bord des pistes : l’Hôtel Tobazo, notre autre maison à Candanchú.',
  },
  cta: { es: 'Haz tu reserva aquí', en: 'Book here', fr: 'Réservez ici' },
  url: 'https://www.hoteltobazo.es/es/index.html',
} as const;

export const partners = [
  { name: 'Hotel Tobazo Candanchú', url: 'https://www.hoteltobazo.es/es/index.html' },
  { name: 'Marqués de Vitoria', url: 'https://www.marquesdevitoria.com/' },
] as const;
