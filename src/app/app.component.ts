import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "dnd-app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = "D&D 5th Edition Tools";
};
