import { Component, ElementRef, Input, ViewChild } from "@angular/core";

import { Dice } from "dice-typescript";
import * as _ from "lodash";

import { CreatureInitiative } from "../models/creature-initiative";

@Component({
  selector: "dnd-initiative-list",
  templateUrl: "./initiative-list.component.html",
  styleUrls: ["./initiative-list.component.scss"]
})
export class InitiativeListComponent {
  private dice: Dice = new Dice();

  @Input() creatures: CreatureInitiative[];
  @Input() currentInitiative: number;
  @ViewChild("count") countInput: ElementRef;
  newCreature: CreatureInitiative = new CreatureInitiative();
  newCreatureCount = 1;

  get sortedCreatures(): CreatureInitiative[] {
    return _.orderBy(this.creatures, ["initiative"], "desc");
  }

  onAddToInitiativeClick(): void {
    const init = this.newCreature.initiative || "1d20";
    for (let x = 1; x <= this.newCreatureCount; x++) {
      const creature = new CreatureInitiative(this.newCreature);
      if (this.newCreatureCount > 1) {
        creature.name += ` (#${x})`;
      }
      creature.initiative = this.dice.roll(init).total;
      this.creatures.push(creature);
    }
    this.newCreature = new CreatureInitiative();
    this.newCreatureCount = 1;
    this.countInput.nativeElement.focus();
  }

  onRemoveClick(e, creature) {
    e.preventDefault();
    const index = this.creatures.indexOf(creature);
    this.creatures.splice(index, 1);
  }
};
