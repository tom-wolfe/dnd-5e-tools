import { Component, Input } from "@angular/core";

import { CharacterGenerator } from "../../../generators/character-generator";
import * as Characters from "../../../models/characters";

@Component({
  selector: "dnd-background",
  templateUrl: "./background.component.html",
  styleUrls: ["./background.component.scss"]
})
export class BackgroundComponent {
  @Input() character: Characters.Character;
  @Input() generator: CharacterGenerator;

  onRefreshBackgroundClick(e) {
    this.generator.randomizePersonality(this.character);
    e.preventDefault();
    return false;
  }
};
