import type { EventItem } from '../types';

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: 'WINE & PASTA NIGHT',
    date: '18 OCTOBER 2026',
    time: '19:30 — 22:30',
    badge: 'EXCLUSIVE TASTING',
    description: 'An intimate 5-course hand-rolled pasta flight expertly paired with natural, biodynamic wines from Piedmont and Tuscany curated by Head Sommelier Marco Valenti.',
    fullDetails: [
      'Welcome glass of Ferrari Trento Brut Metodo Classico with Sicilian olive oil focaccia',
      'Course 1: Hand-pinched Agnolotti del Plin paired with Nebbiolo d’Alba 2021',
      'Course 2: Wild mushroom Tagliatelle paired with Chianti Classico Gran Selezione',
      'Course 3: Paccheri ai Frutti di Mare paired with Etna Bianco Superiore',
      'Course 4: Braised Lamb Tortelli paired with Barolo Cascina Francia 2018',
      'Course 5: Artisanal Tiramisù with Vin Santo del Chianti',
      'Includes guided commentary by winemakers and Chef Luca Moretti'
    ],
    price: 3800,
    seatsLeft: 6,
    image: '/images/event-wine.jpg',
  },
  {
    id: 'event-2',
    title: "CHEF'S TABLE: AUTUMN HARVEST",
    date: '26 OCTOBER 2026',
    time: '20:00 — 23:00',
    badge: '8 SEATS ONLY',
    description: 'Executive Chef Luca Moretti invites 8 guests to the kitchen pass for an unscripted 7-course seasonal tasting journey highlighting foraged white truffles and rare heirloom produce.',
    fullDetails: [
      'Interactive front-row dining at the marble pass in direct conversation with Chef Luca',
      'Seven unscripted courses crafted live based on the morning harvest and market deliveries',
      'Spotlight on Alba white truffles, 40-year balsamic vinegar from Modena, and wild game',
      'Prestige wine pairings included from our private cellar archive',
      'Commemorative hand-signed menu and bespoke bottle of house-infused olive oil'
    ],
    price: 6200,
    seatsLeft: 2,
    image: '/images/chef-luca.jpg',
  },
  {
    id: 'event-3',
    title: 'SUNDAY APERITIVO & JAZZ',
    date: '02 NOVEMBER 2026',
    time: '17:00 — 21:00',
    badge: 'GARDEN COURTYARD',
    description: 'Long golden-hour afternoon on the olive terrace featuring live Italian jazz quartet, unlimited cicchetti bites, artisanal spritz bar, and vinyl selections.',
    fullDetails: [
      'Live performance by The Roma Modern Jazz Quartet',
      'Free-flow Aperol & Select Spritzes, Negroni variations, and organic Italian wines',
      'Roaming cicchetti: Crostini di fegato, Arancini al tartufo, Polpette, and Prosciutto di Parma with fresh figs',
      'Casual garden seating under candlelit olive branches',
      'Sunset toast at 18:30'
    ],
    price: 2400,
    seatsLeft: 12,
    image: '/images/room-terrace.jpg',
  },
];
