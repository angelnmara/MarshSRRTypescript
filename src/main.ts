import "./shared/infrastructure/load-env-vars";

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import { heroRouter } from "./infraestructure/router/HeroRouter";
import { tipospolizaRouter } from "./infraestructure/router/TiposPolizaRouter";
import { usuariosRouter } from "./infraestructure/router/UsuariosRouter";
import { config } from "./shared/infrastructure/config";
import { userRouter } from "./users/infrastructure/rest-api/user-router";
import { estatuspolizaRouter } from "./infraestructure/router/EstatusPolizaRouter";

function bootstrap() {
  const app = express();

  app.use(cors());

  app.use(bodyParser.json());
  app.use("/users", userRouter);
  app.use("/usuarios", usuariosRouter);
  app.use("/tipospoliza", tipospolizaRouter);
  app.use("/hero", heroRouter);
  app.use("/estatuspoliza", estatuspolizaRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

bootstrap();
