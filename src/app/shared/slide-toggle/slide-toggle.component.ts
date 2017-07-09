import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";


export const MD_SLIDE_TOGGLE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SlideToggleComponent),
  multi: true
};

@Component({
  selector: "dnd-slide-toggle",
  templateUrl: "./slide-toggle.component.html",
  styleUrls: ["./slide-toggle.component.scss"],
  providers: [MD_SLIDE_TOGGLE_VALUE_ACCESSOR],
})
export class SlideToggleComponent implements ControlValueAccessor {
  private _checked: boolean;

  private onChange = (_: any) => { };
  private onTouched = () => { };

  @Input() get checked(): boolean { return !!this._checked; }
  set checked(value: boolean) {
    if (this.checked !== !!value) {
      this._checked = value;
      this.onChange(this._checked);
    }
  }

  constructor() { }

  onToggleClick() {
    this.checked = !this.checked;
  }

  writeValue(value: any): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Do nothing
  }
};
