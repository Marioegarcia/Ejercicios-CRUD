const { now } = require('moment');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let diasValidos = {
    values: ["lunes", "martes", "miercoles","jueves","viernes","sabado","domingo"],
    message: "{VALUE} no es un rol valido",
  };

let dietaSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    dias:Array,
    lunes: {},
    martes: {},
    miercoles: {},
    jueves:{},
    viernes:{},
    domingo:{},
   
    
    
});


module.exports = mongoose.model('Dieta', dietaSchema);


