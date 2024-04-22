import { Collection, ObjectId } from "mongodb";


export abstract class MongoItemRepository<T> {

  protected abstract getCollection(
    coleccion?: Collection
  ): Collection;

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

  async deleteById(id: ObjectId): Promise<number | undefined> {
    console.log(`MongoUsuariosRepository ${id}`);
    const itemMDB = await this.getCollection().deleteOne({
      _id: id,
    });
    console.log(`MongoUsuariosRepository resp ${itemMDB?.deletedCount}`);
    return itemMDB?.deletedCount;
  }

  async delete(itemObject: Object): Promise<number> {
    const itemMDB = await this.getCollection().deleteMany(itemObject);
    return itemMDB.deletedCount;
  }

  async getById(id: ObjectId): Promise<T> {
    return await this.getCollection().findOne({ _id: id }) as T
  }

  async updateById(id: ObjectId, itemObject: Object): Promise<Object | Error> {
    await this.getCollection().updateOne({ _id: id }, { $set: itemObject });
    return itemObject;
  }
}
