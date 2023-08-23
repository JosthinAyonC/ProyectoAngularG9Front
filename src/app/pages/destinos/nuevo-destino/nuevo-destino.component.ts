import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Bus } from 'src/app/models/Bus.model';
import { Viaje } from 'src/app/models/Viaje.model';
import { BusService } from 'src/app/services/bus.service';
import { DestinoService } from 'src/app/services/destino.service';

@Component({
  selector: 'app-nuevo-destino',
  templateUrl: './nuevo-destino.component.html',
  styleUrls: ['./nuevo-destino.component.css'],
})
export class NuevoDestinoComponent {
  @Output() viajeGuardado = new EventEmitter<Viaje>();

  form!: FormGroup;
  buses: Bus[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private desinoService: DestinoService,
    private busService: BusService,
    private toastr: ToastrService
  ) {}

  toJson(value: any) {
    return JSON.stringify(value);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      destino: ['', Validators.required],
      observacion: ['', Validators.required],
      precio: [Validators.required],
      ida: [Validators.required],
      busId: ['', Validators.required],
    });
    this.traerBuses();
  }

  traerBuses() {
    this.busService.getBuses().subscribe({
      next: (buses) => {
        this.buses = buses;
      },
      error: (error) => {
        this.toastr.error('Error al traer los buses', 'Oops hubo un error!');
      },
    });
  }

  guardar() {
    if (this.form.valid) {
      const viaje: Viaje = {
        destino: this.form.value.destino,
        fecha: this.form.value.ida,
        observacion: this.form.value.observacion,
        precio: this.form.value.precio,
        busId: this.form.value.busId,
        status: "A",
      };
      this.desinoService.postViaje(viaje).subscribe({
        next: (viaje) => {
          this.viajeGuardado.emit(viaje);
          this.toastr.success(
            'Destino guardado con exito',
            'Destino guardado exitosamente!'
          );
          this.form.reset();
        },
        error: (error) => {
          this.toastr.error(
            'No se pudo guardar el Destino',
            'Oops hubo un error!'
          );
        }
      });
    } else {
      this.toastr.error(
        'Debe completar todos los campos',
        'Oops campos nulos!'
      );
    }
  }
}
