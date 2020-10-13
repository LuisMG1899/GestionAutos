
import { DatePipe } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutoInputModel } from '@core/models/AutoInputModel'

import { AutoService } from '../../../core/services/auto.service';
import { NotifyService } from '../../../core/services/notify.service';
@Component({
  selector: 'app-registrarc',
  templateUrl: './registrarc.container.html',
  styleUrls: ['./registrarc.container.scss'],
  providers: [DatePipe],
})
export class RegistrarcContainer implements OnInit {
  autoImputModel: AutoInputModel = {
    nombre: '', 
    fechaEsamble: null,
    marcaId: '',
    numeroMotor: '',
    precioMercado: null,

  };
  constructor(private autoService: AutoService, private notifService: NotifyService,
    public datepipe: DatePipe,
    private router : Router
    ) { }

  ngOnInit(): void {
  }
  registrarAuto(e: Date): void {

    let dias = e.getDate();
    let meses = e.getMonth() + 1;
    let año = e.getFullYear();
    if(dias <= 10){
      let dia = '0' + dias 
      this.autoImputModel.fechaEsamble = año + '-' + meses + '-' + dia +'T00:00:00.000Z';
    }
    else{
      this.autoImputModel.fechaEsamble = año + '-' + meses + '-' + dias +'T00:00:00.000Z';
    }

    
    this.autoService.registrarAuto(this.autoImputModel);
      this.notifService.mostrarNotificacion('success', 'Se ha registrado el auto')
      this.router.navigate(['./admin/autos-admin/autos']);
  }


}
