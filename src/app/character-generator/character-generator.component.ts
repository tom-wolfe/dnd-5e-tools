import { Component, Input, OnInit } from "@angular/core";

import * as Characters from "app/models/characters";

import { CharacterGenerator, CharacterGeneratorConfig } from "./generators";

@Component({
  selector: "dnd-character-generator",
  templateUrl: "./character-generator.component.html"
})
export class CharacterGeneratorComponent implements OnInit {
  @Input() advancedMode = false;

  character: Characters.Character;
  config: CharacterGeneratorConfig = new CharacterGeneratorConfig();
  generator: CharacterGenerator = new CharacterGenerator(this.config);

  ngOnInit() {
    this.onGenerateClick();
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
