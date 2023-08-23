import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Role } from 'src/app/models/Role.model';
import { Usuario } from 'src/app/models/Usuario.model';
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent {
  usuario!: Usuario;//Usuario recuperado para editar
  form!: FormGroup;
  roles: Role[] = [];
  @Input() idUsuarioAEditar!: Usuario;
  id = localStorage.getItem('idUsuario');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) { }


  readonlyMode: boolean = true;

  ngOnInit() {
    const id = +this.id!;
    this.usuarioService.getUsuario(id).subscribe({
      next: (usuario: Usuario) => {
        this.usuario = usuario;
        this.setupForm();
      },
      error: (error: any) => {
        this.toastr.error(error.message);
        this.router.navigate(['usuario']);
      },
    });

    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      ci: ['', Validators.required],
      roles: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  setupForm() {
    this.form = this.formBuilder.group({
      firstname: this.usuario.firstname,
      lastname: this.usuario.lastname,
      username: this.usuario.username,
      ci: this.usuario.ci,
      status: this.usuario.status,
      roles: this.usuario.roles,
    });
  }

  volver() {
    localStorage.removeItem('idUsuario');//a mejorar
    this.router.navigate(['usuario']);
  }
  toJson(value: any) {
    return JSON.stringify(value);
  }
  guardar() {
    this.usuarioService.putUsuario(this.form.value, Number(this.id)).subscribe({
      next: (data: any) => {
        this.toastr.success(data.message);
        this.router.navigate(['usuario']);
      },
      error: (error: any) => {
        this.toastr.error(error.error.message);
      },
    });
  }
}
