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

  get tipString(): string {
    const ref = this.reference;
    const doc = ref.document ? `(${ref.document}) ` : "";
    return `${Data.Sources[ref.source]} ${doc}| Page ${this.reference.page}`;
  }

  get shortTipString(): string {
    const ref = this.reference;
    const doc = ref.document ? `:${ref.document}` : "";
    return `${ref.source}${this.reference.page}${doc}`;
  }
};
