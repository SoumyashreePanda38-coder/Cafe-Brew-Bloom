import {
  Component,
  OnInit
} from '@angular/core';

import { MenuCategory } from '../../core/models/menu-category.model';
import { MenuItem } from '../../core/models/menu.model';

import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: MenuCategory[] = [];

  menuItems: MenuItem[] = [];

  filteredItems: MenuItem[] = [];

  activeCategory = 'all';

  searchTerm = '';

  loading = true;


  constructor(
    private menuService: MenuService
  ) {}


  ngOnInit(): void {

    this.loadMenu();

  }


  loadMenu(): void {

    this.loading = true;


    this.menuService
      .getCategories()
      .subscribe({

        next: (categories: MenuCategory[]) => {

          this.categories = categories;

        },

        error: (error: unknown) => {

          console.error(
            'Failed to load menu categories:',
            error
          );

        }

      });


    this.menuService
      .getMenuItems()
      .subscribe({

        next: (items: MenuItem[]) => {

          this.menuItems = items;

          this.filteredItems = items;

          this.loading = false;

        },

        error: (error: unknown) => {

          console.error(
            'Failed to load menu items:',
            error
          );

          this.loading = false;

        }

      });

  }


  selectCategory(categoryId: string): void {

    this.activeCategory = categoryId;

    this.applyFilters();

  }


  onSearch(event: Event): void {

    const input =
      event.target as HTMLInputElement;

    this.searchTerm = input.value;

    this.applyFilters();

  }


  applyFilters(): void {

    let results = [...this.menuItems];


    // Category filter

    if (this.activeCategory !== 'all') {

      results = results.filter(
        item =>
          item.categoryId === this.activeCategory
      );

    }


    // Search filter

    const search =
      this.searchTerm
        .trim()
        .toLowerCase();


    if (search) {

      results = results.filter(item =>

        item.name
          .toLowerCase()
          .includes(search)

        ||

        item.description
          .toLowerCase()
          .includes(search)

        ||

        item.tags?.some(tag =>
          tag.toLowerCase().includes(search)
        )

      );

    }


    this.filteredItems = results;

  }


  clearSearch(): void {

    this.searchTerm = '';

    this.applyFilters();

  }


  getActiveCategoryName(): string {

    if (this.activeCategory === 'all') {

      return 'Everything Good';

    }


    const category =
      this.categories.find(
        item =>
          item.id === this.activeCategory
      );


    return category?.name || 'Our Menu';

  }


  trackByItem(
    index: number,
    item: MenuItem
  ): string {

    return item.id;

  }


  trackByCategory(
    index: number,
    category: MenuCategory
  ): string {

    return category.id;

  }

}