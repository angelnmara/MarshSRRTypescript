import * as mongoDB from "mongodb";

export class Colecciones {
  usuarios?: mongoDB.Collection;
  tipospoliza?: mongoDB.Collection;
  hero?: mongoDB.Collection;
}
