import {Directive, ElementRef, inject, Input, OnInit, Renderer2} from '@angular/core';

// TODO: child directive
@Directive({
  selector: '[appBoolChip]',
  standalone: true
})
export class BoolChipDirective implements OnInit {

  @Input({required: true}) appBoolChip: boolean;
  @Input({required: true}) truthyColor: string;
  @Input({required: true}) falsyColor: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(this.el.nativeElement, 'app-bool-chip');
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, "background-color", this.appBoolChip ? this.truthyColor : this.falsyColor);
  }

}
