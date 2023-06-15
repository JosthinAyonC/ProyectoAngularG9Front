import { Usuario } from "./Usuario.model";
import { Viaje } from "./Viaje.model";

export interface Ticket {
    id?: number,
    id_viaje?: Viaje,
    id_usuario?: Usuario,
    observacion?: string,
    status?: string
}