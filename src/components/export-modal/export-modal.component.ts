import { Component, Input, ViewChild } from "@angular/core";
import { TemplateRef } from "@angular/core";
import { ModalDismissReasons, NgbModal, NgbModalOptions, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

import { Exporter } from "../../export/exporter";
import * as Characters from "../../models/characters";

@Component({
  selector: "dnd-export-modal",
  templateUrl: "export-modal.component.html",
  styleUrls: ["export-modal.component.scss"]
})
export class ExportModalComponent {
  code = "";
  @Input() character: Characters.Character;
  config = { lineNumbers: true, readOnly: true };
  options: NgbModalOptions = {
    size: "lg"
  };

  @ViewChild("content") content: TemplateRef<object>
  modalReference: NgbModalRef;

  constructor(private modalService: NgbModal) { }

  open() {
    const exporter = new Exporter();
    this.code = exporter.export(this.character);
    this.modalReference = this.modalService.open(this.content, this.options);
    this.modalReference.result.then(result => { }, () => { });
  }

  close() {
    if (!this.modalReference) { return; }
    this.modalReference.close();
  }

  dismiss() {
    if (!this.modalReference) { return; }
    this.modalReference.dismiss();
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
