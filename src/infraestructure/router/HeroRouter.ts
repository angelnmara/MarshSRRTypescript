import express from "express";

import { heroController } from "../dependencies";

const heroRouter = express.Router();

heroRouter.get("/:id", heroController.obtenerHeroePorId.bind(heroController));

heroRouter.post("", heroController.guardarHeroe.bind(heroController));

heroRouter.get("", heroController.obtenerHeroesTodos.bind(heroController));

heroRouter.delete("", heroController.borraHeroe.bind(heroController))

heroRouter.delete("/:id", heroController.borraHeroeById.bind(heroController))

export { heroRouter };
