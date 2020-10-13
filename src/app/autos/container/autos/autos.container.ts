import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Auto } from '@core/models/auto.model';
import { AutoService } from '../../../core/services/auto.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.container.html',
  styleUrls: ['./autos.container.scss']
})
export class AutosContainer implements OnInit{


contador: number = 10;
autos: Auto[];

  constructor(private autoService:AutoService) {
    
   }


  ngOnInit(): void {
  this.autoService.getAllAutos().subscribe(x => { 
    this.autos = x;
   });
  }


}
