import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import * as Characters from "app/models/characters";

import { CharacterGeneratorService } from "../character-generator.service";
import { CharacterBuilder } from "../builders";

@Component({
  selector: "dnd-character",
  templateUrl: "./character.component.html",
})
export class CharacterComponent {
  @Input() character: Characters.Character;
  @Input() builder: CharacterBuilder;

  constructor(private router: Router, private service: CharacterGeneratorService) { }

  onExportClick() {
    this.service.character = this.character;
    this.router.navigateByUrl("/character-generator/export");
  };

  onPrintClick() {
    window.print();
  }
};
