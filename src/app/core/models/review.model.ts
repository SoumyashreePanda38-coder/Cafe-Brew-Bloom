export interface Review {
  id: string;

  customerName: string;
  customerImage?: string;

  rating: number;
  comment: string;

  date?: string;

  source?: 'google' | 'instagram' | 'website' | 'other';

  isFeatured?: boolean;
  isVerified?: boolean;
}