import { AfterContentInit, Component, Input } from "@angular/core";

import * as ItemTypes from "app/data/item-types";
import { Item } from "app/models/items";

import { ItemDefinition } from "../models/items/item-definition";
import { ItemGenerator } from "../shared/generators";
import { ItemGeneratorConfig } from "../shared/generators/item-generator-config";

@Component({
  selector: "dnd-item-generator",
  templateUrl: "./item-generator.component.html"
})
export class ItemGeneratorComponent implements AfterContentInit {
  config: ItemGeneratorConfig = new ItemGeneratorConfig();

  @Input() items: Item[];
  @Input() displayMode: "detailed" | "basic" = "detailed";

  ngAfterContentInit() {
    setTimeout(() => this.onGenerateClick());
  };

  onGenerateClick() {
    let definitions: ItemDefinition[];
    if (this.config.definition) {
      definitions = [this.config.definition]
    } else {
      definitions = Object.keys(ItemTypes.ItemTypeList).map(n => ItemTypes.ItemTypeList[n]);
    }
    const generator = new ItemGenerator(definitions);
    this.items = [];
    for (let x = 0; x < this.config.count; x++) {
      this.items.push(generator.getName());
    }
  };
};
