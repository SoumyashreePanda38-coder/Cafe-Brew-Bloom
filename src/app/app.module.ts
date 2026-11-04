
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [

    // App
    AppComponent,

    // Layout
    MainLayoutComponent,

    // Public Features
    HomeComponent,
    AboutComponent,
    MenuComponent,
    GalleryComponent,
    OffersComponent,
    ReviewsComponent,
    EventsComponent,
    ContactComponent

  ],

  imports: [

    // Angular
    BrowserModule,

    // Routing
    AppRoutingModule,

    // Forms
    FormsModule,

    // Shared Components / Pipes / Directives
    SharedModule

  ],

  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
