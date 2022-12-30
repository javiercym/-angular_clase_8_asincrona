import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsincronaModule } from './asincrona/asincrona.module';
import { ValidadEdadDirective } from './validad-edad.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsincronaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
