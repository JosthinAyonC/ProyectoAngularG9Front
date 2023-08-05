import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bus } from 'src/app/models/Bus.model';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-nuevo-bus',
  templateUrl: './nuevo-bus.component.html',
  styleUrls: ['./nuevo-bus.component.css']
})
export class NuevoBusComponent {
  @Output() busGuardado = new EventEmitter<Bus>();

  form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private busService: BusService,
    private router: Router,
  ) {}

  toJson(value: any) {
    return JSON.stringify(value);
  }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      placa: ['', Validators.required],
      model: ['', Validators.required],
      marca: ['', Validators.required],
      capacidad: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      status: ['', Validators.required],
    });
  }
  guardar() {
    if (this.form.valid) {
      const usuario: Bus = {
        placa: this.form.value.placa,
        model: this.form.value.model,
        marca: this.form.value.marca,
        capacidad: this.form.value.capacidad,
        status: this.form.value.status,
      };
      this.busService.postBus(usuario).subscribe(
        {
          next: (data: Bus) => {
            this.busGuardado.emit();
            this.toastr.success('Bus registrado', 'Exito!');
          },
          error: (error: any) => {
            this.toastr.error(error.message);
          },
          complete: () => {
            this.form.reset();
            this.router.navigate(['/bus']);
          }
        }
      );
    } else {
      this.toastr.error('Debe completar todos los campos', 'Oops campos nulos!');
    }
  }
}
