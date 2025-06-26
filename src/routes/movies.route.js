import PeliculaController from "../controllers/movies.controller.js";
import express from 'express'
import authMidd from "../middleware/auth.js";

class Router{
    constructor() {
        this.controller = new PeliculaController()
        this.router = express.Router()
    }

    start() {
        this.router.post("/login", this.controller.login)
        this.router.get("/peliculas", authMidd.verifyToken, this.controller.getPeliculas)
        this.router.post("/peliculas", this.controller.postPelicula)
        this.router.put("/peliculas/update/all/:id", this.controller.putPelicula)
        this.router.patch("/peliculas/update/:id", this.controller.patchPelicula)
        this.router.delete("/delete/:id", this.controller.deletePelicula)
    }

}

export default Router