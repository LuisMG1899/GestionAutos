import { Component, OnInit } from '@angular/core';
import { MarcaInputModel } from '@core/models/marcaInput.model';
import { MarcaService } from '@core/services/marca.service';
import { NotifyService } from '../../../core/services/notify.service';

@Component({
  selector: 'app-registrar-container-marca',
  templateUrl: './registrar-marca.container.html',
  styleUrls: ['./registrar-marca.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class RegistrarMarcaContainer implements OnInit {
  marcaModel: MarcaInputModel = {
    nombre: ''
  };
  constructor(
    private marcaService: MarcaService, private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
  }

  registrarMarca(): void {
    this.marcaService.registrarMarca(this.marcaModel);
      this.notifyService.mostrarNotificacion('success', 'Se ha registrado la marca')
  }

}
