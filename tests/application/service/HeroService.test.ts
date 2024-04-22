import { ObjectId } from "mongodb";
import { HeroService } from "../../../src/application/service/HeroService";
import { MongoHeroeRepository } from "../../../src/infraestructure/mongo-repository/MongoHeroRepository";
import { connectToDatabase } from "../../../src/infraestructure/mongo-repository/MongoConnection";

const mongoHeroRepository = new MongoHeroeRepository();
const heroService = new HeroService(mongoHeroRepository)

describe('Pruebas Hero Service', ()=>{
    let idObject:ObjectId;
    beforeAll(()=>{        
        return connectToDatabase().then(()=>{            
            heroService.save({name:"test"}).then((result)=>{
                idObject = result._id!;
            })
            return idObject
        })
    })
    afterAll(()=>{
        return heroService.delete({      
            name:"test update"
        });
    });
    test('Busca todos Heroes', async ()=>{
        await heroService.findAll().then((result)=>{
            expect(result).not.toBeNull();
            console.log(result);
        });
    })
    test('Busca heroe por name', async ()=>{
        await heroService.findByField("test").then((resultField)=>{
            expect(resultField.name).toEqual("test");
            const heroe = resultField
            console.log(`Este es el hero por nombre ${heroe}`)            
        });
    })
    test('Busca heroe por id', async ()=>{
        await heroService.findById(idObject).then((result)=>{
            expect(result._id).toEqual(idObject);
        })
    });
    test('Actualiza heroe por id', async ()=>{
        await heroService.updateById(idObject, {
            name: 'test update'
        }).then((respuesta)=>{
            expect(respuesta).not.toBeNull();          
        });
    });
    test('Borra heroe por id', async ()=>{
        await heroService.deleteById(new ObjectId("AAAAAAAAAAAAAAAAAAAAAAAA")).then((result)=>{
            expect(result).toEqual(0);            
        })
    })
})