import { Collection, Document } from "mongodb";
import { EstatusPoliza } from "../../domain/entity/EstatusPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { MongoItemRepository } from "./MongoItemRepository";
import { collections } from "./MongoConnection"

export class MongoEstatusPolizaRepository extends MongoItemRepository<EstatusPoliza> implements ItemsRepository<EstatusPoliza>{
    protected getCollection(coleccion?: Collection<Document> | undefined): Collection<Document> {
        return collections.estatuspoliza!;
    }
    protected querykey: string = "IdEstatusPoliza";
    async save(items: EstatusPoliza): Promise<EstatusPoliza> {
        console.log(`MongoHeroeRepository save ${items}`);
        await this.getCollection().insertOne(items);
        return items;
    }
    async delete(items: EstatusPoliza): Promise<EstatusPoliza> {
        console.log(`MongoHeroeRepository delete ${items.IdEstatusPoliza} ${items.EstatusPoliza}`);
        await this.getCollection().deleteOne(items);
        return items;
    }

}