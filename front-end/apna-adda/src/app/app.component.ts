import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'sit-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myetst = 'apna-adda from component';
  constructor(public myhttp: HttpService) {
    this.myhttp.getTodos()
      .subscribe((subscribe) => {

      });
    this.myhttp.patchTodos();
    this.myhttp.patchTodos();
  }
  login() {
    this.myhttp.login().subscribe((resp: any) => {
      console.log("login", resp);
      sessionStorage.setItem("token", resp.token);
      sessionStorage.setItem("user", JSON.stringify(resp.data));
    })
  }
}
