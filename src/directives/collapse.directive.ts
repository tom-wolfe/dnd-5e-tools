import { Directive, Input, HostBinding, ElementRef } from "@angular/core";

@Directive({ selector: "[collapse]" })
export class CollapseDirective {

    @HostBinding("class.collapsing")
    private classCollapsing: boolean

    @HostBinding("class.collapse")
    private classCollapse: boolean

    @HostBinding("class.show")
    private classShow: boolean

    private transitioning: boolean;

    @Input()
    private set collapse(value: boolean) {
        if (value !== undefined) {
            if (value) {
                this.hide();
            } else {
                this.show();
            }
        }
    }

    constructor(public el: ElementRef) { }

    show() {
        const elem: HTMLDivElement = this.el.nativeElement;
        if (this.transitioning) { return; }

        this.classCollapse = false;
        this.classCollapsing = true

        const attr = document.createAttribute("aria-expanded");
        attr.value = "true";
        elem.attributes.setNamedItem(attr);

        this.transitioning = true;

        const complete = function () {
            this.classCollapsing = false;
            this.classCollapse = true;
            this.classShow = true;
            this.transitioning = false;
        }

        complete.call(this);
    }

    hide() {
        const elem: HTMLDivElement = this.el.nativeElement;
        if (this.transitioning) { return; }

        this.classCollapsing = true;
        this.classCollapse = false;
        this.classShow = false;
        const attr = document.createAttribute("aria-expanded");
        attr.value = "false";
        elem.attributes.setNamedItem(attr);

        this.transitioning = true;

        const complete = function () {
            this.classCollapsing = false;
            this.classCollapse = true;
            this.transitioning = false;
        }

        complete.call(this);
    }

}