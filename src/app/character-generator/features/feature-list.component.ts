import { Component, Input } from "@angular/core";

import * as Features from "app/models/features";
import * as _ from "lodash";

import { ViewMode } from "../../models/view-mode";

@Component({
  selector: "dnd-feature-list",
  templateUrl: "./feature-list.component.html",
})
export class FeatureListComponent {
  @Input() title: string;
  @Input() features: Features.Feature[];
  ViewMode = ViewMode;
  get sortedFeatures(): Features.Feature[] {
    return _.sortBy(this.features, ["name"]);
  }
};
