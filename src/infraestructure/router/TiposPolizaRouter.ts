import express from "express";

import { tiposPolizaController } from "../dependencies";

const tipospolizaRouter = express.Router();

tipospolizaRouter.get(
  "/:id",
  tiposPolizaController.obtenerTipoPolizaPorId.bind(tiposPolizaController)
);

tipospolizaRouter.post(
  "",
  tiposPolizaController.guardarTipoPoliza.bind(tiposPolizaController)
);

tipospolizaRouter.get(
  "",
  tiposPolizaController.obtenerTiposPolizaTodos.bind(tiposPolizaController)
);

export { tipospolizaRouter };
