import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AbilityScoreComponent } from "../components/ability-score/ability-score.component";
import { AbilityScoreListComponent } from "../components/ability-score-list/ability-score-list.component";
import { SourceReferenceComponent } from "../components/source-reference/source-reference.component";
import { SpeedDisplayComponent } from "../components/speed-display/speed-display.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoreComponent,
    AbilityScoreListComponent,
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