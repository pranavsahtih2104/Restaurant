import type { StoryMilestone } from '../types';
import { getAssetUrl } from '../utils/assetUrl';

export const STORY_MILESTONES: StoryMilestone[] = [
  {
    id: 'story-1',
    number: '01',
    title: 'THE BEGINNING',
    subtitle: 'From Modena to Visakhapatnam',
    description: 'Oliva was born out of deep reverence for Italian hospitality — where meals are not rushed transactions, but long, sun-drenched hours of conversation, crusty sourdough dipped in emerald olive oil, and wine poured freely from generous carafes.',
    details: 'Founded in 2018, our vision was simple yet unwavering: to strip away the stiff formal clichés of white-tablecloth fine dining and replace them with warm, soulful craftsmanship and vibrant contemporary Italian culinary art.',
    image: getAssetUrl('images/hero-editorial.jpg'),
  },
  {
    id: 'story-2',
    number: '02',
    title: 'THE KITCHEN',
    subtitle: 'Heirloom Grains, Open Embers & 30-Yolk Pasta',
    description: 'Our kitchen runs on elemental simplicity. We source stone-milled ancient wheat from small Italian cooperatives, roll our pasta fresh twice daily using rich country egg yolks, and cook over scented olive wood embers.',
    details: 'Chef Luca Moretti believes that when you honor the provenance of ingredients — from 36-month Parmigiano Reggiano to Puglia burrata and cold-pressed single-estate olive oils — the food requires no trickery, only pristine execution.',
    image: getAssetUrl('images/chef-luca.jpg'),
  },
  {
    id: 'story-3',
    number: '03',
    title: 'THE TABLE',
    subtitle: 'An Atmosphere Designed for Gathering',
    description: 'We designed Oliva as an intimate sanctuary: warm terracotta tiles underfoot, deep forest olive plaster walls, flickering beeswax candles, hand-thrown ceramics, and warm analog acoustic rhythms from curated Italian jazz vinyl.',
    details: 'Whether you arrive for a solitary aperitivo at our fluted walnut bar, a celebratory dinner with beloved friends, or a quiet midnight grappa, every seat at Oliva is prepared with care.',
    image: getAssetUrl('images/room-dining.jpg'),
  },
];
