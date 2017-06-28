import { Component, Input, OnInit } from "@angular/core";

import { NameGeneratorConfig } from "app/shared/generators/name-generator-config";

import * as ItemTypeData from "../data/item-types";
import * as Items from "../models/items";
import * as _ from "lodash";

@Component({
  selector: "dnd-item-generator-config",
  templateUrl: "./item-generator-config.component.html"
})
export class ItemGeneratorConfigComponent implements OnInit {
  @Input() config: NameGeneratorConfig;

  items: Items.ItemDefinition[];

  ngOnInit() {
    this.items = _.sortBy(ItemTypeData.ItemTypeList, ["name"]);
    this.config.count = 10;
    this.config.definition = null;
  }

};
