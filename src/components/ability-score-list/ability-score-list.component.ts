import { Component, Input } from "@angular/core";
import * as Abilities from "../../models/abilities";

@Component({
  selector: "ability-score-list",
  templateUrl: "./ability-score-list.component.html",
  styleUrls: ["./ability-score-list.component.scss"]
})
export class AbilityScoreListComponent {
  @Input() abilities: Abilities.AbilityScores;
  get abilitySum(): number {
    const a: Abilities.AbilityScores = this.abilities;
    return a.strength + a.dexterity + a.constitution + a.wisdom + a.intelligence + a.charisma;
  }
  get abilityPercentile(): string {
    return (this.abilitySum / 108.0 * 100).toFixed(0);
  }
};
