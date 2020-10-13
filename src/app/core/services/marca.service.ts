import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MarcaInputModel } from '@core/models/marcaInput.model';
import { MarcaModel } from '@core/models/marca.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MarcaEditarModel } from '@core/models/marcaEditar.model';
@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    private http: HttpClient
  ) { }
  registrarMarca(marcaModel: MarcaInputModel): void {
    console.log(marcaModel.nombre);
    this.http.post(`${environment.UrlApi}Marca`, marcaModel).subscribe(x => {
      console.log(x);
    });
  }

  editarMarca(marcaModel: MarcaEditarModel): void {
    this.http.patch(`${environment.UrlApi}Marca`, marcaModel).subscribe(x => {
      console.log(x);
    });
  }
  
  obtenerMarcaByID(id: string){ 
    return this.http.get<any>(`${environment.UrlApi}Marca/${id}`)
   }

   borrarMarca(id: string){ 
    return this.http.delete(`${environment.UrlApi}Marca/${id}`)
   }
  
  getAllMarcas(): Observable<MarcaModel[]> {
    return this.http.get<MarcaModel[]>(`${environment.UrlApi}Marca`);
  }
}
