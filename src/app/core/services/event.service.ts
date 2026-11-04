
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CafeEvent } from '../models/event.model';
import { GENERIC_EVENTS } from '../data/generic/generic.events';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  getEvents(): Observable<CafeEvent[]> {
    return of(GENERIC_EVENTS);
  }

  getActiveEvents(): Observable<CafeEvent[]> {
    return of(
      GENERIC_EVENTS.filter(event => event.isActive !== false)
    );
  }

  getFeaturedEvents(): Observable<CafeEvent[]> {
    return of(
      GENERIC_EVENTS.filter(
        event => event.isFeatured && event.isActive !== false
      )
    );
  }

}
