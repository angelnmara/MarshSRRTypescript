import * as dotenv from "dotenv";
import * as mongoDB from "mongodb";

import { Colecciones } from "../../domain/entity/Colecciones";

export const collections: Colecciones = {};

async function run(): Promise<void> {
  await connectToDatabase();
}
run().catch(console.dir);

export async function connectToDatabase() {
  dotenv.config();
  const conexion = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.0913r1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  console.log(`mongo db string: ${conexion}`);
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(conexion);
  await client.connect();
  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const usuariosCollection: mongoDB.Collection = db.collection(
    process.env.USUARIOS_COLLECTION_NAME!
  );
  collections.usuarios = usuariosCollection;

  const tipospolizaCollection: mongoDB.Collection = db.collection(
    process.env.TIPOSPOLIZA_COLLECTION_NAME!
  );
  collections.tipospoliza = tipospolizaCollection;

  const heroCollection: mongoDB.Collection = db.collection(
    process.env.HERO_COLLECTION_NAME!
  );
  collections.hero = heroCollection;

  const estatuspolizaCollection: mongoDB.Collection = db.collection(
    process.env.ESTATUS_POLIZA_COLLECTION_NAME!
  );
  collections.estatuspoliza = estatuspolizaCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${usuariosCollection.collectionName}` +
      `Successfully connected to database: ${db.databaseName} and collection: ${tipospolizaCollection.collectionName}` +
      `Successfully connected to database: ${db.databaseName} and collection: ${heroCollection.collectionName}`
  );
}
