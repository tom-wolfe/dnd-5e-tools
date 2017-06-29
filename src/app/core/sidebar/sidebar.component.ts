import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "dnd-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  @Output() isOpen = false;
  @Output() navigate: EventEmitter<any> = new EventEmitter();

  onNavigate(e) {
    this.navigate.emit(null);
    this.isOpen = false;
    e.stopPropagation();
    e.preventDefault();
  }

  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
};
