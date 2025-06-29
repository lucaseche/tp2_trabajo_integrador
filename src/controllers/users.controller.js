import UserService from "../services/users.service.js"
import authMidd from "../middleware/auth.js"

class UserController{
    constructor() {
        this.service = new UserService()
    }

    /*login = async (req, res) => {
        const data = req.headers
        const generateTkn = await authMidd.generateToken(data)
        console.log("Generando Token")
        res.send(generateTkn)
    }
*/
    
login = async (req, res) => {
    const userName = req.params.userName;
    const password=req.body.password
console.log(username+" "+ password);

    try {
        
        const user = await this.service.getUserByName(userName);

        if (!user) {
            return res.status(401).send({ error: "Usuario no encontrado" });
        }

        // Comparar contraseñas (en producción deberías usar bcrypt)
        if (user.password !== password) {
            return res.status(401).send({ error: "Contraseña incorrecta" });
        }

        // Generar token
        const token = await authMidd.generateToken({ id: user._id, userName: user.userName });

        console.log("Generando Token");
        res.send({ token });
    } catch (error) {
        console.error("Error en login:", error);
        res.status(500).send({ error: "Error interno del servidorF" });
    }
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
