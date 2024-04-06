import { Request, Response } from "express";
import { ItemsService } from "../../application/service/ItemsService";
import { EstatusPoliza } from "../../domain/entity/EstatusPoliza";
import { ItemsController } from "./ItemsController";

export class EstatusPolizaController extends ItemsController<EstatusPoliza>{
    constructor(private readonly itemServiceResponse:ItemsService<EstatusPoliza>){
        super(itemServiceResponse);
    }
    get(){
        this.itemServiceResponse.findAll();
    }
}