import { EstatusPoliza } from "../../domain/entity/EstatusPoliza";
import { ItemsRepository } from "../../domain/repository/ItemsRepository";
import { ItemsService } from "./ItemsService";

export class EstatusPolizaServices extends ItemsService<EstatusPoliza>{
    constructor(private readonly itemrepo:ItemsRepository<EstatusPoliza>){
        super(itemrepo);
    }
    get(){this.itemrepo.getAll()}
}