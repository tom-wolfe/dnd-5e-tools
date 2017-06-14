import { Component } from "@angular/core";
import { Character } from "../models/character";
import { CharacterGenerator } from "../generators/character-generator";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "D&D 5th Edition NPC Generator";
  character: Character;
  constructor() {
    this.character = new Character();
  };

  onGenerateClick() {
    const generator = new CharacterGenerator();
    this.character = generator.generateCharacter();
  };

};
