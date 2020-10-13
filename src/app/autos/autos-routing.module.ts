import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosContainer } from './container/autos/autos.container';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { AutosAdminmContainer } from './container/autos-adminm/autos-adminm.container';
import { RegistrarcContainer } from './container/registrarc/registrarc.container';
import { EditarContainer } from '../marcas/containers/editar/editar.container';
import { EditarcontainerContainer } from './container/editarcontainer/editarcontainer.container';

const routes: Routes = [
  {
    path : '',
    component: AutosContainer,
  },
  {
    path : 'auto:id',
    component: AutoDetailComponent,
  },
  {
    path: 'autos/registrar',
    component: RegistrarcContainer
  },
  {
  path: 'autos',
  component: AutosAdminmContainer,
  },
  {
    path: 'autos/editar/:id',
    component: EditarcontainerContainer
},
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
