import { Hero } from "../../domain/entity/Hero";
import { connectToDatabase } from "../../infraestructure/mongo-repository/MongoConnection"
import { MongoHeroeRepository } from "../../infraestructure/mongo-repository/MongoHeroRepository"
import { HeroService } from "./HeroService"

const mongoHeroRepository = new MongoHeroeRepository();
const heroService = new HeroService(mongoHeroRepository)

describe('Pruebas Hero Service', ()=>{
    beforeAll(()=>{        
        return connectToDatabase().then(()=>{            
            return heroService.save({name:"test"});
        })
    })
    afterAll(()=>{
        return heroService.delete({
            name:"test"
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
            // await heroService.findById(heroe._id!)
        });
    })
    // test('Busca heroe por id', async ()=>{
    //     await heroService.findById("test").then((result)=>{
    //         expect(result.name).toEqual("test");
    //     })
    // })
})