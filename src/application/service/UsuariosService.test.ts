import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../infraestructure/mongo-repository/MongoConnection";
import { MongoUsuariosRepository } from "../../infraestructure/mongo-repository/MongoUsuariosRepository"
import { UsuariosService } from "./UsuariosService";

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
});