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

  activeCreature: CreatureInitiative;
  currentRound = 0;

  diceRoll: string = null;
  diceResult = 0;

  private dice: Dice = new Dice();

  onResetClick() {
    this.initiativeList.clear();
    this.activeCreature = undefined;
    this.currentRound = 0;
  }

  onNextClick() {
    const creatures = this.initiativeList.creatures;
    const activeCreatures = creatures.filter(c => c.active);
    let activeCreature: CreatureInitiative = null;

    if (!this.activeCreature) {
      if (activeCreatures.length > 0) {
        activeCreature = activeCreatures[0];
        this.currentRound = 1;
      }
    } else {
      const nextCreatures = activeCreatures.filter(c => {
        const cIndex = creatures.indexOf(c);
        const aIndex = creatures.indexOf(this.activeCreature);
        return cIndex > aIndex;
      });

      if (nextCreatures.length > 0) {
        activeCreature = nextCreatures[0];
      } else {
        activeCreature = activeCreatures[0];
        this.currentRound++;
      }
    }

    this.activeCreature = activeCreature;
    this.initiativeList.scrollToCreature(activeCreature);
  }

  onDiceRoll() {
    try {
      this.diceResult = this.dice.roll(this.diceRoll).total;
    } catch (ex) { }
  }
};
