import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/config';

import anayet from '../assets/img/pirineos/anayet.jpg';
import sanJuan from '../assets/img/pirineos/san-juan-pena.jpg';
import estanes from '../assets/img/pirineos/estanes.jpg';
import estacion from '../assets/img/pirineos/estacion-canfranc.jpg';
import guixas from '../assets/img/pirineos/guixas.jpg';
import parcOurs from '../assets/img/pirineos/parc-ours.jpg';
import truchas from '../assets/img/pirineos/truchas.jpg';
import juncaral from '../assets/img/pirineos/juncaral.jpg';
import camino from '../assets/img/pirineos/camino-santiago.jpg';

export interface Place {
  id: string;
  name: L;
  address: string;
  tag: L;
  text: L;
  links: { label: L; url: string }[];
  image: ImageMetadata;
  alt: L;
  /**
   * true si el texto FR no existe en la web oficial (allí aparece en inglés)
   * y se ha traducido desde el español. Pendiente de validación por el hotel.
   */
  frFromSpanish?: boolean;
}

const seeRoute: L = { es: 'Ver la ruta', en: 'See route', fr: "Voir l'itinéraire" };
const moreInfo: L = { es: 'Más información', en: 'More info', fr: "Plus d'infos" };

const tags = {
  hike: { es: 'Senderismo', en: 'Hiking', fr: 'Randonnée' },
  pilgrim: { es: 'Peregrinación', en: 'Pilgrimage', fr: 'Pèlerinage' },
  heritage: { es: 'Patrimonio', en: 'Heritage', fr: 'Patrimoine' },
  family: { es: 'En familia', en: 'Family', fr: 'En famille' },
  nature: { es: 'Naturaleza', en: 'Nature', fr: 'Nature' },
} satisfies Record<string, L>;

