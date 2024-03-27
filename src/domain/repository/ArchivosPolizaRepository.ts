import { ArchivosPoliza } from "../entity/ArchivosPoliza";

export interface ArchivosPolizaRepository {
  getById(id: string): Promise<ArchivosPoliza>;
  save(archivosPoliza: ArchivosPoliza): Promise<ArchivosPoliza>;
  getAll(): Promise<Array<ArchivosPoliza>>;
}
