import { Usuarios } from "../../domain/entity/Usuarios";
import { UsuariosRepository } from "../../domain/repository/UsuariosRepository";

export class MongoUsuariosRepository implements UsuariosRepository {
  async getById(id: string): Promise<Usuarios | null> {
    throw new Error("Method not implemented.");
  }
  save(usuarios: Usuarios): Promise<Usuarios> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<Usuarios[]> {
    throw new Error("Method not implemented.");
  }
}
