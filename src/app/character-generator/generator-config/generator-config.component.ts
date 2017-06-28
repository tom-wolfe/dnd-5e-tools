import { Component, Input, OnInit } from "@angular/core";

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
import * as _ from "lodash";

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
    this.backgrounds = _.sortBy(BackgroundData.BackgroundList, ["name"]);
    this.classes = _.sortBy(ClassData.ClassList, ["name"]);
    this.names = _.sortBy(NameData.NameList, ["name"]);
    this.races = _.sortBy(RaceData.RaceList, ["name"]);
  }

};
