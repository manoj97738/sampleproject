import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-comp/first.component';
import { HelloComponent } from "./hello/hello.component";
import { MyhllowComponent } from './myhllow/myhllow.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HelloComponent,
    MyhllowComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
