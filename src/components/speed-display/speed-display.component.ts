import { Component, Input } from "@angular/core";
import * as Attributes from "../../models/attributes";

@Component({
  selector: "speed-display",
  templateUrl: "./speed-display.component.html",
  styleUrls: ["./speed-display.component.scss"]
})
export class SpeedDisplayComponent {
  @Input() speed: Attributes.Speed;
};
