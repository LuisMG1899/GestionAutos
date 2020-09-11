import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Auto } from '../../../core/models/auto.model';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})

export class AutoComponent implements OnInit {
  contador : number =0;
  @Input() auto: Auto;
  @Output() autoVendido: EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  comprar(id: string): void{
    this.contador++;
console.log("Se vendió el carro " + id)
this.autoVendido.emit(id);
  }
}
