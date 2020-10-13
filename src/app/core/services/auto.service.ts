import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auto } from '@core/models/auto.model';
import { environment } from '@environments/*';
import { Observable } from 'rxjs';
import { AutoInputModel } from '@core/models/AutoInputModel';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  constructor(
    private http: HttpClient
  ) { }

  getAllAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(`${environment.UrlApi}/Auto`);
  }

  registrarAuto(autoModel: AutoInputModel): void {
    console.log(autoModel)
    this.http.post(`${environment.UrlApi}/Auto`, autoModel).subscribe(x => {
      console.log(x);
    });
  }

  borrarAuto(id: string){ 
    return this.http.delete(`${environment.UrlApi}/Auto/${id}`)
    
   }

   obtenerAutoByID(id: string){ 
    return this.http.get<any>(`${environment.UrlApi}/Auto/${id}`)
   }
   editarAuto(autoModel: AutoInputModel): void {
    this.http.patch(`${environment.UrlApi}/Auto`, autoModel).subscribe(x => {
      console.log(x);
    });
  }

}
