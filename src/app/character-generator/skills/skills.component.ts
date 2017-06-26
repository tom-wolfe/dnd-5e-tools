import { Component, Input } from "@angular/core";

import * as _ from "lodash";

import * as Characters from "app/models/characters";

@Component({
  selector: "dnd-skills",
  templateUrl: "./skills.component.html"
})
export class SkillsComponent {
  @Input() character: Characters.Character;
};
