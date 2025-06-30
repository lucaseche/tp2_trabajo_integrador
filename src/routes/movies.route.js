import PeliculaController from "../controllers/movies.controller.js";
import UserController from "../controllers/users.controller.js";
import express from 'express';
import authMidd from "../middleware/auth.js";

class Router {
    constructor() {
        this.movieController = new PeliculaController();
        this.userController = new UserController()
        this.router = express.Router();
    }

    start() {
        this.router.get("/peliculas", authMidd.verifyToken, this.movieController.getPeliculas);
        this.router.get("/peliculasSinToken",this.movieController.getPeliculas);
        this.router.post("/peliculas",authMidd.verifyToken, this.movieController.postPelicula);
        this.router.put("/peliculas/update/:id",authMidd.verifyToken, this.movieController.putPelicula);
        this.router.patch("/peliculas/update/:id",authMidd.verifyToken,this.movieController.patchPelicula);
        this.router.delete("/peliculas/delete/:id",authMidd.verifyToken, this.movieController.deletePelicula);

        this.router.post("/login", this.userController.login);
        this.router.get("/users",this.userController.getUsers);
        this.router.post("/users", this.userController.postUsers);
        this.router.put("/users/update/all/:id", this.userController.putUser);
        this.router.patch("/users/update/:id", this.userController.patchUser);
        this.router.delete("/user/delete/:id", this.userController.deleteUser);
        return this.router;
    }
}

export default Router;
