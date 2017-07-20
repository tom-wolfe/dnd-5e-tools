import { Component, ViewChild } from "@angular/core";

import * as _ from "lodash";

import { InitiativeListComponent } from "./initiative-list/initiative-list.component";
import { CreatureInitiative } from "./models/creature-initiative";

@Component({
  selector: "dnd-initiative-tracker",
  templateUrl: "./initiative-tracker.component.html"
})
export class InitiativeTrackerComponent {
  @ViewChild("list") initiativeList: InitiativeListComponent;

  currentInitiative: number;
  currentRound = 0;

  onResetClick() {
    this.initiativeList.clear();
    this.currentInitiative = undefined;
    this.currentRound = 0;
  }

  onNextClick() {
    const activeCreatures = this.initiativeList.creatures.filter(c => c.active);
    if (!this.currentInitiative) {
      this.currentInitiative = activeCreatures[0].initiative;
      this.currentRound = 1;
    } else {
      const nextCreatures = activeCreatures.filter(c => c.initiative < this.currentInitiative);
      if (nextCreatures.length > 0) {
        this.currentInitiative = nextCreatures[0].initiative;
      } else {
        this.currentInitiative = activeCreatures[0].initiative;
        this.currentRound++;
      }
    }
  }
};
