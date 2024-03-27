import { Usuarios } from "../../domain/entity/Usuarios";
import { UsuariosRepository } from "../../domain/repository/UsuariosRepository";
import { collections } from "./MongoConnection";

export class MongoUsuariosRepository implements UsuariosRepository {
  async getById(id: string): Promise<Usuarios | null> {
    const usuarioMDB = await collections.usuarios?.findOne<Usuarios>(
      { IdUsuario: id },
      {
        sort: { IdUsuario: -1 },
      }
    );
    console.log(usuarioMDB);
    return usuarioMDB!;
  }
  async save(usuarios: Usuarios): Promise<Usuarios> {
    await collections.usuarios?.insertOne(usuarios);
    return usuarios;
  }
  async getAll(): Promise<Usuarios[]> {
    const usuarios = (await collections.usuarios
      ?.find({})
      .toArray()) as unknown as Usuarios[];
    return usuarios;
  }
}
