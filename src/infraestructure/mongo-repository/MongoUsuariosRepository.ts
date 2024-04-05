import * as mongoDB from "mongodb";

import { Usuarios } from "../../domain/entity/Usuarios";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoUsuariosRepository
  extends MongoItemRepository<Usuarios>
  implements ItemsRepository<Usuarios>
{
  protected querykey = "IdUsuario";

  protected getCollection(
    coleccion?: mongoDB.Collection<mongoDB.BSON.Document> | undefined
  ): mongoDB.Collection<mongoDB.BSON.Document> {
    return collections.usuarios!;
  }

  async delete(items: Usuarios): Promise<Usuarios> {
    await this.getCollection().deleteOne(items);
    return items;
  }

  async save(usuarios: Usuarios): Promise<Usuarios> {
    await this.getCollection().insertOne(usuarios);
    return usuarios;
  }
}
