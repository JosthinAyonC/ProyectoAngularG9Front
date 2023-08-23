import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/models/Ticket.model';
import { TicketDto } from 'src/app/models/TicketDto';
import { Viaje } from 'src/app/models/Viaje.model';
import { DestinoService } from 'src/app/services/destino.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css'],
})
export class DestinosComponent {
  viajeSeleccionado!: Viaje;
  viajeIdSeleccionado!: number;
  viajeString: string = 'Esta seguro que desea eliminar este viaje?';
  isAdmin: boolean = false;
  page: number = 0;
  totalPages?: Array<number>;
  viajes: Viaje[] = [];

  constructor(
    private router: Router,
    private viajeService: DestinoService,
    private usuarioService: UsuarioService,
    private ticketService: TicketService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.listarViajes();
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
    this.viajeService.getViajes().subscribe({
      next: (viajes) => {
        this.viajes = viajes;
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }

  delete(id: number) {
    this.viajeService.deleteViaje(id).subscribe({
      next: () => {
        this.toastr.success('Viaje eliminado', 'Exito');
        this.listarViajes();
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }

  obtenerViaje(viaje: Viaje) {
    this.viajeSeleccionado = viaje;
  }

  comprarBoleto(viaje: Viaje) {
    this.viajeSeleccionado = viaje;
  }

  obtenerViajeId(viaje: Viaje) {
    localStorage.setItem('idViaje', viaje.id!.toString());
    this.router.navigate(['viaje/editar']);
  }

  onViajeGuardado(viaje: Viaje) {
    this.listarViajes();
  }

  comprarBoleta(cedula: String) {
    this.usuarioService.getUsuarioByCedula(cedula).subscribe({
      next: (usuario) => {
        const ticket: TicketDto = {
          idViaje: this.viajeSeleccionado.id,
          idUsuario: usuario.id,
          observacion:
            'Boleto con destino a ' +
            this.viajeSeleccionado.destino +
            ' con fecha ' +
            this.viajeSeleccionado.fecha +
            ' y precio de ' +
            this.viajeSeleccionado.precio,
          status: 'A',
        };
        this.ticketService.postTicket(ticket).subscribe({
          next: (data:any) => {
            this.toastr.success(
              'Boleto comprado con exito',
              data.message
            );
          },
          error: (error) => {
            this.toastr.error(error.error.message, 'Error');
          },
        });
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
      complete: () => {},
    });
  }
}
