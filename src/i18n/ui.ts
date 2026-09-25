import type { L, Lang } from './config';

/**
 * Textos de interfaz (navegación, botones, etiquetas).
 * Los textos editoriales del hotel están en src/content/.
 */
const ui = {
  // Navegación
  'nav.home': { es: 'Inicio', en: 'Home', fr: 'Accueil' },
  'nav.hotel': { es: 'Hotel', en: 'Hotel', fr: 'Hôtel' },
  'nav.rooms': { es: 'Habitaciones', en: 'Rooms', fr: 'Chambres' },
  'nav.elBoj': { es: 'El Boj', en: 'El Boj', fr: 'El Boj' },
  'nav.elBojFull': { es: 'Restaurante El Boj', en: 'El Boj restaurant', fr: 'Restaurant El Boj' },
  'nav.spa': { es: 'Petit Spa', en: 'Petit Spa', fr: 'Petit Spa' },
  'nav.weddings': { es: 'Bodas y eventos', en: 'Weddings & events', fr: 'Mariages et événements' },
  'nav.pyrenees': { es: 'Los Pirineos', en: 'The Pyrenees', fr: 'Les Pyrénées' },
  'nav.gallery': { es: 'Galería', en: 'Gallery', fr: 'Galerie' },
  'nav.contact': { es: 'Contacto', en: 'Contact', fr: 'Contact' },
  'nav.tobazo': { es: 'Hotel Tobazo', en: 'Hotel Tobazo', fr: 'Hôtel Tobazo' },
  'nav.menu': { es: 'Menú', en: 'Menu', fr: 'Menu' },
  'nav.close': { es: 'Cerrar', en: 'Close', fr: 'Fermer' },
  'nav.main': { es: 'Navegación principal', en: 'Main navigation', fr: 'Navigation principale' },
  'nav.skip': { es: 'Ir al contenido', en: 'Skip to content', fr: 'Aller au contenu' },
  'nav.language': { es: 'Idioma', en: 'Language', fr: 'Langue' },
  'nav.breadcrumb': { es: 'Ruta de navegación', en: 'Breadcrumb', fr: "Fil d'Ariane" },

  // Reservas
  'book.cta': { es: 'Reservar', en: 'Book', fr: 'Réserver' },
  'book.ctaLong': { es: 'Reservar estancia', en: 'Book your stay', fr: 'Réserver un séjour' },
  'book.room': { es: 'Reservar esta habitación', en: 'Book this room', fr: 'Réserver cette chambre' },
  'book.title': { es: 'Reserva tu estancia', en: 'Book your stay', fr: 'Réservez votre séjour' },
  'book.arrival': { es: 'Llegada', en: 'Arrival', fr: 'Arrivée' },
  'book.departure': { es: 'Salida', en: 'Departure', fr: 'Départ' },
  'book.guests': { es: 'Huéspedes', en: 'Guests', fr: 'Personnes' },
  'book.adults': { es: 'Adultos', en: 'Adults', fr: 'Adultes' },
  'book.submit': { es: 'Ver disponibilidad', en: 'Check availability', fr: 'Voir les disponibilités' },
  'book.noDates': { es: 'Ver disponibilidad sin fechas', en: 'Browse without dates', fr: 'Voir sans dates' },
  'book.direct': {
    es: 'Reserva ahora con cancelación gratuita y descuentos especiales',
    en: 'Book now with free cancellation and special discounts',
    fr: 'Réservez maintenant avec annulation gratuite et remises spéciales',
  },
  'book.secure': {
    es: 'Reserva segura en el motor oficial del hotel. Se abre en una pestaña nueva.',
    en: "Secure booking on the hotel's official engine. Opens in a new tab.",
    fr: "Réservation sécurisée sur le moteur officiel de l'hôtel. S'ouvre dans un nouvel onglet.",
  },
  'book.help': { es: '¿Prefieres hablar con nosotros?', en: 'Prefer to talk to us?', fr: 'Vous préférez nous parler ?' },
  'book.dateError': {
    es: 'La salida debe ser posterior a la llegada.',
    en: 'Departure must be after arrival.',
    fr: "Le départ doit être postérieur à l'arrivée.",
  },

  // Restaurante
  'boj.book': { es: 'Reservar mesa', en: 'Book a table', fr: 'Réserver une table' },
  'boj.discover': { es: 'Descubrir El Boj', en: 'Discover El Boj', fr: 'Découvrir El Boj' },
  'boj.whatsappMsg': {
    es: 'Hola, quiero reservar mesa en El Boj para el día ___ a las ___ para ___ personas.',
    en: 'Hello, I would like to book a table at El Boj on ___ at ___ for ___ people.',
    fr: 'Bonjour, je souhaite réserver une table à El Boj le ___ à ___ pour ___ personnes.',
  },
  'boj.emailSubject': {
    es: 'Petición para Restaurante El Boj',
    en: 'Table request – El Boj restaurant',
    fr: 'Demande de réservation – Restaurant El Boj',
  },

  'cta.request': { es: 'Solicitar información', en: 'Request information', fr: 'Demander des informations' },

  // Contacto
  'contact.phone': { es: 'Teléfono', en: 'Telephone', fr: 'Téléphone' },
  'contact.whatsapp': { es: 'WhatsApp', en: 'WhatsApp', fr: 'WhatsApp' },
  'contact.email': { es: 'Correo electrónico', en: 'Email', fr: 'E-mail' },
  'contact.address': { es: 'Dirección', en: 'Address', fr: 'Adresse' },
  'contact.directions': { es: 'Cómo llegar', en: 'Get directions', fr: 'Itinéraire' },
  'contact.call': { es: 'Llamar', en: 'Call', fr: 'Appeler' },
  'contact.write': { es: 'Escribir', en: 'Write', fr: 'Écrire' },
  'contact.mapLoad': { es: 'Mostrar mapa interactivo', en: 'Show interactive map', fr: 'Afficher la carte interactive' },
  'contact.mapNote': {
    es: 'Al cargar el mapa se conecta con Google Maps.',
    en: 'Loading the map connects to Google Maps.',
    fr: 'Le chargement de la carte se connecte à Google Maps.',
  },
  'contact.mapTitle': { es: 'Mapa de situación del hotel', en: 'Hotel location map', fr: "Carte de situation de l'hôtel" },
  'contact.openMaps': { es: 'Abrir en Google Maps', en: 'Open in Google Maps', fr: 'Ouvrir dans Google Maps' },

  // Formulario
  'form.name': { es: 'Nombre', en: 'Name', fr: 'Nom' },
  'form.phone': { es: 'Teléfono', en: 'Telephone', fr: 'Téléphone' },
  'form.email': { es: 'Correo electrónico', en: 'Email', fr: 'E-mail' },
  'form.message': { es: 'Mensaje', en: 'Message', fr: 'Message' },
  'form.date': { es: 'Fecha prevista', en: 'Planned date', fr: 'Date envisagée' },
  'form.guests': { es: 'Número de invitados', en: 'Number of guests', fr: "Nombre d'invités" },
  'form.eventType': { es: 'Tipo de celebración', en: 'Type of event', fr: "Type d'événement" },
  'form.optional': { es: 'opcional', en: 'optional', fr: 'facultatif' },
  'form.send': { es: 'Enviar consulta', en: 'Send enquiry', fr: 'Envoyer' },
  'form.sending': { es: 'Enviando…', en: 'Sending…', fr: 'Envoi…' },
  'form.sent': {
    es: 'Su mensaje ha sido enviado. ¡Gracias!',
    en: 'Your enquiry has been sent. Thank you!',
    fr: 'Votre demande a été envoyée. Merci !',
  },
  'form.mailto': {
    es: 'Se abrirá tu programa de correo con la consulta preparada para enviar a',
    en: 'Your email app will open with the enquiry ready to send to',
    fr: 'Votre messagerie va s’ouvrir avec la demande prête à envoyer à',
  },
  'form.error': {
    es: 'No se ha podido enviar. Escríbenos directamente a',
    en: 'It could not be sent. Please write to us directly at',
    fr: "L'envoi a échoué. Écrivez-nous directement à",
  },
  'form.privacy': {
    es: 'Usaremos estos datos únicamente para responder a tu consulta.',
    en: 'We will only use this information to reply to your enquiry.',
    fr: 'Nous utiliserons ces données uniquement pour répondre à votre demande.',
  },
  'form.required': { es: 'Campo obligatorio', en: 'Required field', fr: 'Champ obligatoire' },

  // Habitaciones
  'room.size': { es: 'Superficie', en: 'Room size', fr: 'Surface' },
  'room.occupancy': { es: 'Ocupación', en: 'Occupancy', fr: 'Occupation' },
  'room.amenities': { es: 'Comodidades', en: 'Amenities', fr: 'Services' },
  'room.view': { es: 'Ver habitación', en: 'View room', fr: 'Voir la chambre' },
  'room.all': { es: 'Ver todas las habitaciones', en: 'View all rooms', fr: 'Voir toutes les chambres' },
  'room.others': { es: 'Otras habitaciones', en: 'Other rooms', fr: 'Autres chambres' },
  'room.gallery': { es: 'Galería de la habitación', en: 'Room gallery', fr: 'Galerie de la chambre' },
  'room.photo': { es: 'Foto', en: 'Photo', fr: 'Photo' },
  'room.upTo': { es: 'Hasta', en: 'Up to', fr: "Jusqu'à" },
  'room.people': { es: 'personas', en: 'people', fr: 'personnes' },
  'room.ratesNote': {
    es: 'Tarifas y disponibilidad actualizadas en el motor de reservas del hotel.',
    en: "Up-to-date rates and availability on the hotel's booking engine.",
    fr: "Tarifs et disponibilités à jour sur le moteur de réservation de l'hôtel.",
  },

  // Galería / lightbox
  'gallery.open': { es: 'Ampliar imagen', en: 'Enlarge image', fr: "Agrandir l'image" },
  'gallery.prev': { es: 'Imagen anterior', en: 'Previous image', fr: 'Image précédente' },
  'gallery.next': { es: 'Imagen siguiente', en: 'Next image', fr: 'Image suivante' },
  'gallery.close': { es: 'Cerrar galería', en: 'Close gallery', fr: 'Fermer la galerie' },
  'gallery.all': { es: 'Todas', en: 'All', fr: 'Toutes' },

  // Genéricos
  'common.discover': { es: 'Descubrir', en: 'Discover', fr: 'Découvrir' },
  'common.more': { es: 'Más información', en: 'More information', fr: "Plus d'informations" },
  'common.readMore': { es: 'Leer más', en: 'Read more', fr: 'Lire la suite' },
  'common.seeRoute': { es: 'Ver la ruta', en: 'See route', fr: "Voir l'itinéraire" },
  'common.newTab': { es: '(se abre en una pestaña nueva)', en: '(opens in a new tab)', fr: "(s'ouvre dans un nouvel onglet)" },
  'common.onGoogle': { es: 'en Google', en: 'on Google', fr: 'sur Google' },
  'common.reviews': { es: 'reseñas', en: 'reviews', fr: 'avis' },
  'common.seeReviews': { es: 'Ver opiniones en Google', en: 'See reviews on Google', fr: 'Voir les avis sur Google' },
  'common.ratingSource': {
    es: 'Valoración media publicada en Google Maps. Consultado el',
    en: 'Average rating shown on Google Maps. Checked on',
    fr: 'Note moyenne affichée sur Google Maps. Consultée le',
  },
  'common.stars': { es: 'Hotel de 3 estrellas', en: '3-star hotel', fr: 'Hôtel 3 étoiles' },
  'common.follow': { es: 'Síguenos', en: 'Follow us', fr: 'Suivez-nous' },
  'common.backHome': { es: 'Volver al inicio', en: 'Back to home', fr: "Retour à l'accueil" },
  'common.address': { es: 'Dirección', en: 'Address', fr: 'Adresse' },

  // Pie
  'footer.camino': {
    es: 'Una casa en el Camino de Santiago',
    en: 'A house on the Way of St. James',
    fr: 'Une maison sur le chemin de Saint-Jacques',
  },
  'footer.credits': {
    es: 'Ilustraciones botánicas: O. W. Thomé, «Flora von Deutschland», 1885 (dominio público).',
    en: 'Botanical illustrations: O. W. Thomé, “Flora von Deutschland”, 1885 (public domain).',
    fr: 'Illustrations botaniques : O. W. Thomé, « Flora von Deutschland », 1885 (domaine public).',
  },
  'footer.explore': { es: 'Explorar', en: 'Explore', fr: 'Explorer' },
  'footer.contact': { es: 'Contacto', en: 'Contact', fr: 'Contact' },
  'footer.partners': { es: 'Nuestros partners', en: 'Partners', fr: 'Partenaires' },
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.', fr: 'Tous droits réservés.' },
  'footer.bookDirect': {
    es: 'Reserva directa en la web oficial',
    en: 'Book direct on the official website',
    fr: 'Réservation directe sur le site officiel',
  },
} satisfies Record<string, L>;

export type UiKey = keyof typeof ui;

export function useT(lang: Lang) {
  return (key: UiKey): string => ui[key][lang];
}

/** Devuelve el valor en el idioma pedido de un objeto traducido. */
export function tr<T>(value: L<T>, lang: Lang): T {
  return value[lang];
}

export function formatDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : lang, { day: 'numeric', month: 'long', year: 'numeric' }).format(
    new Date(`${iso}T12:00:00`),
  );
}

export function formatNumber(n: number, lang: Lang, digits = 0): string {
  return new Intl.NumberFormat(lang === 'en' ? 'en-GB' : lang, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);
}
