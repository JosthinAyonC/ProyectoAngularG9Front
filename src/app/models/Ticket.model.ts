import { Reservacion } from "./Reservacion.model";

export interface Ticket {
    id?: number,
    id_reservacion?: Reservacion,
    observacion?: string,
    status?: string
}