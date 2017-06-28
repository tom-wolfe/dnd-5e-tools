import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NotFoundComponent } from "./not-found/not-found.component";

const coreRoutes: Routes = [
  { path: "", redirectTo: "/character-generator", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
