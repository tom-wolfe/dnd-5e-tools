import { Component, Input } from "@angular/core";

import * as Characters from "../../models/characters";

@Component({
  selector: "dnd-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"]
})
export class StatsComponent {
  @Input() character: Characters.Character;
};
