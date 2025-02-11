import { Movie } from "../models/modelo.js";

//obtener peliculas de la db
const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "error obtaining movies list"})        
    }
}

//agregar peliculas en base de datos
const addMovies = async (req, res) => {
    try {
      const { body } = req;
  
      // Validar datos antes de guardar

      if (!body.name || !body.year || !body.description || !body.image || !body.rating) {
        return res
          .status(400)
          .json({ message: "Todos los campos son obligatorios" });
      }
  
      const newMovie = new Movie(body);
      await newMovie.save();
  
      return res
        .status(201)
        .json({ message: "Pelicula agregado exitosamente" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({
          message: "Error al agregar la pelicula",
          error: error.message,
        });
    }
  };

//Actualizar pelicula

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const { body } = req;
    

    const updatedMovie = await Movie.findByIdAndUpdate(id, body, {
      new: true,
    });

    if (!updatedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.json({
      message: "Movie updated",
      updatedMovie,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        message: "Error to update movie",
        error: error.message,
      });
  }
};

// obtener pelicula por id
const getMoviebyId = async (req, res) => {
  try {
    const { id } = req.params;

    const getmovie = await Movie.findById(id)

    if(!getmovie){
      return res.status(404).json({message: "Movie not found"})
    }
    res.json(getmovie)

  } catch (error) {
    console.error(error)
    res
    .status(500)
    .json({message: "error obtainning the Movie", error:error.message})

    
  }
}

//borrar una pelicula por id
const deleteMovieById = async (req, res) =>{
  try {
    const { id } = req.params

    const movie = await Movie.findByIdAndDelete(id)

    if(!movie)
    {
      return res.status(404).json({message: "Movie not found, cant delete"})
    }
    res.json({message: "Movie deleted"})

  } catch (error) {
    res.status(500).json({message: "error getting the movie", error: error.message})
    
  }
}

export { getMovies,addMovies, updateMovie, getMoviebyId,deleteMovieById };
