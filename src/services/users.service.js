import validation from "../validations/validation.js";
import UserModel from "../models/DAO/users.model.js"

class UserService{
    constructor() {
        this.model = new UserModel()
    }

    getUsers = async () => {
        return await this.model.getUsers()
    }

    
   async getUserByName(userName) {
        console.log(userName)
    return  await this.model.getUserByUsername({ userName });
}


    postUser = async (user) => {
        const validateUser = validation.UserSchema.validate(user)

        if (validateUser.error) {
            return "Error: " + validateUser.error
        } else {
            return await this.model.createUser(user)
        }
        
    }

    putuser = async (id,data) => {
        return await this.model.putUser(id,data)
    }

    patchUser = async (id,data) => {
        return await this.model.patchUser(id,data)
    }

    deleteUser = async (id) => {
        return await this.model.deleteUser(id)
    }
}

export default UserService
