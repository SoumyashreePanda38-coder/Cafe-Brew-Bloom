import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Offer } from '../models/offer.model';
import { GENERIC_OFFERS } from '../data/generic/generic.offers';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  getOffers(): Observable<Offer[]> {
    return of(GENERIC_OFFERS);
  }

  getActiveOffers(): Observable<Offer[]> {
    return of(
      GENERIC_OFFERS.filter(offer => offer.isActive !== false)
    );
  }

  getFeaturedOffers(): Observable<Offer[]> {
    return of(
      GENERIC_OFFERS.filter(
        offer => offer.isFeatured && offer.isActive !== false
      )
    );
  }
}
