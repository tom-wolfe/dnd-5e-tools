import { Component, Input } from "@angular/core";

import * as Features from "../../../models/features";

@Component({
  selector: "dnd-feature",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"]
})
export class FeatureComponent {
  @Input() feature: Features.Feature;
};
