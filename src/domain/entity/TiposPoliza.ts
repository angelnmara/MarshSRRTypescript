import { ObjectId } from "mongodb";

export interface TiposPoliza {
  _id?: ObjectId,
  readonly TipoPoliza: string
}
