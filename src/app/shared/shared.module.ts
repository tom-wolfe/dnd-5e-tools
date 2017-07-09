import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClipboardModule } from "ngx-clipboard";
import { CollapseDirective } from "app/shared/collapse.directive";
import { CodemirrorModule } from "ng2-codemirror/lib";

import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { SourceReferenceComponent } from "./source-reference/source-reference.component";
import { ViewModeComponent } from "./view-mode/view-mode.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    CodemirrorModule,
    ClipboardModule,
    NgbModule.forRoot()
  ],
  declarations: [
    CollapseDirective,
    SourceReferenceComponent,
    ViewModeComponent,
    SlideToggleComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    CodemirrorModule,
    ClipboardModule,
    CollapseDirective,
    SourceReferenceComponent,
    ViewModeComponent,
    SlideToggleComponent
  ]
})
export class SharedModule { }
