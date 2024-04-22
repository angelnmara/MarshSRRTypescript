import { ObjectId } from "mongodb";
import { UsuariosService } from "../../../src/application/service/UsuariosService";
import { MongoUsuariosRepository } from "../../../src/infraestructure/mongo-repository/MongoUsuariosRepository";
import { connectToDatabase } from "../../../src/infraestructure/mongo-repository/MongoConnection";

const mongoUsuarioRepository = new MongoUsuariosRepository();
const usuarioService = new UsuariosService(mongoUsuarioRepository);

describe('Pruebas usuario service', ()=>{
    let idObject:ObjectId;
    beforeAll(()=>{
        return connectToDatabase().then(()=>{
            usuarioService.save({
                Usuario:"test",
                Nombre:"test",
                Paterno:"testPaterno",
                Materno:"testMaterno",
                Habilitado:true,
                FechaRegistro: new Date
            }).then((result)=>{
                idObject = result._id!
            })
            return idObject;
        })
    });
    afterAll(()=>{
        return usuarioService.delete({Usuario:"usuarioTestUpdate"});
    })
    test('Busca todos los usuarios', async ()=>{
        await usuarioService.findAll().then((result)=>{
            expect(result.length).toBeGreaterThan(0);
            console.log(`Resultado todos los usuarios ${result}`)
        })
    });
    test('Busca usuario por campo', async ()=>{
        await usuarioService.findByField('test').then((result)=>{
            expect(result).not.toBeNull();            
            console.log(`Este es el idObject ${idObject} este es el resultado de busqueda por campo ${result._id}`)            
        })
    });
    test('Busqueda de usuario por id', async ()=>{
        console.log(`Este es el idObject ${idObject}`);
        await usuarioService.findById(idObject).then((result)=>{
            expect(result).not.toBeNull();
            console.log(`Este es el resultado de la busqueda de usuario por id ${result._id}`);
        })
    })    
    test('Actualizacion de usuario por id', async()=>{
        await usuarioService.updateById(idObject, {Usuario:"usuarioTestUpdate", 
        Paterno:"testPaterno", 
        Materno:"testMaterno", 
        Nombre:"testNombre", 
        Habilitado:true, 
        FechaRegistro: new Date}).then((result)=>{
            expect(result).not.toBeNull();
        })        
    })
    test('Borra usuario por id', async()=>{
        await usuarioService.deleteById(idObject).then((result)=>{
            expect(result).toEqual(1);
        })
    })
});