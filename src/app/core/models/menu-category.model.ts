export interface MenuCategory {
  id: string;
  name: string;

  description?: string;
  image?: string;

  displayOrder?: number;
  isActive?: boolean;
}