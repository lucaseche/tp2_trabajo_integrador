import validation from "../validations/validation.js";
import PeliculasModel from "../models/DAO/movies.model.js";

class PeliculaService{
    constructor() {
        this.model = new PeliculasModel()
        this.apiKey = process.env.API_KEY || '7c1b527f58e847a486ea442f6d15adec';
    }

    getPeliculas = async () => {
        return await this.model.getPeliculas()
    }

    getPeliculasNacionales = async () => {
  try {
    // *** No logre usar el API_KEY desde el .env, por lo que lo puse directamente en la URL
    const geoResponse = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=7c1b527f58e847a486ea442f6d15adec');   
    const geoData = await geoResponse.json();

    const { country_name: paisUsuario } = geoData;

    console.log("País del usuario:", paisUsuario);

 
    const peliculasDelPais = await this.model.getPeliculasPorPais(paisUsuario);

    return peliculasDelPais;

  } catch (error) {
    console.error('Error al obtener películas nacionales:', error);
    return [];
  }
};


    postPelicula = async (pelicula) => {
        const validatePelicula = validation.peliculaSchema.validate(pelicula)

        if (validatePelicula.error) {
            return "ErrRRRRR: " + validatePelicula.error
        } else {
            return await this.model.createPelicula(pelicula)
        }
        
    }

    putPelicula = async (id,data) => {
        return await this.model.putPelicula(id,data)
    }

    patchPelicula = async (id,data) => {
        return await this.model.patchPelicula(id,data)
    }

    deletePelicula = async (id) => {
        return await this.model.deletePelicula(id)
    }

}

export default PeliculaService
