import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Viaje } from 'src/app/models/Viaje.model';

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
    private toastr: ToastrService
  ) { }


  readonlyMode: boolean = true;

  ngOnInit() {    
    
    this.form = this.formBuilder.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      Fecha: ['', Validators.required],
      vuelta: ['', Validators.required],
      status: ['', Validators.required],
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
    
  }
}
