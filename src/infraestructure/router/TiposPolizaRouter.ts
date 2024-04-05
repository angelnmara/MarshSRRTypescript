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
  tiposPolizaController.obtenerTipoPolizaTodos.bind(tiposPolizaController)
);

tipospolizaRouter.delete(
  "",
  tiposPolizaController.borraTipoPoliza.bind(tiposPolizaController)
);

tipospolizaRouter.delete(
  "/:id",
  tiposPolizaController.borraTipoPolizaById.bind(tiposPolizaController)
);

export { tipospolizaRouter };
