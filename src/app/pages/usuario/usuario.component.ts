import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Role } from 'src/app/models/Role.model';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  //usuario que va a ser obtenido para extraer el id cuando presione el boton eliminar/editar
  usuarioSeleccionado!: Usuario;
  usuarioIdSeleccionado!: number;
  UsuarioString: string = 'usuario';
  usuarios: Usuario[] = [
    {
      id: 1,
      username: 'Chustin',
      ci: '0954383949',
      password: '',
      firstname: 'Jostin',
      lastname: 'Ayon',
      roles: [{
        id: 1,
        name: 'ROLE_ADMIN',
      }],
      status: 'A'
    },
    {
      id: 2,
      username: 'SALTOS',
      ci: '0978898732',
      password: '',
      firstname: 'Jose',
      lastname: 'Sanchez',
      roles: [{
        id: 1,
        name: 'ROLE_USER',
      }],
      status: 'A'
    },

  ];
  role?: Role;
  isAdmin: boolean = false;
  page: number = 0;
  totalPages?: Array<number>;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  lastPage() {
    this.page--;
    this.listarUsuarios();
  }

  nextPage() {
    this.page++;
    this.listarUsuarios();
  }
  
  setpage(page: number): void {
    this.page = page;
    this.listarUsuarios();
  }

  listarUsuarios() {
    
  }

  delete(id: number) {
    
  }

  obtenerUsuario(usuario: Usuario) {
    this.usuarioSeleccionado = usuario;
  }

  obtenerUsuarioId(usuario: Usuario) {
    localStorage.setItem('idUsuario', usuario.id!.toString());
    this.router.navigate(['usuario/editar']);
  }

  onUsuarioGuardado(usuario: Usuario) {
    this.usuarios.unshift(usuario);
  }

}
