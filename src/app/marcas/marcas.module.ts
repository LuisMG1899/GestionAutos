import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarcaDetailComponent } from './components/marca-detail/marca-detail.component';
import { MarcaComponent } from './components/marca/marca.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { MarcasRoutingModule  } from './marcas-routing.module'


@NgModule({
  declarations: [MarcaDetailComponent, MarcaComponent, MarcasComponent,],
  imports: [
    CommonModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }
