import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";

import { AbilityComponent, AbilityListComponent } from "./abilities";
import { BackgroundComponent } from "./background";
import { CharacterComponent, CharacterHeaderComponent } from "./character";
import { CharacterGeneratorRoutingModule } from "./character-generator-routing.module";
import { CharacterGeneratorComponent } from "./character-generator.component";
import { CharacterGeneratorService } from "./character-generator.service";
import { ExportComponent } from "./export";
import { FeatureComponent, FeatureListComponent } from "./features";
import { GeneratorConfigComponent } from "./generator-config";
import { SpeedComponent } from "./speed";
import { StatsComponent } from "./stats";

@NgModule({
  imports: [SharedModule, CharacterGeneratorRoutingModule],
  declarations: [
    AbilityComponent,
    AbilityListComponent,
    BackgroundComponent,
    CharacterComponent,
    CharacterGeneratorComponent,
    CharacterHeaderComponent,
    ExportComponent,
    FeatureComponent,
    FeatureListComponent,
    GeneratorConfigComponent,
    SpeedComponent,
    StatsComponent
  ],
  providers: [CharacterGeneratorService]
})
export class CharacterGeneratorModule { }
