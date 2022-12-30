import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsincronaComponent } from './asincrona/asincrona.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AsincronaComponent
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
