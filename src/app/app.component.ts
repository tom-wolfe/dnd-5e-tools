import { Component } from "@angular/core";
import { GeneratorConfig } from "../models/generator-config";
import { CharacterGenerator } from "../generators/character-generator";

import * as Characters from "../models/characters";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "D&D 5th Edition NPC Generator";
  character: Characters.Character;
  config: GeneratorConfig = new GeneratorConfig();
  generator = new CharacterGenerator(this.config);

  constructor() {
    this.character = this.generator.generateCharacter();
  };

  onGenerateClick() {
    this.character = this.generator.generateCharacter();
  };
};