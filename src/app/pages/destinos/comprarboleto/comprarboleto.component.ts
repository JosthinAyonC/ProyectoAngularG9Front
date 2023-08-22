import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-comprarboleto',
  templateUrl: './comprarboleto.component.html',
  styleUrls: ['./comprarboleto.component.css']
})
export class ComprarboletoComponent {
  form!: FormGroup;
  @Output() emitidaCompra = new EventEmitter<String>();

  constructor( private formBuilder: FormBuilder,) {
  
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      cedula: ['', Validators.required],
    });
  }

  emitirCompra(){
    if (this.form.valid) {
      this.emitidaCompra.emit(this.form.value.cedula);
      this.form.reset();
    }
  }
}
