import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CollapseDirective } from "app/shared/collapse.directive";
import { CodemirrorModule } from "ng2-codemirror/lib";

import { SourceReferenceComponent } from "./source-reference/source-reference.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    CodemirrorModule,
    NgbModule.forRoot()
  ],
  declarations: [
    CollapseDirective,
    SourceReferenceComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    CodemirrorModule,
    CollapseDirective,
    SourceReferenceComponent
  ]
})
export class SharedModule { }
