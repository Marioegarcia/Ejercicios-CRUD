const Dietas = require("../models/Dieta");

function crearDieta(req, res) {
   console.log(req.params);
    const body = req.body;
    console.log(body);
    console.log("crear dietas");
   

}

function editarDieta(req, res) {}



module.exports = {
    crearDieta
}