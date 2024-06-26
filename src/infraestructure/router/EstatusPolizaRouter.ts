import express from "express";

import { estatuspolizaController } from "../dependencies";

const estatuspolizaRouter = express.Router();

estatuspolizaRouter.get("/:id", estatuspolizaController.obtenerItemPorField.bind(estatuspolizaController));

estatuspolizaRouter.post("", estatuspolizaController.guardarItem.bind(estatuspolizaController));

estatuspolizaRouter.get("", estatuspolizaController.obtenerTodos.bind(estatuspolizaController));

estatuspolizaRouter.delete("", estatuspolizaController.borraItem.bind(estatuspolizaController));

estatuspolizaRouter.delete("/:id", estatuspolizaController.borraItemById.bind(estatuspolizaController));

estatuspolizaRouter.put("/:id", estatuspolizaController.updateItemById.bind(estatuspolizaController));

export { estatuspolizaRouter };
