import { Component, Input } from "@angular/core";

import * as Data from "app/data";
import { Reference } from "app/models/reference";

@Component({
  selector: "dnd-source-reference",
  templateUrl: "./source-reference.component.html",
  styleUrls: ["./source-reference.component.scss"]
})
export class SourceReferenceComponent {
  @Input() reference: Reference;
  get sourceName() {
    return Data.Sources[this.reference.source];
  }
};
