import { Component, Input } from "@angular/core";

import * as Descriptors from "../../descriptors";
import { CharacterGenerator } from "../../generators/character-generator";
import * as Characters from "../../models/characters";

@Component({
  selector: "header-display",
  templateUrl: "./header-display.component.html",
  styleUrls: ["./header-display.component.scss"]
})
export class HeaderDisplayComponent {
  @Input() character: Characters.Character;
  @Input() generator: CharacterGenerator;
  ageDescriptor: Descriptors.AgeDescriptor = new Descriptors.AgeDescriptor();
  heightDescriptor: Descriptors.HeightDescriptor = new Descriptors.HeightDescriptor();
  weightDescriptor: Descriptors.WeightDescriptor = new Descriptors.WeightDescriptor();

  onRefreshNameClick(e) {
    this.generator.randomizeName(this.character);
    e.preventDefault();
    return false;
  };

  onRefreshPhysicalityClick(e) {
    this.generator.randomizeHeightAndWeight(this.character);
    this.generator.randomizeGender(this.character);
    this.generator.randomizeAge(this.character);
    this.generator.randomizeAlignment(this.character);
    e.preventDefault();
    return false;
  }
};
