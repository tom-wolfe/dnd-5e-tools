import { Component, Input } from "@angular/core";

@Component({
  selector: "dnd-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "D&D 5th Edition Tools";
  @Input() sidebarOpen: boolean;
};
