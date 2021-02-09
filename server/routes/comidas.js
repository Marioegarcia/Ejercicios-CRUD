const express = require("express");
const {verificaToken} = require("../middlewares/authenticacion");
const md_auth = require("../middlewares/autenticar");
const ComidaController = require('../controllers/comida');

const api = express.Router();


//////////////////
// Mostrar todo///
//////////////////



//==================
// Mostrar por id
//==================


//==================
// Crear comida
//==================
api.post('/comidas', [md_auth.ensureAuth],ComidaController.crearComida );


//==================
// Actualizar comida
//==================



//==================
// Eliminar comida
//==================



module.exports = api;