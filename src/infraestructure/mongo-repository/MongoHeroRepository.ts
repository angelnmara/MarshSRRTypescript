import { Collection, Document, ObjectId } from "mongodb";
import { Hero } from "../../domain/entity/Hero";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoHeroeRepository
  extends MongoItemRepository<Hero>
  implements ItemsRepository<Hero>
{
  protected querykey = "name";

  protected getCollection(
    coleccion?: Collection<Document> | undefined
  ): Collection<Document> {
    return collections.hero!;
  }

  async getById(id: ObjectId): Promise<Hero | null> {
    const itemMDB = await this.getCollection().findOne<Hero>(
      { _id: [id] });
    console.log(itemMDB);
    return itemMDB;
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
}