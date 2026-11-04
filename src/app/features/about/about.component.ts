import { Component, OnInit } from '@angular/core';

import { Cafe } from '../../core/models/cafe.model';
import { CafeService } from '../../core/services/cafe.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  cafe: Cafe | null = null;

  phoneNumber = '6371470683';

  whatsappUrl = 'https://wa.me/916371470683';

  currentYear = new Date().getFullYear();

  constructor(
    private cafeService: CafeService
  ) {}

  ngOnInit(): void {

    this.cafeService.getCafe().subscribe({

      next: (cafe: Cafe) => {
        this.cafe = cafe;
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