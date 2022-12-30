import { Directive,Input, ElementRef,OnInit  } from '@angular/core';

@Directive({
  selector: '[appValidadEdad]'
})
export class ValidadEdadDirective {
   @Input() edad!: number;
   @Input() nombre!: string;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    if (this.edad >= 18) {
      this.element.nativeElement.innerHTML = this.nombre + ' Eres mayor de edad';
    } else {
      this.element.nativeElement.innerHTML = this.nombre +' Eres menor de edad';
    }
  }
}
