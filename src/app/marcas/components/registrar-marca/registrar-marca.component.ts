import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MarcaInputModel } from '@core/models/marcaInput.model';

@Component({
  selector: 'app-registrar-marca',
  templateUrl: './registrar-marca.component.html',
  styleUrls: ['./registrar-marca.component.scss']
})
export class RegistrarMarcaComponent implements OnInit {
  @Input() marcaModel: MarcaInputModel;
  @Output() registrarMarcaClick: EventEmitter<any> = new EventEmitter<any>();

  passwordButton: any;
  constructor(private router: Router) { 
   
        this.passwordButton = {
            type: "default",
            name: "Registrar",
            text: "Registrar",
            onClick: () => {
              this.registrarMarcaClicked();
              this.router.navigateByUrl('/admin/marcas-admin/admin');

          }
        };
  }

  ngOnInit(): void {
  }

  registrarMarcaClicked(): void {
    this.registrarMarcaClick.emit();
  }

}
