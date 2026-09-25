
/**
 * Petit Spa. Procedencia: página oficial Petit Spa (CONTENT_AUDIT.md §7).
 *
 * `status.closed`: la web oficial indica que está cerrado. Cambiar a
 * `false` cuando reabra y el aviso desaparecerá de toda la web.
 */
export const spa = {
  status: {
    closed: true,
    notice: {
      es: 'Actualmente cerrado por motivo de la sequía',
      en: 'Currently closed due to the drought',
      fr: 'Actuellement fermé en raison de la sécheresse',
    },
    detail: {
      es: 'Consulta con recepción el estado del Petit Spa antes de tu visita.',
      en: 'Please check the status of the Petit Spa with reception before your visit.',
      fr: 'Renseignez-vous auprès de la réception sur l’état du Petit Spa avant votre visite.',
    },
  },
  eyebrow: { es: 'Petit Spa', en: 'Petit Spa', fr: 'Petit Spa' },
  cta: { es: 'Conocer el Petit Spa', en: 'Discover the Petit Spa', fr: 'Découvrir le Petit Spa' },
  title: {
    es: 'Pon a tono cuerpo y mente',
    en: 'Get your body and mind into shape',
    fr: 'Tonifiez votre corps et votre esprit',
  },
  lead: {
    es: 'Un área relax de 59 m² con sauna, bañera de hidromasaje, vestuario y piscina cubierta con vistas de 28 m² y 1,20 metros de profundidad.',
    en: 'A 59 m² relaxation area with sauna, hydromassage bath, lockers and a 28 m² indoor pool with views (1.20 m deep).',
    fr: 'Un espace détente de 59 m² avec sauna, baignoire d’hydromassage, vestiaire et piscine couverte avec vue de 28 m² et 1,20 mètre de profondeur.',
  },
  facts: [
    { value: '59 m²', label: { es: 'área relax', en: 'relaxation area', fr: 'espace détente' } },
    { value: '28 m²', label: { es: 'piscina cubierta con vistas', en: 'indoor pool with views', fr: 'piscine couverte avec vue' } },
    { value: '1,20 m', label: { es: 'de profundidad', en: 'deep', fr: 'de profondeur' } },
  ],
  features: {
    es: ['Sauna', 'Bañera de hidromasaje', 'Piscina cubierta con vistas', 'Vestuario'],
    en: ['Sauna', 'Hydromassage bath', 'Indoor pool with views', 'Lockers'],
    fr: ['Sauna', "Baignoire d'hydromassage", 'Piscine couverte avec vue', 'Vestiaire'],
  },
  ratesTitle: { es: 'Tarifas publicadas', en: 'Published rates', fr: 'Tarifs publiés' },
  rates: [
    {
      label: { es: 'Clientes alojados en el hotel', en: 'Hotel guests', fr: "Clients logés à l'hôtel" },
      price: { es: '10 € por persona · 45 minutos', en: '€10 per person · 45 minutes', fr: '10 € par personne · 45 minutes' },
    },
    {
      label: { es: 'No alojados', en: 'Non-guests', fr: 'Non-résidents' },
      price: { es: '15 € por persona · 45 minutos', en: '€15 per person · 45 minutes', fr: '15 € par personne · 45 minutes' },
    },
    {
      label: { es: 'Relax&Food (no alojados)', en: 'Relax&Food (non-guests)', fr: 'Relax&Food (non-résidents)' },
      price: {
        es: '10 € por persona al añadir un servicio de restauración en El Boj o terraza',
        en: '€10 per person when adding a meal at El Boj or on the terrace',
        fr: '10 € par personne en ajoutant un repas à El Boj ou en terrasse',
      },
    },
  ],
  rulesTitle: { es: 'Antes de tu sesión', en: 'Before your session', fr: 'Avant votre séance' },
  rules: {
    es: [
      'Es necesario reservar horario: aforo limitado.',
      'Los niños han de estar acompañados (la piscina está dentro del área spa).',
      'Obligatorio el uso de bañador, chanclas y gorro de baño (a la venta en recepción).',
      'El hotel proporciona toallas.',
    ],
    en: [
      'Booking a time slot is required: limited capacity.',
      'Children must be accompanied by adults (the pool is inside the spa area).',
      'Bathing suit, swimming cap and flip-flops required (for sale at reception).',
      'Towels are provided by the hotel.',
    ],
    fr: [
      'Réservation de créneau obligatoire : jauge limitée.',
      "Les enfants doivent être accompagnés (la piscine se trouve à l'intérieur de l'espace spa).",
      'Maillot de bain, bonnet de bain et tongs obligatoires (en vente à la réception).',
      "L'hôtel fournit les serviettes.",
    ],
  },
  bookText: {
    es: 'Reservas a través de info@santacristina.es, llamando al 974 373 300 o por WhatsApp al 686 285 283.',
    en: 'Reserve your access at info@santacristina.es, by calling +34 974 373 300 or via WhatsApp +34 686 285 283.',
    fr: "Réservez l'accès par info@santacristina.es, en appelant le +34 974 373 300 ou par WhatsApp au +34 686 285 283.",
  },
  emailSubject: {
    es: 'Petición para Petit Spa Santa Cristina',
    en: 'Inquiry for Petit Spa Santa Cristina',
    fr: 'Demande pour le Petit Spa Santa Cristina',
  },
} as const satisfies Record<string, unknown>;

