import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpService } from './http.service';

@Component({
  selector: 'sit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myetst = 'apna-adda from component';
  constructor(public myhttp: HttpService) {
    this.myhttp.getTodos();
    this.myhttp.patchTodos();
    this.myhttp.patchTodos();
  }
}
