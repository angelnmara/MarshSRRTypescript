import { UsuariosService } from "../application/service/UsuariosService";
import { UsuariosController } from "./controller/UsuariosController";
import { MongoUsuariosRepository } from "./mongo-repository/MongoUsuariosRepository";

const mongoUsuariosRepository = new MongoUsuariosRepository;
const usuariosService = new UsuariosService(mongoUsuariosRepository);
export const usuariosController = new UsuariosController(usuariosService);
