import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { AbilityScoreListComponent } from "./ability-score-list/ability-score-list.component";
import { AbilityScoreComponent } from "./ability-score/ability-score.component";
import { BackgroundComponent } from "./background/background.component";
import { CharacterGeneratorComponent } from "./character-generator.component";
import { CharacterHeaderComponent } from "./character-header/character-header.component";
import { CharacterComponent } from "./character/character.component";
import { ExportModalComponent } from "./export-modal/export-modal.component";
import { FeatureListComponent } from "./feature-list/feature-list.component";
import { FeatureComponent } from "./feature/feature.component";
import { GeneratorConfigComponent } from "./generator-config/generator-config.component";
import { LanguagesComponent } from "./languages/languages.component";
import { SensesComponent } from "./senses/senses.component";
import { SkillsComponent } from "./skills/skills.component";
import { SpeedComponent } from "./speed/speed.component";
import { StatsComponent } from "./stats/stats.component";

@NgModule({
  imports: [SharedModule],
  declarations: [
    AbilityScoreComponent,
    AbilityScoreListComponent,
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
