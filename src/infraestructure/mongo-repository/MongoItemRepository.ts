import * as mongoDB from "mongodb";

export abstract class MongoItemRepository<T> {

  protected abstract getCollection(
    coleccion?: mongoDB.Collection
  ): mongoDB.Collection;

  protected abstract querykey: string;

  async getByField(id: string): Promise<T | null> {
    console.log(`MongoItemRepository selecciona un item ${id} querykey ${this.querykey}`);
    const itemMDB = await this.getCollection().findOne<T>(
      { [this.querykey]: id },
      { sort: { [this.querykey]: -1 } }
    );
    console.log(itemMDB);
    return itemMDB!;
  }

  async getAll(): Promise<T[]> {
    console.log(`MongoItemRepository selecciona todos`);
    const items = (await this.getCollection()
      ?.find({})
      .toArray()) as unknown as T[];
    return items;
  }
  
  async deleteById(id: string): Promise<number | undefined> {
    console.log(`MongoUsuariosRepository ${id}`);
    const itemMDB = await this.getCollection().deleteOne({
      [this.querykey]: id,
    });
    console.log(`MongoUsuariosRepository resp ${itemMDB?.deletedCount}`);
    return itemMDB?.deletedCount;
  }
}
