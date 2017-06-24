import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "dnd-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Input() collapsed = true;
  @Output() navigate: EventEmitter<any> = new EventEmitter();

  onNavigate(e) {
    this.navigate.emit(null);
    e.preventDefault();
  }
};
