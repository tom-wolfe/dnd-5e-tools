import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CharacterGeneratorComponent } from "./character-generator/character-generator.component";
import { NameGeneratorComponent } from "./name-generator/name-generator.component";

const routes: Routes = [
  { path: "", redirectTo: "/character-generator", pathMatch: "full" },
  { path: "character-generator", component: CharacterGeneratorComponent },
  { path: "name-generator", component: NameGeneratorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
