import { Offer } from '../../models/offer.model';

export const GENERIC_OFFERS: Offer[] = [

  // ============================================================
  // FEATURED OFFER
  // ============================================================

  {
    id: 'brew-bloom-signature',
    title: 'The Brew & Bloom Signature',
    description:
      'Enjoy a handcrafted coffee paired with your favourite café bite and make your everyday coffee break a little more special.',

    image:
      'assets/cafes/generic/offers/signature-offer.png',

    discountType: 'percentage',
    discountValue: 20,

    startDate: '2026-01-01',
    endDate: '2026-12-31',

    promoCode: 'BREW20',

    isFeatured: true,
    isActive: true,

    termsAndConditions: [
      'Valid on selected food and beverage items.',
      'Promo code must be applied at the time of ordering.',
      'Cannot be combined with another ongoing offer.',
      'Offer is subject to availability.'
    ]
  },


  // ============================================================
  // OFFER 02
  // ============================================================

  {
    id: 'morning-brew',
    title: 'Morning Brew Ritual',
    description:
      'Start your morning slowly with a freshly brewed coffee and a delicious breakfast bite at a special price.',

    image:
      'assets/cafes/generic/offers/morning-brew.png',

    discountType: 'percentage',
    discountValue: 15,

    startDate: '2026-01-01',
    endDate: '2026-12-31',

    promoCode: 'MORNING15',

    isFeatured: false,
    isActive: true,

    termsAndConditions: [
      'Valid every day before 12 PM.',
      'Applicable on selected breakfast items.',
      'One promo code per order.',
      'Cannot be combined with other offers.'
    ]
  },


  // ============================================================
  // OFFER 03
  // ============================================================

  {
    id: 'coffee-companion',
    title: 'Coffee & Companion',
    description:
      'Because coffee is better together. Bring someone along and enjoy a special saving on your favourite coffee combinations.',

    image:
      'assets/cafes/generic/offers/coffee-companion.png',

    discountType: 'fixed',
    discountValue: 100,

    startDate: '2026-01-01',
    endDate: '2026-12-31',

    promoCode: 'TOGETHER100',

    isFeatured: false,
    isActive: true,

    termsAndConditions: [
      'Minimum order value of ₹599.',
      'Valid for dine-in orders.',
      'Applicable once per table.',
      'Cannot be combined with other discounts.'
    ]
  },


  // ============================================================
  // OFFER 04
  // ============================================================

  {
    id: 'sweet-afternoon',
    title: 'Sweet Afternoon',
    description:
      'Take a little break from the busy day with a pastry, dessert or shake and enjoy a sweet afternoon treat.',

    image:
      'assets/cafes/generic/offers/sweet-afternoon.png',

    discountType: 'percentage',
    discountValue: 15,

    startDate: '2026-01-01',
    endDate: '2026-12-31',

    promoCode: 'SWEET15',

    isFeatured: false,
    isActive: true,

    termsAndConditions: [
      'Valid between 2 PM and 6 PM.',
      'Applicable on selected desserts and beverages.',
      'One offer per customer.',
      'Subject to item availability.'
    ]
  },


  // ============================================================
  // OFFER 05
  // ============================================================

  {
    id: 'weekend-table',
    title: 'Weekend Table',
    description:
      'Weekends are made for good food, long conversations and another round of coffee. Enjoy a little extra on your weekend visit.',

    image:
      'assets/cafes/generic/offers/weekend-table.png',

    discountType: 'percentage',
    discountValue: 10,

    startDate: '2026-01-01',
    endDate: '2026-12-31',

    promoCode: 'WEEKEND10',

    isFeatured: false,
    isActive: true,

    termsAndConditions: [
      'Valid every Saturday and Sunday.',
      'Applicable on dine-in orders.',
      'Minimum order value of ₹799.',
      'Cannot be combined with another promotional offer.'
    ]
  },


  // ============================================================
  // OFFER 06
  // ============================================================

  {
    id: 'first-sip',
    title: 'First Sip',
    description:
      'Your first visit deserves a little welcome. Enjoy a special saving and discover your new favourite café corner.',

    image:
      'assets/cafes/generic/offers/first-sip.png',

    discountType: 'fixed',
    discountValue: 100,

    startDate: '2026-01-01',
    endDate: '2026-12-31',

    promoCode: 'FIRSTSIP100',

    isFeatured: false,
    isActive: true,

    termsAndConditions: [
      'Valid for first-time customers.',
      'Minimum order value of ₹499.',
      'One-time use per customer.',
      'Cannot be combined with other offers.'
    ]
  }

];