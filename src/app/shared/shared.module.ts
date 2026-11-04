
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CategoryTabsComponent } from './components/category-tabs/category-tabs.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { OfferCardComponent } from './components/offer-card/offer-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

// Directives
import { LazyImageDirective } from './directives/lazy-image.directive';

// Pipes
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    CategoryTabsComponent,
    EventCardComponent,
    FooterComponent,
    GalleryCardComponent,
    HeaderComponent,
    MenuCardComponent,
    OfferCardComponent,
    ReviewCardComponent,
    SectionTitleComponent,
    SocialLinksComponent,
    WhatsappButtonComponent,

    LazyImageDirective,

    SafeUrlPipe,
    TruncatePipe
  ],

  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    CategoryTabsComponent,
    EventCardComponent,
    FooterComponent,
    GalleryCardComponent,
    HeaderComponent,
    MenuCardComponent,
    OfferCardComponent,
    ReviewCardComponent,
    SectionTitleComponent,
    SocialLinksComponent,
    WhatsappButtonComponent,

    LazyImageDirective,

    SafeUrlPipe,
    TruncatePipe
  ]
})
export class SharedModule {}
