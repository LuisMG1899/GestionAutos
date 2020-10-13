import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MarcaModel } from '@core/models/marca.model';
import { MarcaService } from '@core/services/marca.service';

@Component({
  selector: 'app-registrarco',
  templateUrl: './registrarco.component.html',
  styleUrls: ['./registrarco.component.scss'],
})
export class RegistrarcoComponent implements OnInit {
  @Input() autoImputModel;
  @Output() registrarAutoClick: EventEmitter<Date> = new EventEmitter<Date>();
  data: MarcaModel[];
  fechaAuto: Date;
  constructor(private router: Router, private marcaService: MarcaService) {
    
  }

  ngOnInit(): void {
this.marcaService.getAllMarcas().subscribe(datos => {

    this.data = datos;

});
  }

  registrarAutoClicked(): void {
    this.registrarAutoClick.emit(this.fechaAuto);
  }
}
