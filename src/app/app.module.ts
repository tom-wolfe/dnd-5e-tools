import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AbilityScoreComponent } from "../components/ability-score/ability-score.component";
import { AbilityScoreListComponent } from "../components/ability-score-list/ability-score-list.component";

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoreComponent,
    AbilityScoreListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }