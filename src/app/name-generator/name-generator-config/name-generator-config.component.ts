import { AfterViewInit, Component, Input, OnInit } from "@angular/core";

import * as NameData from "app/data/names";
import * as Names from "app/models/names";
import { NameGeneratorConfig } from "app/shared/generators/name-generator-config";

@Component({
  selector: "dnd-name-generator-config",
  templateUrl: "./name-generator-config.component.html"
})
export class NameGeneratorConfigComponent implements OnInit, AfterViewInit {
  @Input() config: NameGeneratorConfig;

  names: Names.NameDefinition[];

  ngOnInit() {
    this.names = Object.keys(NameData.NameList).sort().map(name => NameData.NameList[name]);
    this.config.definition = this.names[0];
    this.config.count = 10;
    this.config.gender = "N";
  }

  ngAfterViewInit() {
    
  }
};
