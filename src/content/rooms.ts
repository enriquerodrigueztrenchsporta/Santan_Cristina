import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/config';

import doble1 from '../assets/img/rooms/doble-1.jpg';
import doble2 from '../assets/img/rooms/doble-2.jpg';
import doble3 from '../assets/img/rooms/doble-3.jpg';
import bano1 from '../assets/img/rooms/bano-1.jpg';
import bano2 from '../assets/img/rooms/bano-2.jpg';
import superiorVistas from '../assets/img/rooms/superior-vistas.jpg';
import superior1 from '../assets/img/rooms/superior-1.jpg';
import superior2 from '../assets/img/rooms/superior-2.jpg';
import supletoria1 from '../assets/img/rooms/supletoria-1.jpg';
import refugio1 from '../assets/img/rooms/refugio-1.jpg';
import refugio2 from '../assets/img/rooms/refugio-2.jpg';
import refugio3 from '../assets/img/rooms/refugio-3.jpg';
import refugio4 from '../assets/img/rooms/refugio-4.jpg';
import refugio5 from '../assets/img/rooms/refugio-5.jpg';
import refugio6 from '../assets/img/rooms/refugio-6.jpg';
import familiar1 from '../assets/img/rooms/familiar-1.jpg';
import familiar2 from '../assets/img/rooms/familiar-2.jpg';
import familiar3 from '../assets/img/rooms/familiar-3.jpg';
import familiar4 from '../assets/img/rooms/familiar-4.jpg';

/**
 * Comodidades tal y como las publica la web oficial (SiteMinder),
 * con sus traducciones oficiales EN / FR.
 */
export const AMENITIES = {
  ac: { es: 'Aire acondicionado', en: 'Air conditioned', fr: 'Climatisation' },
  heating: { es: 'Calefacción', en: 'Heating', fr: 'Chauffage' },
  cots: { es: 'Cunas disponibles', en: 'Cots available', fr: 'Lits bébé disponible' },
  desk: { es: 'Escritorio', en: 'Desk', fr: 'Bureau' },
  doubleBed: { es: 'Cama doble', en: 'Double bed', fr: 'Lit double' },
  singleBed: { es: 'Cama individual', en: 'Single bed', fr: 'Lit une personne' },
  sofaBed: { es: 'Sofá-cama', en: 'Sofa bed', fr: 'Canapé-lit' },
  bunkBeds: { es: 'Literas', en: 'Bunk beds', fr: 'Lits superposés' },
  hairdryer: { es: 'Secador de pelo', en: 'Hairdryer', fr: 'Sèche-cheveux' },
  lift: { es: 'Ascensor de acceso', en: 'Lift/elevator access', fr: 'Ascenseur' },
  linen: { es: 'Ropa de cama y toallas', en: 'Linen and towels provided', fr: 'Linge de lit et serviettes fournis' },
  nonSmoking: { es: 'Para no fumadores', en: 'Non-smoking', fr: 'Non fumeur' },
  safe: { es: 'Caja fuerte', en: 'Room safe', fr: 'Coffre-fort dans la chambre' },
  tv: { es: 'Televisión', en: 'Television', fr: 'Télévision' },
  twoTv: { es: '2 TVs', en: '2 TV', fr: '2 TV' },
  accessible: { es: 'Habitación adaptada', en: 'Disabled room', fr: 'Chambre handicapé' },
  secondBath: { es: '2.º baño', en: '2nd bathroom', fr: '2ème salle de bain' },
  lounge: { es: 'Zona de salón', en: 'Lounge area', fr: 'Zone salon' },
  miniFridge: { es: 'Mini-frigorífico', en: 'Mini fridge', fr: 'Mini-réfrigérateur' },
  separateShower: { es: 'Ducha independiente', en: 'Separate shower', fr: 'Douche séparée' },
  showerOverBath: { es: 'Ducha sobre la bañera', en: 'Shower over bath', fr: 'Baignoire douche' },
  views: { es: 'Vistas', en: 'Views', fr: 'Avec vue' },
} satisfies Record<string, L>;

export type AmenityKey = keyof typeof AMENITIES;

export interface RoomImage {
  src: ImageMetadata;
  alt: L;
}

export interface Room {
  id: string;
  slug: L;
  name: L;
  /** Superficie en m² publicada en la web oficial (ES/FR). */
  size: number;
  /** Nota interna de verificación (no se publica). */
  sizeNote?: string;
  maxGuests: number;
  occupancy: L<string[]>;
  /** Descripción oficial (sin la lista de ocupaciones). */
  description: L;
  amenities: AmenityKey[];
  /** La primera imagen es la portada. */
  images: [RoomImage, ...RoomImage[]];
}

const altBath: L = {
  es: 'Baño completo con bañera y lavabo',
  en: 'Bathroom with bathtub and washbasin',
  fr: 'Salle de bain avec baignoire et lavabo',
};

