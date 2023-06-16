import { Usuario } from "./Usuario.model";

export interface Bus {
    id?: number,
    usuarios: Usuario[],
    capacidad?: number,
    model?: string,
    marca?: string,
    placa?: string,
    status?: string
}