import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CharacterGeneratorComponent } from "./character-generator/character-generator.component";
import { NameGeneratorComponent } from "./name-generator/name-generator.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/character-generator", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
