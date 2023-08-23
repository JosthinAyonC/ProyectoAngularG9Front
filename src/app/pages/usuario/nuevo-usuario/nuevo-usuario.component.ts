import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/models/Role.model';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  @Output() usuarioGuardado = new EventEmitter<Usuario>();

  form!: FormGroup;
  roles: Role[] = [
    {
      id: 1,
      name: 'ROLE_ADMIN',
    },
    {
      id: 2,
      name: 'ROLE_USER',
    },
    {
      id: 3,
      name: 'ROLE_MODERATOR',
    }
  ];
  
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) {}

  toJson(value: any) {
    return JSON.stringify(value);
  }
  
  ngOnInit() {
    
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      ci: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      const usuario: Usuario = {
        username: this.form.value.username,
        ci: this.form.value.ci,
        password: this.form.value.password,
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname,
        status: this.form.value.status,
      };
      this.usuarioService.postUsuario(usuario).subscribe({
        next: () => {
          this.toastr.success('Usuario guardado', 'Exito');
          this.usuarioGuardado.emit();
        },
        error: (data:any) => {
          this.toastr.error(data.error.message, 'Error');
        },
        complete: () => {
         this.form.reset();
        }
      });

      
    } else {
      this.toastr.error('Debe completar todos los campos', 'Oops campos nulos!');
    }
  }
}
