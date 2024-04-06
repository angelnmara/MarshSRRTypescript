import { EstatusPolizaServices } from "../application/service/EstatusPolizaService";
import { HeroService } from "../application/service/HeroService";
import { TiposPolizaService } from "../application/service/TiposPolizaService";
import { UsuariosService } from "../application/service/UsuariosService";
import { EstatusPolizaController } from "./controller/EstatusPolizaController";
import { HeroController } from "./controller/HeroController";
import { TiposPolizaController } from "./controller/TiposPolizaController";
import { UsuariosController } from "./controller/UsuariosController";
import { MongoEstatusPolizaRepository } from "./mongo-repository/MongoEstatusPolizaRepository";
import { MongoHeroeRepository } from "./mongo-repository/MongoHeroRepository";
import { MongoTiposPolizaRepository } from "./mongo-repository/MongoTiposPolizaRepository";
import { MongoUsuariosRepository } from "./mongo-repository/MongoUsuariosRepository";

const mongoUsuariosRepository = new MongoUsuariosRepository();
const usuariosService = new UsuariosService(mongoUsuariosRepository);
export const usuariosController = new UsuariosController(usuariosService);

const mongoTiposPolizaRepository = new MongoTiposPolizaRepository();
const tiposPolizaService = new TiposPolizaService(mongoTiposPolizaRepository);
export const tiposPolizaController = new TiposPolizaController(tiposPolizaService);

const mongoHeroRepository = new MongoHeroeRepository();
const heroService = new HeroService(mongoHeroRepository);
export const heroController = new HeroController(heroService);

const mongoestatuspolizaRepository = new MongoEstatusPolizaRepository();
const estatuspolizaService = new EstatusPolizaServices(mongoestatuspolizaRepository);
export const estatuspolizaController = new EstatusPolizaController(estatuspolizaService);