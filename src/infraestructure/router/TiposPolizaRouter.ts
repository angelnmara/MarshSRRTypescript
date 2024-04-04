import express from "express";

import { tiposPolizaController } from "../dependencies";

const usuariosRouter = express.Router();

usuariosRouter.get(
  "/:id",
  tiposPolizaController.obtenerTipoPolizaPorId.bind(tiposPolizaController)
);

usuariosRouter.post(
  "",
  tiposPolizaController.guardarTipoPoliza.bind(tiposPolizaController)
);

usuariosRouter.get(
  "",
  tiposPolizaController.obtenerTiposPolizaTodos.bind(tiposPolizaController)
);

export { usuariosRouter };
