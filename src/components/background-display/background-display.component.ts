import { Component, Input } from "@angular/core";

import { CharacterGenerator } from "../../generators/character-generator";
import * as Characters from "../../models/characters";

@Component({
  selector: "background-display",
  templateUrl: "./background-display.component.html",
  styleUrls: ["./background-display.component.scss"]
})
export class BackgroundDisplayComponent {
  @Input() character: Characters.Character;
  @Input() generator: CharacterGenerator;

  onRefreshBackgroundClick(e) {
    this.generator.randomizePersonality(this.character);
    e.preventDefault();
    return false;
  }
};
