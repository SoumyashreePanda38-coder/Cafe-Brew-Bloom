import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  setTheme(
    primaryColor: string,
    secondaryColor: string,
    accentColor?: string
  ): void {
    const root = document.documentElement;

    root.style.setProperty('--primary-color', primaryColor);
    root.style.setProperty('--secondary-color', secondaryColor);

    if (accentColor) {
      root.style.setProperty('--accent-color', accentColor);
    }
  }
}
