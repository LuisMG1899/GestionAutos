import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';


@NgModule({
  declarations: [UsuarioComponent, UsuariosComponent, DetalleUsuarioComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
