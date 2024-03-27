import express from "express";

import { usuariosController } from "../dependencies";

const usuariosRouter = express.Router();

usuariosRouter.post(
  "/:id/hola",
  usuariosController.usuario.bind(usuariosController)
);

export { usuariosRouter };
