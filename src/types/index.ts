export type MenuCategory = 'all' | 'antipasti' | 'pasta' | 'secondi' | 'dolci' | 'cocktails' | 'wine';

export interface MenuItem {
  id: string;
  name: string;
  italianName?: string;
  category: 'antipasti' | 'pasta' | 'secondi' | 'dolci' | 'cocktails' | 'wine';
  description: string;
  price: number;
  tags?: string[];
  pairing?: string;
  highlight?: boolean;
  image?: string;
}

export type GalleryCategory = 'all' | 'food' | 'the-room' | 'people' | 'nights';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'the-room' | 'people' | 'nights';
  image: string;
  caption: string;
  subtext?: string;
  aspect?: 'landscape' | 'portrait' | 'square' | 'wide';
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  badge: string;
  description: string;
  fullDetails?: string[];
  price: number;
  seatsLeft: number;
  image: string;
}

export interface StoryMilestone {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  details: string;
}

export interface ReservationFormData {
  guests: number;
  date: string;
  time: string;
  zone: string;
  name: string;
  phone: string;
  email: string;
  specialRequests: string;
  occasion?: string;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}
