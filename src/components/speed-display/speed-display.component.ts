import { Component, Input } from "@angular/core";
import * as _ from "lodash";

import * as Attributes from "../../models/attributes";

@Component({
  selector: "speed-display",
  templateUrl: "./speed-display.component.html",
  styleUrls: ["./speed-display.component.scss"]
})
export class SpeedDisplayComponent {
  @Input() speed: Attributes.Speed;
  get otherSpeeds(): string {
    const speeds: string[] = [];
    this.pushSpeed("climb", speeds);
    this.pushSpeed("fly", speeds);
    this.pushSpeed("swim", speeds);
    if (speeds.length === 0) { return ""; } else { return `(${_.join(speeds, ", ")})`; }
  }

  private pushSpeed(speed: string, speeds: string[]) {
    const val = this.speed[speed] || 0;
    if (val > 0) { speeds.push(`${speed} ${val} ft.`); }
  }
};
