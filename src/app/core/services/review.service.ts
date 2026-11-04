import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Review } from '../models/review.model';
import { GENERIC_REVIEWS } from '../data/generic/generic.reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  getReviews(): Observable<Review[]> {
    return of(GENERIC_REVIEWS);
  }

  getFeaturedReviews(): Observable<Review[]> {
    return of(GENERIC_REVIEWS.filter(review => review.isFeatured));
  }

  getVerifiedReviews(): Observable<Review[]> {
    return of(GENERIC_REVIEWS.filter(review => review.isVerified));
  }
}
