import { CafeConfig } from './cafe-config.interface';

export const BLUEBERRYS_CONFIG: CafeConfig = {
  cafe: {
    id: 'blueberrys-bhubaneswar',

    name: 'Blueberrys Cafe Bhubaneswar',

    tagline: 'Coffee, Food, Music & Good Times',

    description:
      'A vibrant café in Patia, Bhubaneswar offering coffee, continental food, desserts, refreshing beverages and a lively atmosphere with indoor and outdoor seating.',

    logo: 'assets/cafes/blueberrys/logo/blueberrys-logo.png',

    heroImage:
      'assets/cafes/blueberrys/hero/blueberrys-hero.jpg',

    contact: {
      phone: '+91 76840 52423',
      email: 'ikka52423@gmail.com',
      whatsapp: '+91 76840 52423'
    },

    location: {
      address:
        'No. 22, Infocity Ave, KIIT University City No. 1, P.S. New Capital, Patia',

      city: 'Bhubaneswar',
      state: 'Odisha',
      postalCode: '751024',

      mapUrl: ''
    },

    openingHours: [
      {
        day: 'Monday',
        openTime: '08:30 AM',
        closeTime: '10:45 PM'
      },
      {
        day: 'Tuesday',
        openTime: '08:30 AM',
        closeTime: '10:45 PM'
      },
      {
        day: 'Wednesday',
        openTime: '08:30 AM',
        closeTime: '10:45 PM'
      },
      {
        day: 'Thursday',
        openTime: '08:30 AM',
        closeTime: '10:45 PM'
      },
      {
        day: 'Friday',
        openTime: '08:30 AM',
        closeTime: '10:45 PM'
      },
      {
        day: 'Saturday',
        openTime: '08:30 AM',
        closeTime: '10:45 PM'
      },
      {
        day: 'Sunday',
        openTime: '08:30 AM',
        closeTime: '10:45 PM'
      }
    ],

    socialLinks: {
      instagram: 'https://www.instagram.com/blueberrysbhubaneswar/'
    }
  },

  branding: {
    logo: 'assets/cafes/blueberrys/logo/blueberrys-logo.png',

    favicon:
      'assets/cafes/blueberrys/logo/favicon.png',

    primaryColor: '#1687D9',
    secondaryColor: '#0B3D91',
    accentColor: '#F4C95D',

    headingFont: 'Poppins',
    bodyFont: 'Poppins'
  },

  hero: {
    title: 'Blueberrys Cafe',

    subtitle:
      'Good Food. Great Coffee. Beautiful Moments.',

    backgroundImage:
      'assets/cafes/blueberrys/hero/blueberrys-hero.jpg',

    primaryButton: {
      label: 'Explore Menu',
      link: '/menu',
      type: 'primary'
    },

    secondaryButton: {
      label: 'Visit Us',
      link: '/contact',
      type: 'secondary'
    },

    overlay: true
  },

  sections: {
    about: true,
    menu: true,
    gallery: true,
    offers: true,
    reviews: true,
    events: true,
    contact: true
  },

  navigation: {
    showHome: true,
    showAbout: true,
    showMenu: true,
    showGallery: true,
    showOffers: true,
    showReviews: true,
    showEvents: true,
    showContact: true
  },

  theme: {
    borderRadius: '16px',

    cardStyle: 'glass',

    buttonStyle: 'pill',

    headerStyle: 'transparent',

    sectionSpacing: 'large'
  }
};