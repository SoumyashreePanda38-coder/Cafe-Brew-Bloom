import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  setPageSeo(
    pageTitle: string,
    description: string
  ): void {
    this.title.setTitle(pageTitle);

    this.meta.updateTag({
      name: 'description',
      content: description
    });
  }
}
