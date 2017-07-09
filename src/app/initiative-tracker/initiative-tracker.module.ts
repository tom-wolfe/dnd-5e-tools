import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";

import { InitiativeHeaderComponent } from "./initiative-header/initiative-header.component";
import { InitiativeListComponent } from "./initiative-list/initiative-list.component";
import { InitiativeTrackerRoutingModule } from "./initiative-tracker-routing.module";
import { InitiativeTrackerComponent } from "./initiative-tracker.component";

@NgModule({
  imports: [
    SharedModule,
    InitiativeTrackerRoutingModule
  ],
  declarations: [
    InitiativeTrackerComponent,
    InitiativeHeaderComponent,
    InitiativeListComponent,
  ]
})
export class InitiativeTrackerModule { }
