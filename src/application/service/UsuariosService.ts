import { Usuarios } from "../../domain/entity/Usuarios";
import { UsuariosRepository } from "../../domain/repository/UsuariosRepository";
import { UsuarioNotFound } from "../../tools/error/UsuarioNotFound";

export class UsuariosService {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}
  async findById(id: string): Promise<Usuarios> {
    console.log("service");
    const usuarios = await this.usuariosRepository.getById(id);
    if (!usuarios) {
      throw new UsuarioNotFound(id);
    }
    return usuarios;
  }
}
