import {
  Component,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Subscription } from 'rxjs';

import { Offer } from '../../core/models/offer.model';
import { OfferService } from '../../core/services/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit, OnDestroy {

  offers: Offer[] = [];

  featuredOffer: Offer | null = null;

  isLoading = true;

  copiedOfferId: string | null = null;

  hoveredOfferId: string | null = null;

  mouseX = 0;
  mouseY = 0;

  private subscription?: Subscription;

  constructor(
    private offerService: OfferService
  ) {}

  // ============================================================
  // INIT
  // ============================================================

  ngOnInit(): void {
    this.loadOffers();
  }

  // ============================================================
  // LOAD OFFERS
  // ============================================================

  private loadOffers(): void {

    this.subscription =
      this.offerService.getActiveOffers().subscribe({

        next: (offers: Offer[]) => {

          this.offers = offers;

          this.featuredOffer =
            offers.find(
              (offer: Offer) =>
                offer.isFeatured === true
            ) || null;

          this.isLoading = false;
        },

        error: (error) => {

          console.error(
            'Unable to load offers:',
            error
          );

          this.isLoading = false;
        }
      });
  }

  // ============================================================
  // REGULAR OFFERS
  // ============================================================

  get regularOffers(): Offer[] {

    return this.offers.filter(
      (offer: Offer) =>
        offer.id !== this.featuredOffer?.id
    );
  }

  // ============================================================
  // DISCOUNT TEXT
  // ============================================================

  getDiscountText(
    offer: Offer
  ): string {

    if (
      offer.discountType ===
      'percentage'
    ) {

      return `${offer.discountValue || 0}%`;
    }

    if (
      offer.discountType ===
      'fixed'
    ) {

      return `₹${offer.discountValue || 0}`;
    }

    return 'SPECIAL';
  }

  // ============================================================
  // DISCOUNT LABEL
  // ============================================================

  getDiscountLabel(
    offer: Offer
  ): string {

    if (
      offer.discountType ===
      'percentage'
    ) {

      return 'OFF';
    }

    if (
      offer.discountType ===
      'fixed'
    ) {

      return 'SAVING';
    }

    return 'OFFER';
  }

  // ============================================================
  // FULL DISCOUNT
  // ============================================================

  getFullDiscount(
    offer: Offer
  ): string {

    return `${this.getDiscountText(offer)} ${this.getDiscountLabel(offer)}`;
  }

  // ============================================================
  // DATE HELPERS
  // ============================================================

  getDaysRemaining(
    offer: Offer
  ): number {

    if (!offer.endDate) {
      return 0;
    }

    const endDate =
      new Date(
        offer.endDate
      ).getTime();

    const today =
      new Date().getTime();

    const difference =
      endDate - today;

    return Math.max(
      0,
      Math.ceil(
        difference /
        (1000 * 60 * 60 * 24)
      )
    );
  }

  isExpired(
    offer: Offer
  ): boolean {

    if (!offer.endDate) {
      return false;
    }

    return (
      new Date(
        offer.endDate
      ).getTime()
      <
      new Date().getTime()
    );
  }

  // ============================================================
  // COPY PROMO CODE
  // ============================================================

  copyCode(
    offer: Offer
  ): void {

    if (!offer.promoCode) {
      return;
    }

    if (
      navigator.clipboard
    ) {

      navigator.clipboard
        .writeText(
          offer.promoCode
        )
        .then(() => {

          this.showCopied(
            offer.id
          );

        })
        .catch(() => {

          this.fallbackCopy(
            offer.promoCode!,
            offer.id
          );
        });

    } else {

      this.fallbackCopy(
        offer.promoCode,
        offer.id
      );
    }
  }

  private fallbackCopy(
    value: string,
    offerId: string
  ): void {

    const textarea =
      document.createElement(
        'textarea'
      );

    textarea.value = value;

    textarea.style.position =
      'fixed';

    textarea.style.opacity =
      '0';

    document.body.appendChild(
      textarea
    );

    textarea.select();

    try {

      document.execCommand(
        'copy'
      );

      this.showCopied(
        offerId
      );

    } catch (error) {

      console.error(
        'Copy failed:',
        error
      );
    }

    document.body.removeChild(
      textarea
    );
  }

  private showCopied(
    offerId: string
  ): void {

    this.copiedOfferId =
      offerId;

    setTimeout(() => {

      if (
        this.copiedOfferId ===
        offerId
      ) {

        this.copiedOfferId =
          null;
      }

    }, 2200);
  }

  // ============================================================
  // SCROLL
  // ============================================================

  scrollToOffers(): void {

    const element =
      document.getElementById(
        'offer-collection'
      );

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // ============================================================
  // MOUSE PARALLAX
  // ============================================================

  @HostListener(
    'document:mousemove',
    ['$event']
  )
  onMouseMove(
    event: MouseEvent
  ): void {

    const centerX =
      window.innerWidth / 2;

    const centerY =
      window.innerHeight / 2;

    this.mouseX =
      (event.clientX - centerX)
      / centerX;

    this.mouseY =
      (event.clientY - centerY)
      / centerY;
  }

  // ============================================================
  // HOVER
  // ============================================================

  onOfferEnter(
    offerId: string
  ): void {

    this.hoveredOfferId =
      offerId;
  }

  onOfferLeave(): void {

    this.hoveredOfferId =
      null;
  }

  // ============================================================
  // TRACK BY
  // ============================================================

  trackByOfferId(
    index: number,
    offer: Offer
  ): string {

    return offer.id;
  }

  // ============================================================
  // CLEANUP
  // ============================================================

  ngOnDestroy(): void {

    this.subscription?.unsubscribe();
  }
}