const Historia = require("../models/mediciones");

function crearHistoria(req, res) {
  const body = req.body;

  const historia = new Historia({
    nombre: body.nombre,
    estadoCivil: body.estadoCivil,
    direccion: body.direccion,
    ocupacion: body.ocupacion,
    sexo: body.sexo,
    edad: body.edad,
    gpoSanguineo: body.gpoSanguineo,
    motivo: body.motivo,
    peso: body.peso,
    altura: body.altura,
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

module.exports = {
  crearHistoria
};
