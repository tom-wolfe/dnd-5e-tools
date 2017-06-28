import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "app/core/footer/footer.component";
import { NavbarComponent } from "app/core/navbar/navbar.component";
import { NotFoundComponent } from "app/core/not-found/not-found.component";
import { SidebarComponent } from "app/core/sidebar/sidebar.component";
import { SharedModule } from "app/shared/shared.module";

import { CoreRoutingModule } from "./core-routing.module";
import { throwIfAlreadyLoaded } from "./module-import-guard";

@NgModule({
    imports: [
        RouterModule,
        SharedModule,
        CoreRoutingModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        NotFoundComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        RouterModule
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, "CoreModule");
    }
}
