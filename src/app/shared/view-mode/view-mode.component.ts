import { Component, Input, Output } from "@angular/core";

import { ViewMode } from "app/models/view-mode";

@Component({
  selector: "dnd-view-mode",
  templateUrl: "./view-mode.component.html",
})
export class ViewModeComponent {
  mode: ViewMode;
  ViewMode = ViewMode;
  constructor() { this.mode = ViewMode.Detailed; }
};
