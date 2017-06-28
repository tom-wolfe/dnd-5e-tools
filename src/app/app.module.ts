import { NgModule } from "@angular/core";

import { CoreModule } from "app/core/core.module";
import { SharedModule } from "app/shared/shared.module";

import { AppComponent } from "./app.component";

import { CharacterGeneratorModule } from "./character-generator/character-generator.module";
import { ItemGeneratorModule } from "./item-generator/item-generator.module";
import { NameGeneratorModule } from "./name-generator/name-generator.module";

@NgModule({
  imports: [
    SharedModule,
    CharacterGeneratorModule,
    NameGeneratorModule,
    ItemGeneratorModule,
    CoreModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
