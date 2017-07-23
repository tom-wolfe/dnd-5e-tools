import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Dice } from "dice-typescript";
import * as _ from "lodash";

import { CurHpModalComponent } from "../cur-hp-modal/cur-hp-modal.component";
import { CreatureInitiative } from "../models/creature-initiative";

@Component({
  selector: "dnd-initiative-list",
  templateUrl: "./initiative-list.component.html",
  styleUrls: ["./initiative-list.component.scss"]
})
export class InitiativeListComponent {
  @Input() activeCreature: CreatureInitiative;

  @ViewChild("count") countInput: ElementRef;
  @ViewChild("mdlCurHP") mdlCurHP: CurHpModalComponent
  @ViewChild("mdlMaxHP") mdlMaxHP: CurHpModalComponent
  @ViewChildren("creatureRow") creatureRows: QueryList<ElementRef>;

  creatures: CreatureInitiative[] = [];
  newCreature: CreatureInitiative = new CreatureInitiative();
  newCreatureCount = 1;
  editingCreature: CreatureInitiative;

  private dice: Dice = new Dice();

  onAddToInitiativeClick(e): void {
    const init = this.newCreature.initiative || "1d20";

    let lastCreature = 0;
    this.creatures.forEach(creature => {
      const res = /(.+)\(#(\d+)\)/.exec(creature.name);
      if (res) {
        const number = Number(res[2]);
        if (_.trim(res[1]) === _.trim(this.newCreature.name) && number > lastCreature) {
          lastCreature = number;
        }
      }
      return creature;
    });

    for (let x = 1; x <= this.newCreatureCount; x++) {
      const creature = new CreatureInitiative(this.newCreature);
      creature.name += ` (#${x + lastCreature})`;
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

  onCurHPClick(e, creature): void {
    this.mdlCurHP.open(creature);
  }

  onMaxHPClick(e, creature): void {
    this.mdlMaxHP.open(creature);
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

  scrollToCreature(creature: CreatureInitiative) {
    if (!creature) { return; }
    const index = this.creatures.indexOf(creature);
    const element = this.creatureRows.toArray()[index].nativeElement;
    window.scrollTo(0, element.offsetTop);
  }
};
