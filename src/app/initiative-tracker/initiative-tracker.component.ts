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
    const creatures = this.initiativeList.creatures;
    if (!this.currentInitiative) {
      this.currentInitiative = creatures[0].initiative;
      this.currentRound = 1;
    } else {
      const nextCreatures = creatures.filter(c => c.initiative < this.currentInitiative && c.active);
      if (nextCreatures.length > 0) {
        this.currentInitiative = nextCreatures[0].initiative;
      } else {
        this.currentInitiative = creatures[0].initiative;
        this.currentRound++;
      }
    }
  }
};
