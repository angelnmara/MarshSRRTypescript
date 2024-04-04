import { TiposPolizaService } from "../application/service/TiposPolizaService";
import { UsuariosService } from "../application/service/UsuariosService";
import { TiposPolizaController } from "./controller/TiposPolizaController";
import { UsuariosController } from "./controller/UsuariosController";
import { MongoTiposPolizaRepository } from "./mongo-repository/MongoTiposPolizaRepository";
import { MongoUsuariosRepository } from "./mongo-repository/MongoUsuariosRepository";

const mongoUsuariosRepository = new MongoUsuariosRepository();
const usuariosService = new UsuariosService(mongoUsuariosRepository);
export const usuariosController = new UsuariosController(usuariosService);

const mongoTiposPolizaRepository = new MongoTiposPolizaRepository();
const tiposPolizaService = new TiposPolizaService(mongoTiposPolizaRepository);
export const tiposPolizaController = new TiposPolizaController(
  tiposPolizaService
);
