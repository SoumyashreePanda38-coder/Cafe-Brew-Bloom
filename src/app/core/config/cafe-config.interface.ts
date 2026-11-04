import { Cafe } from '../models/cafe.model';

export interface CafeConfig {
  cafe: Cafe;

  branding: CafeBranding;

  hero: HeroConfig;

  sections: CafeSections;

  navigation: NavigationConfig;

  theme: CafeTheme;
}

export interface CafeBranding {
  logo: string;
  favicon?: string;

  primaryColor: string;
  secondaryColor: string;
  accentColor?: string;

  headingFont?: string;
  bodyFont?: string;
}

export interface HeroConfig {
  title: string;
  subtitle?: string;
  backgroundImage: string;

  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;

  overlay?: boolean;
}

export interface HeroButton {
  label: string;
  link: string;
  type?: 'primary' | 'secondary';
}

export interface CafeSections {
  about: boolean;
  menu: boolean;
  gallery: boolean;
  offers: boolean;
  reviews: boolean;
  events: boolean;
  contact: boolean;
}

export interface NavigationConfig {
  showHome: boolean;
  showAbout: boolean;
  showMenu: boolean;
  showGallery: boolean;
  showOffers: boolean;
  showReviews: boolean;
  showEvents: boolean;
  showContact: boolean;
}

export interface CafeTheme {
  borderRadius?: string;

  cardStyle?: 'flat' | 'glass' | 'bordered' | 'elevated';

  buttonStyle?: 'rounded' | 'pill' | 'square';

  headerStyle?: 'transparent' | 'solid' | 'glass';

  sectionSpacing?: 'compact' | 'normal' | 'large';
}