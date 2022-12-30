import { Directive,Input, ElementRef,OnInit  } from '@angular/core';

@Directive({
  selector: '[appValidadEdad]'
})
export class ValidadEdadDirective {
   @Input() edad!: number;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    if (this.edad >= 18) {
      this.element.nativeElement.innerHTML = 'Eres mayor de edad';
    } else {
      this.element.nativeElement.innerHTML = 'Eres menor de edad';
    }
  }
}
