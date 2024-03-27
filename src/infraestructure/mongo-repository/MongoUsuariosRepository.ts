import { MongoClient } from "mongodb";
import { Usuarios } from "../../domain/entity/Usuarios";
import { UsuariosRepository } from "../../domain/repository/UsuariosRepository";

const uri = "mongodb+srv://angelnmara:sD7mLAZ0Bi0P0LPK@cluster0.0913r1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

const database = client.db("insertDB");
    // Specifying a Schema is optional, but it enables type hints on
    // finds and inserts
    const usuariosMDB = database.collection<Usuarios>("usuarios");

export class MongoUsuariosRepository implements UsuariosRepository {
  async getById(id: string): Promise<Usuarios | null> {
    const usuarioMDB = await usuariosMDB.findOne<Usuarios>({ IdUsuario: id }, {
        sort: { IdUsuario: -1 }
      });
    return usuarioMDB;
  }
  async save(usuarios: Usuarios): Promise<Usuarios> {
    await usuariosMDB.insertOne(usuarios);
    return usuarios;
  }
  getAll(): Promise<Usuarios[]> {
    throw new Error("Method not implemented.");
  }
}
