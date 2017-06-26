import { Component, Input } from "@angular/core";

import { Character } from "../../models/characters/character";

@Component({
  selector: "dnd-languages",
  templateUrl: "./languages.component.html"
})
export class LanguagesComponent {
  @Input() character: Character;
};
