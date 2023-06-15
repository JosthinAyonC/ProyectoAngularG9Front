import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Bus } from 'src/app/models/Bus.model';

@Component({
  selector: 'app-editar-bus',
  templateUrl: './editar-bus.component.html',
  styleUrls: ['./editar-bus.component.css']
})
export class EditarBusComponent {
  bus!: Bus;//Bus recuperado para editar
  form!: FormGroup;
  id = localStorage.getItem('idBus');
  @Input() idBusAEditar!: Bus;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }


  readonlyMode: boolean = true;

  ngOnInit() {    
    
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      status: ['', Validators.required],
      roles: ['', Validators.required],
    });
  }

  volver() {
    localStorage.removeItem('idBus');//a mejorar
    this.router.navigate(['bus']);
  }
  toJson(value: any) {
    return JSON.stringify(value);
  }
  guardar() {
    
  }
}
