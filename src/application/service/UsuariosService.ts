import { Usuarios } from "../../domain/entity/Usuarios";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { ItemsService } from "./ItemsService";

export class UsuariosService extends ItemsService<Usuarios> {
  constructor(private readonly itemrepo: ItemsRepository<Usuarios>) {
    super(itemrepo);
  }
  get() {
    this.itemrepo.getAll();
  }
}
