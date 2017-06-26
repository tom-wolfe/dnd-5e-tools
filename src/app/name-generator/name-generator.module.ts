import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";

import { NameGeneratorConfigComponent } from "./name-generator-config";
import { NameGeneratorRoutingModule } from "./name-generator-routing.module";
import { NameGeneratorComponent } from "./name-generator.component";

@NgModule({
  imports: [
    SharedModule,
    NameGeneratorRoutingModule
  ],
  declarations: [
    NameGeneratorConfigComponent,
    NameGeneratorComponent
  ]
})
export class NameGeneratorModule { }
