import { ObjectId } from "mongodb";

export interface ItemsRepository<T> {
  getByField(id: string): Promise<T | null>;
  save(items: T): Promise<T>;
  getAll(): Promise<Array<T>>;
  delete(itemObject:Object): Promise<number>;
  deleteById(id: ObjectId): Promise<number | undefined>;
  getById(id:ObjectId): Promise<T | null>
  updateById(id:ObjectId, itemObject:Object):Promise<Object|Error>
}
