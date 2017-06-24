import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "app/app.routing";
import { NavbarComponent } from "components/core/navbar/navbar.component";
import { NameGeneratorComponent } from "components/names/name-generator/name-generator.component";
import { CodemirrorModule } from "ng2-codemirror";

import { AbilityScoreListComponent } from "../components/characters/ability-score-list/ability-score-list.component";
import { AbilityScoreComponent } from "../components/characters/ability-score/ability-score.component";
import { BackgroundComponent } from "../components/characters/background/background.component";
import { CharacterGeneratorComponent } from "../components/characters/character-generator/character-generator.component";
import { CharacterHeaderComponent } from "../components/characters/character-header/character-header.component";
import { CharacterComponent } from "../components/characters/character/character.component";
import { ExportModalComponent } from "../components/characters/export-modal/export-modal.component";
import { FeatureListComponent } from "../components/characters/feature-list/feature-list.component";
import { FeatureComponent } from "../components/characters/feature/feature.component";
import { GeneratorConfigComponent } from "../components/characters/generator-config/generator-config.component";
import { LanguagesComponent } from "../components/characters/languages/languages.component";
import { SensesComponent } from "../components/characters/senses/senses.component";
import { SkillsComponent } from "../components/characters/skills/skills.component";
import { SpeedComponent } from "../components/characters/speed/speed.component";
import { StatsComponent } from "../components/characters/stats/stats.component";
import { FooterComponent } from "../components/core/footer/footer.component";
import { SidebarComponent } from "../components/core/sidebar/sidebar.component";
import { SourceReferenceComponent } from "../components/source-reference/source-reference.component";
import { CollapseDirective } from "../directives/collapse.directive";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    CodemirrorModule,
    FormsModule, ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AbilityScoreComponent,
    AbilityScoreListComponent,
    BackgroundComponent,
    CharacterComponent,
    CharacterGeneratorComponent,
    CharacterHeaderComponent,
    ExportModalComponent,
    FeatureComponent,
    FooterComponent,
    FeatureListComponent,
    GeneratorConfigComponent,
    LanguagesComponent,
    NameGeneratorComponent,
    NavbarComponent,
    SensesComponent,
    SidebarComponent,
    SkillsComponent,
    SourceReferenceComponent,
    SpeedComponent,
    StatsComponent,

    CollapseDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }