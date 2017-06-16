import { Component, Input } from "@angular/core";
import * as Features from "../../models/features";

@Component({
  selector: "feature-display",
  templateUrl: "./feature-display.component.html",
  styleUrls: ["./feature-display.component.scss"]
})
export class FeatureDisplayComponent {
  @Input() feature: Features.Feature;
};
