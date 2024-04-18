import { ObjectId } from "mongodb"
import { connectToDatabase } from "../../infraestructure/mongo-repository/MongoConnection"
import { TiposPolizaService } from "./TiposPolizaService"
import { MongoTiposPolizaRepository } from "../../infraestructure/mongo-repository/MongoTiposPolizaRepository"

const mongoTiposPolizaRepository = new MongoTiposPolizaRepository();
const tiposPolizaService = new TiposPolizaService(mongoTiposPolizaRepository);

describe('Pruebas Tipos Poliza Service',()=>{
    let idObject:ObjectId
    beforeAll(()=>{
        return connectToDatabase().then(()=>{
            tiposPolizaService.save({
                TipoPoliza:"test"
            }).then((result)=>{
                idObject = result._id!;
            });
            return idObject;
        });
    });
    test('Busca Todos TiposPoliza', ()=>{
        tiposPolizaService.findAll().then((result)=>{
            expect(result.length).toBeGreaterThan(0);
        });
    });
    test('Busca TipoPoliza por field', ()=>{
        tiposPolizaService.findByField("test").then((result)=>{
            expect(result._id).toEqual(idObject);
        });
    });
    test('Busca TipoPoliza por id', ()=>{
        tiposPolizaService.findById(idObject).then((result)=>{
            expect(result._id).toEqual(idObject);
        });
    });
    test('Actualiza TipoPoliza por id', ()=>{
        tiposPolizaService.updateById(idObject, {
            TipoPoliza:'testUpdate'
        }).then((result)=>{
            expect(result).not.toBeNull();
        })
    })
    test('Borra TipoPoliza por id', ()=>{
        tiposPolizaService.deleteById(idObject).then((result)=>{
            expect(result).not.toBeNull();
        });
    });
});