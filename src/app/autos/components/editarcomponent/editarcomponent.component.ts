import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AutoInputModel } from '@core/models/AutoInputModel';
import { MarcaService } from '@core/services/marca.service';
import { AutoService } from '../../../core/services/auto.service';

@Component({
  selector: 'app-editarcomponent',
  templateUrl: './editarcomponent.component.html',
  styleUrls: ['./editarcomponent.component.scss'],
})
export class EditarcomponentComponent implements OnInit {
  @Input() autoModel: AutoInputModel;
  data;
  fechaAuto;
  @Output() editarAutoClick: EventEmitter<any> = new EventEmitter<any>();
  passwordButton: any;
  constructor(private router: Router, private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.marcaService.getAllMarcas().subscribe(datos => {

      this.data = datos;
  
  });
  }

  editarAutoClicked(): void {
    this.editarAutoClick.emit();
  }
}
