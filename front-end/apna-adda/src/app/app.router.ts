import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first-comp/first.component";
import { HelloComponent } from "./hello/hello.component";
import { MyhelloComponent } from "./myhllow/myhllow.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const myRoutes: Routes = [
  { path: "", component: FirstComponent, },
  { path: "hello", component: HelloComponent, },
  { path: "myhello", component: MyhelloComponent, },
  {
    path: "lazy",
    loadChildren: () =>  import('./lazyload/lazyload.module').then((m) => m.LazyModule),
  }

];

@NgModule({
  declarations: [
    FirstComponent,
    HelloComponent,
    MyhelloComponent
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

