import { Component, Input, ViewChild } from "@angular/core";

import * as Characters from "app/models/characters";

import { ExportModalComponent } from "../export";
import { CharacterGenerator } from "../generators";

@Component({
  selector: "dnd-character",
  templateUrl: "./character.component.html",
})
export class CharacterComponent {
  @ViewChild("mdlExport") mdlExport: ExportModalComponent
  @Input() character: Characters.Character;
  @Input() generator: CharacterGenerator;

  onExportClick() {
    this.mdlExport.open();
  };
};
