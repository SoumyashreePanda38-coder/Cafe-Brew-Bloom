
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

// ============================================================
// FEATURE COMPONENTS
// ============================================================

import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { MenuComponent } from './features/menu/menu.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { OffersComponent } from './features/offers/offers.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { EventsComponent } from './features/events/events.component';
import { ContactComponent } from './features/contact/contact.component';

const routes: Routes = [

  // ==========================================================
  // PUBLIC CAFÉ WEBSITE
  // ==========================================================

  {
    path: '',
    component: MainLayoutComponent,
    children: [

      // Home
      {
        path: '',
        component: HomeComponent
      },

      // About
      {
        path: 'about',
        component: AboutComponent
      },

      // Menu
      {
        path: 'menu',
        component: MenuComponent
      },

      // Gallery
      {
        path: 'gallery',
        component: GalleryComponent
      },

      // Offers
      {
        path: 'offers',
        component: OffersComponent
      },

      // Reviews
      {
        path: 'reviews',
        component: ReviewsComponent
      },

      // Events
      {
        path: 'events',
        component: EventsComponent
      },

      // Contact
      {
        path: 'contact',
        component: ContactComponent
      }

    ]
  },

  // ==========================================================
  // FALLBACK
  // ==========================================================

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
