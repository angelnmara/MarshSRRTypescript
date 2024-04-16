import * as mongoDB from "mongodb";

import { Usuarios } from "../../domain/entity/Usuarios";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoUsuariosRepository
  extends MongoItemRepository<Usuarios>
  implements ItemsRepository<Usuarios>
{
  async getById(id: mongoDB.ObjectId): Promise<Usuarios | null> {    
    //var newId = new mongoDB.ObjectId(id);    
    const itemMDB = await this.getCollection().findOne<Usuarios>(
      { _id: [id] });
    console.log(itemMDB);
    return itemMDB;
  }
  protected querykey = "IdUsuario";

  protected getCollection(
    coleccion?: mongoDB.Collection<mongoDB.BSON.Document> | undefined
  ): mongoDB.Collection<mongoDB.BSON.Document> {
    return collections.usuarios!;
  }

  async delete(usuario: Usuarios): Promise<Usuarios> {
    await this.getCollection().deleteOne(usuario);
    return usuario;
  }

  async save(usuario: Usuarios): Promise<Usuarios> {
    await this.getCollection().insertOne(usuario);
    return usuario;
  }
}
