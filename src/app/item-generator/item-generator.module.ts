import { NgModule } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";

import { ItemGeneratorConfigComponent } from "./item-generator-config";
import { ItemGeneratorRoutingModule } from "./item-generator-routing.module";
import { ItemGeneratorComponent } from "./item-generator.component";

@NgModule({
  imports: [
    SharedModule,
    ItemGeneratorRoutingModule
  ],
  declarations: [
    ItemGeneratorConfigComponent,
    ItemGeneratorComponent
  ]
})
export class ItemGeneratorModule { }
