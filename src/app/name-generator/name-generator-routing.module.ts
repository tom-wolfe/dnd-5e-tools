import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { NameGeneratorComponent } from "./name-generator.component";

const nameGeneratorRoutes: Routes = [
  {
    path: "names",
    children: [
      { path: "", component: NameGeneratorComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(nameGeneratorRoutes)
  ],
  exports: [RouterModule]
})
export class NameGeneratorRoutingModule { }
