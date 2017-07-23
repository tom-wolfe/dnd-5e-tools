import { CreatureInitiative } from "./models/creature-initiative";
import { Component, ViewChild } from "@angular/core";
import { Dice } from "dice-typescript";

import { InitiativeListComponent } from "./initiative-list/initiative-list.component";

@Component({
  selector: "dnd-initiative-tracker",
  templateUrl: "./initiative-tracker.component.html",
  styleUrls: ["initiative-tracker.component.scss"]
})
export class InitiativeTrackerComponent {
  @ViewChild("list") initiativeList: InitiativeListComponent;

  currentInitiative: number;
  currentRound = 0;
  diceRoll: string = null;
  diceResult = 0;

  private dice: Dice = new Dice();

  onResetClick() {
    this.initiativeList.clear();
    this.currentInitiative = undefined;
    this.currentRound = 0;
  }

  onNextClick() {
    const activeCreatures = this.initiativeList.creatures.filter(c => c.active);
    let activeCreature: CreatureInitiative = null;
    if (!this.currentInitiative) {
      activeCreature = activeCreatures[0];
      this.currentRound = 1;
    } else {
      const nextCreatures = activeCreatures.filter(c => c.initiative < this.currentInitiative);
      if (nextCreatures.length > 0) {
        activeCreature = nextCreatures[0];
      } else {
        activeCreature = activeCreatures[0];
        this.currentRound++;
      }
    }
    this.currentInitiative = activeCreature.initiative;
    this.initiativeList.scrollToCreature(activeCreature);
  }

  onDiceRoll() {
    try {
      this.diceResult = this.dice.roll(this.diceRoll).total;
    } catch (ex) { }
  }
};
