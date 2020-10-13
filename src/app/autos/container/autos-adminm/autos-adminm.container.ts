import { Component, OnInit } from '@angular/core';
import { Auto } from '@core/models/auto.model';
import { AutoService } from '../../../core/services/auto.service';
import { NotifyService } from '../../../core/services/notify.service';

@Component({
  selector: 'app-autos-adminm',
  templateUrl: './autos-adminm.container.html',
  styleUrls: ['./autos-adminm.container.scss']
})
export class AutosAdminmContainer implements OnInit {
autos: Auto[];
  constructor(private autoService: AutoService, private notifyService: NotifyService) { }

  ngOnInit(): void {
    this.autoService.getAllAutos().subscribe(x => {
      this.autos = x;
    });
  }
  eliminarAuto(e){
   
  this.autoService.borrarAuto(e).subscribe(x => {
    this.autoService.getAllAutos().subscribe(x => {
      this.autos = x;
      this.notifyService.mostrarNotificacion('success', 'Se eliminó el auto');
    });
  });
  }
}
