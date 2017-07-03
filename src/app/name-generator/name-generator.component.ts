import { AfterContentInit, Component, Input } from "@angular/core";

import * as Names from "app/data/names";
import { ViewMode } from "app/models/view-mode";
import { NameGenerator } from "app/shared/generators";
import { NameGeneratorConfig } from "app/shared/generators/name-generator-config";

import { Name, NameDefinition } from "../models/names";

@Component({
  selector: "dnd-name-generator",
  templateUrl: "./name-generator.component.html"
})
export class NameGeneratorComponent implements AfterContentInit {
  config: NameGeneratorConfig = new NameGeneratorConfig();

  @Input() names: Name[];
  ViewMode = ViewMode;

  ngAfterContentInit() {
    setTimeout(() => this.onGenerateClick());
  };

  onGenerateClick() {
    let definitions: NameDefinition[];
    if (this.config.definition) {
      definitions = [this.config.definition]
    } else {
      definitions = Names.NameList;
    }
    const generator = new NameGenerator(definitions, this.config.gender);
    this.names = [];
    for (let x = 0; x < this.config.count; x++) {
      this.names.push(generator.getName(this.config.definitionFormat));
    }
  };
};
