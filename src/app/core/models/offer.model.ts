export interface Offer {
  id: string;
  title: string;

  description?: string;
  image?: string;

  discountType?: 'percentage' | 'fixed' | 'none';
  discountValue?: number;

  startDate?: string;
  endDate?: string;

  promoCode?: string;

  isFeatured?: boolean;
  isActive?: boolean;

  termsAndConditions?: string[];
}