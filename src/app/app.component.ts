import { Component } from "@angular/core";
import * as Characters from "../models/characters";
import * as Data from "../data";
import * as Races from "../models/races";
import { GeneratorConfig } from "../models/generator-config";
import { CharacterGenerator } from "../generators/character-generator";

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
  races: Races.Race[] = Object.keys(Data.Races.RaceList).map(name => Data.Races.RaceList[name]);

  constructor() {
    this.character = this.generator.generateCharacter();
  };

  onGenerateClick() {
    this.character = this.generator.generateCharacter();
  };
};