import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/Ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  ticketSeleccionado?: Ticket;
  ticketString: string = 'Seguro que desea cancelar su ticket';
  page: number = 0;
  totalPages?: Array<number>;
  tickets: Ticket[] = [
    {
      id: 1,
      id_viaje:{
        id: 1,
        destino: 'Montanita',
        precio: 10.56,
        fecha: new Date('2023-07-21'),
      },
      observacion: 'Listo para partir',
      status: 'R',
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
  obtenerTicket(ticket:Ticket): void {

  }
}
