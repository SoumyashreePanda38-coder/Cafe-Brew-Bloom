import { Component } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  phone = '9900010000';

  email = 'cafebrew_bloom@gmail.com';

  instagramHandle = 'brew_bloom';

  instagramUrl =
    'https://www.instagram.com/brew_bloom/';

  address =
    'Silicon Hills, Patia, Bhubaneswar, Odisha 751024, India';

  mapUrl =
    'https://www.google.com/maps/search/?api=1&query=Silicon+University+Silicon+Hills+Patia+Bhubaneswar+751024';

  mapEmbedUrl: SafeResourceUrl;

  openingHours = [
    { day: 'Monday', time: '10:30 AM – 9:30 PM' },
    { day: 'Tuesday', time: '10:30 AM – 9:30 PM' },
    { day: 'Wednesday', time: '10:30 AM – 9:30 PM' },
    { day: 'Thursday', time: '10:30 AM – 9:30 PM' },
    { day: 'Friday', time: '10:30 AM – 9:30 PM' },
    { day: 'Saturday', time: '10:30 AM – 9:30 PM' },
    { day: 'Sunday', time: '10:30 AM – 9:30 PM' }
  ];

  constructor(
    private sanitizer: DomSanitizer
  ) {
    const mapUrl =
      'https://maps.google.com/maps?q=Silicon%20University%2C%20Silicon%20Hills%2C%20Patia%2C%20Bhubaneswar&t=&z=15&ie=UTF8&iwloc=&output=embed';

    this.mapEmbedUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
  }

  sendMessage(event: Event): void {

    event.preventDefault();

    const form =
      event.target as HTMLFormElement;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);

    const name =
      String(formData.get('name') || '').trim();

    const senderEmail =
      String(formData.get('email') || '').trim();

    const subject =
      String(formData.get('subject') || '').trim();

    const message =
      String(formData.get('message') || '').trim();

    const emailSubject =
      encodeURIComponent(
        subject || `Website enquiry from ${name}`
      );

    const emailBody =
      encodeURIComponent(
        `Hello Brew & Bloom,

Name: ${name}
Email: ${senderEmail}

Message:
${message}

Sent through the Brew & Bloom website.`
      );

    window.location.href =
      `mailto:${this.email}?subject=${emailSubject}&body=${emailBody}`;

    form.reset();
  }

  trackByDay(
    index: number,
    item: { day: string; time: string }
  ): string {
    return item.day;
  }
}