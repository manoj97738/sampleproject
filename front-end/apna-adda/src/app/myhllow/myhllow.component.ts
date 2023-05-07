import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'sit-myhllow',
  templateUrl: './myhllow.component.html',
  styleUrls: ['./myhllow.component.scss']
})
export class MyhelloComponent implements OnInit {
  public signinForm: FormGroup;
  public something: FormControl = new FormControl("");
  ngmd: any;
  constructor(public fb: FormBuilder) {
    // this.signinForm = new FormGroup({
    //   email: new FormControl("", [Validators.required, Validators.email]),
    //   password: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(9),]),
    // })

    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.email]],
      phone: new FormArray([]),
      address: new FormArray([])
    })
  }

  get phones() {
    return this.signinForm.controls["phone"] as FormArray;
  }
  addLesson() {
    const arr  = this.signinForm.controls["phone"] as FormArray;
    arr.push(new FormControl("", [Validators.required,]));
  }
  deleteLesson(lessonIndex: number) {
    this.phones.removeAt(lessonIndex);
  }
  get address() {
    return this.signinForm.controls["address"] as FormArray;
  }
  addaddress() {
    const fg = this.fb.group({
      line1: new FormControl("", [Validators.required,]),
      line2: new FormControl("", [Validators.required,]),
      pincode: new FormControl("", [Validators.required,]),
    })
    this.address.push(fg);
  }
  deleteaddress(lessonIndex: number) {
    this.address.removeAt(lessonIndex);
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
