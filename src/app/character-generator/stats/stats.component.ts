import { Component, Input } from "@angular/core";

import * as Characters from "app/models/characters";

@Component({
  selector: "dnd-stats",
  templateUrl: "./stats.component.html"
})
export class StatsComponent {
  @Input() character: Characters.Character;
};
