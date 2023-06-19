import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Viaje } from 'src/app/models/Viaje.model';

@Component({
  selector: 'app-nuevo-destino',
  templateUrl: './nuevo-destino.component.html',
  styleUrls: ['./nuevo-destino.component.css']
})
export class NuevoDestinoComponent {
  @Output() viajeGuardado = new EventEmitter<Viaje>();


  form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {}
  
  toJson(value: any) {
    return JSON.stringify(value);
  }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      destino: ['', Validators.required],
      fecha: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      const usuario: Viaje = {
        destino: this.form.value.destino,
        status: this.form.value.status,
      };
      
    } else {
      this.toastr.error('Debe completar todos los campos', 'Oops campos nulos!');
    }
  }

}
