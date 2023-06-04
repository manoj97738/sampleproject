import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() someother = '';
  constructor(private el: ElementRef) {
    this.highlight('yellow');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.someother);
  }
  private highlight(color: string) {
    console.log(" this.el.nativeElement", this.el.nativeElement);
    console.log(this.appHighlight, this.someother)
    this.el.nativeElement.innerHTML = "some good stiff"
    this.el.nativeElement.style.backgroundColor = color;
  }
}
