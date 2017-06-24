import { Component, Input } from "@angular/core";
import * as _ from "lodash";

import * as Data from "../../../data";
import { CharacterGenerator } from "../../../generators/character-generator";
import * as Characters from "../../../models/characters";

@Component({
  selector: "dnd-ability-score-list",
  templateUrl: "./ability-score-list.component.html",
  styleUrls: ["./ability-score-list.component.scss"]
})
export class AbilityScoreListComponent {
  @Input() character: Characters.Character;
  @Input() generator: CharacterGenerator;

  get abilityList(): string[] {
    return Object.keys(Data.Abilities.AbilityList);
  }
  get abilitySum(): number {
    const scores = Object.keys(Data.Abilities.AbilityList).map(val => this.character.abilities.get(val) || 0);
    return _.sum(scores);
  }
  get abilityPercentile(): string {
    return (this.abilitySum / 108.0 * 100).toFixed(0);
  }

  onRefreshAbilitiesClick(e) {
    this.generator.randomizeAbilities(this.character);
    e.preventDefault();
    return false;
  }
};
