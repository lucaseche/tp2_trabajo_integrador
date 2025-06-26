import express from "express"
import Router from "./routes/movies.route.js"
//import dotenv from "dotenv"

dotenv.config()

const app = express()
//const PORT = process.env.PORT
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", new Router().start())

app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: "Recurso no encontrado."
    })
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
