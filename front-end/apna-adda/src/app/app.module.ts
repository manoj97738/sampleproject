import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-comp/first.component';
import { HelloComponent } from "./hello/hello.component";
import { MyhelloComponent } from './myhllow/myhllow.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HelloComponent,
    MyhelloComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
