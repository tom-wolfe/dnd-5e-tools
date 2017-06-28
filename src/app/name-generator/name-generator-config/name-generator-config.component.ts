import { Component, Input, OnInit } from "@angular/core";

import * as NameData from "app/data/names";
import * as Names from "app/models/names";
import { NameGeneratorConfig } from "app/shared/generators/name-generator-config";
import * as _ from "lodash";

@Component({
  selector: "dnd-name-generator-config",
  templateUrl: "./name-generator-config.component.html"
})
export class NameGeneratorConfigComponent implements OnInit {
  @Input() config: NameGeneratorConfig;

  names: Names.NameDefinition[];

  ngOnInit() {
    this.names = _.sortBy(NameData.NameList, ["name"]);
    this.config.count = 10;
    this.config.definition = null;
    this.config.definitionFormat = null;
    this.config.gender = null;
  }

};
