import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { TareacomponenteComponent } from './components/tareacomponente/tareacomponente.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TareacomponenteComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
