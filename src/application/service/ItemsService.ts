import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { ItemNotFound, ItemNotSave } from "../../tools/error/ItemNotFound";

export abstract class ItemsService<T> {
  protected constructor(private readonly itemsRepository: ItemsRepository<T>) {}
  async findById(id: string): Promise<T> {
    console.log("service busca item  por id");
    const items = await this.itemsRepository.getById(id);
    console.log(`respuesta service item ${items}`);
    if (!items) {
      throw new ItemNotFound(id);
    }
    return items;
  }
  async save(item: T): Promise<T> {
    console.log("servicio guarda item");
    const itemGuardado = await this.itemsRepository.save(item);
    if (!item) {
      throw new ItemNotSave();
    }
    return itemGuardado;
  }
  async findAll(): Promise<T[]> {
    console.log("Servicio obtener todos los items");
    const todoItem = await this.itemsRepository.getAll();
    return todoItem;
  }
  async delete(item: T): Promise<T> {
    const itemBorrado = await this.itemsRepository.delete(item);
    return itemBorrado;
  }
  async deleteById(id: string): Promise<number | undefined> {
    const itemBorradoid = await this.itemsRepository.deleteById(id);
    return itemBorradoid;
  }
}
