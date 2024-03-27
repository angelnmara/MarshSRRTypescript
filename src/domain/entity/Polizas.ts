import { EstatusPoliza } from "./EstatusPoliza";
import { TiposPoliza } from "./TiposPoliza";
import { Usuarios } from "./Usuarios";

export class Polizas {
  constructor(
    readonly IdPoliza: number,
    readonly NumPoliza: number,
    readonly CorreoDestinatario: string,
    readonly TipoPoliza: TiposPoliza,
    readonly EstatusPoliza: EstatusPoliza,
    readonly Usuario: Usuarios,
    readonly FechaActualizacion: Date
  ) {}
}
