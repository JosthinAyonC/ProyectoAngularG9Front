import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/models/Bus.model';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent {
  busSeleccionado!: Bus;
  busIdSeleccionado!: number;
  busString: string = 'Esta seguro que desea eliminar este bus?';
  isAdmin: boolean = false;
  page: number = 0;
  totalPages?: Array<number>;
  buses: Bus[] = [
    {
      id: 1,
      placa: 'ABC-123',
      model: '2019',
      marca: 'Mercedes Benz',
      capacidad: 50,
      status: 'A'
    },
    {
      id: 2,
      placa: 'GYE-123',
      model: '2012',
      marca: 'Volswagen',
      capacidad: 50,
      status: 'A'
    },

  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  lastPage() {
    this.page--;
    this.listarBuses();
  }

  nextPage() {
    this.page++;
    this.listarBuses();
  }
  
  setpage(page: number): void {
    this.page = page;
    this.listarBuses();
  }

  listarBuses() {
    
  }

  delete(id: number) {
    
  }

  obtenerBus(bus: Bus) {
    this.busSeleccionado = bus;
  }

  obtenerBusId(bus: Bus) {
    localStorage.setItem('idBus', bus.id!.toString());
    this.router.navigate(['bus/editar']);
  }

  onBusGuardado(bus: Bus) {
    this.buses.unshift(bus);
  }

}
