import { Bus } from "./Bus.model";
import { Ticket } from "./Ticket.model";
import { Usuario } from "./Usuario.model";

export interface Reservacion {
    id?: number,
    id_bus?: Bus,
    id_ticket?: Ticket[],
    id_usuario?: Usuario,
    fecha?: string,
    observacion?: string,
    status?: string
}