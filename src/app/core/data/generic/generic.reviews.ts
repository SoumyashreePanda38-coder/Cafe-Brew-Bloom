import { Review } from '../../models/review.model';

export const GENERIC_REVIEWS: Review[] = [
  {
    id: 'review-001',
    customerName: 'Aarav Sharma',
    customerImage: 'assets/cafes/generic/reviews/customer-1.jpg',
    rating: 5,
    comment:
      'A wonderful place to relax with great coffee and a lovely ambience.',
    date: '2026-01-15',
    source: 'google',
    isFeatured: true,
    isVerified: true
  },

  {
    id: 'review-002',
    customerName: 'Ananya Das',
    customerImage: 'assets/cafes/generic/reviews/customer-2.jpg',
    rating: 5,
    comment:
      'The food was delicious and the staff were very friendly. Definitely coming back!',
    date: '2026-02-03',
    source: 'google',
    isFeatured: true,
    isVerified: true
  },

  {
    id: 'review-003',
    customerName: 'Rohan Mehta',
    rating: 4,
    comment:
      'Beautiful interiors, good coffee and a comfortable atmosphere for spending time with friends.',
    date: '2026-02-20',
    source: 'website',
    isFeatured: false,
    isVerified: true
  },

  {
    id: 'review-004',
    customerName: 'Priya Nair',
    rating: 5,
    comment:
      'Loved the desserts and the overall experience. The presentation was excellent.',
    date: '2026-03-08',
    source: 'instagram',
    isFeatured: true,
    isVerified: false
  },

  {
    id: 'review-005',
    customerName: 'Kabir Patel',
    rating: 4,
    comment:
      'Nice ambience and a good selection of food and beverages.',
    date: '2026-03-22',
    source: 'google',
    isFeatured: false,
    isVerified: true
  }
];