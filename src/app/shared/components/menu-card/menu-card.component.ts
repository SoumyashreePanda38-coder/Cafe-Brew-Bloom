import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../core/models/menu.model';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent { @Input() item!: MenuItem; }
