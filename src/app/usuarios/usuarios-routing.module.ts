import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@shared/guardianes/auth-guard.guard';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginContainer } from './containers/login/login.container';

const routes: Routes = [
  {
    path : "",
    component: UsuariosComponent
  },
  {
    canActivate: [AuthGuard],
    path : "login",
    component: LoginContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
