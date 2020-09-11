import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosContainer } from './container/autos/autos.container';
import { AutoComponent } from './components/auto/auto.component';
import { AutosRoutingModule } from './autos-routing.module';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { RegistrarAutoContainer } from './container/registrar-auto/registrar-auto.container';
import { RegistrarAutoComponent } from './components/registrar-auto/registrar-auto.component';


@NgModule({
  declarations: [ AutosContainer, AutoComponent, AutoDetailComponent, RegistrarAutoContainer, RegistrarAutoComponent ],
  imports: [
    CommonModule,
    AutosRoutingModule
  ]
})
export class AutosModule { }
