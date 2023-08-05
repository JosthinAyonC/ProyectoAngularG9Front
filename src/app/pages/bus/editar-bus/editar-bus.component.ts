import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bus } from 'src/app/models/Bus.model';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-editar-bus',
  templateUrl: './editar-bus.component.html',
  styleUrls: ['./editar-bus.component.css'],
})
export class EditarBusComponent {
  bus!: Bus; //Bus recuperado para editar
  form!: FormGroup;
  id = localStorage.getItem('idBus');
  @Input() idBusAEditar!: Bus;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private busService: BusService
  ) {}

  readonlyMode: boolean = true;

  ngOnInit() {
    this.busService.getBus(Number(this.id)).subscribe({
      next: (data: Bus) => {
        this.bus = data;
        this.setupForm();
      },
      error: (error: any) => {
        this.toastr.error(error.message);
        this.router.navigate(['bus']);
      },
    });

    this.form = this.formBuilder.group({
      placa: ['', Validators.required],
      model: ['', Validators.required],
      marca: ['', Validators.required],
      capacidad: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  setupForm() {
    this.form = this.formBuilder.group({
      placa: this.bus.placa,
      model: this.bus.model,
      marca: this.bus.marca,
      capacidad: this.bus.capacidad,
      status: this.bus.status,
    });
  }

  volver() {
    localStorage.removeItem('idBus');
    this.router.navigate(['bus']);
  }

  toJson(value: any) {
    return JSON.stringify(value);
  }

  guardar() {
    this.busService.putBus(this.form.value, Number(this.id)).subscribe({
      next: (data: any) => {
        this.toastr.success(data.message);
        this.router.navigate(['bus']);
      },
      error: (error: any) => {
        console.log(error);
        this.toastr.error(error.message);
      },
    });
  }
}
