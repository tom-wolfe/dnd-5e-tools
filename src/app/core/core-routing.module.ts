import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const coreRoutes: Routes = [
  { path: "", redirectTo: "/characters", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
