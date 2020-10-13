import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasContainer } from './containers/marcas/marcas.container';
import { RegistrarMarcaContainer } from './containers/registrar-marca/registrar-marca.container';
import { MarcasAdminContainer } from './containers/marcas-admin/marcas-admin.container';
import { EditarContainer } from './containers/editar/editar.container';
const routes: Routes = [
    {
        path: '',
        component: MarcasContainer
    },
    {
        path: 'admin',
        component: MarcasAdminContainer
    },
    {
        path: 'admin/registrar',
        component: RegistrarMarcaContainer
    },
    {
        path: 'admin/editar/:id',
        component: EditarContainer
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarcasRoutingModule { }
