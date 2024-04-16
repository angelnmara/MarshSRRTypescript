import { ObjectId } from "mongodb";
import { Usuarios } from "../../domain/entity/Usuarios";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { USUARIOS_COLLECTION } from "../../tools/collections/UsuariosCollection";

export class FileUsuariosRepository implements ItemsRepository<Usuarios> {
  getById(id: ObjectId): Promise<Usuarios | null> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: string): Promise<number | undefined> {
    throw new Error("Method not implemented.");
  }
  delete(items: Usuarios): Promise<Usuarios> {
    throw new Error("Method not implemented.");
  }
  async getByField(id: string): Promise<Usuarios | null> {
    console.log("file repository find");
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
  async save(usuarios: Usuarios): Promise<Usuarios> {
    console.log("save repository file");
    USUARIOS_COLLECTION.push(usuarios);
    return usuarios;
  }
  getAll(): Promise<Usuarios[]> {
    throw new Error("Method not implemented.");
  }
}
