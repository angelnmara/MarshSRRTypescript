import { Collection, Document } from "mongodb";
import { TiposPoliza } from "../../domain/entity/TiposPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoTiposPolizaRepository
  extends MongoItemRepository<TiposPoliza>
  implements ItemsRepository<TiposPoliza>
{  
  protected getCollection(
    coleccion?: Collection<Document> | undefined
  ): Collection<Document> {
    return collections.tipospoliza!;
  }

  protected querykey = "IdTipoPoliza";

  async delete(tipospoliza: TiposPoliza): Promise<TiposPoliza> {
    await this.getCollection().deleteOne(tipospoliza);
    return tipospoliza;
  }

  async save(tiposPoliza: TiposPoliza): Promise<TiposPoliza> {
    await this.getCollection().insertOne(tiposPoliza);
    return tiposPoliza;
  }
}
