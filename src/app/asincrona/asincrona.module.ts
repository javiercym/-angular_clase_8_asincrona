import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsincronaComponent } from './asincrona/asincrona.component';
import { FormsModule } from '@angular/forms';
import { ValidadEdadDirective } from '../validad-edad.directive';


@NgModule({
  declarations: [
    AsincronaComponent,
    ValidadEdadDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AsincronaComponent
  ]
})
export class AsincronaModule { }
