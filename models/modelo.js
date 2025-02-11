// conexion a la base de datos de las peliculas
// debe contener las caracrteristicas: nombre, rating, año , descripcion, imagen

import mongoose from "mongoose";

// Definimos el esquema para los estudiantes
const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
    },
    description:{
        type: String,
        requerid: true,
        default:"Other",
    },
    image:{
        type: String,
        requerid: true, 
        default: "Other",
    }
    
  },
  {
    versionKey: false,
  }
);

// Creamos el modelo basado en el esquema
const Movie = mongoose.model("Movies", movieSchema);

export { Movie };

