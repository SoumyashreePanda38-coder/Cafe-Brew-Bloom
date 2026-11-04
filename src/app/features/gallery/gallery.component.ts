import {
  Component,
  HostListener,
  OnDestroy,
  OnInit
} from '@angular/core';

import { GalleryItem } from '../../core/models/gallery.model';
import { GalleryService } from '../../core/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {

  // ============================================================
  // GALLERY DATA
  // ============================================================

  galleryItems: GalleryItem[] = [];

  activeIndex = 0;

  selectedImage: GalleryItem | null = null;

  isLoading = true;


  // ============================================================
  // WHEEL STATE
  // ============================================================

  rotation = 0;

  isDragging = false;

  isSpinning = false;

  private startX = 0;

  private startRotation = 0;

  private rotationVelocity = 0;

  private animationFrame: number | null = null;


  // ============================================================
  // TOUCH STATE
  // ============================================================

  private touchStartX = 0;

  private touchStartRotation = 0;


  // ============================================================
  // CONSTRUCTOR
  // ============================================================

  constructor(
    private galleryService: GalleryService
  ) {}


  // ============================================================
  // INIT
  // ============================================================

  ngOnInit(): void {
    this.loadGallery();
  }


  // ============================================================
  // LOAD GALLERY
  // ============================================================

  loadGallery(): void {

    this.galleryService
      .getGalleryItems()
      .subscribe({

        next: (items: GalleryItem[]) => {

          this.galleryItems = items;

          this.isLoading = false;

          this.activeIndex = 0;

          this.rotation = 0;
        },

        error: (error: unknown) => {

          console.error(
            'Failed to load gallery:',
            error
          );

          this.isLoading = false;
        }

      });
  }


  // ============================================================
  // ACTIVE IMAGE
  // ============================================================

  get activeItem(): GalleryItem | null {

    if (!this.galleryItems.length) {
      return null;
    }

    return this.galleryItems[this.activeIndex];
  }


  // ============================================================
  // WHEEL POSITION
  // ============================================================

  getItemRotation(index: number): number {

    if (!this.galleryItems.length) {
      return 0;
    }

    const angleStep =
      360 / this.galleryItems.length;

    return (
      index * angleStep +
      this.rotation
    );
  }


  // ============================================================
  // WHEEL TRANSLATION
  // ============================================================

  getItemTransform(index: number): string {

    const angle =
      this.getItemRotation(index);

    const radians =
      angle * Math.PI / 180;

    /*
     * Radius of the wheel.
     * CSS handles the responsive size.
     */
    const radius = 190;

    const x =
      Math.sin(radians) * radius;

    const y =
      -Math.cos(radians) * radius;


    /*
     * Front/back depth.
     *
     * cos(angle)
     * 1    = front
     * -1   = back
     */
    const depth =
      (Math.cos(radians) + 1) / 2;


    const scale =
      0.70 +
      depth * 0.30;


    const opacity =
      0.38 +
      depth * 0.62;


    const zIndex =
      Math.round(depth * 100);


    return `
      translate3d(
        ${x}px,
        ${y}px,
        0
      )
      translate(-50%, -50%)
      scale(${scale})
    `;
  }


  // ============================================================
  // WHEEL ITEM STYLE
  // ============================================================

  getItemStyle(index: number): {
    transform: string;
    opacity: number;
    zIndex: number;
  } {

    const angle =
      this.getItemRotation(index);

    const radians =
      angle * Math.PI / 180;

    const depth =
      (Math.cos(radians) + 1) / 2;

    return {

      transform:
        this.getItemTransform(index),

      opacity:
        0.38 + depth * 0.62,

      zIndex:
        Math.round(depth * 100)
    };
  }


  // ============================================================
  // CLICK IMAGE
  // ============================================================

  selectImage(index: number): void {

    if (this.isDragging) {
      return;
    }

    this.stopSpin();

    this.activeIndex = index;

    this.rotateToIndex(index);
  }


  // ============================================================
  // ROTATE TO INDEX
  // ============================================================

  rotateToIndex(index: number): void {

    if (!this.galleryItems.length) {
      return;
    }

    const angleStep =
      360 / this.galleryItems.length;


    const targetRotation =
      -index * angleStep;


    this.animateRotation(
      this.rotation,
      targetRotation
    );
  }


  // ============================================================
  // ANIMATE ROTATION
  // ============================================================

  private animateRotation(
    from: number,
    to: number
  ): void {

    const startTime =
      performance.now();

    const duration = 650;


    const animate = (
      currentTime: number
    ) => {

      const elapsed =
        currentTime - startTime;

      const progress =
        Math.min(
          elapsed / duration,
          1
        );


      /*
       * Smooth ease-out.
       */
      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );


      this.rotation =
        from +
        (to - from) *
        eased;


      if (progress < 1) {

        this.animationFrame =
          requestAnimationFrame(
            animate
          );

      } else {

        this.rotation = to;

        this.animationFrame = null;
      }
    };


    if (this.animationFrame) {

      cancelAnimationFrame(
        this.animationFrame
      );
    }


    this.animationFrame =
      requestAnimationFrame(
        animate
      );
  }


  // ============================================================
  // NEXT
  // ============================================================

  nextSlide(): void {

    if (!this.galleryItems.length) {
      return;
    }

    this.stopSpin();

    this.activeIndex =
      (
        this.activeIndex + 1
      ) %
      this.galleryItems.length;


    this.rotateToIndex(
      this.activeIndex
    );
  }


  // ============================================================
  // PREVIOUS
  // ============================================================

  previousSlide(): void {

    if (!this.galleryItems.length) {
      return;
    }

    this.stopSpin();

    this.activeIndex =
      (
        this.activeIndex -
        1 +
        this.galleryItems.length
      ) %
      this.galleryItems.length;


    this.rotateToIndex(
      this.activeIndex
    );
  }


  // ============================================================
  // DRAG START
  // ============================================================

  startDrag(
    event: MouseEvent
  ): void {

    if (this.isSpinning) {
      this.stopSpin();
    }


    this.isDragging = true;

    this.startX =
      event.clientX;

    this.startRotation =
      this.rotation;

    this.rotationVelocity = 0;
  }


  // ============================================================
  // DRAG MOVE
  // ============================================================

  @HostListener(
    'window:mousemove',
    ['$event']
  )
  onMouseMove(
    event: MouseEvent
  ): void {

    if (!this.isDragging) {
      return;
    }


    const delta =
      event.clientX -
      this.startX;


    this.rotation =
      this.startRotation +
      delta * 0.35;


    this.rotationVelocity =
      delta * 0.35;
  }


  // ============================================================
  // DRAG END
  // ============================================================

  @HostListener(
    'window:mouseup'
  )
  endDrag(): void {

    if (!this.isDragging) {
      return;
    }


    this.isDragging = false;


    /*
     * Small inertia effect.
     */
    if (
      Math.abs(
        this.rotationVelocity
      ) > 15
    ) {

      this.rotation +=
        this.rotationVelocity *
        0.8;
    }


    this.snapToClosest();
  }


  // ============================================================
  // SNAP TO CLOSEST
  // ============================================================

  private snapToClosest(): void {

    if (!this.galleryItems.length) {
      return;
    }


    const angleStep =
      360 /
      this.galleryItems.length;


    let normalized =
      this.rotation % 360;


    if (normalized > 180) {
      normalized -= 360;
    }

    if (normalized < -180) {
      normalized += 360;
    }


    let closestIndex =
      Math.round(
        -normalized /
        angleStep
      );


    closestIndex =
      (
        closestIndex +
        this.galleryItems.length
      ) %
      this.galleryItems.length;


    this.activeIndex =
      closestIndex;


    this.rotateToIndex(
      closestIndex
    );
  }


  // ============================================================
  // TOUCH START
  // ============================================================

  onTouchStart(
    event: TouchEvent
  ): void {

    if (this.isSpinning) {
      this.stopSpin();
    }


    this.touchStartX =
      event.touches[0].clientX;


    this.touchStartRotation =
      this.rotation;
  }


  // ============================================================
  // TOUCH MOVE
  // ============================================================

  onTouchMove(
    event: TouchEvent
  ): void {

    if (!event.touches.length) {
      return;
    }


    const currentX =
      event.touches[0].clientX;


    const delta =
      currentX -
      this.touchStartX;


    this.rotation =
      this.touchStartRotation +
      delta * 0.45;
  }


  // ============================================================
  // TOUCH END
  // ============================================================

  onTouchEnd(): void {

    this.snapToClosest();
  }


  // ============================================================
  // SPIN
  // ============================================================

  spinWheel(): void {

    if (
      this.isSpinning ||
      !this.galleryItems.length
    ) {
      return;
    }


    this.isSpinning = true;


    const startRotation =
      this.rotation;


    const extraRotation =
      720;


    const targetRotation =
      startRotation +
      extraRotation;


    const startTime =
      performance.now();


    const duration =
      2600;


    const animate = (
      currentTime: number
    ) => {

      if (!this.isSpinning) {
        return;
      }


      const elapsed =
        currentTime -
        startTime;


      const progress =
        Math.min(
          elapsed / duration,
          1
        );


      /*
       * Fast start,
       * smooth slow finish.
       */
      const eased =
        1 -
        Math.pow(
          1 - progress,
          4
        );


      this.rotation =
        startRotation +
        (
          targetRotation -
          startRotation
        ) *
        eased;


      if (progress < 1) {

        this.animationFrame =
          requestAnimationFrame(
            animate
          );

      } else {

        this.isSpinning = false;

        this.snapToClosest();
      }
    };


    this.animationFrame =
      requestAnimationFrame(
        animate
      );
  }


  // ============================================================
  // STOP SPIN
  // ============================================================

  stopSpin(): void {

    this.isSpinning = false;


    if (this.animationFrame) {

      cancelAnimationFrame(
        this.animationFrame
      );

      this.animationFrame = null;
    }
  }


  // ============================================================
  // OPEN LIGHTBOX
  // ============================================================

  openImage(
    item: GalleryItem
  ): void {

    this.selectedImage =
      item;


    document.body.style.overflow =
      'hidden';
  }


  // ============================================================
  // CLOSE LIGHTBOX
  // ============================================================

  closeImage(): void {

    this.selectedImage =
      null;


    document.body.style.overflow =
      '';
  }


  // ============================================================
  // LIGHTBOX NEXT
  // ============================================================

  nextLightboxImage(): void {

    if (!this.galleryItems.length) {
      return;
    }


    this.activeIndex =
      (
        this.activeIndex + 1
      ) %
      this.galleryItems.length;


    this.selectedImage =
      this.galleryItems[
        this.activeIndex
      ];


    this.rotateToIndex(
      this.activeIndex
    );
  }


  // ============================================================
  // LIGHTBOX PREVIOUS
  // ============================================================

  previousLightboxImage(): void {

    if (!this.galleryItems.length) {
      return;
    }


    this.activeIndex =
      (
        this.activeIndex -
        1 +
        this.galleryItems.length
      ) %
      this.galleryItems.length;


    this.selectedImage =
      this.galleryItems[
        this.activeIndex
      ];


    this.rotateToIndex(
      this.activeIndex
    );
  }


  // ============================================================
  // KEYBOARD
  // ============================================================

  @HostListener(
    'window:keydown',
    ['$event']
  )
  onKeyDown(
    event: KeyboardEvent
  ): void {

    if (!this.selectedImage) {
      return;
    }


    if (
      event.key === 'Escape'
    ) {

      this.closeImage();
    }


    if (
      event.key === 'ArrowRight'
    ) {

      this.nextLightboxImage();
    }


    if (
      event.key === 'ArrowLeft'
    ) {

      this.previousLightboxImage();
    }
  }


  // ============================================================
  // TRACK BY
  // ============================================================

  trackByGalleryId(
    index: number,
    item: GalleryItem
  ): string {

    return item.id;
  }


  // ============================================================
  // DESTROY
  // ============================================================

  ngOnDestroy(): void {

    this.stopSpin();

    document.body.style.overflow =
      '';
  }
}