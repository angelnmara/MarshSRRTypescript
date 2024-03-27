import { Polizas } from "../entity/Polizas";

export interface PolizasRepository {
  getById(id: string): Promise<Polizas>;
  save(polizas: Polizas): Promise<Polizas>;
  getAll(): Promise<Array<Polizas>>;
}
