import { Bus } from "./Bus.model";
import { Ticket } from "./Ticket.model";
import { Usuario } from "./Usuario.model";

export interface Viaje {
    id?: number,
    id_bus?: Bus,
    fecha?: string,
    observacion?: string,
    precio?: number,
    status?: string
}