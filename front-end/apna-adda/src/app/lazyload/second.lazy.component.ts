import { Component,Input } from "@angular/core";

@Component({
  selector: 'sit-lazy-second',
  template: `<h1>seoncd world first Component {{title}}</h1>

  <router-outlet></router-outlet>
`,
  styles: ['h1 { font-weight: normal;color:pink }']
})
export class SecondlazyComponent {
  @Input() title: any = "";
}
