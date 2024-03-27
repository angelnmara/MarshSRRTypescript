import { Request, Response } from "express";

import { UsuariosService } from "../../application/service/UsuariosService";
import { UsuarioNotFound } from "../../tools/error/UsuarioNotFound";

export class UsuariosController {
  constructor(private readonly usuarioService: UsuariosService) {}
  async obtenerUsuarioPorId(req: Request, res: Response) {
    try {
      console.log(`Controller obtener usuario ${req.params.id}`);
      const usuario = await this.usuarioService.findById(req.params.id);
      res.status(200).send(usuario);
    } catch (error) {
      if (error instanceof UsuarioNotFound) {
        res.status(404).send();
      }
      return res.status(500).send();
    }
  }
  async guardarUsuario(req:Request, res:Response){
    try{
      console.log("guarda usuario controller");
      const usuario = await this.usuarioService.save(req.body);
      res.status(200).send(usuario);
    }catch(error){
      return res.status(500).send();
    }
  }
}
