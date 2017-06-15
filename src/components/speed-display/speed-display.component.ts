import { Component, Input } from "@angular/core";
import { Speed } from "../../models/speed";

@Component({
  selector: "speed-display",
  templateUrl: "./speed-display.component.html",
  styleUrls: ["./speed-display.component.scss"]
})
export class SpeedDisplayComponent {
  @Input() speed: Speed;
};
