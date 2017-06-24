import { Component, Input } from "@angular/core";

import * as Data from "app/data";
import * as BackgroundData from "app/data/backgrounds";
import * as ClassData from "app/data/classes";
import * as NameData from "app/data/names";
import * as RaceData from "app/data/races";
import * as Abilities from "app/models/abilities";
import * as Characters from "app/models/characters";
import * as Classes from "app/models/classes";
import * as Names from "app/models/names";
import * as Races from "app/models/races";

import { CharacterGeneratorConfig } from "../generators";

@Component({
  selector: "dnd-generator-config",
  templateUrl: "./generator-config.component.html",
})
export class GeneratorConfigComponent {
  @Input() config: CharacterGeneratorConfig;

  races: Races.Race[] = Object.keys(RaceData.RaceList).sort().map(name => RaceData.RaceList[name]);
  names: Names.NameDefinition[] = Object.keys(NameData.NameList).sort().map(name => NameData.NameList[name]);
  abilities: Abilities.Ability[] = Object.keys(Data.Abilities.AbilityList).map(name => Data.Abilities.AbilityList[name]);
  backgrounds: Characters.Background[] = Object.keys(BackgroundData.BackgroundList)
    .sort().map(name => BackgroundData.BackgroundList[name]);
  classes: Classes.Class[] = Object.keys(ClassData.ClassList).sort().map(name => ClassData.ClassList[name]);
};
