import { Component, Input } from "@angular/core";

import * as Characters from "app/models/characters";

import { CharacterBuilder } from "../builders/character-builder";

@Component({
  selector: "dnd-character-header",
  templateUrl: "./character-header.component.html"
})
export class CharacterHeaderComponent {
  @Input() character: Characters.Character;
  @Input() builder: CharacterBuilder;

  onRefreshNameClick(e) {
    this.builder.randomizeName(this.character);
    e.preventDefault();
    return false;
  };

  onRefreshPhysicalityClick(e) {
    // TODO: Re-implement this.
    // this.builder.randomizeHeightAndWeight(this.character);
    // this.builder.randomizeGender(this.character);
    // this.builder.randomizeAge(this.character);
    // this.builder.randomizeAlignment(this.character);
    e.preventDefault();
    return false;
  }
};
