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
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      Fecha: ['', Validators.required],
      vuelta: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      const usuario: Viaje = {
        origen: this.form.value.origen,
        destino: this.form.value.destino,
        ida: this.form.value.ida,
        vuelta: this.form.value.vuelta,
        status: this.form.value.status,
      };
      
    } else {
      this.toastr.error('Debe completar todos los campos', 'Oops campos nulos!');
    }
  }

}
