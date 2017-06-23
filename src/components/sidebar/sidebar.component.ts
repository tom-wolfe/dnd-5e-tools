import { Component, Input } from "@angular/core";

@Component({
  selector: "dnd-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() collapsed = true;
};
