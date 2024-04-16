import { connectToDatabase } from "../../infraestructure/mongo-repository/MongoConnection";
import { MongoEstatusPolizaRepository } from "../../infraestructure/mongo-repository/MongoEstatusPolizaRepository";
import { EstatusPolizaServices } from "./EstatusPolizaService";

const mongoestatuspolizaRepository = new MongoEstatusPolizaRepository();
const estatuspolizaService = new EstatusPolizaServices(mongoestatuspolizaRepository);

describe('Pruebas Estatus Poliza Service', ()=>{    
    beforeAll(()=>{
        return connectToDatabase().then(()=>{
            return estatuspolizaService.save({                
                EstatusPoliza:"Estatus poliza"
            });
        })
    })
    // afterAll(()=>{
    //     return estatuspolizaService.delete({            
    //         EstatusPoliza:"Estatus poliza"
    //     })        
    // })
    test('Busca todas estatus poliza', async ()=>{
        await estatuspolizaService.findAll().then((respuesta)=>{
            expect(respuesta).not.toBeNull();      
            console.log(respuesta);      
        })
    })
    // test('Busca estaus poliza por id', async()=>{
    //     await estatuspolizaService.findById("1").then((respuesta)=>{
    //         expect(respuesta).not.toBeNull();
    //         console.log(respuesta);
    //     })
    // })
    test('Busca estaus poliza por field', async()=>{
        await estatuspolizaService.findByField("Estatus poliza").then((respuesta)=>{
            expect(respuesta).not.toBeNull();
            console.log(respuesta);
        })
    })
    // test('busca estatus poliza por id', async ()=>{
    //     await estatuspolizaService.deleteById("1").then((respuesta)=>{
    //         expect(respuesta).not.toBeNull();
    //         console.log(respuesta);
    //     })
    // });    
})
