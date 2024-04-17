import { Collection, Document, ObjectId } from "mongodb";
import { Hero } from "../../domain/entity/Hero";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoHeroeRepository extends MongoItemRepository<Hero> implements ItemsRepository<Hero> {
  async updateById(id: ObjectId, hero: Hero): Promise<Hero|Error> {
    try {
      console.log(`MongoHeroeRepository update by id ${id} ${hero}`);
      await this.getCollection().updateOne({ _id: id }, { $set:hero });
      return hero;
    } catch (error) {
      console.log(error);
      return {name:"Update hero error", message:"Hero no se actualizo correctamente"};
    }
  }
  async delete(hero: Hero): Promise<Hero> {
    console.log(`MongoHeroeRepository delete ${hero.name}`);
    await this.getCollection().deleteOne(hero);
    return hero;
  }

  async save(hero: Hero): Promise<Hero> {
    console.log(`MongoHeroeRepository save ${hero}`);
    await this.getCollection().insertOne(hero);
    return hero;
  }
  protected querykey = "name";

  protected getCollection(
    coleccion?: Collection<Document> | undefined
  ): Collection<Document> {
    return collections.hero!;
  }
}