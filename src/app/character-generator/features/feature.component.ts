import { Component, Input } from "@angular/core";

import * as Features from "app/models/features";
import { ViewMode } from "app/models/view-mode";

@Component({
  selector: "dnd-feature",
  templateUrl: "./feature.component.html",
})
export class FeatureComponent {
  ViewMode = ViewMode;
  @Input() viewMode: ViewMode;
  @Input() feature: Features.Feature;
};
