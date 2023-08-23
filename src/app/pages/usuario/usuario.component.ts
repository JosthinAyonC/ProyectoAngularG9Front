import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { Role } from 'src/app/models/Role.model';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  //usuario que va a ser obtenido para extraer el id cuando presione el boton eliminar/editar
  usuarioSeleccionado!: Usuario;
  usuarioIdSeleccionado!: number;
  UsuarioString: string = 'Esta seguro que desea eliminar este usuario?';
  isAdmin: boolean = false;
  page: number = 0;
  totalPages?: Array<number>;
  usuarios: Usuario[] = [];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.listarUsuarios();
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
    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }

  delete(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe({
      next: () => {
        this.toastr.success('Usuario eliminado', 'Exito');
        this.listarUsuarios();
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
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
