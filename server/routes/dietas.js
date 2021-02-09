const express = require("express");
const {verificaToken} = require("../middlewares/authenticacion");
const md_auth = require("../middlewares/autenticar");
const DietasController = require("../controllers/dietas");

const api = express.Router();


// ============================
// Mostrar todas las categorias
// ============================
//api.get('/dietas');


// ============================
// Mostrar una categoria por id
// ============================
//api.get('/dieta/:id');

// ============================
// Crear Dieta
// ============================
api.post('/dieta', DietasController.crearDieta);


// ============================
// Actualizar  categorias
// ============================
//api.put('/categoria/:id');


// ============================
// eliminar todas las categorias
// ============================
//api.delete('/categoria/:id');


module.exports = api;