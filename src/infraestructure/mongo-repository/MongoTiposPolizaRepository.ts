import { TiposPoliza } from "../../domain/entity/TiposPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";

export class MongoTiposPolizaRepository implements ItemsRepository<TiposPoliza> {
  async getById(id: string): Promise<TiposPoliza | null> {    
    const tipospolizaMDB = await collections.tipospoliza?.findOne<TiposPoliza>(
      { IdTipoPoliza: id },
      {
        sort: { IdTipoPoliza: -1 },
      }      
    );
    console.log(`tipos poliza regresados por mongo ${tipospolizaMDB}`);
    return tipospolizaMDB!;
  }
  async save(tiposPoliza: TiposPoliza): Promise<TiposPoliza> {
    await collections.tipospoliza?.insertOne(tiposPoliza);
    return tiposPoliza;
  }
  async getAll(): Promise<TiposPoliza[]> {
    const tiposplizaresultlist = (await collections.tipospoliza
      ?.find({})
      .toArray()) as unknown as TiposPoliza[];
    console.log(`tipos poliza regresados por mongo ${tiposplizaresultlist}`);
    return tiposplizaresultlist;
  }
}
