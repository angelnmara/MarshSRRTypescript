import express from "express";

import { usuariosController } from "../dependencies";

const usuariosRouter = express.Router();

usuariosRouter.get("/:id", usuariosController.obtenerItemPorField.bind(usuariosController));

usuariosRouter.post("", usuariosController.guardarItem.bind(usuariosController));

usuariosRouter.get("", usuariosController.obtenerTodos.bind(usuariosController));

usuariosRouter.delete("", usuariosController.borraItem.bind(usuariosController));

usuariosRouter.delete("/:id", usuariosController.borraItemById.bind(usuariosController));

usuariosRouter.put("/:id", usuariosController.updateItemById.bind(usuariosController));

export { usuariosRouter };
