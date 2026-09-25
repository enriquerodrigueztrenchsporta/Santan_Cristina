/**
 * Bodas y eventos. Procedencia: página oficial de bodas ES / EN / FR
 * (CONTENT_AUDIT.md §8) y bloque de reuniones de "Sobre nosotros".
 */
export const weddings = {
  eyebrow: { es: 'Bodas y eventos', en: 'Weddings and events', fr: 'Mariages et événements' },
  title: {
    es: 'Un día inolvidable y exclusivo con la tranquilidad y naturaleza por testigos',
    en: 'An unforgettable and exclusive day with nature as witness',
    fr: 'Une journée inoubliable et exclusive avec la nature comme témoin',
  },
  shortTitle: {
    es: 'Con la naturaleza por testigo',
    en: 'With nature as witness',
    fr: 'Avec la nature comme témoin',
  },
  lead: {
    es: 'Cuéntenos cómo le gustaría que fuese su gran día y le ayudaremos a conseguirlo.',
    en: 'Just let us know your idea of a great wedding celebration, and we will make it happen.',
    fr: 'Dites-nous ce que vous souhaiteriez pour votre grand jour et nous ferons tout pour vous aider à l’obtenir.',
  },
  spacesTitle: { es: 'Espacios', en: 'Spaces', fr: 'Espaces' },
  spaces: [
    {
      name: { es: 'Terraza-mirador', en: 'Panoramic terrace', fr: 'Terrasse panoramique' },
      text: {
        es: 'La terraza-mirador al valle y al río Aragón.',
        en: 'The terrace with an amazing view of the mountains, the valley and the river Aragón.',
        fr: 'La terrasse panoramique sur la vallée et la rivière Aragón.',
      },
    },
    {
      name: { es: 'Salón de El Boj', en: 'El Boj dining room', fr: "Salle d'El Boj" },
      text: {
        es: 'El salón principal de nuestro restaurante El Boj, con vistas al bosque de boj.',
        en: 'The main room of our El Boj restaurant, with views of the boxwood forest.',
        fr: 'Le salon principal de notre restaurant El Boj, avec vue sur la forêt de buis.',
      },
    },
    {
      name: { es: 'Todo el hotel', en: 'The whole hotel', fr: "Tout l'hôtel" },
      text: {
        es: 'Posibilidad de reservar todo el hotel si se alojan los invitados y tener un precioso hotel de montaña con encanto a su exclusiva disposición.',
        en: 'Consider the option of reserving our hotel exclusively for you and your guests.',
        fr: 'Possibilité de réserver tout l’hôtel si vos invités y séjournent, et d’avoir un charmant hôtel de montagne à votre disposition exclusive.',
      },
    },
  ],
  menusTitle: { es: 'Menús', en: 'Menus', fr: 'Menus' },
  menus: {
    es: 'Menús especiales con inspiración en la cocina natural pirenaica y gran bodega.',
    en: 'Special menus inspired by traditional Pyrenean cuisine and a varied selection of wines.',
    fr: 'Menus spéciaux inspirés par la cuisine naturelle des Pyrénées et grande cave.',
  },
  menusRequest: {
    es: 'Solicite más información sobre nuestros menús para bodas y condiciones de contratación.',
    en: 'For more information on our menus or any other detail, get in touch.',
    fr: "Sollicitez plus d'informations et nos menus de mariage.",
  },
  /** PDF oficial de menús. El PDF en español devuelve 403 en la web actual (ver auditoría); solo se enlaza el francés. */
  menuPdf: {
    es: '',
    en: '',
    fr: 'https://webbox-assets.siteminder.com/assets/gkumclnsibjtkwny/1a600967-0e3e-48a2-b1f1-0234964120c4.pdf',
  },
  menuPdfLabel: { es: 'Menús de boda (PDF)', en: 'Wedding menus (PDF)', fr: 'Menus de mariage (PDF)' },
  celebrationsTitle: { es: 'Otras celebraciones', en: 'Other celebrations', fr: 'Autres célébrations' },
  formTitle: { es: 'Cuéntenos su idea', en: 'Tell us your idea', fr: 'Parlez-nous de votre projet' },
  formIntro: {
    es: 'Le responderemos desde comercial@santacristina.es con la información de menús y condiciones.',
    en: 'We will reply from comercial@santacristina.es with information on menus and conditions.',
    fr: 'Nous vous répondrons depuis comercial@santacristina.es avec les informations sur les menus et conditions.',
  },
  eventTypes: {
    es: ['Boda', 'Celebración familiar', 'Grupo', 'Reunión o evento de empresa', 'Otro'],
    en: ['Wedding', 'Family celebration', 'Group', 'Meeting or corporate event', 'Other'],
    fr: ['Mariage', 'Fête de famille', 'Groupe', "Réunion ou événement d'entreprise", 'Autre'],
  },
  emailSubject: {
    es: 'Petición información bodas en Hotel Santa Cristina',
    en: 'Enquiry for Wedding in Hotel Santa Cristina',
    fr: "Demande d'informations sur les mariages à l'Hôtel Santa Cristina",
  },
  cta: { es: 'Solicitar información', en: 'Request information', fr: 'Demander des informations' },
} as const;
