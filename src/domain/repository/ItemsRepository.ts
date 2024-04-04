export interface ItemsRepository<T> {
  getById(id: string): Promise<T | null>;
  save(items: T): Promise<T>;
  getAll(): Promise<Array<T>>;
}