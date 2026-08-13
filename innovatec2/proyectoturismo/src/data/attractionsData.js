import sijil from "../assets/sijil.jpg";
import sayab from "../assets/sayab.jpg";
import museo from "../assets/museo.jpg";
import puerta from "../assets/puertaalmar.webp";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import review1 from "../assets/review1.webp";
import review2 from "../assets/review2.webp";
import service1 from "../assets/service1.webp";
import service2 from "../assets/service2.webp";

// NOTA PARA EL DESARROLLADOR:
// Esta es información de ejemplo (placeholder) pensada para poblar el diseño.
// Sustituye los textos, coordenadas, negocios y enlaces de video/audio por
// información verificada de cada sitio antes de publicar en producción.

export const categories = [
  { id: "todos", label: "Todos" },
  { id: "cenotes", label: "Cenotes" },
  { id: "historia", label: "Historia" },
  { id: "playas", label: "Playas" },
  { id: "artesanias", label: "Artesanías" },
];

const attractions = [
  {
    id: "sijil-noh-ha",
    name: "Sijil Noh Ha",
    category: "cenotes",
    categoryLabel: "Cenote",
    location: "Carrillo Pto. Q. Roo",
    rating: 4.5,
    reviews: 355,
    price: "$199",
    coords: { lat: 19.5804, lng: -88.0453 },
    image: sijil,
    gallery: {
      current: [sijil, service1, about1],
      historic: [sijil, service1],
    },
    facilities: ["Vestidores", "Chalecos", "Guía local", "Estacionamiento"],
    shortDescription:
      "Un cenote semiabierto rodeado de selva, sagrado para las comunidades mayas de la zona por sus aguas cristalinas y su conexión con el inframundo maya (Xibalbá).",
    history:
      "Sijil Noh Ha significa, en maya, algo cercano a 'lugar del agua grande'. Durante siglos los cenotes de esta región fueron considerados portales sagrados hacia Xibalbá, el inframundo maya, y también la principal fuente de agua dulce para los asentamientos de la zona debido a la ausencia de ríos superficiales en la península. Las comunidades cercanas conservan hasta hoy rituales de agradecimiento al Yuum Cháak, el dios de la lluvia, antes de abrir el cenote a los visitantes cada temporada.",
    audioAvailable: true,
    videoUrl: "",
    flora: [
      "Ceiba (árbol sagrado maya, símbolo del universo)",
      "Chechén y Chakah, especies medicinales tradicionales",
      "Helechos y bromelias colgantes alrededor de la boca del cenote",
    ],
    fauna: [
      "Peces ciegos de cueva (Ogilbia pearsei) en las zonas más profundas",
      "Golondrinas y vencejos que anidan en las paredes rocosas",
      "Tortugas de agua dulce en los estanques cercanos",
    ],
    nearbyBusinesses: [
      { name: "Restaurante El Padrino", type: "Comida yucateca", distance: "0.8 km" },
      { name: "Artesanías Ixchel", type: "Artesanías textiles", distance: "1.2 km" },
      { name: "Cabañas Sac-Be", type: "Hospedaje", distance: "1.5 km" },
    ],
    schedule: {
      hours: "Lunes a domingo, 9:00 – 17:00 h",
      bestTime: "Temprano por la mañana (9:00–11:00 h) para evitar aglomeraciones",
      recommendations: [
        "Usa bloqueador solar biodegradable para proteger el ecosistema del cenote",
        "Ducha obligatoria antes de ingresar al agua",
        "Lleva calzado antiderrapante para las zonas rocosas",
      ],
    },
    environment: {
      climate: "Cálido subhúmedo, 24–33 °C todo el año",
      rainySeason: "Junio a octubre (lluvias intensas, posibles cierres temporales)",
      conservation:
        "Ecosistema kárstico sensible: evita bloqueadores no biodegradables, no arrojes basura ni alimentes a la fauna. El cenote forma parte del sistema de acuíferos que abastece a toda la región.",
    },
  },
  {
    id: "sayab-kuxtal",
    name: "Sayab Kuxtal",
    category: "cenotes",
    categoryLabel: "Cenote",
    location: "Carrillo Pto. Q. Roo",
    rating: 4.5,
    reviews: 355,
    price: "$199",
    coords: { lat: 19.5765, lng: -88.0511 },
    image: sayab,
    gallery: {
      current: [sayab, about2, review1],
      historic: [sayab, about2],
    },
    facilities: ["Tirolesa", "Kayak", "Vestidores", "Guía local"],
    shortDescription:
      "'Sayab Kuxtal' significa 'manantial de vida'. Un cenote abierto administrado por una cooperativa comunitaria maya, ideal para actividades de aventura y contacto con la naturaleza.",
    history:
      "Este cenote ha sido administrado de manera colectiva por familias mayas de Carrillo Puerto desde finales del siglo XX, cuando la región —antes epicentro de la Guerra de Castas y bastión de los cruz'ob— comenzó a integrar el turismo comunitario como alternativa económica sostenible, complementaria a la milpa y la apicultura tradicionales.",
    audioAvailable: true,
    videoUrl: "",
    flora: [
      "Selva mediana subperennifolia en los alrededores",
      "Orquídeas silvestres en temporada de lluvias",
      "Palmas de guano usadas tradicionalmente para techar palapas",
    ],
    fauna: [
      "Mariposas Morpho azules en las veredas de acceso",
      "Iguanas de roca en los afloramientos cercanos",
      "Aves migratorias de paso entre octubre y marzo",
    ],
    nearbyBusinesses: [
      { name: "Cooperativa Kuxtal Tours", type: "Actividades y renta de equipo", distance: "0.3 km" },
      { name: "Tortillería Doña Chuy", type: "Comida tradicional", distance: "1.0 km" },
      { name: "Miel Ka'ax", type: "Productos de apicultura maya", distance: "1.4 km" },
    ],
    schedule: {
      hours: "Lunes a domingo, 8:30 – 16:30 h",
      bestTime: "Fines de semana por la mañana, cuando la cooperativa ofrece recorridos guiados",
      recommendations: [
        "Reserva la tirolesa con anticipación en temporada alta",
        "Lleva ropa de cambio y repelente biodegradable",
        "Respeta las áreas señalizadas para la reproducción de aves",
      ],
    },
    environment: {
      climate: "Cálido subhúmedo, 24–33 °C todo el año",
      rainySeason: "Junio a octubre",
      conservation:
        "Manejo comunitario del sitio: una parte de tu entrada se reinvierte en la conservación de la selva circundante y en programas educativos para niños de la comunidad.",
    },
  },
  {
    id: "museo-historico",
    name: "Museo Histórico",
    category: "historia",
    categoryLabel: "Museo",
    location: "Centro, Carrillo Pto. Q. Roo",
    rating: 4.6,
    reviews: 210,
    price: "$50",
    coords: { lat: 19.5817, lng: -88.0424 },
    image: museo,
    gallery: {
      current: [museo, review2, about1],
      historic: [museo, review2],
    },
    facilities: ["Guía incluido", "Accesible", "Tienda de recuerdos"],
    shortDescription:
      "Antiguo cuartel general convertido en museo, dedicado a la memoria de la Guerra de Castas y a la cultura de los mayas cruz'ob que dieron nombre e identidad a la ciudad.",
    history:
      "El edificio que alberga el museo data de finales del siglo XIX y funcionó como punto estratégico durante la Guerra de Castas (1847–1901), el levantamiento maya más prolongado de América. Felipe Carrillo Puerto, gobernador socialista de Yucatán y defensor de las causas mayas, dio nombre a la ciudad tras su asesinato en 1924. Hoy el museo resguarda piezas arqueológicas, documentos históricos y testimonios orales recopilados con familias descendientes de los cruz'ob.",
    audioAvailable: true,
    videoUrl: "",
    flora: [
      "Jardín etnobotánico con plantas medicinales mayas en el patio interior",
    ],
    fauna: [
      "Palomas y tórtolas comunes en el patio central",
    ],
    nearbyBusinesses: [
      { name: "Café Cruzo'ob", type: "Cafetería", distance: "0.1 km" },
      { name: "Librería Maya", type: "Libros y artesanías", distance: "0.2 km" },
      { name: "Mercado Municipal", type: "Comida y productos locales", distance: "0.4 km" },
    ],
    schedule: {
      hours: "Martes a domingo, 9:00 – 18:00 h (lunes cerrado)",
      bestTime: "Tardes entre semana para recorrido tranquilo con guía",
      recommendations: [
        "Pregunta por las visitas guiadas gratuitas en español y maya yucateco",
        "Entrada con descuento para estudiantes y personas mayores",
        "Fotografía permitida sin flash en las salas principales",
      ],
    },
    environment: {
      climate: "Interiores con ventilación natural, agradable todo el año",
      rainySeason: "Junio a octubre (acceso cubierto)",
      conservation:
        "El museo participa en programas de preservación de archivos históricos y de la lengua maya yucateca junto con escuelas de la región.",
    },
  },
  {
    id: "puerta-al-mar",
    name: "Puerta al Mar",
    category: "playas",
    categoryLabel: "Playa",
    location: "Carrillo Pto. Q. Roo",
    rating: 4.3,
    reviews: 180,
    price: "Entrada libre",
    coords: { lat: 19.7167, lng: -87.8833 },
    image: puerta,
    gallery: {
      current: [puerta, about2, service2],
      historic: [puerta, service2],
    },
    facilities: ["Palapas", "Renta de kayak", "Área de picnic"],
    shortDescription:
      "Punto costero de acceso a la bahía, punto de encuentro entre la selva maya y el mar Caribe, con vista a los manglares que protegen la línea de costa.",
    history:
      "La franja costera cercana a Carrillo Puerto formó parte de las rutas comerciales mayas prehispánicas que conectaban Tulum y Cozumel con el interior de la península a través de caminos conocidos como sacbés. Los manglares que hoy se observan desde este mirador fueron —y siguen siendo— una barrera natural clave frente a huracanes y una zona de crianza para especies marinas.",
    audioAvailable: true,
    videoUrl: "",
    flora: [
      "Manglar rojo y blanco a lo largo de la costa",
      "Uva de mar en la franja arenosa",
    ],
    fauna: [
      "Cangrejos violinistas en las raíces del manglar",
      "Pelícanos y garzas pescando en la orilla",
      "Peces juveniles que usan el manglar como criadero",
    ],
    nearbyBusinesses: [
      { name: "Palapa Los Manglares", type: "Mariscos", distance: "0.5 km" },
      { name: "Kayaks del Caribe", type: "Renta de equipo acuático", distance: "0.6 km" },
    ],
    schedule: {
      hours: "Todos los días, amanecer a atardecer",
      bestTime: "Atardecer, cuando bajan la marea y la temperatura",
      recommendations: [
        "No camines sobre las raíces del manglar para no dañarlas",
        "Lleva agua: no hay muchos puntos de venta en la zona",
        "Consulta el pronóstico de marea roja antes de nadar",
      ],
    },
    environment: {
      climate: "Costero cálido, brisa marina constante",
      rainySeason: "Junio a noviembre (temporada de huracanes, revisa avisos oficiales)",
      conservation:
        "El manglar es un ecosistema protegido: captura carbono, filtra el agua y amortigua huracanes. Evita cortar ramas o extraer fauna.",
    },
  },
];

export default attractions;
