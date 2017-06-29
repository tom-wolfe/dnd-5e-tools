import { Component, Input } from "@angular/core";

import * as Data from "app/data";
import * as Characters from "app/models/characters";

@Component({
  selector: "dnd-ability",
  templateUrl: "./ability.component.html",
  host: {"class": "col-sm-2 col-4"}
})
export class AbilityComponent {
  @Input() ability: string;
  @Input() character: Characters.Character;

  get abilityName(): string {
    return Data.Abilities.AbilityList[this.ability].name;
  }

  get modifier(): number {
    return this.character.abilities.getModifier(this.ability);
  }

  get modifierText(): string {
    return this.character.abilities.getModifierString(this.ability);
  }
};
