import { Collection, Document } from "mongodb";
import { Hero } from "../../domain/entity/Hero";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoHeroeRepository extends MongoItemRepository<Hero> implements ItemsRepository<Hero> {  
  // async delete(itemObject:Object): Promise<number> {
  //   console.log(`MongoHeroeRepository delete ${itemObject}`);
  //   const itemRes = await this.getCollection().deleteOne(itemObject);
  //   return itemRes.deletedCount;
  // }

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