export const rooms: Room[] = [
  {
    id: 'superior',
    slug: { es: 'superior-vistas-premium', en: 'superior-premium-views', fr: 'superieure-vues-premium' },
    name: { es: 'Superior con Vistas Premium', en: 'Superior with Premium Views', fr: 'Supérieure Vues Premium' },
    size: 22,
    maxGuests: 3,
    occupancy: {
      es: ['2 personas', '3 personas'],
      en: ['2 people', '3 people'],
      fr: ['2 personnes', '3 personnes'],
    },
    description: {
      es: 'Habitación amplia y exterior con bonitas vistas a la montaña, zona de salón con sofá cama y cama doble.',
      en: 'Outside and spacious room with beautiful mountain views, lounge area with sofa bed and double bed.',
      fr: 'Chambre extérieure et spacieuse avec de belles vues sur la montagne, salon avec canapé-lit et lit double.',
    },
    amenities: ['ac', 'secondBath', 'cots', 'desk', 'doubleBed', 'hairdryer', 'lift', 'linen', 'lounge', 'nonSmoking', 'miniFridge', 'safe', 'separateShower', 'sofaBed', 'views', 'twoTv'],
    images: [
      { src: superiorVistas, alt: { es: 'Vistas al valle y a la montaña desde el hotel', en: 'Views of the valley and mountains from the hotel', fr: "Vue sur la vallée et la montagne depuis l'hôtel" } },
      { src: superior1, alt: { es: 'Zona de salón con sofá de la habitación Superior', en: 'Lounge area with sofa in the Superior room', fr: 'Coin salon avec canapé de la chambre Supérieure' } },
      { src: superior2, alt: { es: 'Cama de la habitación Superior', en: 'Bed in the Superior room', fr: 'Lit de la chambre Supérieure' } },
      { src: bano2, alt: altBath },
    ],
  },
  {
    id: 'doble',
    slug: { es: 'doble', en: 'double', fr: 'double' },
    name: { es: 'Doble', en: 'Double', fr: 'Double' },
    size: 14,
    maxGuests: 2,
    occupancy: {
      es: ['1 persona: 2 camas', '2 personas: 2 camas / 1 cama doble'],
      en: ['1 person: 2 single beds', '2 persons: 2 single beds / 1 double bed'],
      fr: ['1 personne : 2 lits', '2 personnes : 2 lits / 1 lit double'],
    },
    description: {
      es: 'Habitación exterior con bañera o ducha.',
      en: 'Outside room with bath or shower.',
      fr: 'Chambre extérieure avec baignoire ou douche.',
    },
    amenities: ['ac', 'cots', 'desk', 'hairdryer', 'heating', 'lift', 'nonSmoking', 'safe', 'tv', 'accessible', 'doubleBed', 'singleBed', 'linen'],
    images: [
      { src: doble1, alt: { es: 'Habitación Doble con dos camas', en: 'Double room with two beds', fr: 'Chambre Double avec deux lits' } },
      { src: doble2, alt: { es: 'Habitación Doble con cama de matrimonio y escritorio', en: 'Double room with double bed and desk', fr: 'Chambre Double avec lit double et bureau' } },
      { src: bano1, alt: altBath },
      { src: doble3, alt: { es: 'Habitación Doble con dos camas junto a la ventana', en: 'Double room with two beds by the window', fr: 'Chambre Double avec deux lits près de la fenêtre' } },
    ],
  },
  {
    id: 'supletoria',
    slug: { es: 'doble-con-cama-supletoria', en: 'double-with-extra-bed', fr: 'double-avec-lit-d-appoint' },
    name: { es: 'Doble con cama supletoria', en: 'Double with extra bed', fr: "Double avec lit d'appoint" },
    size: 18,
    maxGuests: 3,
    occupancy: {
      es: ['2 adultos + 1 niño: 2 camas individuales / 1 cama doble + 1 cama supletoria'],
      en: ['2 adults + 1 child: 2 single beds / 1 double bed + 1 extra bed'],
      fr: ["2 adultes + 1 enfant : 2 lits simples / 1 lit double + 1 lit d'appoint"],
    },
    description: {
      es: 'Habitación exterior con bañera o ducha y alojamiento para 2 adultos y 1 niño.',
      en: 'Outside room with bath or shower and accommodation for 2 adults and 1 child.',
      fr: 'Chambre extérieure avec baignoire ou douche et hébergement pour 2 adultes et 1 enfant.',
    },
    amenities: ['ac', 'cots', 'desk', 'doubleBed', 'hairdryer', 'heating', 'lift', 'linen', 'nonSmoking', 'safe', 'tv', 'singleBed', 'sofaBed'],
    images: [
      { src: supletoria1, alt: { es: 'Habitación Doble con cama supletoria', en: 'Double room with extra bed', fr: "Chambre Double avec lit d'appoint" } },
      { src: bano2, alt: altBath },
      { src: bano1, alt: altBath },
    ],
  },
  {
    id: 'refugio',
    slug: { es: 'refugio-montana-para-4', en: 'mountain-retreat-for-4', fr: 'chambre-quadruple-avec-douche' },
    name: { es: 'Refugio Montaña para 4', en: 'Mountain Retreat for 4', fr: 'Chambre Quadruple avec Douche' },
    size: 21,
    sizeNote: 'ES y FR publican 21 m²; EN publica 237 ft² (≈22 m²). Confirmar con el hotel (CONTENT_AUDIT C1).',
    maxGuests: 4,
    occupancy: {
      es: ['4 adultos', '2 adultos + 2 niños'],
      en: ['4 adults', '2 adults + 2 children'],
      fr: ['4 adultes', '2 adultes + 2 enfants'],
    },
    description: {
      es: 'Amplia habitación cuádruple con 4 literas de gran formato (1,10 metros de ancho), baño con ducha doble y doble poza.',
      en: 'Spacious and outside quadruple room with 4 big bunk beds (1.10 metres wide) and double shower.',
      fr: 'Spacieuse chambre quadruple avec 4 grands lits superposés (1,10 mètre de large), salle de bain avec double douche et double lavabo.',
    },
    amenities: ['ac', 'bunkBeds', 'desk', 'hairdryer', 'heating', 'lift', 'linen', 'nonSmoking', 'safe', 'separateShower', 'tv'],
    images: [
      { src: refugio1, alt: { es: 'Refugio Montaña para 4 con literas de gran formato y escritorio', en: 'Mountain Retreat for 4 with large bunk beds and desk', fr: 'Chambre quadruple avec grands lits superposés et bureau' } },
      { src: refugio2, alt: { es: 'Literas de madera de gran formato', en: 'Large wooden bunk beds', fr: 'Grands lits superposés en bois' } },
      { src: refugio3, alt: { es: 'Baño con doble lavabo y espejos ovalados', en: 'Bathroom with double washbasin and oval mirrors', fr: 'Salle de bain avec double lavabo et miroirs ovales' } },
      { src: refugio4, alt: { es: 'Literas junto a la pared de piedra', en: 'Bunk beds next to the stone wall', fr: 'Lits superposés près du mur en pierre' } },
      { src: refugio5, alt: { es: 'Doble lavabo del baño', en: 'Double washbasin in the bathroom', fr: 'Double lavabo de la salle de bain' } },
      { src: refugio6, alt: { es: 'Ducha doble', en: 'Double shower', fr: 'Double douche' } },
    ],
  },
  {
    id: 'familiar',
    slug: { es: 'familiar', en: 'family', fr: 'familial' },
    name: { es: 'Familiar', en: 'Family', fr: 'Familial' },
    size: 20,
    maxGuests: 4,
    occupancy: {
      es: ['3 adultos', '2 adultos + 2 niños'],
      en: ['3 adults', '2 adults + 2 children'],
      fr: ['3 adultes', '2 adultes + 2 enfants'],
    },
    description: {
      es: 'Habitación espaciosa y exterior con bañera, 2 camas individuales y 1 sofá cama.',
      en: 'Outside and spacious room with bath, 2 single beds and 1 sofa bed.',
      fr: 'Chambre extérieure et spacieuse avec baignoire, 2 lits simples et 1 canapé-lit.',
    },
    amenities: ['ac', 'cots', 'desk', 'hairdryer', 'heating', 'lift', 'linen', 'nonSmoking', 'safe', 'sofaBed', 'showerOverBath', 'singleBed', 'tv'],
    images: [
      { src: familiar1, alt: { es: 'Habitación Familiar con dos camas individuales', en: 'Family room with two single beds', fr: 'Chambre Familiale avec deux lits simples' } },
      { src: familiar2, alt: altBath },
      { src: familiar3, alt: { es: 'Vista general de la habitación Familiar', en: 'General view of the Family room', fr: 'Vue générale de la chambre Familiale' } },
      { src: familiar4, alt: altBath },
    ],
  },
];

export function getRoom(id: string): Room {
  const room = rooms.find((r) => r.id === id);
  if (!room) throw new Error(`Habitación desconocida: ${id}`);
  return room;
}

/** Cabecera de la página de habitaciones (texto oficial de la web anterior). */
export const roomsPage = {
  title: {
    es: 'Habitaciones con vistas a las montañas',
    en: 'Rooms with views of the mountains',
    fr: 'Des chambres avec vue sur les montagnes',
  },
  lead: {
    es: 'Las habitaciones del Hotel Santa Cristina tienen bonitas vistas a las montañas y paisajes que nos rodean. Todas ellas tienen TV, aire acondicionado y caja fuerte.',
    en: 'The rooms at Santa Cristina have views of the mountains. All of them have TV, air conditioning and safe.',
    fr: 'Les chambres de l’Hôtel Santa Cristina offrent une vue sur les montagnes. Toutes disposent de la télévision, de la climatisation et d’un coffre-fort.',
  },
} satisfies Record<string, L>;
