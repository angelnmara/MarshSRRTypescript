import { TiposPoliza } from "../entity/TiposPoliza";

export interface TiposPolizaRepository {
  getById(id: string): Promise<TiposPoliza | null>;
  save(tiposPoliza: TiposPoliza): Promise<TiposPoliza>;
  getAll(): Promise<Array<TiposPoliza>>;
}
