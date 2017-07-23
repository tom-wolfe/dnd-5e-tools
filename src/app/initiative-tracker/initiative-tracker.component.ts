import { CreatureInitiative } from "./models/creature-initiative";
import { Component, ViewChild } from "@angular/core";
import { Dice } from "dice-typescript";

import { InitiativeListComponent } from "./initiative-list/initiative-list.component";

@Component({
  selector: "dnd-initiative-tracker",
  templateUrl: "./initiative-tracker.component.html"
})
export class InitiativeTrackerComponent {
  @ViewChild("list") initiativeList: InitiativeListComponent;

  activeCreature: CreatureInitiative;
  currentRound = 0;

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

  onBackClick() {
    const creatures = this.initiativeList.creatures;
    const activeIndex = creatures.indexOf(this.activeCreature);
    const activeCreatures = creatures.filter(c => c.active);

    if (!this.activeCreature) { return; }
    if (activeCreatures.length === 0) { return; }
    if (this.currentRound === 0 && activeIndex === 0 || this.activeCreature === activeCreatures[0]) { return; }

    let activeCreature: CreatureInitiative = null;

    const previousCreatures = activeCreatures.filter(c => {
      const cIndex = creatures.indexOf(c);
      return cIndex < activeIndex;
    });

    if (previousCreatures.length > 0) {
      activeCreature = previousCreatures[previousCreatures.length - 1];
    } else {
      activeCreature = activeCreatures[activeCreatures.length - 1];
      this.currentRound--;
    }

    this.activeCreature = activeCreature;
    this.initiativeList.scrollToCreature(activeCreature);

  }
};
