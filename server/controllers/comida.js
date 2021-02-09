const Comida = require('../models/comidas');


function crearComida(req, res) {
    const body = req.body;

    const comida = new Comida({
        nombre : body.nombre,
        descripcion : body.descripcion,
        energia : body.energia,
        grasa : body.grasa,
        hCarbono : body.hCarbono,
        proteina : body.proteina
    })

    
    comida.save((err,comidaDB) => {
        if (err && comidaDB) {
            res.status(500).send({
                message: "Error con el servidor",
                
            });
        } else {
            
            if (!comidaDB) {
                res.status(404).send({
                    message: "La comida ya existe",
                    
                });
            } else {
                res.json({
                    ok:true,
                    comida: comidaDB,
                   
                }) 
            }
        }
    })




    
}

function allComidas(req,res) {
    
}


function oneComida(req,res) {
    
}


function updateComida(req,res) {
    
}


function deleteComida(req,res) {
    
}

module.exports = {
    crearComida,
    deleteComida,
    updateComida,
    oneComida,
    allComidas

}