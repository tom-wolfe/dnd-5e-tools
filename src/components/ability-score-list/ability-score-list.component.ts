import { Component, Input } from "@angular/core";
import { AbilityScores } from "../../models/ability-scores";

@Component({
  selector: "ability-score-list",
  templateUrl: "./ability-score-list.component.html",
  styleUrls: ["./ability-score-list.component.scss"]
})
export class AbilityScoreListComponent {
  @Input() abilities: AbilityScores;
};
