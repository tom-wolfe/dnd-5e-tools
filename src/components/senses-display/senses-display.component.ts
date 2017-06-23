import { Component, Input } from "@angular/core";

import * as Attributes from "../../models/attributes";

@Component({
  selector: "senses-display",
  templateUrl: "./senses-display.component.html",
  styleUrls: ["./senses-display.component.scss"]
})
export class SensesDisplayComponent {
  @Input() senses: Attributes.Senses;
  get sensesDescription(): string {
    if (!this.senses) { return ""; }
    let output = "";
    output = this.append(output, "Darkvision");
    output = this.append(output, "Blindsight");
    output = this.append(output, "Tremorsense");
    output = this.append(output, "Truesight");
    return output;
  }

  private append(input: string, sense: string): string {
    let temp = 0;
    if ((temp = this.senses[sense.toLowerCase()] || 0) > 0) {
      if (input.trim().length > 0) { input += ", "; }
      return `${sense} ${this.senses[sense.toLowerCase()]} ft.`;
    }
    return input;
  }
};
