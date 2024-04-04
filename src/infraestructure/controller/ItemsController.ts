import { Request, Response } from "express";
import { ItemsService } from "../../application/service/ItemsService";
import { ItemNotFound } from "../../tools/error/ItemNotFound";

export abstract class ItemsController<T>{    
    constructor(private readonly itemService:ItemsService<T>){}
    async obtenerTipoPolizaPorId(req: Request, res: Response) {
        try {
          console.log("Controlador TipoPoliza obten poliza por id");
          const tipospoliza = await this.itemService.findById(req.params.id);
          console.log(`tipo de poliza regresado por el servicio ${tipospoliza}`);
          res.status(200).send(tipospoliza);
        } catch (error) {
          if (error instanceof ItemNotFound) {
            res.status(404).send();
          }
          res.status(500).send();
        }
      }
      async guardarTipoPoliza(req: Request, res: Response) {
        try {
          console.log("controlador guarda tipo poliza");
          const tipospoliza = await this.itemService.save(req.body);
          res.status(200).send(tipospoliza);
        } catch (error) {
          res.status(500).send();
        }
      }
      async obtenerTiposPolizaTodos(req: Request, res: Response) {
        try {
          console.log("controlador muestra todas tipo poliza");
          const tipospolizalist = await this.itemService.findAll();
          console.log(`tipospolizalist regresado por el servicio ${tipospolizalist}`);
          res.status(200).send(tipospolizalist);
        } catch (error) {
          res.status(500).send();
        }
      }
}