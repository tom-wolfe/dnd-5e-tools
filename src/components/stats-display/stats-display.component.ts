import { Component, Input } from "@angular/core";

import * as Characters from "../../models/characters";

@Component({
  selector: "stats-display",
  templateUrl: "./stats-display.component.html",
  styleUrls: ["./stats-display.component.scss"]
})
export class StatsDisplayComponent {
  @Input() character: Characters.Character;
};
