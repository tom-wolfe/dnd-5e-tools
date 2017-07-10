import { Component, Input } from "@angular/core";

import * as Features from "app/models/features";
import * as _ from "lodash";

@Component({
  selector: "dnd-action-list",
  templateUrl: "./action-list.component.html",
})
export class ActionListComponent {
  @Input() actions: Features.Feature[];
  get sortedActions(): Features.Feature[] {
    return _.sortBy(this.actions, ["name"]);
  }
};
