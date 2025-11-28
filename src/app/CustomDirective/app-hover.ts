import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHover]',
})
export class AppHover {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostBinding('style.background') background: string = '#28282B';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.color') textColor: string = 'white';

  @HostListener('mouseenter') OnMouseEnter() {
    (this.background = 'white'), (this.border = '#28282B 2px solid');
    this.textColor = '#28282B';
  }
  @HostListener('mouseout') OnMouseOut() {
    (this.background = '#28282B'), (this.border = 'border');
    this.textColor = 'white';
  }
}
