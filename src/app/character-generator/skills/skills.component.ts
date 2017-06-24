import { Component, Input } from "@angular/core";

import * as _ from "lodash";

import * as Characters from "app/models/characters";

@Component({
  selector: "dnd-skills",
  templateUrl: "./skills.component.html"
})
export class SkillsComponent {
  @Input() character: Characters.Character;
  get skillsList(): string {
    if (!this.character.skillProficiencies || this.character.skillProficiencies.length === 0) { return ""; }
    const bonuses = this.character.skillProficiencies.map((prof) =>
      prof.skill.name + this.format(this.character.getSkillModifier(prof.skill))
    );
    return _.join(bonuses, ", ");
  }

  private format(modifier: number): string {
    return " " + (modifier >= 0) ? " +" + modifier : modifier.toString();
  }
};
