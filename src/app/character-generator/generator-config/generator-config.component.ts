import { AfterViewInit, Component, Input, OnInit } from "@angular/core";

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

import { CharacterBuilderConfig } from "../builders";

@Component({
  selector: "dnd-generator-config",
  templateUrl: "./generator-config.component.html",
})
export class GeneratorConfigComponent implements OnInit {
  @Input() config: CharacterBuilderConfig;

  abilities: Abilities.Ability[];
  names: Names.NameDefinition[];
  backgrounds: Characters.Background[];
  classes: Classes.Class[];
  races: Races.Race[];

  ngOnInit() {
    this.abilities = Object.keys(Data.Abilities.AbilityList).map(name => Data.Abilities.AbilityList[name]);
    this.backgrounds = Object.keys(BackgroundData.BackgroundList).sort().map(name => BackgroundData.BackgroundList[name]);
    this.classes = Object.keys(ClassData.ClassList).sort().map(name => ClassData.ClassList[name]);
    this.names = Object.keys(NameData.NameList).sort().map(name => NameData.NameList[name]);
    this.races = Object.keys(RaceData.RaceList).sort().map(name => RaceData.RaceList[name]);
  }

};
