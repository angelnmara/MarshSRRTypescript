import { Request, Response } from "express";

import { ItemsService } from "../../application/service/ItemsService";
import { Usuarios } from "../../domain/entity/Usuarios";
import { ItemsController } from "./ItemsController";

export class UsuariosController extends ItemsController<Usuarios> {
  constructor(private readonly itemServiceResponse: ItemsService<Usuarios>) {
    super(itemServiceResponse);
  }
  get() {
    this.itemServiceResponse.findAll();
  }  
}
