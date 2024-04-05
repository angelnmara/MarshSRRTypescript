import express from "express";

import { heroController } from "../dependencies";

const heroRouter = express.Router();

heroRouter.get(
  "/:id",
  heroController.obtenerHeroePorId.bind(heroController)
  //.obtenerUsuarioPorId.bind(usuariosController)
);

heroRouter.post("", heroController.guardarHeroe.bind(heroController));

heroRouter.get("", heroController.obtenerHeroesTodos.bind(heroController));

export { heroRouter };