export const places: Place[] = [
  {
    id: 'camino',
    name: { es: 'Camino de Santiago aragonés', en: 'Aragonese Way of St. James', fr: 'Chemin de Saint-Jacques aragonais' },
    address: 'Somport · Candanchú · Canfranc · Jaca',
    tag: tags.pilgrim,
    text: {
      es: 'Una etapa para caminar desde la puerta: el sendero jacobeo baja del puerto de Somport siguiendo el río Aragón, deja atrás las ruinas del hospital de Santa Cristina en Candanchú y continúa por Canfranc hacia Jaca.',
      en: 'A stage you can walk from the door: the pilgrim path comes down from the Somport pass along the river Aragón, passes the ruins of the Santa Cristina hospital in Candanchú and continues through Canfranc towards Jaca.',
      fr: 'Une étape à parcourir depuis la porte : le sentier jacquaire descend du col du Somport en suivant l’Aragón, passe devant les ruines de l’hôpital de Santa Cristina à Candanchú et continue par Canfranc vers Jaca.',
    },
    links: [],
    image: camino,
    alt: { es: 'Poste con la concha del Camino de Santiago, el peregrino y las marcas blanca y roja del GR', en: 'Waymark post with the Way of St. James shell, the pilgrim and the red-and-white GR marks', fr: 'Poteau avec la coquille du chemin de Saint-Jacques, le pèlerin et le balisage blanc et rouge du GR' },
  },
  {
    id: 'anayet',
    name: { es: 'Ibones de Anayet por Canal Roya', en: 'Anayet Lakes via Canal Roya', fr: "Lacs d'Anayet par Canal Roya" },
    address: '22640 Huesca',
    tag: tags.hike,
    text: {
      es: 'Bonita excursión de senderismo saliendo desde la puerta del Hotel Santa Cristina. 4 horas caminando por el valle de Canal Roya (GR11) hasta alcanzar los ibones de Anayet a 2.240 metros de altitud, a los pies del Pico Anayet (2.545 m). Es recomendable ser previsores con la ropa, llevar calzado de montaña y un completo picnic energético: en la montaña las condiciones meteorológicas pueden cambiar repentinamente.',
      en: 'Nice hiking excursion departing from the door of the Hotel Santa Cristina. 4 hours walking through the Canal Roya valley (GR11) until reaching the Anayet lakes at 2,240 metres, at the foot of Anayet Peak (2,545 m). It is advisable to be foresighted with clothes, wear hiking shoes and carry an energetic picnic: in the mountains the weather can change suddenly.',
      fr: "Belle randonnée au départ de la porte de l'Hôtel Santa Cristina. 4 heures de marche à travers la vallée du Canal Roya (GR11) jusqu'aux lacs d'Anayet à 2 240 mètres d'altitude, au pied du Pico Anayet (2 545 m). Il est conseillé d'être prévoyant avec les vêtements, de porter des chaussures de montagne et un pique-nique énergétique : en montagne, la météo peut changer soudainement.",
    },
    links: [{ label: seeRoute, url: 'https://es.wikiloc.com/rutas-senderismo/canal-roya-ibones-anayet-1723641' }],
    image: anayet,
    alt: { es: 'Caballos pastando junto a un ibón de los Pirineos', en: 'Horses grazing by a Pyrenean mountain lake', fr: 'Chevaux au pâturage près d’un lac pyrénéen' },
  },
  {
    id: 'truchas',
    name: { es: 'Ibones de Truchas y Escalar', en: 'Truchas and Escalar Lakes', fr: 'Lacs Truchas et Escalar' },
    address: 'Ibón de Truchas, 22889 Huesca',
    tag: tags.hike,
    text: {
      es: 'El ibón de Truchas, también llamado de Astún, está a 2.144 metros de altitud en la estación invernal de Astún, a 10 minutos del ibón de Escalar. De ambos ibones nace el río Aragón. Desde aquí se inician muchas excursiones, como la famosa ruta de los Lacs de Ayous en pleno Parque Nacional de los Pirineos, bajo el pico de Midi d’Ossau. Se puede ir en coche desde el hotel hasta el parking de Astún y subir andando o en telesilla, cuando lo abren en verano.',
      en: 'The Lake of Truchas, also called Astún Lake, is located 2,144 metres above sea level in the winter resort of Astún, 10 minutes walking from the Lake of Escalar. The Aragón river is born from both lakes. From here you can follow many hiking tracks, such as the Lacs d’Ayous in the heart of the Pyrenees National Park, under the peak of Midi d’Ossau. You can drive from the hotel to the Astún car park, then walk up or take the chairlift when it is open in summer.',
      fr: "Le lac Truchas, également appelé lac d'Astún, se trouve à 2 144 mètres d'altitude dans la station d'Astún, à 10 minutes du lac Escalar. La rivière Aragón naît de ces lacs. La célèbre route des Lacs d'Ayous, dans le Parc national des Pyrénées, sous le Pic du Midi d'Ossau, peut démarrer d'ici. Vous pouvez aller en voiture de l'hôtel au parking d'Astún, puis monter à pied ou en télésiège, quand il est ouvert en été.",
    },
    links: [],
    image: truchas,
    alt: { es: 'Ibón de alta montaña rodeado de pastos', en: 'High mountain lake surrounded by pastures', fr: 'Lac de haute montagne entouré de pâturages' },
  },
  {
    id: 'estanes',
    name: { es: 'Ibón de Estanés', en: 'Estanés Lake', fr: "Lac d'Estanés" },
    address: 'Ibón de Estanés, 22728 Huesca',
    tag: tags.hike,
    frFromSpanish: true,
    text: {
      es: 'Lago de los Pirineos de Aragón en el término municipal de Ansó (Jacetania), justo al lado de la frontera francesa, a 1.754 metros de altitud y con 29 ha de superficie. Desde el hotel puede hacerse la excursión desde el aparcamiento de Candanchú o desde el de Sansanet, a 5 km de la frontera del Col de Somport, un recorrido más fácil.',
      en: 'A lake of the Aragonese Pyrenees in the municipality of Ansó (Jacetania), right next to the French border, at 1,754 metres with an area of 29 ha. From the hotel you can start this hike from the Candanchú car park or from the Sansanet car park, 5 km from the Col de Somport border — an easier route.',
      fr: "Lac des Pyrénées aragonaises sur la commune d'Ansó (Jacetania), juste à côté de la frontière française, à 1 754 mètres d'altitude et d'une superficie de 29 ha. Depuis l'hôtel, la randonnée peut partir du parking de Candanchú ou de celui de Sansanet, à 5 km de la frontière du col du Somport, un parcours plus facile.",
    },
    links: [
      { label: { es: 'Ruta desde Candanchú', en: 'Route from Candanchú', fr: 'Itinéraire depuis Candanchú' }, url: 'https://es.wikiloc.com/rutas-senderismo/ibon-de-estanes-desde-candanchu-14341355' },
      {
        label: { es: 'Ruta desde Sansanet', en: 'Route from Sansanet', fr: 'Itinéraire depuis Sansanet' },
        url: 'https://es.wikiloc.com/rutas-senderismo/ibon-de-estanes-desde-sansanet-por-el-hayedo-de-sansanet-y-puerto-de-estanes-bajada-por-el-valle-de-4965918',
      },
    ],
    image: estanes,
    alt: { es: 'Senderistas junto al ibón de Estanés', en: 'Hikers by Estanés Lake', fr: "Randonneurs près du lac d'Estanés" },
  },
  {
    id: 'estacion',
    name: { es: 'Estación Internacional de Canfranc', en: 'Canfranc International Railway Station', fr: 'Gare internationale de Canfranc' },
    address: 'Av. de Fernando el Católico, 2, 22880 Canfranc, Huesca',
    tag: tags.heritage,
    text: {
      es: 'Impresionante edificio inaugurado en 1928 por el rey Alfonso XIII y el presidente francés Gaston Doumergue. Fue estación internacional, aduana, comisaría, oficina de correos y hotel, y ha sido protagonista de historias de espías, guerra y contrabando. Hoy se realizan visitas guiadas al vestíbulo, andenes y pasos subterráneos, organizadas desde la Oficina de Turismo de Canfranc.',
      en: 'A monumental building inaugurated in 1928 by King Alfonso XIII and French President Gaston Doumergue. It was an international station and included a customs office, a police station, a post office and even a hotel. Today, guided visits to the majestic lobby and some of the former platforms and subways are available.',
      fr: "Bâtiment impressionnant inauguré en 1928 par le roi Alphonse XIII et le président Gaston Doumergue. Ce bijou architectural fut gare internationale, poste de douane, poste de police, bureau de poste et hôtel. Aujourd'hui, des visites guidées du hall, de certains quais et passages souterrains sont proposées.",
    },
    links: [
      {
        label: { es: 'Su historia', en: 'Its history', fr: 'Son histoire' },
        url: 'https://es.wikipedia.org/wiki/Estaci%C3%B3n_Internacional_de_Canfranc',
      },
    ],
    image: estacion,
    alt: { es: 'Estación Internacional de Canfranc nevada', en: 'Canfranc International Station under snow', fr: 'Gare internationale de Canfranc sous la neige' },
  },
  {
    id: 'san-juan',
    name: { es: 'Monasterio de San Juan de la Peña', en: 'Royal Monastery of San Juan de la Peña', fr: 'Monastère Saint-Jean de la Peña' },
    address: 'Carretera A-1603, s/n, 22711 Jaca, Huesca',
    tag: tags.heritage,
    text: {
      es: 'El monasterio más importante de Aragón en la alta Edad Media, con su Panteón Real. Forma parte del Camino aragonés del Camino de Santiago y, según la leyenda, el Santo Grial estuvo ahí. Recomendamos disfrutar de las vistas de la cordillera desde el Balcón de los Pirineos, al que se accede por el Monasterio Nuevo.',
      en: 'One of the most important monasteries in Aragón in the Middle Ages, with a two-level church partially carved into the cliff. Legend says the chalice of the Last Supper (the Holy Grail) was kept here for protection.',
      fr: "Symbole du maintien de la foi chrétienne dans les Pyrénées, ce monastère fut choisi comme panthéon par les rois d'Aragon. Il se trouve sur le chemin de Saint-Jacques et, selon la légende, le Saint-Graal y fut conservé. Profitez de la vue sur les Pyrénées depuis le belvédère près du Monasterio Nuevo.",
    },
    links: [{ label: moreInfo, url: 'http://www.monasteriosanjuan.com/' }],
    image: sanJuan,
    alt: { es: 'Monasterio de San Juan de la Peña bajo la roca', en: 'San Juan de la Peña monastery beneath the cliff', fr: 'Monastère de San Juan de la Peña sous la falaise' },
  },
  {
    id: 'guixas',
    name: { es: 'Cueva de Las Güixas', en: 'Cave of Las Güixas', fr: 'Grotte de Las Güixas' },
    address: 'Av. de Francia, 12, 22870 Villanúa, Huesca',
    tag: tags.nature,
    text: {
      es: 'Cueva acondicionada para su visita a los pies de la montaña de Collarada, formada durante las últimas glaciaciones del Cuaternario, con estalactitas, estalagmitas, columnas, coladas y gours. Visitas guiadas.',
      en: 'Guided visit: descend a few metres underground to contemplate an almost dreamlike landscape of stalactites, stalagmites, columns, castings and gours created over time.',
      fr: 'Visite guidée : descendre à quelques mètres sous terre pour contempler un paysage presque onirique de stalactites, stalagmites, colonnes, coulées et gours créés au fil du temps.',
    },
    links: [{ label: moreInfo, url: 'http://www.turismovillanua.net/descubrir/visita-la-cueva-las-guixas/' }],
    image: guixas,
    alt: { es: 'Formaciones calcáreas en el interior de la cueva', en: 'Limestone formations inside the cave', fr: 'Formations calcaires dans la grotte' },
  },
  {
    id: 'parc-ours',
    name: { es: "Parc'Ours · Parque animal", en: "Parc'Ours · Animal park", fr: "Parc'Ours · Parc animalier" },
    address: 'Espace animalier, 64490 Borce, Francia',
    tag: tags.family,
    frFromSpanish: true,
    text: {
      es: 'En el corazón del Valle del Aspe, en el pueblo medieval de Borce, un parque faunístico de 7 ha especialmente recomendado para niños: un paseo de 1 a 2 horas entre animales domésticos y salvajes (sarrios, muflones, marmotas, ciervos…) y, por supuesto, los osos. Dispone de área de pícnic.',
      en: 'In the heart of the Aspe Valley, in the medieval village of Borce, an exceptional wildlife park especially recommended for children: a 1-2 hour walk among domestic and wild animals (chamois, mouflons, marmots, deer…) and of course, the bears. Picnic area available.',
      fr: "Au cœur de la vallée d'Aspe, dans le village médiéval de Borce, un parc animalier de 7 ha particulièrement recommandé aux enfants : une promenade de 1 à 2 heures parmi animaux domestiques et sauvages (isards, mouflons, marmottes, cerfs…) et, bien sûr, les ours. Aire de pique-nique.",
    },
    links: [{ label: moreInfo, url: 'https://www.parc-ours.fr/es/' }],
    image: parcOurs,
    alt: { es: 'Tres osos pardos sentados en la hierba', en: 'Three brown bears sitting on the grass', fr: "Trois ours bruns assis dans l'herbe" },
  },
  {
    id: 'juncaral',
    name: { es: 'Ecoparque El Juncaral', en: 'El Juncaral Ecopark', fr: 'Écoparc El Juncaral' },
    address: 'N-330, km 656,4, 22870 Villanúa, Huesca',
    tag: tags.family,
    text: {
      es: 'Parque de aventura en la naturaleza para toda la familia, a los pies de Collarada (2.883 m), en un bosque de pinos y abetos: 5 recorridos en altura por nivel de dificultad, 60 juegos y 15 tirolinas, durante unas 3 horas.',
      en: 'A nature adventure park for the whole family at the foot of Collarada (2,883 m), in an impressive forest of pine and fir trees. Zip lines and much more.',
      fr: "Parc d'aventure nature pour toute la famille, au pied de la Collarada (2 883 m), dans une impressionnante forêt de pins et de sapins. Tyroliennes et bien plus encore.",
    },
    links: [{ label: moreInfo, url: 'http://www.turismovillanua.net/descubrir/ecoparque-juncaral-villanua/' }],
    image: juncaral,
    alt: { es: 'Niños en un recorrido de aventura entre árboles', en: 'Children on a treetop adventure course', fr: "Enfants sur un parcours d'aventure dans les arbres" },
  },
];

export const pyreneesPage = {
  eyebrow: { es: 'Lugares para descubrir', en: 'Spots to discover', fr: 'Endroits à découvrir' },
  title: { es: 'Bienvenido a los Pirineos', en: 'Welcome to the Pyrenees', fr: 'Bienvenue dans les Pyrénées' },
} as const;
