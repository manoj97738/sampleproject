import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sit-myhllow',
  templateUrl: './myhllow.component.html',
  styleUrls: ['./myhllow.component.scss']
})
export class MyhelloComponent implements OnInit {
  public signinForm: FormGroup;
  public something: FormControl = new FormControl("");
  ngmd:any;
  constructor() {
    this.signinForm = new FormGroup({
      email: new FormControl(""),
      password: new FormControl("", []),
    })
  }
  mysubmit() {
    console.log(this.signinForm.value);
    console.log(this.something)
    console.log(this.ngmd)
  }
  ngOnInit(): void {
  }

}
