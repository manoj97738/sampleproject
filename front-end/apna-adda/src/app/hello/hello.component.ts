import { Component,Input } from "@angular/core";

@Component({
  selector: 'sit-hello',
  template: "<h1>hello world first Component {{title}}</h1>",
  styles: ['h1 { font-weight: normal;color:pink }']
})
export class HelloComponent {
  @Input() title: any = "";
  alertHi(){
    alert("can deactive")
  }
}
