import { Component, ViewChild } from "@angular/core";
import { Input, TemplateRef } from "@angular/core";

import { ModalDismissReasons, NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { NgbModalOptions } from "@ng-bootstrap/ng-bootstrap/modal/modal.module";

import { CreatureInitiative } from "../models/creature-initiative";

@Component({
  selector: "dnd-max-hp-modal",
  templateUrl: "./max-hp-modal.component.html",
  styleUrls: ["./max-hp-modal.component.scss"]
})
export class MaxHpModalComponent {
  creature: CreatureInitiative;

  hitPoints = 0;

  options: NgbModalOptions = {
    size: "lg"
  };
  @ViewChild("content") content: TemplateRef<object>
  modalReference: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  open(creature: CreatureInitiative) {
    this.creature = creature;
    this.modalReference = this.modalService.open(this.content, this.options);
    this.modalReference.result.then(result => { }, () => { });
    this.hitPoints = this.creature.maximumHp;
  }

  close() {
    if (!this.modalReference) { return; }
    this.modalReference.close();
  }

  dismiss() {
    if (!this.modalReference) { return; }
    this.modalReference.dismiss();
  }

  modifyHp(amount: number) {
    this.hitPoints = Math.max(0, this.hitPoints + amount);
  }

  onOKClick() {
    this.applyHitPoints(this.hitPoints);
    this.close();
  }

  private applyHitPoints(amount: number) {
    this.creature.maximumHp = amount;
    this.creature.currentHp = Math.min(this.creature.currentHp, this.creature.maximumHp);
    this.creature.currentHp = Math.max(this.creature.currentHp, 0);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
