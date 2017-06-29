import { AfterContentInit, Component, Input } from "@angular/core";

import * as ItemTypes from "./data/item-types";
import { ItemGenerator, ItemGeneratorConfig } from "./generators";
import { Item } from "./models/items";
import { ItemDefinition } from "./models/items/item-definition";

import { ViewMode } from "app/models/view-mode";

@Component({
  selector: "dnd-item-generator",
  templateUrl: "./item-generator.component.html"
})
export class ItemGeneratorComponent implements AfterContentInit {
  config: ItemGeneratorConfig = new ItemGeneratorConfig();
  ViewMode = ViewMode;
  @Input() items: Item[];

  ngAfterContentInit() {
    setTimeout(() => this.onGenerateClick());
  };

  onGenerateClick() {
    let definitions: ItemDefinition[];
    if (this.config.definition) {
      definitions = [this.config.definition]
    } else {
      definitions = ItemTypes.ItemTypeList
    }
    const generator = new ItemGenerator(definitions);
    this.items = [];
    for (let x = 0; x < this.config.count; x++) {
      this.items.push(generator.getName());
    }
  };
};
