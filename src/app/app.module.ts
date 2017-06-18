import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AbilityScoreComponent } from "../components/ability-score/ability-score.component";
import { AbilityScoreListComponent } from "../components/ability-score-list/ability-score-list.component";
import { FeatureDisplayComponent } from "../components/feature-display/feature-display.component";
import { FeatureDisplayListComponent } from "../components/feature-display-list/feature-display-list.component";
import { LanguagesDisplayComponent } from "../components/languages-display/languages-display.component";
import { SensesDisplayComponent } from "../components/senses-display/senses-display.component";
import { SkillsDisplayComponent } from "../components/skills-display/skills-display.component";
import { SourceReferenceComponent } from "../components/source-reference/source-reference.component";
import { SpeedDisplayComponent } from "../components/speed-display/speed-display.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoreComponent,
    AbilityScoreListComponent,
    FeatureDisplayComponent,
    FeatureDisplayListComponent,
    LanguagesDisplayComponent,
    SensesDisplayComponent,
    SkillsDisplayComponent,
    SourceReferenceComponent,
    SpeedDisplayComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }