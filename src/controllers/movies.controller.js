import PeliculaService from "../services/movies.service.js";
import authMidd from "../middleware/auth.js";

class PeliculaController{
    constructor() {
        this.service = new PeliculaService()
    }

    getPeliculas = async (req, res) => {
        const peliculas = await this.service.getPeliculas()
        res.send(peliculas)
    }

       getPeliculasNacionales = async (req, res) => {
        const peliculasNacionales = await this.service.getPeliculasNacionales()
        res.send(peliculasNacionales)
    }


    postPelicula = async (req, res) => {
        const pelicula = req.body
        const postPelicula = await this.service.postPelicula(pelicula)
        res.send(postPelicula)
    }

    putPelicula = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const putPelicula = await this.service.putPelicula(id, data)
        res.send(putPelicula)
    }

    patchPelicula = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const patchPelicula = await this.service.patchPelicula(id, data)
        res.send(patchPelicula)
    }

    deletePelicula = async (req, res) => {
        const { id } = req.params
        const deletePelicula = await this.service.deletePelicula(id)
        res.send(deletePelicula)
    }
}

export default PeliculaController
