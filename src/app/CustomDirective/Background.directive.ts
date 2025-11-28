import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
  standalone: true,
})
export class SetBackground {
  @Input() backColor: string = '#36454F';
  @Input() textColor: string = 'white';
  constructor(private el: ElementRef, private renderer: Renderer2) {
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }
  @Input('setBackground')backgroundText: {
    backColor: string;
    textColor: string;
  };
  ngOnInit() {
    // this.el.nativeElement.style.backgroundColor = '#36454F';
    //this.el.nativeElement.style.color='white'
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.backgroundText.backColor);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.backgroundText.textColor);
  }
}
