import * as mongoDB from "mongodb";

import { Usuarios } from "../../domain/entity/Usuarios";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoUsuariosRepository extends MongoItemRepository<Usuarios> implements ItemsRepository<Usuarios>
{
  async updateById(id: mongoDB.BSON.ObjectId, usuarios: Usuarios): Promise<Usuarios|Error> {
    try{
      await this.getCollection().updateOne({_id:id}, {$set:usuarios});
      return usuarios;
    }catch(error){
      return {name:"Update usuario error", message:"Usuario no se actualizo correctamente"};
    }    
  }

  async delete(usuario: Usuarios): Promise<Usuarios> {
    await this.getCollection().deleteOne(usuario);
    return usuario;
  }

  async save(usuario: Usuarios): Promise<Usuarios> {
    await this.getCollection().insertOne(usuario);
    return usuario;
  }

  protected querykey = "Usuario";

  protected getCollection(
    coleccion?: mongoDB.Collection<mongoDB.BSON.Document> | undefined
  ): mongoDB.Collection<mongoDB.BSON.Document> {
    return collections.usuarios!;
  }  
}
