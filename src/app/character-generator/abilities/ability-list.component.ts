import { Component, Input } from "@angular/core";

import * as Data from "app/data";
import * as Characters from "app/models/characters";
import * as _ from "lodash";

import { CharacterBuilder } from "../builders/character-builder";

@Component({
  selector: "dnd-ability-list",
  templateUrl: "./ability-list.component.html",
  styleUrls: ["./ability-list.component.scss"]
})
export class AbilityListComponent {
  @Input() character: Characters.Character;
  @Input() builder: CharacterBuilder;

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
    this.builder.randomizeAbilities(this.character);
    e.preventDefault();
    return false;
  }
};
