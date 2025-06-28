import UserService from "../services/users.service.js"
import authMidd from "../middleware/auth.js"

class UserController{
    constructor() {
        this.service = new UserService()
    }

    login = async (req, res) => {
        const data = req.body
        const generateTkn = await authMidd.generateToken(data)
        res.send(generateTkn)
    }

    getUsers = async (req, res) => {
        const users = await this.service.getUsers()
        res.send(users)
    }

    postUsers = async (req, res) => {
        const user = req.body
        const postUser = await this.service.postUser(user)
        res.send(postUser)
    }

    putUser = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const putUser = await this.service.putuser(id, data)
        res.send(putUser)
    }

    patchUser = async (req, res) => {
        const { id } = req.params
        const data = req.body
        const patchUser = await this.service.patchUser(id, data)
        res.send(patchUser)
    }

    deleteUser = async (req, res) => {
        const { id } = req.params
        const deleteUser = await this.service.deleteUser(id)
        res.send(deleteUser)
    }
}

export default UserController