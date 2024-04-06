import express from "express";

import { heroController } from "../dependencies";

const heroRouter = express.Router();

heroRouter.get("/:id", heroController.obtenerItemPorId.bind(heroController));

heroRouter.post("", heroController.guardarItem.bind(heroController));

heroRouter.get("", heroController.obtenerTodos.bind(heroController));

heroRouter.delete("", heroController.borraItem.bind(heroController));

heroRouter.delete("/:id", heroController.borraItemById.bind(heroController));

export { heroRouter };
