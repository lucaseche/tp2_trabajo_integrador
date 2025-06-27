// src/index.js
import express from "express";
import dotenv from 'dotenv';
import Router from "./routes/movies.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const movieRoutes = new Router().start();
app.use("/", movieRoutes);

app.use((req, res) => {
    res.status(404).json({
        code: 404,
        message: "Recurso no encontrado."
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
