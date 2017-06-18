import { Component, Input } from "@angular/core";
import * as Features from "../../models/features";

@Component({
  selector: "feature-display-list",
  templateUrl: "./feature-display-list.component.html",
  styleUrls: ["./feature-display-list.component.scss"]
})
export class FeatureDisplayListComponent {
  @Input() features: Features.Feature[];
};
