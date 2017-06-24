import { NgModule } from "@angular/core";
import { AppRoutingModule } from "app/app-routing.module";
import { CoreModule } from "app/core/core.module";
import { SharedModule } from "app/shared/shared.module";

import { AppComponent } from "./app.component";
import { CharacterGeneratorModule } from "./character-generator/character-generator.module";
import { NameGeneratorModule } from "./name-generator/name-generator.module";

@NgModule({
  imports: [
    AppRoutingModule,
    CoreModule,
    SharedModule,
    CharacterGeneratorModule,
    NameGeneratorModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
