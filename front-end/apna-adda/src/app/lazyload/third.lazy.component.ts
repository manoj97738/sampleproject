import { Component,Input } from "@angular/core";

@Component({
  selector: 'sit-lazy-third',
  template: "<h1>ThirdlazyComponent world first Component {{title}}</h1>",
  styles: ['h1 { font-weight: normal;color:pink }']
})
export class ThirdlazyComponent {
  @Input() title: any = "";
}
