import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../../core/services/marca.service';
import { AutoService } from '../../../core/services/auto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  numeroMarcas;
  numeroAutos;
  numeroUsuario = 0;
  metaMarcas;
  metaAutos;
  constructor(private marcaService: MarcaService,
    private autoService: AutoService
    ) { }

  ngOnInit(): void {
    this.marcaService.getAllMarcas().subscribe(x => {
      this.numeroMarcas = x.length;
      if(this.numeroMarcas >= 15){
        this.metaMarcas = 'Meta cumplida!';
      }
      if(this.numeroMarcas <= 15){
        let sum = 15-this.numeroMarcas;
        this.metaMarcas = 'Faltan ' + sum + ' marcas' ;
      }

    });
    this.autoService.getAllAutos().subscribe(x => {
      this.numeroAutos = x.length;
      if(this.numeroAutos >= 50){
        this.metaAutos = 'Meta cumplida!';
      }
      if(this.numeroAutos <= 50){
        let sum = 50-this.numeroAutos;
        this.metaAutos = 'Faltan ' + sum + ' autos' ;
      }
    });
  }

}
