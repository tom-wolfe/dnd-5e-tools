import { Component, Input } from "@angular/core";

import * as Characters from "app/models/characters";

import { CharacterBuilder } from "../builders/character-builder";

@Component({
  selector: "dnd-character-header",
  templateUrl: "./character-header.component.html",
  styleUrls: ["./character-header.component.scss"]
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
    this.builder.randomizeAttributes(this.character);
    e.preventDefault();
    return false;
  }
};
