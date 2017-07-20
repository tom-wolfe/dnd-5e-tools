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

  onDiceRoll() {
    console.log("Face!");
    try {
      this.diceResult = this.dice.roll(this.diceRoll).total;
    } catch (ex) { }
  }
};
