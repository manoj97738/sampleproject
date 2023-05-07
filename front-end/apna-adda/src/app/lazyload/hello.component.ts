import { Component,Input } from "@angular/core";

@Component({
  selector: 'sit-lazy-component',
  template: "<h1>lazy world first Component {{title}}</h1>",
  styles: ['h1 { font-weight: normal;color:pink }']
})
export class lazyComponent {
  @Input() title: any = "";
}
