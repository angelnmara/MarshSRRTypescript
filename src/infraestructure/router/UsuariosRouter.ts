import express from "express";

import { usuariosController } from "../dependencies";

const usuariosRouter = express.Router();

usuariosRouter.get(
  "/:id",
  usuariosController.obtenerUsuarioPorId.bind(usuariosController)
);

usuariosRouter.post(
  "",
  usuariosController.guardarUsuario.bind(usuariosController)
);

usuariosRouter.get(
  "",
  usuariosController.obtenerUsuariosTodos.bind(usuariosController)
);

export { usuariosRouter };