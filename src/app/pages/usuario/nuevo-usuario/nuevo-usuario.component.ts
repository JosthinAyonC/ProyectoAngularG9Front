import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/models/Role.model';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  @Output() usuarioGuardado = new EventEmitter<Usuario>();

  form!: FormGroup;
  roles: Role[] = [];

  
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
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
      roles: ['', Validators.required],
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
        roles: [JSON.parse(this.form.value.roles)] ,
      };
      
    } else {
      this.toastr.error('Debe completar todos los campos', 'Oops campos nulos!');
    }
  }
}
