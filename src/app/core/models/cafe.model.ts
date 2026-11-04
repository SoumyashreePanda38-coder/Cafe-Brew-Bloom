export interface Cafe {
  id: string;
  name: string;
  tagline?: string;
  description?: string;

  logo: string;
  heroImage?: string;

  contact: CafeContact;
  location: CafeLocation;
  openingHours?: OpeningHours[];

  socialLinks?: SocialLinks;
}


export interface CafeContact {
  phone?: string;
  email?: string;
  whatsapp?: string;
}


export interface CafeLocation {
  address: string;
  city: string;
  state?: string;
  postalCode?: string;

  latitude?: number;
  longitude?: number;

  mapUrl?: string;
}


export interface OpeningHours {
  day: string;
  openTime: string;
  closeTime: string;
  isClosed?: boolean;
}


export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  website?: string;
}