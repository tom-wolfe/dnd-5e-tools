import { Component, Input } from "@angular/core";
import * as Characters from "../../models/characters";
import * as Descriptors from "../../descriptors";

import * as _ from "lodash";

@Component({
  selector: "header-display",
  templateUrl: "./header-display.component.html",
  styleUrls: ["./header-display.component.scss"]
})
export class HeaderDisplayComponent {
  @Input() character: Characters.Character;
  ageDescriptor: Descriptors.AgeDescriptor = new Descriptors.AgeDescriptor();
  heightDescriptor: Descriptors.HeightDescriptor = new Descriptors.HeightDescriptor();
  weightDescriptor: Descriptors.WeightDescriptor = new Descriptors.WeightDescriptor();
};
