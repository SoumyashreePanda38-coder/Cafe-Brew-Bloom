
import { Component, OnInit } from '@angular/core';

import { CafeEvent } from '../../core/models/event.model';
import { EventService } from '../../core/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  readonly metrics = [
    { value: '12+', label: 'signature nights' },
    { value: '4.9/5', label: 'guest rating' },
    { value: 'Weekly', label: 'curated moments' }
  ];

  readonly experiencePillars = [
    { title: 'Live music', detail: 'Fridays • 8 PM' },
    { title: 'Chef drops', detail: 'Weekends • 1 PM' },
    { title: 'Private tables', detail: 'By reservation' }
  ];

  events: CafeEvent[] = [];
  featuredEvents: CafeEvent[] = [];
  upcomingEvents: CafeEvent[] = [];
  loading = true;

  constructor(
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getActiveEvents().subscribe({
      next: (data: CafeEvent[]) => {
        this.events = data || [];
        this.featuredEvents = this.events.filter(event => event.isFeatured);
        this.upcomingEvents = this.getUpcomingEvents(this.events);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading events:', error);
        this.loading = false;
      }
    });
  }

  private getUpcomingEvents(events: CafeEvent[]): CafeEvent[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events
      .filter(event => {
        if (!event.date) {
          return false;
        }

        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);

        return eventDate >= today;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  getEventDay(date: string): string {
    if (!date) {
      return '--';
    }

    return new Date(date).toLocaleDateString('en-IN', { day: '2-digit' });
  }

  getEventMonth(date: string): string {
    if (!date) {
      return 'TBA';
    }

    return new Date(date)
      .toLocaleDateString('en-IN', { month: 'short' })
      .toUpperCase();
  }

  getEventYear(date: string): string {
    if (!date) {
      return '';
    }

    return new Date(date).getFullYear().toString();
  }

  getEventDateLabel(date: string): string {
    if (!date) {
      return 'Date to be announced';
    }

    return new Date(date).toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  getEventTime(event: CafeEvent): string {
    if (event.startTime && event.endTime) {
      return `${event.startTime} – ${event.endTime}`;
    }

    if (event.startTime) {
      return event.startTime;
    }

    return 'Time to be announced';
  }

  getBookingLink(event: CafeEvent): string {
    if (event.bookingUrl) {
      return event.bookingUrl;
    }

    if (event.contactNumber) {
      return `tel:${event.contactNumber}`;
    }

    return 'mailto:cafebrew_bloom@gmail.com?subject=' +
      encodeURIComponent(`Event enquiry: ${event.title}`);
  }

  hasBookingOption(event: CafeEvent): boolean {
    return !!(event.bookingUrl || event.contactNumber);
  }

  trackByEvent(index: number, event: CafeEvent): string {
    return event.id || String(index);
  }
}

