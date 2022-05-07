// Importamos libreria
const mongoose = require('mongoose');

// Creamos Schema 
const Schema = mongoose.Schema;

// Creamos un nuevo Schema
const mascotaSchema = new Schema({
    nombre: String,
    descripcion: String
});

// Creamos modelo
const Mascota = mongoose.model('Mascota', mascotaSchema);

// Exportamos modulo
module.exports = Mascota;