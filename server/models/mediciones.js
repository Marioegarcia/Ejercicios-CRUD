const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let medicionesSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    nombre:String,
    estadoCivil: String,
    direccion: String,
    ocupacion: String,
    sexo: String,
    edad:String,
    createDate: Date,
    gpoSanguineo: String,
    motivo:String,
    peso: { type: Number },
    altura: {type: Number},
    pI:Number,
    pM:Number,
    glu:Number,
    ta:Number,
    fc: Number,
    fr:Number,
    imc:Number,
    cadera:{type: Number},
    cintura:{type: Number},
    icc:Number,
    medicamentos:String,
    malestares:String,
    actividadFisica:String,
    habitos:String,
    indicadoresDieteticos: String,
    modificacionA: String,
    alergias: String,
    sal:String,
    afterdieta: String,
    azucar:String,
    recordatorio24H: String,
    planIndicado:String

    
    
});


module.exports = mongoose.model('Mediciones', medicionesSchema);