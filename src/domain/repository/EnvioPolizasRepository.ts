import { EnvioPolizas } from "../entity/EnvioPolizas";

export interface EnvioPolizasRepository {
  getById(id: string): Promise<EnvioPolizas | null>;
  save(envioPolizas: EnvioPolizas): Promise<EnvioPolizas>;
  getAll(): Promise<Array<EnvioPolizas>>;
}
