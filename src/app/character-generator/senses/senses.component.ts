import { Component, Input } from "@angular/core";

import { Character } from "../../models/characters/character";

@Component({
  selector: "dnd-senses",
  templateUrl: "./senses.component.html"
})
export class SensesComponent {
  @Input() character: Character;
 
};
