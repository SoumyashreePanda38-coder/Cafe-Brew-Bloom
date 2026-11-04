import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GalleryItem } from '../models/gallery.model';

import { GENERIC_GALLERY_ITEMS } from '../data/generic/generic.gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  /*
  |--------------------------------------------------------------------------
  | GENERIC GALLERY DATA
  |--------------------------------------------------------------------------
  */

  private galleryItems: GalleryItem[] =
    GENERIC_GALLERY_ITEMS;


  /*
  |--------------------------------------------------------------------------
  | GET ALL GALLERY ITEMS
  |--------------------------------------------------------------------------
  */

  getGalleryItems(): Observable<GalleryItem[]> {

    return of(this.galleryItems);
  }


  /*
  |--------------------------------------------------------------------------
  | GET FEATURED GALLERY ITEMS
  |--------------------------------------------------------------------------
  */

  getFeaturedGalleryItems(): Observable<GalleryItem[]> {

    const featuredItems =
      this.galleryItems.filter(
        (item: GalleryItem) =>
          item.isFeatured === true
      );

    return of(featuredItems);
  }


  /*
  |--------------------------------------------------------------------------
  | GET GALLERY ITEM BY ID
  |--------------------------------------------------------------------------
  */

  getGalleryItemById(
    id: string
  ): Observable<GalleryItem | undefined> {

    const item =
      this.galleryItems.find(
        (galleryItem: GalleryItem) =>
          galleryItem.id === id
      );

    return of(item);
  }


  /*
  |--------------------------------------------------------------------------
  | GET GALLERY ITEMS BY CATEGORY
  |--------------------------------------------------------------------------
  */

  getGalleryItemsByCategory(
    category: string
  ): Observable<GalleryItem[]> {

    const filteredItems =
      this.galleryItems.filter(
        (item: GalleryItem) =>
          item.category?.toLowerCase() ===
          category.toLowerCase()
      );

    return of(filteredItems);
  }

}