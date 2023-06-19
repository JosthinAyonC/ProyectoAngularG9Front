import { Bus } from "./Bus.model";
import { Ticket } from "./Ticket.model";
import { Usuario } from "./Usuario.model";

export interface Viaje {
    id?: number,
    destino?: string,
    fecha?: Date,
    observacion?: string,
    precio?: number,
    status?: string
}