import mongoose from "mongoose";
import config from '../../config.js'

const MONGO_URI = config.MONGO_URI

try {
    mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado correctamente a la db'))
} catch (error) {
    console.log(error)
}