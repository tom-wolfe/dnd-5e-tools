import { Component, Input, Output } from "@angular/core";

@Component({
  selector: "ability-score",
  templateUrl: "./ability-score.component.html",
  styleUrls: ["./ability-score.component.scss"]
})
export class AbilityScoreComponent {
  @Input() ability: string;
  @Input() score = 10;
  get modifier(): number {
    return Math.floor((this.score - 10) / 2);
  }
  get modifierText(): string {
    const mod = this.modifier;
    return (mod >= 0) ? "+" + mod : mod.toString();
  }
};
