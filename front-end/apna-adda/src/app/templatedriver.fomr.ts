import { Component, OnInit, ViewChild } from '@angular/core';

class Signup {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public language: string = ''
  ) {}
}

@Component({
  selector: 'template-form',
  template: `<!--suppress ALL -->
    <div class="container">
      <form novalidate (ngSubmit)="onSubmit()" #f="ngForm">
        <fieldset ngModelGroup="name">
          <div
            class="form-group"
            [ngClass]="{
              'has-danger':
                firstName.invalid && (firstName.dirty || firstName.touched),
              'has-success':
                firstName.valid && (firstName.dirty || firstName.touched)
            }"
          >
            <label>First Name</label>
            <input
              type="text"
              class="form-control"
              name="firstName"
              [(ngModel)]="model.firstName"
              required
              #firstName="ngModel"
            />
            <div
              class="form-control-feedback"
              *ngIf="firstName.errors && (firstName.dirty || firstName.touched)"
            >
              <p *ngIf="firstName.errors['required']">First name is required</p>
            </div>
          </div>

          <div
            class="form-group"
            [ngClass]="{
              'has-danger':
                lastName.invalid && (lastName.dirty || lastName.touched),
              'has-success':
                lastName.valid && (lastName.dirty || lastName.touched)
            }"
          >
            <label>Last Name</label>
            <input
              type="text"
              class="form-control"
              name="lastName"
              [(ngModel)]="model.lastName"
              required
              #lastName="ngModel"
            />
            <div
              class="form-control-feedback"
              *ngIf="lastName.errors && (lastName.dirty || lastName.touched)"
            >
              <p *ngIf="lastName.errors['required']">Last name is required</p>
            </div>
          </div>
        </fieldset>

        <div
          class="form-group"
          [ngClass]="{
            'has-danger': email.invalid && (email.dirty || email.touched),
            'has-success': email.valid && (email.dirty || email.touched)
          }"
        >
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            [(ngModel)]="model.email"
            required
            pattern="[^ @]*@[^ @]*"
            #email="ngModel"
          />
          <div
            class="form-control-feedback"
            *ngIf="email.errors && (email.dirty || email.touched)"
          >
            <p *ngIf="email.errors['required']">Email is required</p>
            <p *ngIf="email.errors['pattern']">
              Email must contain at least the @ character
            </p>
          </div>
        </div>

        <div
          class="form-group"
          [ngClass]="{
            'has-danger':
              password.invalid && (password.dirty || password.touched),
            'has-success':
              password.valid && (password.dirty || password.touched)
          }"
        >
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            [(ngModel)]="model.password"
            required
            minlength="8"
            #password="ngModel"
          />
          <div
            class="form-control-feedback"
            *ngIf="password.errors && (password.dirty || password.touched)"
          >
            <p *ngIf="password.errors['required']">Password is required</p>
            <p *ngIf="password.errors['minlength']">
              Password must be at least 8 characters long
            </p>
          </div>
        </div>

        <div class="form-group">
          <label>Language</label>
          <select
            class="form-control"
            name="language"
            [(ngModel)]="model.language"
          >
            <option value="">Please select a language</option>
            <option *ngFor="let lang of langs" [value]="lang">
              {{ lang }}
            </option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary" [disabled]="f.invalid">
          Submit
        </button>

        <pre>{{ f.value | json }}</pre>
      </form>
    </div> `,
})
export class TemplateFormComponent implements OnInit {
  langs: string[] = ['English', 'French', 'German'];
  @ViewChild('f') formref: any;
  model: Signup = new Signup();
  email = '';
  ngOnInit() {}
  onSubmit() {
    if (this.formref.valid) {
      console.log('Form Submitted!');
      this.formref.reset();
    }
  }
}
