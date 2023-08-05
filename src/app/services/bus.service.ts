import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bus } from '../models/Bus.model';
import { environments } from '../../environments/environment.development';

const apiUrlBus = environments.apiUrl + '/Buses';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient) { }

  getBuses(){
    return this.http.get<Bus[]>(`${apiUrlBus}`);
  }
  getBus(id: number){
    return this.http.get<Bus>(`${apiUrlBus}/${id}`);
  }
  postBus(bus: Bus){
    return this.http.post<Bus>(`${apiUrlBus}`, bus);
  }
  putBus(bus: Bus, id: number){
    return this.http.put<Bus>(`${apiUrlBus}/${id}`, bus);
  }
  deleteBus(id: number){
    return this.http.put<Bus>(`${apiUrlBus}/eliminar/${id}`, null);
  }
}
