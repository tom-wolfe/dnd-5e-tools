import { Component, Input } from "@angular/core";
import * as _ from "lodash";

import * as Languages from "../../models/languages";

@Component({
  selector: "languages-display",
  templateUrl: "./languages-display.component.html",
  styleUrls: ["./languages-display.component.scss"]
})
export class LanguagesDisplayComponent {
  @Input() languages: Languages.Language[];
  get languagesList(): string {
    if (!this.languages || this.languages.length === 0) { return ""; }
    return _.join(this.languages.map((x) => x.name), ", ");
  }
};
