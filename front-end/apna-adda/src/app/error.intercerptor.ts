
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { finalize, tap } from 'rxjs';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;

    return next.handle(req)
      .pipe(
        tap({
          next: (event: any) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
          error: (error) => (ok = 'failed')
        }),
        finalize(() => {
          alert(ok);
        })
      );
  }
}
