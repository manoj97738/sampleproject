import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { cRouterModule } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    cRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
