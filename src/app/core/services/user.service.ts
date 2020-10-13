import { Injectable } from '@angular/core';
import { LoginInputModel } from '@core/models/loginInputModel.model';

import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IResponseOfLoginResponse } from '../models/IResponseOfLoginResponse.model';
import { environment } from '../../../environments/environment';
import { StorageService } from './storage.service';
import { LoginResponse } from '@core/models/loginResponse.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient, private storage: StorageService
  ) { 
  }
  iniciarSesion(loginModel: LoginInputModel): Observable<IResponseOfLoginResponse> {
    // fetch('http://local.codemexico.mx:8081/GestionAutos/api/Auth/IniciarSesion',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(loginModel),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch(error => console.log(error));
    return this.http
      .post<IResponseOfLoginResponse>(`${environment.UrlApi}Auth/IniciarSesion`, loginModel);
  }

      cerrarSesion(): void {
        this.storage.removeJsonItem('User');
      }
      guardarUsuario(loginResponse: LoginResponse): void {
        this.storage.setJsonValue('User', loginResponse);
      }
      getUser(): LoginResponse {
        const data: LoginResponse = this.storage.getJsonValue('User');
        return data;
      }
      getToken(): string{
        const data: LoginResponse = this.storage.getJsonValue('User');
        if(data){return data.token}
        return '';
      }
      isAuthenticated(): boolean {
        const user = this.storage.getJsonValue('User');
        if (user) {
          return true;
        }
        return false;
      }
}
