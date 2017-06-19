import { Component, Input } from "@angular/core";
import * as Characters from "../../models/characters";

import * as _ from "lodash";

@Component({
  selector: "background-display",
  templateUrl: "./background-display.component.html",
  styleUrls: ["./background-display.component.scss"]
})
export class BackgroundDisplayComponent {
  @Input() character: Characters.Character;
};
