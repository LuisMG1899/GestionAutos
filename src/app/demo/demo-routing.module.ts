import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareacomponenteComponent } from './components/tareacomponente/tareacomponente.component';


const routes: Routes = [
  {
    path : '',
    component: TareacomponenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
