import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosContainer } from './container/autos/autos.container';
import { AutoComponent } from './components/auto/auto.component';
import { AutosRoutingModule } from './autos-routing.module';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { RegistrarAutoContainer } from './container/registrar-auto/registrar-auto.container';
import { RegistrarAutoComponent } from './components/registrar-auto/registrar-auto.component';
import { AutosAdminmContainer } from './container/autos-adminm/autos-adminm.container';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RegistrarcContainer } from './container/registrarc/registrarc.container';
import { RegistrarcoComponent } from './components/registrarco/registrarco.component';
import { DevextremeModule } from '../devextreme/devextreme.module';
import { EditarcontainerContainer } from './container/editarcontainer/editarcontainer.container';
import { EditarcomponentComponent } from './components/editarcomponent/editarcomponent.component';


@NgModule({
  declarations: [ AutosContainer, AutoComponent, AutoDetailComponent, RegistrarAutoContainer, RegistrarAutoComponent, AutosAdminmContainer, RegistrarcContainer, RegistrarcoComponent, EditarcontainerContainer, EditarcomponentComponent ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    FormsModule,
    MaterialModule,
    DevextremeModule,
  ]
})
export class AutosModule { }
