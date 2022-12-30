import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsincronaComponent } from './asincrona/asincrona/asincrona.component';

const routes: Routes = [
  {path:'**',component:AsincronaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
