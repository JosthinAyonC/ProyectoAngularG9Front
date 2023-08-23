import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Viaje } from 'src/app/models/Viaje.model';
import { DestinoService } from '../../../services/destino.service';

@Component({
  selector: 'app-editar-destino',
  templateUrl: './editar-destino.component.html',
  styleUrls: ['./editar-destino.component.css'],
})
export class EditarDestinoComponent {
  viaje!: Viaje; //Usuario recuperado para editar
  form!: FormGroup;
  @Input() idViajeAEditar!: Viaje;
  id = localStorage.getItem('idViaje');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private destinoService: DestinoService
  ) {}

  readonlyMode: boolean = true;

  ngOnInit() {
    this.obtenerViaje();

    this.form = this.formBuilder.group({
      destino: ['', Validators.required],
      observacion: ['', Validators.required],
      fecha: [Date, Validators.required],
      precio: ['', Validators.required],
    });
  }
  obtenerViaje() {
    const id = +this.id!;
    this.destinoService.getViaje(id).subscribe({
      next: (viaje: Viaje) => {
        this.viaje = viaje;
        this.setupForm();
      },
      error: (error: any) => {
        this.toastr.error(error.message);
        this.router.navigate(['destinos']);
      },
    });
  }

  setupForm() {
    this.form = this.formBuilder.group({
      destino: this.viaje.destino,
      observacion: this.viaje.observacion,
      fecha: this.viaje.fecha, 
      precio: this.viaje.precio,
    });
  }

  volver() {
    localStorage.removeItem('idViaje'); //a mejorar
    this.router.navigate(['viaje']);
  }
  toJson(value: any) {
    return JSON.stringify(value);
  }
  guardar() {
    const viaje: Viaje = {
      destino: this.form.value.destino,
      observacion: this.form.value.observacion,
      fecha: this.form.value.fecha,
      precio: this.form.value.precio,
    };
    
    this.destinoService.putViaje(viaje, Number(this.id)).subscribe({
      next: (data: any) => {
        this.toastr.success(data.message);
        this.router.navigate(['destinos']);
      },
      error: (error: any) => {
        this.toastr.error(error.message);
      },
    });
  }
}
