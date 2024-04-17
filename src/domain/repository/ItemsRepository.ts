import { ObjectId } from "mongodb";

export interface ItemsRepository<T> {
  getByField(id: string): Promise<T | null>;
  save(items: T): Promise<T>;
  getAll(): Promise<Array<T>>;
  delete(items: T): Promise<T>;
  deleteById(id: ObjectId): Promise<number | undefined>;
  getById(id:ObjectId): Promise<T | null>
  updateById(id:ObjectId, items:T):Promise<T|Error>
}
