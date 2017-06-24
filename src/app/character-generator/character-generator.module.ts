import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";

import { AbilityComponent, AbilityListComponent } from "./abilities";
import { BackgroundComponent } from "./background";
import { CharacterComponent, CharacterHeaderComponent } from "./character";
import { CharacterGeneratorComponent } from "./character-generator.component";
import { ExportModalComponent } from "./export";
import { FeatureComponent, FeatureListComponent } from "./features";
import { GeneratorConfigComponent } from "./generator-config";
import { LanguagesComponent } from "./languages";
import { SensesComponent } from "./senses";
import { SkillsComponent } from "./skills";
import { SpeedComponent } from "./speed";
import { StatsComponent } from "./stats";

@NgModule({
  imports: [SharedModule],
  declarations: [
    AbilityComponent,
    AbilityListComponent,
    BackgroundComponent,
    CharacterComponent,
    CharacterGeneratorComponent,
    CharacterHeaderComponent,
    ExportModalComponent,
    FeatureComponent,
    FeatureListComponent,
    GeneratorConfigComponent,
    LanguagesComponent,
    SensesComponent,
    SkillsComponent,
    SpeedComponent,
    StatsComponent
  ]
})
export class CharacterGeneratorModule { }
