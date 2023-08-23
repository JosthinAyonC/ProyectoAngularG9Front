import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { ToastrService } from 'ngx-toastr';
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      ci: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      const usuario: Usuario = {
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname,
        username: this.form.value.username,
        ci: this.form.value.ci,
        password: this.form.value.password,
      };

      this.usuarioService.postUsuario(usuario).subscribe({
        next: (response) => {
          this.toastr.success('Usuario registrado con éxito');
          this.router.navigate(['/login']).then(r => console.log('redireccionando'));
        },
        error: (error) => {
          this.toastr.error('Hubo un problema al registrar el usuario');
          console.error(error);
        }
      });

    } else {
      alert('Debe completar todos los campos');
    }
  }
}
