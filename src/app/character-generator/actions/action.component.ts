import { Component, Input } from "@angular/core";

import * as Features from "app/models/features";

@Component({
  selector: "dnd-action",
  templateUrl: "./action.component.html",
})
export class ActionComponent {
  @Input() action: Features.Feature;
};
