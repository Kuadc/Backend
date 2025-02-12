import express from "express";

import { moviesRouter } from "./routes/moviesRouter.js";
import { connectDB } from "./config/connectDB.js";
import cors from "cors"


// para antiguas versiones de nodejs. por ej.v.18
import { config } from "dotenv";
config()

//para nodejs 20 en adelante no necesita dotenv
// process.loadEnvFile()
const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.use(cors())


//endpoint ( obtiene el index)
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Movie API" })
})  ;

//endpoint ( obtiene las peliculas)
app.use("/movies", moviesRouter);



app.listen(PORT, () => {
    connectDB();
})


