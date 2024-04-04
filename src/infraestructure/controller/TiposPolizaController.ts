import { Request, Response } from "express";

import { TiposPolizaService } from "../../application/service/TiposPolizaService";
import { TiposPolizaNotFound } from "../../tools/error/ItemNotFound";

export class TiposPolizaController {
  constructor(private readonly tiposPolizaService: TiposPolizaService) {}
  async obtenerTipoPolizaPorId(req: Request, res: Response) {
    try {
      console.log("Controlador TipoPoliza obten poliza por id");
      const tipospoliza = this.tiposPolizaService.findById(req.params.id);
      res.status(200).send(tipospoliza);
    } catch (error) {
      if (error instanceof TiposPolizaNotFound) {
        res.status(404).send();
      }
      res.status(500).send();
    }
  }
  async guardarTipoPoliza(req: Request, res: Response) {
    try {
      console.log("controlador guarda tipo poliza");
      const tipospoliza = this.tiposPolizaService.save(req.body);
      res.status(200).send(tipospoliza);
    } catch (error) {
      res.status(500).send();
    }
  }
  async obtenerTiposPolizaTodos(req: Request, res: Response) {
    try {
      console.log("controlador muestra todas tipo poliza");
      const tipospolizalist = this.tiposPolizaService.findAll();
      res.status(200).send(tipospolizalist);
    } catch (error) {
      res.status(500).send();
    }
  }
}
