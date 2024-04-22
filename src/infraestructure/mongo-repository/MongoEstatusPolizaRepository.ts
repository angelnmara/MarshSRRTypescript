import { Collection, Document } from "mongodb";
import { EstatusPoliza } from "../../domain/entity/EstatusPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { MongoItemRepository } from "./MongoItemRepository";
import { collections } from "./MongoConnection"

export class MongoEstatusPolizaRepository extends MongoItemRepository<EstatusPoliza> implements ItemsRepository<EstatusPoliza> {
    async save(estatusPoliza: EstatusPoliza): Promise<EstatusPoliza> {
        console.log(`MongoHeroeRepository save ${estatusPoliza}`);
        await this.getCollection().insertOne(estatusPoliza);
        return estatusPoliza;
    }
    // async delete(estatusPoliza: EstatusPoliza): Promise<EstatusPoliza> {
    //     console.log(`MongoHeroeRepository delete ${estatusPoliza._id} ${estatusPoliza.EstatusPoliza}`);
    //     await this.getCollection().deleteOne(estatusPoliza);
    //     return estatusPoliza;
    // }
    protected getCollection(coleccion?: Collection<Document> | undefined): Collection<Document> {
        return collections.estatuspoliza!;
    }
    protected querykey: string = "EstatusPoliza";    
}
