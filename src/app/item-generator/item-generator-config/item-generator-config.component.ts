import { Component, Input, OnInit } from "@angular/core";

import * as ItemTypeData from "app/data/item-types";
import * as Items from "app/models/items";
import { NameGeneratorConfig } from "app/shared/generators/name-generator-config";

@Component({
  selector: "dnd-item-generator-config",
  templateUrl: "./item-generator-config.component.html"
})
export class ItemGeneratorConfigComponent implements OnInit {
  @Input() config: NameGeneratorConfig;

  items: Items.ItemDefinition[];

  ngOnInit() {
    this.items = Object.keys(ItemTypeData.ItemTypeList).sort().map(name => ItemTypeData.ItemTypeList[name]);
    this.config.count = 10;
    this.config.definition = null;
  }

};
