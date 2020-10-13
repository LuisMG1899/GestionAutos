import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { LoginContainer } from './containers/login/login.container';
import { LoginsComponent } from './components/login/login.component';
import { DevextremeModule } from '../devextreme/devextreme.module';


@NgModule({
  declarations: [UsuarioComponent, UsuariosComponent, DetalleUsuarioComponent, LoginContainer,LoginsComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    DevextremeModule
  ]
})
export class UsuariosModule { }
