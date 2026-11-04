
import { Component, OnInit } from '@angular/core';

import { Cafe } from '../../../core/models/cafe.model';
import { CafeService } from '../../../core/services/cafe.service';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss']
})
export class WhatsappButtonComponent implements OnInit {

  cafe: Cafe | null = null;
  whatsappUrl = '';

  constructor(
    private cafeService: CafeService
  ) {}

  ngOnInit(): void {
    this.cafeService.getCafe().subscribe({
      next: (cafe: Cafe) => {
        this.cafe = cafe;

        const phone = cafe.contact?.whatsapp?.replace(/\D/g, '') || '';
        this.whatsappUrl = phone ? `https://wa.me/${phone}` : '';
      },

      error: (error: unknown) => {
        console.error(
          'Failed to load café information:',
          error
        );
      }
    });
  }
}
