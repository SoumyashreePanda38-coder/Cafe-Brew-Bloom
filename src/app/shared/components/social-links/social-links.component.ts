import { Component, Input } from '@angular/core';
import { SocialLinks } from '../../../core/models/cafe.model';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent { @Input() links?: SocialLinks; }
