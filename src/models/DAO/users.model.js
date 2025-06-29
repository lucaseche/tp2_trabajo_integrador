import MongoConnection from "../MongoConnection.js";
import { ObjectId } from "mongodb";

class UserModel{
    constructor() {
        this.db = MongoConnection.db
    }

    getUsers = async () => {
        return await this.db.collection("users").find({}).toArray()
    }
    
getUserByUsername = async (username) => {
    return await this.db.collection("users").findOne({ userName: username });
}


    createUser = async (user) => {
        return await this.db.collection("users").insertOne(user)
    }

    putUser = async (id, data) => {
        const update = await this.db.collection("users").replaceOne(
            {_id: ObjectId.createFromHexString(id)}, data
        )
        return update
    }

    patchUser = async (id, data) => {
        const update = await this.db.collection("users").updateOne(
            {_id: ObjectId.createFromHexString(id)},
                {$set: data}
            )
            return update
        }
    deleteUser = async (id) => {
        const userDelete = await this.db.collection("users").deleteOne(
            {_id: ObjectId.createFromHexString(id)}
        )
        return userDelete
    }

}

export default UserModel
