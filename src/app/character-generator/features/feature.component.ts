import { Component, Input } from "@angular/core";

import * as Features from "app/models/features";

@Component({
  selector: "dnd-feature",
  templateUrl: "./feature.component.html",
})
export class FeatureComponent {
  @Input() feature: Features.Feature;
};
