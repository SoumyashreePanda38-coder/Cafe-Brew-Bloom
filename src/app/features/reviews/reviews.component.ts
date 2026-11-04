import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Review } from '../../core/models/review.model';
import { ReviewService } from '../../core/services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit, OnDestroy {

  reviews: Review[] = [];

  isLoading = true;

  // Feedback form
  feedbackName = '';
  feedbackEmail = '';
  feedbackComment = '';

  selectedRating = 0;
  hoverRating = 0;

  isSubmitting = false;
  feedbackSubmitted = false;

  private subscription?: Subscription;
  private successTimeout?: ReturnType<typeof setTimeout>;

  constructor(
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.loadReviews();
  }

  // =====================================================
  // LOAD REVIEWS
  // =====================================================

  private loadReviews(): void {

    this.subscription = this.reviewService
      .getReviews()
      .subscribe({

        next: (reviews: Review[]) => {

          this.reviews = [...reviews];

          this.isLoading = false;
        },

        error: (error) => {

          console.error('Unable to load reviews:', error);

          this.reviews = [];

          this.isLoading = false;
        }
      });
  }

  // =====================================================
  // REVIEW COLLECTIONS
  // =====================================================

  get featuredReviews(): Review[] {

    const featured = this.reviews.filter(
      review => review.isFeatured === true
    );

    return featured.length > 0
      ? featured
      : this.reviews.slice(0, 2);
  }

  get regularReviews(): Review[] {

    const featuredIds = this.featuredReviews.map(
      review => review.id
    );

    return this.reviews.filter(
      review => !featuredIds.includes(review.id)
    );
  }

  // Two separate lanes for the animated review wall.
  get firstReviewLane(): Review[] {

    return this.reviews.filter(
      (review, index) => index % 2 === 0
    );
  }

  get secondReviewLane(): Review[] {

    const secondLane = this.reviews.filter(
      (review, index) => index % 2 !== 0
    );

    return secondLane.length > 0
      ? secondLane
      : this.reviews;
  }

  // =====================================================
  // RATING STATISTICS
  // =====================================================

  get averageRating(): number {

    if (this.reviews.length === 0) {
      return 0;
    }

    const total = this.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    return Number(
      (total / this.reviews.length).toFixed(1)
    );
  }

  getRatingCount(rating: number): number {

    return this.reviews.filter(
      review => review.rating === rating
    ).length;
  }

  getRatingPercentage(rating: number): number {

    if (this.reviews.length === 0) {
      return 0;
    }

    return Math.round(
      (this.getRatingCount(rating) / this.reviews.length) * 100
    );
  }

  // =====================================================
  // STAR INTERACTION
  // =====================================================

  setRating(rating: number): void {
    this.selectedRating = rating;
  }

  setHoverRating(rating: number): void {
    this.hoverRating = rating;
  }

  clearHoverRating(): void {
    this.hoverRating = 0;
  }

  isStarActive(star: number): boolean {

    return star <= (
      this.hoverRating || this.selectedRating
    );
  }

  // =====================================================
  // FEEDBACK SUBMISSION
  // =====================================================

  submitFeedback(): void {

    const name = this.feedbackName.trim();
    const comment = this.feedbackComment.trim();

    if (
      !name ||
      !comment ||
      !this.selectedRating ||
      this.isSubmitting
    ) {
      return;
    }

    this.isSubmitting = true;

    // Frontend-only submission for the current demo.
    // Connect this method to the Spring Boot API later.

    const newReview: Review = {

      id: `review-${Date.now()}`,

      customerName: name,

      rating: this.selectedRating,

      comment: comment,

      date: new Date().toISOString(),

      source: 'website',

      isFeatured: false,

      isVerified: false
    };

    setTimeout(() => {

      this.reviews = [
        newReview,
        ...this.reviews
      ];

      this.feedbackName = '';
      this.feedbackEmail = '';
      this.feedbackComment = '';

      this.selectedRating = 0;
      this.hoverRating = 0;

      this.isSubmitting = false;
      this.feedbackSubmitted = true;

      this.successTimeout = setTimeout(() => {
        this.feedbackSubmitted = false;
      }, 4500);

    }, 700);
  }

  // =====================================================
  // DISPLAY HELPERS
  // =====================================================

  getInitials(name: string): string {

    return name
      .split(' ')
      .filter(part => part.length > 0)
      .slice(0, 2)
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  }

  getSourceLabel(source?: Review['source']): string {

    switch (source) {

      case 'google':
        return 'Google';

      case 'instagram':
        return 'Instagram';

      case 'website':
        return 'Website';

      case 'other':
        return 'Guest';

      default:
        return 'Guest';
    }
  }

  trackByReviewId(
    index: number,
    review: Review
  ): string {

    return review.id;
  }

  // =====================================================
  // CLEANUP
  // =====================================================

  ngOnDestroy(): void {

    this.subscription?.unsubscribe();

    if (this.successTimeout) {
      clearTimeout(this.successTimeout);
    }
  }
}