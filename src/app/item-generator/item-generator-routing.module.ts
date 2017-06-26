import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ItemGeneratorComponent } from "./item-generator.component";

const itemGeneratorRoutes: Routes = [
  {
    path: "item-generator",
    children: [
      { path: "", component: ItemGeneratorComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(itemGeneratorRoutes)
  ],
  exports: [RouterModule]
})
export class ItemGeneratorRoutingModule { }
