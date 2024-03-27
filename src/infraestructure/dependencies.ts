import { UsuariosService } from "../application/service/UsuariosService";
import { UsuariosController } from "./controller/UsuariosController";
import { FileUsuariosRepository } from "./mongo-repository/FileUsuariosRepository";

const mongoUsuariosRepository = new FileUsuariosRepository();
const usuariosService = new UsuariosService(mongoUsuariosRepository);
export const usuariosController = new UsuariosController(usuariosService);
