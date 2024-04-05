import { Hero } from "../../domain/entity/Hero";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";

export class MongoHeroeRepository implements ItemsRepository<Hero> {
  async deleteById(id:string): Promise<number|undefined> {
    const heroMDB = await collections.hero?.deleteOne(
      { id: id }
    );
    console.log(heroMDB);
    return heroMDB?.deletedCount;
  }
  async delete(items: Hero): Promise<Hero> {
    console.log(`MongoHeroeRepository delete ${items.id} ${items.name}`);
    await collections.hero?.deleteOne(items);
    return items;
  }
  async getById(id: string): Promise<Hero | null> {
    const heroMDB = await collections.hero?.findOne<Hero>(
      { id: id },
      {
        sort: { id: -1 },
      }
    );
    console.log(heroMDB);
    return heroMDB!;
  }
  async save(items: Hero): Promise<Hero> {
    console.log(`MongoHeroeRepository save ${items}`);
    await collections.hero?.insertOne(items);
    return items;
  }
  async getAll(): Promise<Hero[]> {
    const hero = (await collections.hero
      ?.find({})
      .toArray()) as unknown as Hero[];
    return hero;
  }
}
