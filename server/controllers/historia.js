const Historia = require("../models/mediciones");
const Usuario = require("../models/usuario");

function crearHistoria(req, res) {
  const body = req.body;
  console.log(body);

  const historia = new Historia({
    usuario: body.usuario,
    estadoCivil: body.estadoCivil,
    direccion: body.direccion,
    ocupacion: body.ocupacion,
    gpoSanguineo: body.gpoSanguineo,
    motivo: body.motivo,
    pI: body.pI,
    pM: body.pM,
    glu: body.glu,
    ta: body.ta,
    fc: body.fc,
    fr: body.fr,
    imc: body.imc,
    cadera: body.cadera,
    cintura: body.cintura,
    icc: body.icc,
    suplementos: body.suplementos,
    medicamentos: body.medicamentos,
    malestares: body.malestares,
    actividadFisica: body.actividadFisica,
    habitos: body.habitos,
    indicadoresDieteticos: body.indicadoresDieteticos,
    modificacionA: body.modificacionA,
    alergias: body.alergias,
    sal: body.sal,
    afterdieta: body.afterdieta,
    azucar: body.azucar,
    recordatorio24H: body.recordatorio24H,
    planIndicado: body.planIndicado,
    alimento: body.alimento ,
    cantidad:body.cantidad,
    frecuencia: body.frecuencia,
    createDate: body.createDate
  });


  
  historia.save((err, historiaDB) => {
      if (err) {
        res.status(500).send({message:{err}})

      } else {
         if (!historiaDB) {
            res.status(404).send({message:"Error al crear historia clinica"})
         } else {
            res.status(200).send({historia: historiaDB})

         } 
      }
  })
}

function getHistoria(req,res) {
  let id = req.params.id;

  // Historia.find().populate('usuario').
  // then(historia=> res.json(historia)).catch(err=>{
  //   console.log(err);
  //   res.json(err);
  // }) 

  Historia.find({"usuario": id}).populate('usuario').
  exec(function (err,usuario) {
    if (err) {
      res.status(404).send({ message: "No se ha encontrado ningun usuario." });

    } else {
      res.status(200).send( {usuario} );
    }
  })
  
//   Historia.find({"usuario": id}, (err,historia) => {
//     if (err) {
//      res.status(404).send({
//        message:'Paciente no existe'
//      })
//     } else {
//       res.status(200).send({
//         ok:true,
//         historia
//       })
//     }
//  }) 
  
}

module.exports = {
  crearHistoria,
  getHistoria
};
