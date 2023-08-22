import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environment.development';
import { Viaje } from '../models/Viaje.model';

const apiUrlViaje = environments.apiUrl + '/Viajes';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  constructor(private http: HttpClient) { }

  getViajes(){
    return this.http.get<Viaje[]>(`${apiUrlViaje}`);
  }
  getViaje(id: number){
    return this.http.get<Viaje>(`${apiUrlViaje}/${id}`);
  }
  postViaje(Viaje: Viaje){
    return this.http.post<Viaje>(`${apiUrlViaje}`, Viaje);
  }
  putViaje(Viaje: Viaje, id: number){
    return this.http.put<Viaje>(`${apiUrlViaje}/${id}`, Viaje);
  }
  deleteViaje(id: number){
    return this.http.put<Viaje>(`${apiUrlViaje}/eliminar/${id}`, null);
  }
}
