import { TiposPoliza } from "../../domain/entity/TiposPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";

export class MongoTiposPolizaRepository implements ItemsRepository<TiposPoliza> {
  async deleteById(id:string): Promise<number|undefined> {
    const tipospolizaMDB = await collections.tipospoliza?.deleteOne(
      { IdTipoPoliza: id }
    );
    console.log(tipospolizaMDB);
    return tipospolizaMDB?.deletedCount;
  }
  async delete(items: TiposPoliza): Promise<TiposPoliza> {
    await collections.tipospoliza?.deleteOne(items);
    return items;
  }
  async getById(id: string): Promise<TiposPoliza | null> {
    const itemsMDB = await collections.tipospoliza?.findOne<TiposPoliza>(
      { IdTipoPoliza: id },
      {
        sort: { IdTipoPoliza: -1 },
      }
    );
    console.log(itemsMDB);
    return itemsMDB!;
  }
  async save(tiposPoliza: TiposPoliza): Promise<TiposPoliza> {
    await collections.tipospoliza?.insertOne(tiposPoliza);
    return tiposPoliza;
  }
  async getAll(): Promise<TiposPoliza[]> {
    const items = (await collections.tipospoliza
      ?.find({})
      .toArray()) as unknown as TiposPoliza[];
    return items;
  }
}
