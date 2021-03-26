const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const moment = require("moment");

let medicionesSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    estadoCivil: { type: String, default:"Estado civil" },
    direccion: { type: String, default:"Direccion" },
    ocupacion: { type: String, default:"Ocupacion" },
    createDate: {
        type: String, 
        default: () => moment().locale('es-mx').format('LLLL')
    },
    gpoSanguineo: { type: String, default:"Grupo sanguineo" },
    motivo:{ type: String, default:"Motivo" },
    peso: { type: Number,default: 0 },
    altura: {type: Number,default: 0 },
    pI:{type: Number},
    pM:{type: Number},
    glu:{type: Number,default: 0 },
    ta:{type: Number,default: 0 },
    fc:{type: Number},
    fr:{type: Number },
    imc:{type: Number},
    cadera:{type: Number },
    cintura:{type: Number },
    icc:{type: Number },
    suplementos: String,
    medicamentos:{type: String },
    malestares:{type: String},
    actividadFisica:{type: String},
    habitos:{type: String},
    indicadoresDieteticos: String,
    modificacionA: String,
    alergias: String,
    sal:String,
    afterdieta: String,
    azucar:String,
    recordatorio24H: String,
    planIndicado:String,
    
    
  
});


module.exports = mongoose.model('Mediciones', medicionesSchema);