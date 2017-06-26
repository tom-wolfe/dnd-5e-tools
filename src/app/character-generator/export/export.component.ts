import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

import * as Data from "app/data";

import { CharacterGeneratorService } from "../character-generator.service";
import { Exporter } from "./exporter";

@Component({
  selector: "dnd-export",
  templateUrl: "export.component.html"
})
export class ExportComponent {
  exporter: Exporter;
  template = "";

  get output(): string {
    if (this.service.character) {
      return this.exporter.export(this.service.character, this.template);
    } else {
      return "";
    }
  }

  constructor(private location: Location, private service: CharacterGeneratorService) {
    this.exporter = new Exporter();
    this.template = Data.ExportTemplate;
  }

  onBackClick(): void {
    this.location.back();
  }
}
