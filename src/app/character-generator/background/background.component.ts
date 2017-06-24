import { Component, Input } from "@angular/core";

import * as Characters from "app/models/characters";

import { CharacterGenerator } from "../generators/character-generator";

@Component({
  selector: "dnd-background",
  templateUrl: "./background.component.html"
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
