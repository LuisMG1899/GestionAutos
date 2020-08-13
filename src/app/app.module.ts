import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TareacomponenteComponent } from './components/tareacomponente/tareacomponente.component';
import { FormsModule } from '@angular/forms';
import { AutosComponent } from './components/autos/autos.component';
import { AutoComponent } from './components/auto/auto.component'
@NgModule({
  declarations: [
    AppComponent,
    TareacomponenteComponent,
    AutosComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
