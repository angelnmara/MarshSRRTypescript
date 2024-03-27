import { Request, Response } from "express";

import { UsuariosService } from "../../application/service/UsuariosService";
import { UsuarioNotFound } from "../../tools/error/UsuarioNotFound";

export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}
  async usuario(req: Request, res: Response) {
    try {
      console.log(`Controller ${req.params.id}`);
      const usuario = await this.usuarioService.findById(req.params.id);
      res.status(200).send(usuario);
    } catch (error) {
      if (error instanceof UsuarioNotFound) {
        res.status(404).send();
      }
      return res.status(500).send();
    }
  }
}
