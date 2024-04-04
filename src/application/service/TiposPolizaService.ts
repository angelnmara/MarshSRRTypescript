import { TiposPoliza } from "../../domain/entity/TiposPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { ItemsService } from "./ItemsService";

export class TiposPolizaService extends ItemsService<TiposPoliza> {
  constructor(private readonly itemrepo: ItemsRepository<TiposPoliza>) {
    super(itemrepo)
  }
  get(){
    this.itemrepo.getAll();
  }
}
