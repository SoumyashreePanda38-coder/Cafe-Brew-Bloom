import { Component, Input } from '@angular/core';
import { GalleryItem } from '../../../core/models/gallery.model';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent { @Input() item!: GalleryItem; }
