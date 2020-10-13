import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/scroll/scroll-strategy';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcaService } from '@core/services/marca.service';
import { MarcaEditarModel } from '../../../core/models/marcaEditar.model';
import { NotifyService } from '../../../core/services/notify.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.container.html',
  styleUrls: ['./editar.container.scss']
})
export class EditarContainer implements OnInit {
  marcaModel: MarcaEditarModel;
  constructor( private marcaService: MarcaService, private rutaActiva: ActivatedRoute,
    private notifyService: NotifyService
    ) { }

  ngOnInit(): void {
    this.marcaModel = {
      idMarca: this.rutaActiva.snapshot.params.id,
      nombre: '',
    };
    this.getMarca();
  }
  editarMarca(): void {
    
    this.marcaService.editarMarca(this.marcaModel);
    this.notifyService.mostrarNotificacion('success', 'Se ha editado la marca')
  }

  getMarca(){
    this.marcaService.obtenerMarcaByID(this.rutaActiva.snapshot.params.id)
  .subscribe(marca => {
      let data  = marca;
      this.marcaModel.nombre = data.nombre;
  });
  }

}
