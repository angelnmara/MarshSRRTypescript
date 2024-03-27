import { Usuarios } from "../entity/Usuarios";

export interface UsuariosRepository {
  getById(id: string): Promise<Usuarios | null>;
  save(usuarios: Usuarios): Promise<Usuarios>;
  getAll(): Promise<Array<Usuarios>>;
}
