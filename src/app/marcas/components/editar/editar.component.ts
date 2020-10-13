import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MarcaEditarModel } from '../../../core/models/marcaEditar.model';

@Component({
  selector: 'app-editar-component',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  @Input() marcaModel: MarcaEditarModel;
  @Output() editarMarcaClick: EventEmitter<any> = new EventEmitter<any>();
  passwordButton: any;
  constructor(private router: Router) { 
   
        this.passwordButton = {
            type: "default",
            name: "Editar",
            text: "Editar",
            onClick: () => {
              this.editarMarcaClicked();
              this.router.navigateByUrl('/admin/marcas-admin/admin');
              
          }
        };
  }

  ngOnInit(): void {
  }

  editarMarcaClicked(): void {
    this.editarMarcaClick.emit();
  }
}
