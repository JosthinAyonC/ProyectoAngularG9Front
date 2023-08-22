import { Usuario } from "./Usuario.model";
import { Viaje } from "./Viaje.model";

export interface Ticket {
    id?: number,
    idViaje?: Viaje,
    idUsuario?: Usuario,
    observacion?: string,
    status?: string
}