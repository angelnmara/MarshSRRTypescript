import { ItemsService } from "../../application/service/ItemsService";
import { Hero } from "../../domain/entity/Hero";
import { ItemsController } from "./ItemsController";

export class HeroController extends ItemsController<Hero> {
  constructor(private readonly itemServiceResponse: ItemsService<Hero>) {
    super(itemServiceResponse);
  }
  get() {
    this.itemServiceResponse.findAll();
  }
}
