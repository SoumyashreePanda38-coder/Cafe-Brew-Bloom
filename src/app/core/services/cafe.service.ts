
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cafe } from '../models/cafe.model';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private cafe: Cafe = {
    id: 'generic-cafe',

    name: 'Brew & Bloom',

    tagline: 'Fresh Coffee. Great Food. Good Moments.',

    description:
      'A warm and welcoming cafe serving freshly prepared food and beverages.',

    logo: 'assets/cafes/generic/logo/logo.png',

    heroImage: 'assets/cafes/generic/hero/hero.jpg',

    contact: {
      phone: '+91 6371470683',
      email: 'hello@brewandbloom.com',
      whatsapp: '+91 6371470683'
    },

    location: {
      address: 'Bhubaneswar',
      city: 'Bhubaneswar',
      state: 'Odisha',
      postalCode: '751024'
    },

    openingHours: [
      {
        day: 'Monday',
        openTime: '09:00 AM',
        closeTime: '10:00 PM'
      },
      {
        day: 'Tuesday',
        openTime: '09:00 AM',
        closeTime: '10:00 PM'
      },
      {
        day: 'Wednesday',
        openTime: '09:00 AM',
        closeTime: '10:00 PM'
      },
      {
        day: 'Thursday',
        openTime: '09:00 AM',
        closeTime: '10:00 PM'
      },
      {
        day: 'Friday',
        openTime: '09:00 AM',
        closeTime: '10:00 PM'
      },
      {
        day: 'Saturday',
        openTime: '09:00 AM',
        closeTime: '10:00 PM'
      },
      {
        day: 'Sunday',
        openTime: '09:00 AM',
        closeTime: '10:00 PM'
      }
    ],

    socialLinks: {
      instagram: '#',
      facebook: '#'
    }
  };

  getCafe(): Observable<Cafe> {
    return of(this.cafe);
  }
}
