import { Component, Input, ViewChild } from "@angular/core";
import { GeneratorConfig } from "../models/generator-config";
import { CharacterGenerator } from "../generators/character-generator";
import { ExportModalComponent } from "../components/export-modal/export-modal.component";
import * as Characters from "../models/characters";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @Input() advancedMode = false;
  @ViewChild("mdlExport") mdlExport: ExportModalComponent

  title = "D&D 5th Edition NPC Generator";
  character: Characters.Character;
  config: GeneratorConfig = new GeneratorConfig();
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

  onExportClick() {
    this.mdlExport.open();
  };
};
