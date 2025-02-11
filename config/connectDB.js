import mongoose from "mongoose";

process.loadEnvFile()

const URIDB = process.env.URI_BD



const connectDB = async () => {
  try {
    await mongoose.connect(URIDB)
 
    console.log(`MongoDB Connected: conectado a la base de datos`);
  } catch (error) {
    console.log("error al iniciar")
    console.error(`Error: ${error.message}`);
    
  }
}

export {connectDB}