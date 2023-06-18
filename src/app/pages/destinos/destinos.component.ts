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
  viajeString: string = 'viaje';
  isAdmin: boolean = false;
  page: number = 0;
  totalPages?: Array<number>;
  viajes: Viaje[] = [
    {
      id: 1,
      origen: 'Mucho Lote',
      destino: 'Av. Delta',
      ida: '18-02-2024',
      vuelta: '18-02-2024',
    },
    {
      id: 2,
      origen: 'Sauces 9',
      destino: 'Alborada',
      ida: '25-06-2023',
      vuelta: '26-06-2023',
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


