import { ObjectId } from "mongodb";
import { Hero } from "../../domain/entity/Hero";
import { connectToDatabase } from "../../infraestructure/mongo-repository/MongoConnection"
import { MongoHeroeRepository } from "../../infraestructure/mongo-repository/MongoHeroRepository"
import { HeroService } from "./HeroService"

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
            _id: idObject,
            name:"test update"
        })
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
            const heroe = resultField as Hero;
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