import { Hero } from "../../domain/entity/hero";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { ItemsService } from "./ItemsService";

export class HeroService extends ItemsService<Hero> {
  constructor(private readonly itemrepo: ItemsRepository<Hero>) {
    super(itemrepo);
  }
  get() {
    this.itemrepo.getAll();
  }
}
