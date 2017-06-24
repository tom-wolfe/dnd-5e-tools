import { AfterViewInit, Component, Input } from "@angular/core";

import { NameGenerator } from "app/shared/generators";
import { NameGeneratorConfig } from "app/shared/generators/name-generator-config";

@Component({
  selector: "dnd-name-generator",
  templateUrl: "./name-generator.component.html"
})
export class NameGeneratorComponent implements AfterViewInit {
  config: NameGeneratorConfig = new NameGeneratorConfig();

  @Input() names: string[];

  ngAfterViewInit() {
    this.onGenerateClick();
  };

  onGenerateClick() {
    const generator = new NameGenerator(this.config.definition, this.config.gender);
    this.names = [];
    for (let x = 0; x < this.config.count; x++) {
      this.names.push(generator.getName());
    }
  };
};
