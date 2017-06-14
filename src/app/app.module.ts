import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AbilityScoreComponent } from "../components/ability-score/ability-score.component";

@NgModule({
  declarations: [
    AppComponent,
    AbilityScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }