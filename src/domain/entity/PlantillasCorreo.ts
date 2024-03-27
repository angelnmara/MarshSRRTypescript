import { Usuarios } from "./Usuarios";

export class PlantillasCorreo {
  constructor(
    readonly IdPlantillaCorreo: number,
    readonly CuerpoCorreo: number,
    readonly Habilitado: boolean,
    readonly Usuario: Usuarios,
    readonly FechaActualizacion: Date
  ) {}
}
