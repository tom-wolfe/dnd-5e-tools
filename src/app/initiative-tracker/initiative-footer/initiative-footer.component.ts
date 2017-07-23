import { Component, EventEmitter, Output } from "@angular/core";
import { Dice } from "dice-typescript";

@Component({
  selector: "dnd-initiative-footer",
  templateUrl: "./initiative-footer.component.html",
  styleUrls: ["initiative-footer.component.scss"]
})
export class InitiativeFooterComponent {
  diceRoll: string = null;
  diceResult = 0;
  private dice: Dice = new Dice();

  @Output() backClick: EventEmitter<any> = new EventEmitter();
  @Output() nextClick: EventEmitter<any> = new EventEmitter();

  onDiceRoll() {
    try {
      this.diceResult = this.dice.roll(this.diceRoll).total;
    } catch (ex) { }
  }
};
