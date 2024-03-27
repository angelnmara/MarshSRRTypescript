import { Polizas } from "./Polizas";

export class ArchivosPoliza {
  constructor(
    readonly Poliza: Polizas,
    readonly IdArchivoPoliza: number,
    readonly Archivo: string,
    readonly Habilitado: string
  ) {}
}
