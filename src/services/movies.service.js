import validation from "../validations/validation.js";
import PeliculasModel from "../models/DAO/movies.model.js";

class PeliculaService{
    constructor() {
        this.model = new PeliculasModel()
    }

    getPeliculas = async () => {
        return await this.model.getPeliculas()
    }

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
