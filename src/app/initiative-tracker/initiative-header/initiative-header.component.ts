import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dnd-initiative-header",
  templateUrl: "./initiative-header.component.html"
})
export class InitiativeHeaderComponent {
  @Input() currentInitiative: number;
  @Input() currentRound: number
  @Output() nextClick: EventEmitter<any> = new EventEmitter();

  get timePast(): string {
    let round = this.currentRound || 0;
    round = Math.max(round - 1, 0);
    let secs = round * 6;
    const mins = Math.floor(secs / 60);
    secs %= 60;
    const strMin = (mins < 10 ? "0" : "") + mins.toString();
    const strSec = (secs < 10 ? "0" : "") + secs.toString();
    return `${strMin}:${strSec}`;
  }
};
