import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sit-myhllow',
  templateUrl: './myhllow.component.html',
  styleUrls: ['./myhllow.component.scss']
})
export class MyhelloComponent implements OnInit {
  public signinForm: FormGroup;
  public something: FormControl = new FormControl("");
  ngmd: any;
  constructor() {
    this.signinForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(9),]),
    })
  }
  mysubmit() {
    console.log(this.signinForm);
    console.log(this.something)
    console.log(this.ngmd)
    if (this.signinForm.valid) {
      alert("I am valid")
    }
  }
  ngOnInit(): void {
  }
  iamValid(control: string) {
    const ctr = this.signinForm.get(control);
    if (ctr?.errors) {
      if (ctr.errors["required"]) {
        return "this field is required";
      }
      if (ctr.errors["minlength"]) {
        return "this field is minlength";
      }
      if (ctr.errors["maxlength"]) {
        return "this field is maxlength";
      }
      return "";
    }
    return "";
  }
}
