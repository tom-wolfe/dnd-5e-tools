import { Component, Input, Output } from "@angular/core";
import { GeneratorConfig } from "../../models/generator-config";

import * as Characters from "../../models/characters";
import * as Abilities from "../../models/abilities";
import * as Races from "../../models/races";
import * as Data from "../../data";

@Component({
  selector: "generator-config",
  templateUrl: "./generator-config.component.html",
  styleUrls: ["./generator-config.component.scss"]
})
export class GeneratorConfigComponent {
  @Input() config: GeneratorConfig;
  races: Races.Race[] = Object.keys(Data.Races.RaceList).map(name => Data.Races.RaceList[name]);
  abilities: Abilities.Ability[] = Object.keys(Data.Abilities.AbilityList).map(name => Data.Abilities.AbilityList[name]);
};
