import { Component, Input, Output } from "@angular/core";
import * as Abilities from "../../models/abilities";
import * as Characters from "../../models/characters";

import * as Data from "../../data";

@Component({
  selector: "ability-score",
  templateUrl: "./ability-score.component.html",
  styleUrls: ["./ability-score.component.scss"],
  host: {"class": "col-md-2 col-sm-4 col-6"}
})
export class AbilityScoreComponent {
  @Input() ability: string;
  @Input() character: Characters.Character;

  get abilityName(): string {
    return Data.Abilities.AbilityList[this.ability].name;
  }

  get modifier(): number {
    return this.character.abilities.getModifier(this.ability);
  }

  get modifierText(): string {
    const mod = this.modifier;
    return (mod >= 0) ? "+" + mod : mod.toString();
  }
};
