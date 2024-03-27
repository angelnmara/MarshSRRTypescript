export class UsuarioNotFound extends Error {
  constructor(id: string) {
    super(`User not found ${id}`);
  }
}
