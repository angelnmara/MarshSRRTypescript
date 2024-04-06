export class Usuarios {
  constructor(    
    readonly IdUsuario: string,
    readonly Usuario: string,
    readonly Nombre: string,
    readonly Paterno: string,
    readonly Materno: string,
    readonly Habilitado: boolean,
    readonly FechaRegistro: Date
  ) {}
}
