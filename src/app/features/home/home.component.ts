import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Hero section
  heroTitle = 'A Place to Sip, Savor & Stay';
  heroSubtitle =
    'Fresh coffee, delicious food and beautiful moments — all under one roof.';

  // Quick navigation cards
  quickLinks = [
    {
      title: 'Explore Menu',
      description: 'Discover our coffee, beverages, food and desserts.',
      link: '/menu',
      icon: '☕'
    },
    {
      title: 'Our Gallery',
      description: 'Take a glimpse at our café and memorable moments.',
      link: '/gallery',
      icon: '📸'
    },
    {
      title: 'Special Offers',
      description: 'Check out our latest deals and special promotions.',
      link: '/offers',
      icon: '✨'
    }
  ];

  // About preview
  aboutTitle = 'More Than Just a Café';

  aboutDescription =
    'We believe a café should be more than a place to grab a coffee. ' +
    'It should be a place where conversations begin, ideas grow and ' +
    'memories are created. Come in, relax and make yourself at home.';

  // Featured highlights
  highlights = [
    {
      title: 'Freshly Prepared',
      description: 'Quality ingredients prepared with care.',
      icon: '🍽️'
    },
    {
      title: 'Perfect Coffee',
      description: 'Rich flavours and carefully crafted coffee.',
      icon: '☕'
    },
    {
      title: 'Beautiful Ambience',
      description: 'A comfortable space for every occasion.',
      icon: '✨'
    },
    {
      title: 'Good Moments',
      description: 'Perfect for friends, family and celebrations.',
      icon: '❤️'
    }
  ];

}