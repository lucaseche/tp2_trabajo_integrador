import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRETKEY = process.env.SECRET_KEY;

const generateToken = async (data) => {
    const payload = {
        username: data.username
    };
    const token = jwt.sign(payload, SECRETKEY, { expiresIn: "3h" });
    return token;
};


const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "Token no proporcionado." });
        }

        const decoded = jwt.verify(token, SECRETKEY);
        
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado." });
    }
};

export { generateToken, verifyToken };


export default {
    generateToken,
    verifyToken
}