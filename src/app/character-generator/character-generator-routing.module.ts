import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CharacterGeneratorComponent } from "./character-generator.component";
import { ExportComponent } from "./export";

const characterGeneratorRoutes: Routes = [
  {
    path: "character-generator",
    children: [
      { path: "", component: CharacterGeneratorComponent },
      { path: "export", component: ExportComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(characterGeneratorRoutes)
  ],
  exports: [RouterModule]
})
export class CharacterGeneratorRoutingModule { }
