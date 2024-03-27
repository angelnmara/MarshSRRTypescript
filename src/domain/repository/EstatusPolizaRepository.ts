import { EstatusPoliza } from "../entity/EstatusPoliza";

export interface EstatusPolizasRepository {
  getById(id: string): Promise<EstatusPoliza | null>;
  save(estatusPoliza: EstatusPoliza): Promise<EstatusPoliza>;
  getAll(): Promise<Array<EstatusPoliza>>;
}
