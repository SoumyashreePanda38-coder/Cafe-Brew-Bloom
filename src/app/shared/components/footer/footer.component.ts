
import { Component, OnInit } from '@angular/core';

import { Cafe } from '../../../core/models/cafe.model';
import { CafeService } from '../../../core/services/cafe.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  cafe: Cafe | null = null;
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
