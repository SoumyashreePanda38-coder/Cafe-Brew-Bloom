import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: 'img[appLazyImage]'
})
export class LazyImageDirective {

  @Input() appLazyImage = '';

  constructor(
    private elementRef: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const image = this.elementRef.nativeElement;

    // Enable browser-level lazy loading
    this.renderer.setAttribute(image, 'loading', 'lazy');

    // Set the actual image source
    if (this.appLazyImage) {
      this.renderer.setAttribute(image, 'src', this.appLazyImage);
    }
  }

  @HostListener('error')
  onError(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'src',
      'assets/common/images/image-placeholder.jpg'
    );
  }
}