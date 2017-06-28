import { Component, Input } from "@angular/core";

import { Character } from "app/models/characters/character";
import { CharacterBuilder } from "../builders/character-builder";

@Component({
  selector: "dnd-background",
  templateUrl: "./background.component.html"
})
export class BackgroundComponent {
  @Input() character: Character;
  @Input() builder: CharacterBuilder;

  onRefreshBackgroundClick(e) {
    this.builder.randomizeTraits(this.character);
    e.preventDefault();
    return false;
  }
};
