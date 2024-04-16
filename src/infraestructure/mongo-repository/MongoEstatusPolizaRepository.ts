import { Collection, Document, ObjectId } from "mongodb";
import { EstatusPoliza } from "../../domain/entity/EstatusPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { MongoItemRepository } from "./MongoItemRepository";
import { collections } from "./MongoConnection"

export class MongoEstatusPolizaRepository extends MongoItemRepository<EstatusPoliza> implements ItemsRepository<EstatusPoliza>{
    getById(id: ObjectId): Promise<EstatusPoliza | null> {
        throw new Error("Method not implemented.");
    }
    protected getCollection(coleccion?: Collection<Document> | undefined): Collection<Document> {
        return collections.estatuspoliza!;
    }
    protected querykey: string = "EstatusPoliza";
    async save(items: EstatusPoliza): Promise<EstatusPoliza> {
        console.log(`MongoHeroeRepository save ${items}`);
        await this.getCollection().insertOne(items);
        return items;
    }
    async delete(items: EstatusPoliza): Promise<EstatusPoliza> {
        console.log(`MongoHeroeRepository delete ${items._id} ${items.EstatusPoliza}`);
        await this.getCollection().deleteOne(items);
        return items;
    }

}