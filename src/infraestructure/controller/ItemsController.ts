import { Request, Response } from "express";

import { ItemsService } from "../../application/service/ItemsService";
import { ItemNotFound } from "../../tools/error/ItemNotFound";

export abstract class ItemsController<T> {
  constructor(private readonly itemService: ItemsService<T>) {}
  async obtenerItemPorId(req: Request, res: Response) {
    try {
      console.log("Controlador obten item por id");
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
  async guardarItem(req: Request, res: Response) {
    try {
      console.log("Controlador guarda item");
      const tipospoliza = await this.itemService.save(req.body);
      res.status(200).send(tipospoliza);
    } catch (error) {
      res.status(500).send();
    }
  }
  async obtenerTodos(req: Request, res: Response) {
    try {
      console.log("Controlador obten todos los items");
      const tipospolizalist = await this.itemService.findAll();
      console.log(
        `tipospolizalist regresado por el servicio ${tipospolizalist}`
      );
      res.status(200).send(tipospolizalist);
    } catch (error) {
      res.status(500).send();
    }
  }
  async borraItem(req:Request, res: Response){
    try{
      console.log("Controlador borra item");
      const tipopoliza = await this.itemService.delete(req.body);
      res.status(200).send(tipopoliza);
    }catch(error){
      res.status(500).send();
    }
  }
}
