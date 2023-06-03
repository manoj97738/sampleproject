
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: any = sessionStorage.getItem('token')

    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `${token}`,
          Manoj: "Manoj"
        }
      });
    }
    return next.handle(req);
  }
}
