import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) {}
  
  ngOnInit() {
    
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      const usuario: Usuario = {
        username: this.form.value.username,
        email: this.form.value.email,
        password: this.form.value.password,
        firstname: this.form.value.firstname,
        lastname: this.form.value.lastname
      };
      
    } else {
      alert('Debe completar todos los campos');
    }
  }
}
