import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/config';

/**
 * Galería. Para añadir una foto: copiarla en src/assets/img/<carpeta>/
 * y añadir su entrada aquí con el texto alternativo en los tres idiomas.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*/*.jpg', { eager: true });

function img(path: string): ImageMetadata {
  const mod = files[`../assets/img/${path}`];
  if (!mod) throw new Error(`Imagen no encontrada: ${path}`);
  return mod.default;
}

export type GalleryCategory = 'hotel' | 'rooms' | 'elBoj' | 'spa' | 'weddings' | 'surroundings';

export const galleryCategories: Record<GalleryCategory, L> = {
  hotel: { es: 'El hotel', en: 'The hotel', fr: "L'hôtel" },
  rooms: { es: 'Habitaciones', en: 'Rooms', fr: 'Chambres' },
  elBoj: { es: 'El Boj', en: 'El Boj', fr: 'El Boj' },
  spa: { es: 'Petit Spa', en: 'Petit Spa', fr: 'Petit Spa' },
  weddings: { es: 'Bodas y eventos', en: 'Weddings & events', fr: 'Mariages et événements' },
  surroundings: { es: 'Entorno', en: 'Surroundings', fr: 'Environs' },
};

export interface GalleryItem {
  src: ImageMetadata;
  alt: L;
  category: GalleryCategory;
}

const g = (path: string, category: GalleryCategory, es: string, en: string, fr: string): GalleryItem => ({
  src: img(path),
  category,
  alt: { es, en, fr },
});

