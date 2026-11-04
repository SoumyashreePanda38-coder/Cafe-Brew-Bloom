import { Component, Input } from '@angular/core';
import { Offer } from '../../../core/models/offer.model';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent {
  @Input() offer!: Offer;
  get discountLabel(): string {
    if (this.offer.discountType === 'percentage') return `${this.offer.discountValue || 0}% OFF`;
    if (this.offer.discountType === 'fixed') return `₹${this.offer.discountValue || 0} OFF`;
    return 'SPECIAL OFFER';
  }
}
