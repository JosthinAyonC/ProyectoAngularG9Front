import { Bus } from "./Bus.model";

export interface Viaje {
    id?: number,
    destino?: string,
    fecha?: Date,
    observacion?: string,
    precio?: number,
    status?: string,
    bus?: Bus
}