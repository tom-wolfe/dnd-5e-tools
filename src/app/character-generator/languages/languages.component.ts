import { Component, Input } from "@angular/core";

import * as Languages from "app/models/languages";
import * as _ from "lodash";

@Component({
  selector: "dnd-languages",
  templateUrl: "./languages.component.html"
})
export class LanguagesComponent {
  @Input() languages: Languages.Language[];
  get languagesList(): string {
    if (!this.languages || this.languages.length === 0) { return ""; }
    return _.join(this.languages.map((x) => x.name), ", ");
  }
};
