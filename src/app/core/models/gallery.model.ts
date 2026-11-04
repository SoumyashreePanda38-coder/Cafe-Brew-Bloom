export interface GalleryItem {
  id: string;
  image: string;

  title?: string;
  description?: string;

  category?: string;

  isFeatured?: boolean;

  altText?: string;
}