import { Component, Input, ViewChild } from "@angular/core";
import { CharacterGenerator } from "generators";

import * as Characters from "../../models/characters";
import { ExportModalComponent } from "../export-modal/export-modal.component";

@Component({
  selector: "dnd-character",
  templateUrl: "./character.component.html",
  styleUrls: ["./character.component.scss"]
})
export class CharacterComponent {
  @ViewChild("mdlExport") mdlExport: ExportModalComponent
  @Input() character: Characters.Character;
  @Input() generator: CharacterGenerator;

  onExportClick() {
    this.mdlExport.open();
  };
};
