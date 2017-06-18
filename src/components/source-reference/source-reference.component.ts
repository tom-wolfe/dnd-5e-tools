import { Component, Input } from "@angular/core";
import { Reference } from "../../models/reference";
import * as Data from "../../data";

@Component({
  selector: "source-reference",
  templateUrl: "./source-reference.component.html",
  styleUrls: ["./source-reference.component.scss"]
})
export class SourceReferenceComponent {
  @Input() reference: Reference;
  get sourceName() {
    return Data.Sources[this.reference.source];
  }
};
