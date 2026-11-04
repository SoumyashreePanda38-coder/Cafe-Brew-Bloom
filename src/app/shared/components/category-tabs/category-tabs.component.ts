import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuCategory } from '../../../core/models/menu-category.model';

@Component({
  selector: 'app-category-tabs',
  templateUrl: './category-tabs.component.html',
  styleUrls: ['./category-tabs.component.scss']
})
export class CategoryTabsComponent {
  @Input() categories: MenuCategory[] = [];
  @Input() selectedCategoryId = 'all';
  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(id: string): void {
    this.categorySelected.emit(id);
  }
}
