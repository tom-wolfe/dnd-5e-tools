import { Component } from "@angular/core";

import * as _ from "lodash";

import { CreatureInitiative } from "./models/creature-initiative";

@Component({
  selector: "dnd-initiative-tracker",
  templateUrl: "./initiative-tracker.component.html"
})
export class InitiativeTrackerComponent {
  creatures: CreatureInitiative[] = [];
  currentInitiative: number;
  currentRound = 0;

  onResetClick() {
    while (this.creatures.length > 0) {
      this.creatures.pop();
    }
    this.currentInitiative = undefined;
    this.currentRound = 0;
  }

  onNextClick() {
    const sortedCreatures = _.orderBy(this.creatures, "initiative", "desc");
    if (!this.currentInitiative) {
      this.currentInitiative = sortedCreatures[0].initiative;
      this.currentRound = 1;
    } else {
      const nextCreatures = sortedCreatures.filter(c => c.initiative < this.currentInitiative && c.active);
      if (nextCreatures.length > 0) {
        this.currentInitiative = nextCreatures[0].initiative;
      } else {
        this.currentInitiative = sortedCreatures[0].initiative;
        this.currentRound++;
      }
    }
  }
};
