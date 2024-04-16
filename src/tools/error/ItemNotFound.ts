import { ObjectId } from "mongodb";

export class UsuarioNotFound extends Error {
  constructor(id: string) {
    super(`Usuario no encontrado ${id}`);
  }
}

export class TiposPolizaNotFound extends Error {
  constructor(id: string) {
    super(`Tipos poliza no encontrado ${id}`);
  }
}

export class ItemNotFound extends Error {
  constructor(id: string) {
    super(`Tipos poliza no encontrado ${id}`);
  }
}

export class ItemNotFoundById extends Error {
  constructor(id: ObjectId) {
    super(`Tipos poliza no encontrado ${id}`);
  }
}

export class ItemNotSave extends Error {
  constructor() {
    super(`Item no guardado`);
  }
}
