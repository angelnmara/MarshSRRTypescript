import { ObjectId } from "mongodb";
import { TiposPolizaService } from "../../../src/application/service/TiposPolizaService";
import { MongoTiposPolizaRepository } from "../../../src/infraestructure/mongo-repository/MongoTiposPolizaRepository";
import { connectToDatabase } from "../../../src/infraestructure/mongo-repository/MongoConnection";


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
                console.log(result);
            });
            return idObject;
        });
    });
    afterAll(()=>{
        return tiposPolizaService.delete({
            TipoPoliza:"test"
        });
    })
    test('Busca Todos TiposPoliza', async ()=>{
        await tiposPolizaService.findAll().then((result)=>{
            expect(result.length).toBeGreaterThan(0);
            console.log(`Todos los tipos poliza ${result}`)
        });
    });
    test('Busca tipo poliza by field', async ()=>{
        await tiposPolizaService.findByField('test').then((result)=>{            
            expect(result._id).toEqual(idObject);
        })
    })
    test('Busca TipoPoliza por id', async ()=>{
        await tiposPolizaService.findById(idObject).then((result)=>{
            expect(result._id).toEqual(idObject);
        });
    });
    test('Actualiza TipoPoliza por id', async ()=>{
        await tiposPolizaService.updateById(idObject, {
            TipoPoliza:'testUpdate'
        }).then((result)=>{
            expect(result).not.toBeNull();
        })
    })
    test('Borra TipoPoliza por id', async ()=>{
        await tiposPolizaService.deleteById(idObject).then((result)=>{
            expect(result).toEqual(1);
        });
    });
});