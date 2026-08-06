export type PageId = 'home' | 'about' | 'services' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'boissons' | 'desserts' | 'formules' | 'prestations';
  description: string;
  iconName: string;
  tag?: string;
  popular?: boolean;
}

export interface DessertHighlight {
  id: string;
  name: string;
  category: string;
  description: string;
  priceTag: string;
  image: string;
  badge?: string;
  ingredients: string[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  guestsCount?: string;
  preferredDate?: string;
  message: string;
}
