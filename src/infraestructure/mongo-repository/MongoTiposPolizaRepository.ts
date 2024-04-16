import { Collection, Document, ObjectId } from "mongodb";
import { TiposPoliza } from "../../domain/entity/TiposPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoTiposPolizaRepository extends MongoItemRepository<TiposPoliza> implements ItemsRepository<TiposPoliza>
{
  async updateById(id: ObjectId, tiposPoliza: TiposPoliza): Promise<TiposPoliza> {
    await this.getCollection().updateOne({_id:id}, tiposPoliza);
    return tiposPoliza;
  }

  async delete(tipospoliza: TiposPoliza): Promise<TiposPoliza> {
    await this.getCollection().deleteOne(tipospoliza);
    return tipospoliza;
  }

  async save(tiposPoliza: TiposPoliza): Promise<TiposPoliza> {
    await this.getCollection().insertOne(tiposPoliza);
    return tiposPoliza;
  }

  protected getCollection(
    coleccion?: Collection<Document> | undefined
  ): Collection<Document> {
    return collections.tipospoliza!;
  }

  protected querykey = "IdTipoPoliza";
}
