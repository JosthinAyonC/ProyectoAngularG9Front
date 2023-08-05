import { Role } from './Role.model';

export interface Usuario {
    id?: number,
    username?: string,
    firstname?: string,
    lastname?: string,
    ci?: string,
    password?: string,
    status?: string
    roles?: Role[],
}