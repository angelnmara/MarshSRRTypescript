import { TiposPoliza } from "../../domain/entity/TiposPoliza";
import { TiposPolizaRepository } from "../../domain/repository/TiposPolizaRepository";
import { collections } from "./MongoConnection";

export class MongoTiposPolizaRepository implements TiposPolizaRepository{
    async getById(id: string): Promise<TiposPoliza | null> {
        const query = {IdUsuario: id}
        const tipospoliza = (await collections.tipospoliza?.findOne(query)) as unknown as TiposPoliza
        return tipospoliza;
    }
    async save(tiposPoliza: TiposPoliza): Promise<TiposPoliza> {
        const tiposPolizaresult = (await collections.tipospoliza?.insertOne(tiposPoliza)) as unknown as TiposPoliza
        return tiposPolizaresult;
    }
    async getAll(): Promise<TiposPoliza[]> {
        const tiposplizaresultlist = (await collections.tipospoliza
            ?.find({})
            .toArray()) as unknown as TiposPoliza[]
        return tiposplizaresultlist;
    }
}