import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeactiveGuard implements CanDeactivate<HelloComponent> {
  constructor() { }

  canDeactivate(
    component: HelloComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("currentRoute", currentRoute);
    console.log("currentState", currentState);
    console.log("component", component);
    console.log("nextState", nextState)
    component.alertHi();
    return false;
  }
}
