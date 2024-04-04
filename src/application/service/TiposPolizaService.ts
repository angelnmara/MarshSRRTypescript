import { TiposPoliza } from "../../domain/entity/TiposPoliza";
import { TiposPolizaRepository } from "../../domain/repository/TiposPolizaRepository";
import { TiposPolizaNotFound } from "../../tools/error/ItemNotFound";

export class TiposPolizaService {
  constructor(private readonly tiposPolizaRepository: TiposPolizaRepository) {}
  async findById(id: string): Promise<TiposPoliza> {
    console.log("servicio buscar por id tipospoliza");
    const tipospoliza = await this.tiposPolizaRepository.getById(id);
    if (!tipospoliza) {
      throw new TiposPolizaNotFound(id);
    }
    return tipospoliza;
  }
  async findAll(): Promise<TiposPoliza[]> {
    console.log("Serevicio puscar todos tipospoliza");
    const tipospolizalist = await this.tiposPolizaRepository.getAll();
    return tipospolizalist;
  }
  async save(tiposPoliza: TiposPoliza): Promise<TiposPoliza> {
    console.log("Servicio guarda tipos poliza");
    const tipospoliza = await this.tiposPolizaRepository.save(tiposPoliza);
    return tipospoliza;
  }
}
