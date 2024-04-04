import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { ItemNotFound } from "../../tools/error/ItemNotFound";

export abstract class ItemsService<T> {
  protected constructor(private readonly itemsRepository: ItemsRepository<T>) {}
  async findById(id: string): Promise<T> {
    console.log("service busca item  por id");
    const usuarios = await this.itemsRepository.getById(id);
    if (!usuarios) {
      throw new ItemNotFound(id);
    }
    return usuarios;
  }
  async save(usuarios: T): Promise<T> {
    console.log("servicio guarda item");
    const usuarioguardado = await this.itemsRepository.save(usuarios);
    if (!usuarios) {
      throw new ItemNotFound("1");
    }
    return usuarioguardado;
  }
  async findAll(): Promise<T[]> {
    console.log("Servicio obtener todos los items");
    const todosUsuarios = await this.itemsRepository.getAll();
    return todosUsuarios;
  }
}
