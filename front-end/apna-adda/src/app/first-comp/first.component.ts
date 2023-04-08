import { Component, Input } from "@angular/core";

@Component({
  selector: "sit-first-comp",
  templateUrl: "./first.component.html",
  styleUrls: ["./first.component.scss"]
})

export class FirstComponent {
  @Input() title: any = "";
  @Input() name: any = "";
}
