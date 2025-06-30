import MongoConnection from "../MongoConnection.js";
import { ObjectId } from "mongodb";

class PeliculasModel{
    constructor() {
        this.db = MongoConnection.db
    }

    getPeliculas = async () => {
        return await this.db.collection("movies").find({}).toArray()
    }

    createPelicula = async (pelicula) => {
        return await this.db.collection("movies").insertOne(pelicula)
    }

    putPelicula = async (id, data) => {
        const update = await this.db.collection("movies").replaceOne(
            {_id: ObjectId.createFromHexString(id)}, data
        )
        return update
    }

    patchPelicula = async (id, data) => {
        const update = await this.db.collection("movies").updateOne(
            {_id: ObjectId.createFromHexString(id)},
                {$set: data}
            )
            return update
        }
    deletePelicula = async (id) => {
        const peliculaDelete = await this.db.collection("movies").deleteOne(
            {_id: ObjectId.createFromHexString(id)}
        )
        return peliculaDelete
    }
}

export default PeliculasModel
