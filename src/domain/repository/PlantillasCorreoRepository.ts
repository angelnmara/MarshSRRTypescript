import { PlantillasCorreo } from "../entity/PlantillasCorreo";

export interface PlantillasCorreoRepository {
  getById(id: string): Promise<PlantillasCorreo>;
  save(plantillasCorreo: PlantillasCorreo): Promise<PlantillasCorreo>;
  getAll(): Promise<Array<PlantillasCorreo>>;
}
