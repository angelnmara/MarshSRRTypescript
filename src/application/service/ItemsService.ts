import { ObjectId } from "mongodb";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { ItemNotFound, ItemNotFoundById, ItemNotSave } from "../../tools/error/ItemNotFound";

export abstract class ItemsService<T> {
  protected constructor(private readonly itemsRepository: ItemsRepository<T>) {}

  async findByField(id: string): Promise<T> {
    console.log("service busca item  por id");
    const items = await this.itemsRepository.getByField(id);
    console.log(`respuesta service item ${items}`);
    if (!items) {
      throw new ItemNotFound(id);
    }
    return items;
  }

  async findById(id: ObjectId): Promise<T> {
    console.log("service busca item  por id");
    const items = await this.itemsRepository.getById(id);
    console.log(`respuesta service item ${items}`);
    if (!items) {
      throw new ItemNotFoundById(id);
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

  async delete(itemObject:Object): Promise<number> {
    const itemBorrado = await this.itemsRepository.delete(itemObject);
    return itemBorrado;
  }

  async deleteById(id: ObjectId): Promise<number | undefined> {
    const itemBorradoid = await this.itemsRepository.deleteById(id);
    return itemBorradoid;
  }

  async updateById(id:ObjectId, itemObject:Object): Promise<Object|Error>{
    console.log('UpdateById itemService')
    const itemActualizado = await this.itemsRepository.updateById(id, itemObject);
    return itemActualizado;
  }

}
