const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};


let Schema = mongoose.Schema;


let consultaSchema = new Schema({
    paciente: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    motivo: String,
    expectativas: String,
    masInfo: String,
    fecha: Date
    
});






module.exports = mongoose.model( 'Consulta', consultaSchema);