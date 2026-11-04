import { Component, Input } from '@angular/core';
import { Review } from '../../../core/models/review.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {
  @Input() review!: Review;
  getStars(): number[] { return Array(5).fill(0); }
}
