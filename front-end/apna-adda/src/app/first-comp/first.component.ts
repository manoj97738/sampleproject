import { Component, Input } from "@angular/core";

@Component({
  selector: "sit-first-comp",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"]
})

export class FirstComponent {
  @Input() title: any = "";
  @Input() name: any = "";
  isMango: boolean = true;
  heroes: Array<{ name: string, age: number }> = [
    { name: "manoj", age: 20 },
    { name: "rahul", age: 70 }
  ];

  age = 18;
  add() {
    this.isMango = !this.isMango
    this.age = this.age - 1;
  }
}
