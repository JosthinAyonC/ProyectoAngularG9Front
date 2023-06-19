import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Viaje } from 'src/app/models/Viaje.model';


@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent {
  viajeSeleccionado!: Viaje;
  viajeIdSeleccionado!: number;
  viajeString: string = 'Esta seguro que desea eliminar este viaje?';
  isAdmin: boolean = false;
  page: number = 0;
  totalPages?: Array<number>;
  viajes: Viaje[] = [
    {
      id: 1,
      destino: 'Montanita',
      precio: 18.78,
      observacion: 'Viaje desde gye a Montanita.',
      fecha: new Date('2023-07-21'),
    },
    {
      id: 2,
      destino: 'Banos',
      precio: 35.78,
      observacion: 'Viaje desde gye a Banos con desayuno incluido.',
      fecha: new Date('2023-08-01'),
    },

  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  lastPage() {
    this.page--;
    this.listarViajes();
  }

  nextPage() {
    this.page++;
    this.listarViajes();
  }
  
  setpage(page: number): void {
    this.page = page;
    this.listarViajes();
  }

  listarViajes() {
    
  }

  delete(id: number) {
    
  }

  obtenerViaje(viaje: Viaje) {
    this.viajeSeleccionado = viaje;
  }

  obtenerViajeId(viaje: Viaje) {
    localStorage.setItem('idViaje', viaje.id!.toString());
    this.router.navigate(['viaje/editar']);
  }

  onViajeGuardado(viaje: Viaje) {
    this.viajes.unshift(viaje);
  }

}


