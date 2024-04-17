import express from "express";

import { tiposPolizaController } from "../dependencies";

const tipospolizaRouter = express.Router();

tipospolizaRouter.get("/:id", tiposPolizaController.obtenerItemPorField.bind(tiposPolizaController));

tipospolizaRouter.post("",tiposPolizaController.guardarItem.bind(tiposPolizaController));

tipospolizaRouter.get("", tiposPolizaController.obtenerTodos.bind(tiposPolizaController));

tipospolizaRouter.delete("", tiposPolizaController.borraItem.bind(tiposPolizaController));

tipospolizaRouter.delete("/:id", tiposPolizaController.borraItemById.bind(tiposPolizaController));

tipospolizaRouter.put("/:id", tiposPolizaController.updateItemById.bind(tiposPolizaController));

export { tipospolizaRouter };
