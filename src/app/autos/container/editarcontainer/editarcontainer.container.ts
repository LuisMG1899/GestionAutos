import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoInputModel } from '@core/models/AutoInputModel';
import { AutoService } from '@core/services/auto.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-editarcontainer',
  templateUrl: './editarcontainer.container.html',
  styleUrls: ['./editarcontainer.container.scss']
})
export class EditarcontainerContainer implements OnInit {
  autoModel: AutoInputModel;
  constructor( private autoService: AutoService, private rutaActiva: ActivatedRoute,
    private notifyService: NotifyService
    ) { }

  ngOnInit(): void {
    
    this.getMarca();
  }
  editarAuto(): void {
    
    this.autoService.editarAuto(this.autoModel);
    this.notifyService.mostrarNotificacion('success', 'Se ha editado la marca')
  }

  getMarca(){
    this.autoService.obtenerAutoByID(this.rutaActiva.snapshot.params.id)
  .subscribe(marca => {
      let data: AutoInputModel  = marca;
      this.autoModel = data;
  });
  }

}
