import { ObjectId } from "mongodb";

export interface Usuarios {
  _id?: ObjectId,
  Usuario: string,
  Nombre: string,
  Paterno: string,
  Materno: string,
  Habilitado: boolean,
  FechaRegistro: Date
}
