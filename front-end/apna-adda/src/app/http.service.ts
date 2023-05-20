import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { user } from "./user.model";
@Injectable({ providedIn: "root" })
export class HttpService {
  constructor(public http: HttpClient) {



  }

  getTodos() {
    this.http.get("https://jsonplaceholder.typicode.com/todos/1")
      .subscribe((data: user | any) => {
        console.log(data)
      })
  }
  postTodos() {
    this.http.post("https://jsonplaceholder.typicode.com/posts", { data: 2 })
      .subscribe((data: user | any) => {
        console.log(data)
      })
  }
  patchTodos() {
    this.http.patch("https://jsonplaceholder.typicode.com/posts/1", { id: 101, data: 2 })
      .subscribe((data: user | any) => {
        console.log(data)
      })
  }
}
