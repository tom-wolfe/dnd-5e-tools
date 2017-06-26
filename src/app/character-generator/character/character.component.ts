import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import * as Characters from "app/models/characters";

import { CharacterGeneratorService } from "../character-generator.service";
import { CharacterGenerator } from "../generators";

@Component({
  selector: "dnd-character",
  templateUrl: "./character.component.html",
})
export class CharacterComponent {
  @Input() character: Characters.Character;
  @Input() generator: CharacterGenerator;

  constructor(private router: Router, private service: CharacterGeneratorService) { }

  onExportClick() {
    this.service.character = this.character;
    this.router.navigateByUrl("/character-generator/export");
  };
};
