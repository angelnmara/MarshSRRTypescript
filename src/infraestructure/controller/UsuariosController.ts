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
  async obtenerUsuarioPorId(req: Request, res: Response) {
    this.obtenerItemPorId(req, res);
  }
  async obtenerUsuariosTodos(req: Request, res: Response) {
    this.obtenerTodos(req, res);
  }
  async guardarUsuario(req: Request, res: Response) {
    this.guardarItem(req, res);
  }
  async borraUsuario(req:Request, res:Response){
    this.borraItem(req, res);
  }
}
