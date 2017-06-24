import { Component, Input } from "@angular/core";

import * as NameData from "app/data/names";
import { NameGeneratorConfig } from "app/shared/generators/name-generator-config";
import * as Names from "app/models/names";

@Component({
  selector: "dnd-name-generator-config",
  templateUrl: "./name-generator-config.component.html"
})
export class NameGeneratorConfigComponent {
  @Input() config: NameGeneratorConfig;

  names: Names.NameDefinition[] = Object.keys(NameData.NameList).sort().map(name => NameData.NameList[name]);
};
