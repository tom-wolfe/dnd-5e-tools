import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared/shared.module";

import { CurHpModalComponent } from "./cur-hp-modal/cur-hp-modal.component";
import { InitiativeFooterComponent } from "./initiative-footer/initiative-footer.component";
import { InitiativeHeaderComponent } from "./initiative-header/initiative-header.component";
import { InitiativeListComponent } from "./initiative-list/initiative-list.component";
import { InitiativeTrackerRoutingModule } from "./initiative-tracker-routing.module";
import { InitiativeTrackerComponent } from "./initiative-tracker.component";
import { MaxHpModalComponent } from "./max-hp-modal/max-hp-modal.component";

@NgModule({
  imports: [
    SharedModule,
    InitiativeTrackerRoutingModule
  ],
  declarations: [
    InitiativeTrackerComponent,
    InitiativeHeaderComponent,
    InitiativeListComponent,
    CurHpModalComponent,
    MaxHpModalComponent,
    InitiativeFooterComponent
  ]
})
export class InitiativeTrackerModule { }
