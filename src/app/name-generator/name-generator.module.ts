import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";

import { NameGeneratorConfigComponent } from "./name-generator-config";
import { NameGeneratorComponent } from "./name-generator.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NameGeneratorConfigComponent,
    NameGeneratorComponent
  ]
})
export class NameGeneratorModule { }
