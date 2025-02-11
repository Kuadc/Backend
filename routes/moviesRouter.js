//validar las rutas
import { Router } from "express";

import {getMovies, addMovies, updateMovie, getMoviebyId, deleteMovieById} from "../controlers/moviesControllers.js";

const moviesRouter = Router();

//obtener las peliculas
moviesRouter.get("/", getMovies);

// agregar peliculas
moviesRouter.post("/", addMovies)

// Actualizar un estudiante (parcialmente o completamente)
moviesRouter.patch("/:id", updateMovie);

//Obtener una pelicula
moviesRouter.get("/:id", getMoviebyId)

//Borrar una pelicula por id
moviesRouter.delete("/:id", deleteMovieById)

export  {moviesRouter};
