import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  GENERIC_MENU_CATEGORIES,
  GENERIC_MENU_ITEMS
} from '../data/generic/generic.menu';

import { MenuCategory } from '../models/menu-category.model';
import { MenuItem } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private categories: MenuCategory[] =
    GENERIC_MENU_CATEGORIES;

  private menuItems: MenuItem[] =
    GENERIC_MENU_ITEMS;


  getCategories(): Observable<MenuCategory[]> {

    return of(this.categories);

  }


  getMenuItems(): Observable<MenuItem[]> {

    return of(this.menuItems);

  }


  getItemsByCategory(
    categoryId: string
  ): Observable<MenuItem[]> {

    const items = this.menuItems.filter(
      item => item.categoryId === categoryId
    );

    return of(items);

  }


  getPopularItems(): Observable<MenuItem[]> {

    const items = this.menuItems.filter(
      item => item.isPopular === true
    );

    return of(items);

  }


  searchItems(
    searchTerm: string
  ): Observable<MenuItem[]> {

    const term = searchTerm
      .trim()
      .toLowerCase();

    if (!term) {
      return of(this.menuItems);
    }

    const results = this.menuItems.filter(item =>

      item.name
        .toLowerCase()
        .includes(term)

      ||

      item.description
        .toLowerCase()
        .includes(term)

      ||

      item.tags?.some(tag =>
        tag.toLowerCase().includes(term)
      )

    );

    return of(results);

  }

}