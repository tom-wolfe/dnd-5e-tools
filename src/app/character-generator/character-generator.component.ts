import { Component, Input } from "@angular/core";
import { CharacterGenerator } from "generators";

import { CharacterGeneratorConfig } from "../../generators/character-generator-config";
import * as Characters from "../../models/characters";

@Component({
  selector: "dnd-character-generator",
  templateUrl: "./character-generator.component.html",
  styleUrls: ["./character-generator.component.scss"]
})
export class CharacterGeneratorComponent {
  @Input() advancedMode = false;

  character: Characters.Character;
  config: CharacterGeneratorConfig = new CharacterGeneratorConfig();
  generator: CharacterGenerator = new CharacterGenerator(this.config);

  constructor() {
    this.character = this.generator.generateCharacter();
  };

  onGenerateClick() {
    this.character = this.generator.generateCharacter();
  };

  onClearClick() {
    this.config.background = null;
    this.config.class = null;
    this.config.classArchetype = null;
    this.config.maxLevel = 5;
    this.config.minLevel = 1;
    this.config.name = null;
    this.config.primaryAbility = null;
    this.config.race = null;
    this.config.secondaryAbility = null;
    this.config.subrace = null;
  };
};
