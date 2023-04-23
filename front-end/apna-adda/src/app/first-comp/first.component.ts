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
  currentClasses: {
    saveable: boolean;
    nospecial: boolean;
    special: boolean;
  } = {
      saveable: false,
      nospecial: false,
      special: false,
    };
  currentStyles: Record<string, string> = {};

  constructor() {
    this.setCurrentClasses();
  }
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.age > 17,
      nospecial: this.age == 17,
      special: this.age === 18,
    };
    this.currentStyles = {
      'font-style': this.age > 17 ? 'italic' : 'normal',
      'font-weight': this.age == 17 ? 'bold' : 'normal',
      'font-size': this.age === 18 ? '24px' : '12px'
    };
  }
  age = 18;
  add() {
    this.isMango = !this.isMango
    this.age = this.age - 1;
    this.setCurrentClasses();
  }
  mydate = new Date();

  myname = "My NAMe is SomThInug";
}
