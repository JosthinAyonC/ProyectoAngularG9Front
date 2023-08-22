import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environment.development';
import { Usuario } from '../models/Usuario.model';

const apiUrlUsuarios = environments.apiUrl + '/Usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get<Usuario[]>(`${apiUrlUsuarios}`);
  }
  getUsuario(id: number) {
    return this.http.get<Usuario>(`${apiUrlUsuarios}/${id}`);
  }
  getUsuarioByCedula(id: String) {
    return this.http.get<Usuario>(`${apiUrlUsuarios}/ci/${id}`);
  }
  postUsuario(Usuario: Usuario) {
    return this.http.post<Usuario>(`${apiUrlUsuarios}`, Usuario);
  }
  putUsuario(Usuario: Usuario, id: number) {
    return this.http.put<Usuario>(`${apiUrlUsuarios}/${id}`, Usuario);
  }
  deleteUsuario(id: number) {
    return this.http.put<Usuario>(`${apiUrlUsuarios}/eliminar/${id}`, null);
  }
}