export const gallery: GalleryItem[] = [
  g('hotel/hotel-valle-otono.jpg', 'hotel', 'El hotel en el valle en otoño', 'The hotel in the valley in autumn', "L'hôtel dans la vallée en automne"),
  g('hotel/hotel-invierno.jpg', 'hotel', 'El hotel con las montañas nevadas', 'The hotel with snow-capped mountains', "L'hôtel et les montagnes enneigées"),
  g('hotel/terraza-verano.jpg', 'hotel', 'Terraza panorámica en verano', 'Panoramic terrace in summer', 'Terrasse panoramique en été'),
  g('hotel/aduana-historica.jpg', 'hotel', 'Fotografía histórica del edificio nevado', 'Historic photograph of the building in the snow', 'Photographie historique du bâtiment sous la neige'),
  g('hotel/patio-nieve-noche.jpg', 'hotel', 'Entrada del hotel nevada al anochecer', 'Hotel entrance in the snow at dusk', "Entrée de l'hôtel enneigée à la tombée de la nuit"),
  g('hotel/fachada-patio.jpg', 'hotel', 'Fachada de piedra y patio de entrada', 'Stone façade and entrance courtyard', "Façade en pierre et cour d'entrée"),
  g('hotel/hotel-bosque-otono.jpg', 'hotel', 'Tejados del hotel entre el bosque otoñal', 'Hotel roofs among the autumn forest', "Toits de l'hôtel dans la forêt d'automne"),
  g('hotel/salon-chimenea.jpg', 'hotel', 'Salón con chimenea', 'Lounge with fireplace', 'Salon avec cheminée'),
  g('hotel/salon.jpg', 'hotel', 'Sala de estar', 'Living room', 'Salon'),
  g('hotel/recepcion.jpg', 'hotel', 'Recepción y zonas comunes', 'Reception and common areas', 'Réception et espaces communs'),
  g('hotel/billar.jpg', 'hotel', 'Sala de billar y futbolín', 'Snooker and table football room', 'Salle de billard et baby-foot'),
  g('hotel/gimnasio.jpg', 'hotel', 'Gimnasio con máquinas cardiovasculares', 'Gym with cardio machines', 'Salle de sport avec appareils cardio'),
  g('hotel/guarda-bicicletas.jpg', 'hotel', 'Guarda-bicicletas con herramientas', 'Bike storage with tools', 'Local à vélos avec outils'),
  g('hotel/sala-reuniones.jpg', 'hotel', 'Sala de reuniones durante una presentación', 'Meeting room during a presentation', 'Salle de réunion pendant une présentation'),
  g('hotel/patio-flores.jpg', 'hotel', 'Patio con flores', 'Courtyard with flowers', 'Cour fleurie'),
  g('rooms/superior-1.jpg', 'rooms', 'Salón de la habitación Superior', 'Lounge of the Superior room', 'Salon de la chambre Supérieure'),
  g('rooms/doble-2.jpg', 'rooms', 'Habitación Doble', 'Double room', 'Chambre Double'),
  g('rooms/refugio-1.jpg', 'rooms', 'Refugio Montaña para 4', 'Mountain Retreat for 4', 'Chambre Quadruple'),
  g('rooms/familiar-1.jpg', 'rooms', 'Habitación Familiar', 'Family room', 'Chambre Familiale'),
  g('rooms/supletoria-1.jpg', 'rooms', 'Doble con cama supletoria', 'Double with extra bed', "Double avec lit d'appoint"),
  g('rooms/refugio-3.jpg', 'rooms', 'Baño con doble lavabo', 'Bathroom with double washbasin', 'Salle de bain avec double lavabo'),
  g('el-boj/comedor.jpg', 'elBoj', 'Comedor del restaurante El Boj', 'El Boj dining room', "Salle du restaurant El Boj"),
  g('el-boj/comedor-2.jpg', 'elBoj', 'Mesas de El Boj junto a los ventanales', 'El Boj tables by the windows', "Tables d'El Boj près des baies vitrées"),
  g('el-boj/salon-banquete.jpg', 'elBoj', 'Salón preparado para un banquete', 'Room set up for a banquet', 'Salle dressée pour un banquet'),
  g('el-boj/quesos.jpg', 'elBoj', 'Mesa de quesos', 'Cheese table', 'Table de fromages'),
  g('el-boj/reposteria.jpg', 'elBoj', 'Repostería', 'Pastries', 'Pâtisseries'),
  g('el-boj/terraza-chill.jpg', 'elBoj', 'Zona de terraza con vistas al valle', 'Terrace area with valley views', 'Espace terrasse avec vue sur la vallée'),
  g('spa/piscina.jpg', 'spa', 'Piscina cubierta del Petit Spa con vistas al bosque', 'Petit Spa indoor pool with forest views', 'Piscine couverte du Petit Spa avec vue sur la forêt'),
  g('spa/piscina-nieve.jpg', 'spa', 'Piscina con el paisaje nevado al fondo', 'Pool with the snowy landscape behind', 'Piscine avec le paysage enneigé'),
  g('spa/piscina-2.jpg', 'spa', 'Piscina del Petit Spa', 'Petit Spa pool', 'Piscine du Petit Spa'),
  g('bodas/terraza-invitados.jpg', 'weddings', 'Invitados de una boda en la terraza con el valle al fondo', 'Wedding guests on the terrace with the valley behind', 'Invités d’un mariage sur la terrasse face à la vallée'),
  g('bodas/ceremonia-jardin.jpg', 'weddings', 'Ceremonia en el jardín', 'Ceremony in the garden', 'Cérémonie dans le jardin'),
  g('bodas/banquete-mesa.jpg', 'weddings', 'Mesa de banquete decorada', 'Decorated banquet table', 'Table de banquet décorée'),
  g('bodas/banquete-baile.jpg', 'weddings', 'Baile de los novios en el salón', 'The couple dancing in the dining room', 'Danse des mariés dans la salle'),
  g('bodas/ceremonia-interior.jpg', 'weddings', 'Ceremonia en una sala del hotel', 'Ceremony in a hotel room', "Cérémonie dans une salle de l'hôtel"),
  g('bodas/novios-patio.jpg', 'weddings', 'Novios en el patio del hotel', 'The couple in the hotel courtyard', "Les mariés dans la cour de l'hôtel"),
  g('bodas/pasillo-jardin.jpg', 'weddings', 'Pasillo de ceremonia al aire libre', 'Outdoor ceremony aisle', 'Allée de cérémonie en plein air'),
  g('bodas/salon-montaje.jpg', 'weddings', 'Salón montado para una celebración', 'Room set for a celebration', 'Salle préparée pour une célébration'),
  g('pirineos/valle-senderistas.jpg', 'surroundings', 'Senderistas en un valle de los Pirineos', 'Hikers in a Pyrenean valley', 'Randonneurs dans une vallée pyrénéenne'),
  g('pirineos/anayet.jpg', 'surroundings', 'Pastos de alta montaña con caballos', 'High mountain pastures with horses', 'Pâturages de haute montagne avec des chevaux'),
  g('pirineos/estacion-canfranc.jpg', 'surroundings', 'Estación Internacional de Canfranc', 'Canfranc International Station', 'Gare internationale de Canfranc'),
  g('pirineos/estanes.jpg', 'surroundings', 'Ibón de Estanés', 'Estanés Lake', "Lac d'Estanés"),
  g('pirineos/senal-gr11.jpg', 'surroundings', 'Señales de senderos de montaña', 'Mountain trail signposts', 'Panneaux de sentiers de montagne'),
  g('pirineos/valle-verano.jpg', 'surroundings', 'Valle verde en verano', 'Green valley in summer', 'Vallée verte en été'),
  g('pirineos/puente.jpg', 'surroundings', 'Puente de piedra sobre el río', 'Stone bridge over the river', 'Pont de pierre sur la rivière'),
  g('hotel/ciclistas.jpg', 'surroundings', 'Ciclistas a la entrada del hotel', 'Cyclists at the hotel entrance', "Cyclistes à l'entrée de l'hôtel"),
];

/** Acceso a una imagen concreta por ruta (usado por las páginas). */
export { img as galleryImage };
