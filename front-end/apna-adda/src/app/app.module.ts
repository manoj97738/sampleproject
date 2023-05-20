import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { cRouterModule } from './app.router';
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from './http.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    cRouterModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
