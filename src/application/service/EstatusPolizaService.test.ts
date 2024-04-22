import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../infraestructure/mongo-repository/MongoConnection";
import { MongoEstatusPolizaRepository } from "../../infraestructure/mongo-repository/MongoEstatusPolizaRepository";
import { EstatusPolizaServices } from "./EstatusPolizaService";

const mongoestatuspolizaRepository = new MongoEstatusPolizaRepository();
const estatuspolizaService = new EstatusPolizaServices(mongoestatuspolizaRepository);

describe('Pruebas Estatus Poliza Service', ()=>{
    let idObject:ObjectId;
    beforeAll(()=>{
        return connectToDatabase().then(()=>{
            estatuspolizaService.save({                
                EstatusPoliza:"Estatus poliza"
            }).then((result)=>{
                idObject=result._id!
            })
            return idObject
        })
    })
    afterAll(()=>{
        return estatuspolizaService.delete({            
            _id:idObject,
            EstatusPoliza:"Estatus poliza Test"
        })        
    })
    test('Busca todas estatus poliza', async ()=>{
        await estatuspolizaService.findAll().then((respuesta)=>{
            expect(respuesta).not.toBeNull();      
            console.log(respuesta);      
        })
    })
    test('Busca estaus poliza por id', async()=>{
        console.log(`este es el objectid de estatus poliza ${idObject}`);
        await estatuspolizaService.findById(idObject).then((respuesta)=>{
            expect(respuesta).not.toBeNull();
            console.log(respuesta);
        })
    })
    test('Busca estaus poliza por field', async()=>{
        await estatuspolizaService.findByField("Estatus poliza").then((respuesta)=>{
            expect(respuesta).not.toBeNull();
            console.log(respuesta);
        })
    })
    test('Actualiza estatus poliza por id', async ()=>{
        await estatuspolizaService.updateById(idObject, {
            EstatusPoliza:'Estatus poliza Test'
        }).then((result)=>{
            expect(result).not.toBeNull();
        })
    })
    test('busca estatus poliza por id', async ()=>{
        await estatuspolizaService.deleteById(new ObjectId("AAAAAAAAAAAAAAAAAAAAAAAA")).then((respuesta)=>{
            expect(respuesta).not.toBeNull();
            console.log(respuesta);
        })
    });    
})
