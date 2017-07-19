import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, Renderer, ViewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const INLINE_EDIT_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InlineEditComponent),
  multi: true
};

@Component({
  selector: "dnd-inline-edit",
  templateUrl: "./inline-edit.component.html",
  styleUrls: ["./inline-edit.component.scss"],
  providers: [INLINE_EDIT_CONTROL_VALUE_ACCESSOR]
})

export class InlineEditComponent implements ControlValueAccessor, OnInit {
  @ViewChild("inlineEditControl") inlineEditControl: ElementRef;

  @Input() label = "";
  @Input() type = "text";
  @Input() required = false;
  @Input() disabled = false;

  editing = false;

  @Output() beforeChange: EventEmitter<any> = new EventEmitter(false);
  @Output() afterChange: EventEmitter<any> = new EventEmitter();

  private _value = "";
  private preValue = "";

  private onChange = (_: any) => { };
  private onTouched = () => { };

  // Control Value Accessors for ngModel
  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(this._value);
    }
  }

  constructor(element: ElementRef, private _renderer: Renderer) { }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this._value = value;
  }

  onBlur($event: Event) {
    if (!this.editing) { return; }
    this.editing = false;

    const eventArgs = { value: this.preValue };
    this.beforeChange.emit(eventArgs);
    this.value = eventArgs.value;
    this.afterChange.emit(eventArgs);
  }

  edit(value) {
    if (this.disabled) { return; }

    this.preValue = value;
    this.editing = true;
    // Focus on the input element just as the editing begins
    setTimeout(_ => {
      this.inlineEditControl.nativeElement.focus();
      this.inlineEditControl.nativeElement.select();
    });
  }

  ngOnInit() { }
}
