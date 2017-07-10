import { Component, Input } from "@angular/core";

import * as Features from "app/models/features";
import * as _ from "lodash";

@Component({
  selector: "dnd-feature-list",
  templateUrl: "./feature-list.component.html",
})
export class FeatureListComponent {
  @Input() title: string;
  @Input() features: Features.Feature[];
  get sortedFeatures(): Features.Feature[] {
    return _.sortBy(this.features, ["name"]);
  }
};
