import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";

import { InitiativeTrackerRoutingModule } from "./initiative-tracker-routing.module";
import { InitiativeTrackerComponent } from "./initiative-tracker.component";

@NgModule({
  imports: [
    SharedModule,
    InitiativeTrackerRoutingModule
  ],
  declarations: [
    InitiativeTrackerComponent
  ]
})
export class InitiativeTrackerModule { }
