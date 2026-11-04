export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;

  image?: string;

  categoryId: string;

  isVeg?: boolean;
  isPopular?: boolean;
  isAvailable?: boolean;

  sizes?: MenuItemSize[];

  tags?: string[];
}


export interface MenuItemSize {
  name: string;
  price: number;
}