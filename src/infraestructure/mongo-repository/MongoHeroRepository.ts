import { Hero } from "../../domain/entity/Hero";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";

export class MongoHeroeRepository implements ItemsRepository<Hero> {
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
