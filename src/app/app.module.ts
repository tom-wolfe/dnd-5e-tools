import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { JsonpModule } from "@angular/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CodemirrorModule } from "ng2-codemirror";

import { AppComponent } from "./app.component";
import { AbilityScoreComponent } from "../components/ability-score/ability-score.component";
import { AbilityScoreListComponent } from "../components/ability-score-list/ability-score-list.component";
import { BackgroundDisplayComponent } from "../components/background-display/background-display.component";
import { ExportModalComponent } from "../components/export-modal/export-modal.component";
import { FeatureDisplayComponent } from "../components/feature-display/feature-display.component";
import { FeatureDisplayListComponent } from "../components/feature-display-list/feature-display-list.component";
import { GeneratorConfigComponent } from "../components/generator-config/generator-config.component";
import { HeaderDisplayComponent } from "../components/header-display/header-display.component";
import { LanguagesDisplayComponent } from "../components/languages-display/languages-display.component";
import { SensesDisplayComponent } from "../components/senses-display/senses-display.component";
import { SkillsDisplayComponent } from "../components/skills-display/skills-display.component";
import { SourceReferenceComponent } from "../components/source-reference/source-reference.component";
import { SpeedDisplayComponent } from "../components/speed-display/speed-display.component";
import { StatsDisplayComponent } from "../components/stats-display/stats-display.component";

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoreComponent,
    AbilityScoreListComponent,
    BackgroundDisplayComponent,
    ExportModalComponent,
    FeatureDisplayComponent,
    FeatureDisplayListComponent,
    GeneratorConfigComponent,
    HeaderDisplayComponent,
    LanguagesDisplayComponent,
    SensesDisplayComponent,
    SkillsDisplayComponent,
    SourceReferenceComponent,
    SpeedDisplayComponent,
    StatsDisplayComponent
  ],
  imports: [
    BrowserModule, CodemirrorModule, FormsModule, ReactiveFormsModule, JsonpModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }