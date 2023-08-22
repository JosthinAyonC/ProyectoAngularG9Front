import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environment.development';
import { Ticket } from '../models/Ticket.model';
import { TicketDto } from '../models/TicketDto';


const apiUrlTickets = environments.apiUrl + '/Tickets';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get<Ticket[]>(`${apiUrlTickets}`);
  }
  getTicket(id: number) {
    return this.http.get<Ticket>(`${apiUrlTickets}/${id}`);
  }
  getTicketsByCedula(id: String) {
    return this.http.get<Ticket[]>(`${apiUrlTickets}/usuario/${id}`);
  }
  postTicket(Ticket: TicketDto) {
    return this.http.post<Ticket>(`${apiUrlTickets}`, Ticket);
  }
  putTicket(Ticket: Ticket, id: number) {
    return this.http.put<Ticket>(`${apiUrlTickets}/${id}`, Ticket);
  }
  deleteTicket(id: number) {
    return this.http.put<Ticket>(`${apiUrlTickets}/eliminar/${id}`, null);
  }
}
