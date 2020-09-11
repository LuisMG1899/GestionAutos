import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Auto } from '@core/models/auto.model';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.container.html',
  styleUrls: ['./autos.container.scss']
})
export class AutosContainer implements OnInit, OnChanges {


contador: number = 10;

  autos : Auto[] =[ {
    año : "2020",
    nombre : "Camaro",
    id  : '1',
    modelo  : 'Chido',
    descripcion : 'La leyenda continúa. Cinco modelos diferentes. Cuatro trenes motrices alucinantes. Una leyenda. El Camaro 2020 llegó para ofrecer el tipo de diseño audaz, precisión fascinante y tecnología de desempeño de avanzada que sólo se puede vivir al volante de este auto deportivo icónico.',
  img : 'assets/camaro.png'
  },

  {
    año : "2020",
    nombre : "Versa",
    id  : '2',
    modelo  : 'Chido',
    descripcion : 'sistente de Ascenso en Pendientes (HSA); Control Dinámico Vehicular (VDC); Sensores de reversa; Sistema de anclaje para la silla de bebé en el asiento trasero (ISO-FIX). Además, es el único auto en su segmento que integra asistencias a la conducción, que son propias de segmentos superiores.',
    img : 'assets/versa.png'
  },

];
  constructor() {
    console.log("1 constructor")
   }
   
   ngOnChanges(changes : SimpleChanges) : void {
     console.log("2 changes")
   }

  ngOnInit(): void {
    console.log("3 ng on init")
  }

  addCarros(id :number){
    this.contador--;
   
  }
}
