import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Role } from 'src/app/models/Role.model';
import { Usuario } from 'src/app/models/Usuario.model';

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
    private toastr: ToastrService
  ) { }


  readonlyMode: boolean = true;

  ngOnInit() {    
    
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      status: ['', Validators.required],
      roles: ['', Validators.required],
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
    
  }
}
