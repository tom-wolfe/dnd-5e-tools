import { Component, Input } from "@angular/core";
import * as Abilities from "../../models/abilities";
import * as Data from "../../data";

import * as _ from "lodash";

@Component({
  selector: "ability-score-list",
  templateUrl: "./ability-score-list.component.html",
  styleUrls: ["./ability-score-list.component.scss"]
})
export class AbilityScoreListComponent {
  @Input() abilities: Abilities.AbilityScores;
  get abilityList(): string[] {
    return Object.keys(Data.Abilities);
  }
  get abilitySum(): number {
    const scores = Object.keys(Data.Abilities).map((val) => this.abilities.get(val) || 0);
    return _.sum(scores);
  }
  get abilityPercentile(): string {
    return (this.abilitySum / 108.0 * 100).toFixed(0);
  }
};
