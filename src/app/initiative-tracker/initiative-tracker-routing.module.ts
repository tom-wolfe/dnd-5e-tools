import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InitiativeTrackerComponent } from "./initiative-tracker.component";

const initiativeGeneratorRoutes: Routes = [
  {
    path: "initiative",
    children: [
      { path: "", component: InitiativeTrackerComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(initiativeGeneratorRoutes)
  ],
  exports: [RouterModule]
})
export class InitiativeTrackerRoutingModule { }
