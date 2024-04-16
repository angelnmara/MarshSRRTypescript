import { Request, Response } from "express";

import { ItemsService } from "../../application/service/ItemsService";
import { ItemNotFound } from "../../tools/error/ItemNotFound";
import { ObjectId } from "mongodb";

export abstract class ItemsController<T> {
  constructor(private readonly itemService: ItemsService<T>) {}
  async obtenerItemPorId(req: Request, res: Response){
    try {
      console.log("Controlador obten item por id");
      const itemporid = await this.itemService.findById(new ObjectId(req.params.id));
      res.status(200).send(itemporid);
    } catch (error) {
      if (error instanceof ItemNotFound) {
        res.status(404).send();
      }
      res.status(500).send();
    }
  }
  async obtenerItemPorField(req: Request, res: Response) {
    try {
      console.log("Controlador obten item por id");
      const itemporid = await this.itemService.findByField(req.params.id);
      res.status(200).send(itemporid);
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
      const guardaitem = await this.itemService.save(req.body);
      res.status(200).send(guardaitem);
    } catch (error) {
      res.status(500).send();
    }
  }
  async obtenerTodos(req: Request, res: Response) {
    try {
      console.log("ItemsController obtiene todos los items");
      const itemTodos = await this.itemService.findAll();
      res.status(200).send(itemTodos);
    } catch (error) {
      res.status(500).send();
    }
  }
  async borraItem(req: Request, res: Response) {
    try {
      console.log("Controlador borra item");
      const itemborrado = await this.itemService.delete(req.body);
      res.status(200).send(itemborrado);
    } catch (error) {
      res.status(500).send();
    }
  }
  async borraItemById(req: Request, res: Response) {
    try {
      console.log("Controlador borra item por id");
      const itemborradoid = await this.itemService.deleteById(req.params.id);
      res.status(200).send(`{"itemsBorrados":${itemborradoid}}`);
    } catch (error) {
      res.status(500).send();
    }
  }
}
