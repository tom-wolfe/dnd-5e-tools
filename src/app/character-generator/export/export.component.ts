import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";

import { CharacterGeneratorService } from "../character-generator.service";
import { Exporter } from "./exporter";

@Component({
  selector: "dnd-export",
  templateUrl: "export.component.html"
})
export class ExportComponent implements OnInit {
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
  }

  loadTemplate(): void {
    this.service.getTemplate().then(template => {
      this.template = template;
    })
  }

  ngOnInit(): void {
    this.loadTemplate();
  }

  onBackClick(): void {
    this.location.back();
  }
}
