import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "dnd-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent {
  @Input() title: string;
  @Output() menuClick: EventEmitter<any> = new EventEmitter();

  onMenuClick(e) {
    this.menuClick.emit(null);
    e.preventDefault();
  }
};
