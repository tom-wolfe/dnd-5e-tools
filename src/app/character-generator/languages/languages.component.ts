import { Component, Input } from "@angular/core";
import * as _ from "lodash";

import * as Languages from "../../../models/languages";

@Component({
  selector: "dnd-languages",
  templateUrl: "./languages.component.html",
  styleUrls: ["./languages.component.scss"]
})
export class LanguagesComponent {
  @Input() languages: Languages.Language[];
  get languagesList(): string {
    if (!this.languages || this.languages.length === 0) { return ""; }
    return _.join(this.languages.map((x) => x.name), ", ");
  }
};
