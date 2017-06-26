import { Component, Input } from "@angular/core";

import * as Characters from "app/models/characters";

import { CharacterGenerator } from "../generators/character-generator";

@Component({
  selector: "dnd-character-header",
  templateUrl: "./character-header.component.html"
})
export class CharacterHeaderComponent {
  @Input() character: Characters.Character;
  @Input() generator: CharacterGenerator;

  onRefreshNameClick(e) {
    this.generator.randomizeName(this.character);
    e.preventDefault();
    return false;
  };

  onRefreshPhysicalityClick(e) {
    this.generator.randomizeHeightAndWeight(this.character);
    this.generator.randomizeGender(this.character);
    this.generator.randomizeAge(this.character);
    this.generator.randomizeAlignment(this.character);
    e.preventDefault();
    return false;
  }
};
