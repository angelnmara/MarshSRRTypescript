import { Usuarios } from "../../domain/entity/Usuarios";
import { UsuariosRepository } from "../../domain/repository/UsuariosRepository";
import { UsuarioNotFound } from "../../tools/error/UsuarioNotFound";

export class UsuariosService {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}
  async findById(id: string): Promise<Usuarios> {
    console.log("service busca usuario  por id");
    const usuarios = await this.usuariosRepository.getById(id);
    if (!usuarios) {
      throw new UsuarioNotFound(id);
    }
    return usuarios;
  }
  async save(usuarios:Usuarios):Promise<Usuarios>{
    console.log('servicio guarda usuario')
    const usuarioguardado = await this.usuariosRepository.save(usuarios);
    if(!usuarios){
      throw new UsuarioNotFound("1");
    }
    return usuarioguardado;
  }
}
