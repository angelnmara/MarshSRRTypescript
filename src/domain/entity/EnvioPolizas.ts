import { PlantillasCorreo } from "./PlantillasCorreo";
import { Polizas } from "./Polizas";
import { Usuarios } from "./Usuarios";

export class EnvioPolizas {
  constructor(
    readonly Poliza: Polizas,
    readonly IdEnvioPoliza: number,
    readonly PlantillaCorreo: PlantillasCorreo,
    readonly Usuario: Usuarios,
    readonly FechaEnvio: Date
  ) {}
}
