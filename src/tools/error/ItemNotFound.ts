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
