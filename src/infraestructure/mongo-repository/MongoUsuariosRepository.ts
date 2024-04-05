import { Usuarios } from "../../domain/entity/Usuarios";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { collections } from "./MongoConnection";

export class MongoUsuariosRepository implements ItemsRepository<Usuarios> {
  async delete(items: Usuarios): Promise<Usuarios> {
    await collections.usuarios?.deleteOne(items);
    return items;
  }
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
