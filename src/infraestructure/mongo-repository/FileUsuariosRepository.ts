import { Usuarios } from "../../domain/entity/Usuarios";
import { UsuariosRepository } from "../../domain/repository/UsuariosRepository";
import { USUARIOS_COLLECTION } from "../../tools/colletions/UsuariosColletion";

export class FileUsuariosRepository implements UsuariosRepository {
  async getById(id: string): Promise<Usuarios | null> {
    console.log("mongoreporitory");
    const usuarios = USUARIOS_COLLECTION.find(
      (usuarios) => usuarios.IdUsuario == id
    );
    return usuarios
      ? new Usuarios(
          usuarios.IdUsuario,
          usuarios.Usuario,
          usuarios.Nombre,
          usuarios.Paterno,
          usuarios.Materno,
          usuarios.Habilitado,
          usuarios.FechaRegistro
        )
      : null;
  }
  save(usuarios: Usuarios): Promise<Usuarios> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Usuarios[]> {
    throw new Error("Method not implemented.");
  }
}
