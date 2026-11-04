
import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';

import { Cafe } from '../../../core/models/cafe.model';
import { CafeService } from '../../../core/services/cafe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // ============================================================
  // CAFÉ DATA
  // ============================================================

  cafe: Cafe | null = null;


  // ============================================================
  // HEADER STATE
  // ============================================================

  isScrolled = false;

  mobileMenuOpen = false;


  // ============================================================
  // CONSTRUCTOR
  // ============================================================

  constructor(
    private cafeService: CafeService
  ) {}


  // ============================================================
  // INITIALIZATION
  // ============================================================

  ngOnInit(): void {

    this.cafeService.getCafe().subscribe({

      next: (cafe: Cafe) => {
        this.cafe = cafe;
      },

      error: (error) => {
        console.error(
          'Error loading café information:',
          error
        );
      }

    });

  }


  // ============================================================
  // HEADER SCROLL EFFECT
  // ============================================================

  @HostListener('window:scroll')
  onWindowScroll(): void {

    this.isScrolled = window.scrollY > 40;

  }


  // ============================================================
  // MOBILE MENU
  // ============================================================

  toggleMenu(): void {

    this.mobileMenuOpen = !this.mobileMenuOpen;

  }


  closeMenu(): void {

    this.mobileMenuOpen = false;

  }

}
