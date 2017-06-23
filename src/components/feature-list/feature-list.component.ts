import { Component, Input } from "@angular/core";
import * as Features from "../../models/features";

@Component({
  selector: "dnd-feature-list",
  templateUrl: "./feature-list.component.html",
  styleUrls: ["./feature-list.component.scss"]
})
export class FeatureListComponent {
  @Input() features: Features.Feature[];
};
