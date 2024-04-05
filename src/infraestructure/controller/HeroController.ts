import { Request, Response } from "express";

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
  async obtenerHeroePorId(req: Request, res: Response) {
    this.obtenerItemPorId(req, res);
  }
  async obtenerHeroesTodos(req: Request, res: Response) {
    this.obtenerTodos(req, res);
  }
  async guardarHeroe(req: Request, res: Response) {
    this.guardarItem(req, res);
  }
  async borraHeroe(req: Request, res: Response) {
    this.borraItem(req, res);
  }
  async borraHeroeById(req: Request, res: Response) {
    this.borraItemById(req, res);
  }
}
