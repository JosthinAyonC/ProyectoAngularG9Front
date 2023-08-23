import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/models/Ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  ticketSeleccionado?: Ticket;
  ticketString: string = 'Seguro que desea cancelar su ticket';
  page: number = 0;
  totalPages?: Array<number>;
  tickets: Ticket[] = [];
  form!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cedula: ['', Validators.required],
    });
  }

  lastPage() {
    this.page--;
  }

  consultarMisTickets() {
    this.tickets = [];
    if (this.form.valid) {
      this.ticketService.getTicketsByCedula(this.form.value.cedula).subscribe({
        next: (tickets) => {
          this.tickets = tickets;
        },
        error: (error) => {
          this.toastr.error(error.error.message, 'Error');
        }
      });
    }else{
      this.toastr.error('Debe ingresar una cedula', 'Error');
    }
  }

  delete(id: number) {
    this.ticketService.deleteTicket(id).subscribe({
      next: () => {
        this.toastr.success('Ticket cancelado', 'Exito');
        this.consultarMisTickets();
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
  obtenerTicket(ticket: Ticket): void {
    this.ticketSeleccionado = ticket;
  }
}
