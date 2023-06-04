import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first-comp/first.component";
import { HelloComponent } from "./hello/hello.component";
import { MyhelloComponent } from "./myhllow/myhllow.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthGuard } from "./auth.guard";
import { AdminGuard } from "./admin.guard";
import { DeactiveGuard } from "./deactive.guard";
import { JwtInterceptor } from "./http.intercerptor";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./error.intercerptor";
import { HighlightDirective } from "./highlight.directive";

const myRoutes: Routes = [
  { path: "", component: FirstComponent, },
  { path: "hello", component: HelloComponent, canActivate: [AuthGuard] },
  { path: "myhello", component: MyhelloComponent, canActivate: [AuthGuard] },
  {
    path: "lazy",
    loadChildren: () => import('./lazyload/lazyload.module').then((m) => m.LazyModule),
  }

];

@NgModule({
  declarations: [
    FirstComponent,
    HelloComponent,
    MyhelloComponent,
    HighlightDirective,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(myRoutes)
  ],

  exports: [
    RouterModule,
    FormsModule
  ]
})
export class cRouterModule { }

