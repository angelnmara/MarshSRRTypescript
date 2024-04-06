import { Request, Response } from "express";

import { ItemsService } from "../../application/service/ItemsService";
import { TiposPoliza } from "../../domain/entity/TiposPoliza";
import { ItemsController } from "./ItemsController";

export class TiposPolizaController extends ItemsController<TiposPoliza> {
  constructor(
    private readonly itemsServiceResponse: ItemsService<TiposPoliza>
  ) {
    super(itemsServiceResponse);
  }
  get() {
    this.itemsServiceResponse.findAll();
  }
}
