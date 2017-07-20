import { Component, ElementRef, Input, ViewChild } from "@angular/core";

import { Dice } from "dice-typescript";
import * as _ from "lodash";

import { HpModalComponent } from "../hp-modal/hp-modal.component";
import { CreatureInitiative } from "../models/creature-initiative";

@Component({
  selector: "dnd-initiative-list",
  templateUrl: "./initiative-list.component.html",
  styleUrls: ["./initiative-list.component.scss"]
})
export class InitiativeListComponent {
  @Input() currentInitiative: number;

  @ViewChild("count") countInput: ElementRef;
  @ViewChild("mdlHP") mdlHP: HpModalComponent

  creatures: CreatureInitiative[] = [];
  newCreature: CreatureInitiative = new CreatureInitiative();
  newCreatureCount = 1;
  activeCreature: CreatureInitiative;
  editingCreature: CreatureInitiative;

  private dice: Dice = new Dice();

  onAddToInitiativeClick(e): void {
    const init = this.newCreature.initiative || "1d20";
    for (let x = 1; x <= this.newCreatureCount; x++) {
      const creature = new CreatureInitiative(this.newCreature);
      if (this.newCreatureCount > 1) {
        creature.name += ` (#${x})`;
      }
      creature.maximumHp = this.dice.roll(creature.maximumHp || "10").total;
      creature.currentHp = creature.maximumHp;
      creature.initiative = this.dice.roll(init).total;
      this.creatures.push(creature);
    }
    this.sortCreatures();
    this.newCreature = new CreatureInitiative();
    this.newCreatureCount = 1;
    this.countInput.nativeElement.focus();
    if (e) { e.preventDefault(); }
  }

  onHPClick(e, creature): void {
    this.activeCreature = creature;
    this.mdlHP.open();
  }

  onRemoveClick(e, creature: CreatureInitiative) {
    e.preventDefault();
    const index = this.creatures.indexOf(creature);
    this.creatures.splice(index, 1);
  }

  preProcessRoll(e) {
    try {
      e.value = this.dice.roll(e.value).total;
    } catch (ex) {
      // Ignore.
    }
  }

  clear() {
    this.creatures = [];
  }

  afterInitiativeChanged(e) {
    this.sortCreatures();
  }

  sortCreatures() {
    this.creatures = _.orderBy(this.creatures, ["initiative"], "desc");
  }
};
