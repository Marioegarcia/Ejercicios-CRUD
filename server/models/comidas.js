const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let comidaSchema = new Schema({
    nombre: { type: String, unique: true, required: [true, 'El nombre  es obligatorio.'] },
    descripcion: String,
    energia: Number,
    grasa: Number,
    hCarbono: Number,
    proteina:Number
 
});


module.exports = mongoose.model('Comidas', comidaSchema);