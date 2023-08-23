import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Viaje } from 'src/app/models/Viaje.model';
import {DestinoService} from "../../../services/destino.service";

@Component({
  selector: 'app-editar-destino',
  templateUrl: './editar-destino.component.html',
  styleUrls: ['./editar-destino.component.css']
})
export class EditarDestinoComponent {
  viaje!: Viaje;//Usuario recuperado para editar
  form!: FormGroup;
  @Input() idViajeAEditar!: Viaje;
  id = localStorage.getItem('idViaje');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private destinoService: DestinoService
  ) { }


  readonlyMode: boolean = true;

  ngOnInit() {
    const id = +this.id!;
    this.destinoService.getViaje(id).subscribe({
      next: (viaje: Viaje) => {
        this.viaje = viaje;
        this.setupForm();
      },
      error: (error: any) => {
        this.toastr.error(error.message);
        this.router.navigate(['destinos']);
      }
    });

    this.form = this.formBuilder.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      Fecha: ['', Validators.required],
      vuelta: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  setupForm() {
    this.form = this.formBuilder.group({
      destino: this.viaje.destino,
      observacion: this.viaje.observacion,
      precio: this.viaje.precio,
      ida: this.viaje.fecha,
    });
  }

  volver() {
    localStorage.removeItem('idViaje');//a mejorar
    this.router.navigate(['viaje']);
  }
  toJson(value: any) {
    return JSON.stringify(value);
  }
  guardar() {
    this.destinoService.putViaje(this.form.value, Number(this.id)).subscribe({
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
