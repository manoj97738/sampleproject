import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { lazyComponent } from "./hello.component";
import { SecondlazyComponent } from "./second.lazy.component";
import { ThirdlazyComponent } from "./third.lazy.component";

const myRoutes: Routes = [
  { path: "", component: lazyComponent, },
  {
    path: "second", component: SecondlazyComponent, children: [
      { path: 'childone', component: ThirdlazyComponent }
    ]
  },
];

@NgModule({
  declarations: [
    lazyComponent,
    SecondlazyComponent,
    ThirdlazyComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(myRoutes)
  ],

  exports: [
    RouterModule,
    FormsModule
  ]
})
export class LazyModule { }

