import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: true,
})
export class HighLight {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') OnMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'highlight-product');
  }
  @HostListener('mouseout') OnMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'highlight-product');
  }
}
