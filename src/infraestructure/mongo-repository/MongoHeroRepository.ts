import { Collection, Document } from "mongodb";

import { Hero } from "../../domain/entity/Hero";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";
import { MongoItemRepository } from "./MongoItemRepository";

export class MongoHeroeRepository
  extends MongoItemRepository<Hero>
  implements ItemsRepository<Hero>
{
  protected getCollection(
    coleccion?: Collection<Document> | undefined
  ): Collection<Document> {
    return collections.hero!;
  }
  protected querykey = "id";

  async delete(items: Hero): Promise<Hero> {
    console.log(`MongoHeroeRepository delete ${items.id} ${items.name}`);
    await this.getCollection().deleteOne(items);
    return items;
  }

  async save(items: Hero): Promise<Hero> {
    console.log(`MongoHeroeRepository save ${items}`);
    await this.getCollection().insertOne(items);
    return items;
  }
}
