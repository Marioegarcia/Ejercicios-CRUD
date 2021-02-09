const express = require("express");
const {verificaToken} = require("../middlewares/authenticacion");
const md_auth = require("../middlewares/autenticar");
const CategoriaController = require("../controllers/categoria");

const api = express.Router();


// ============================
// Mostrar todas las categorias
// ============================
api.get('/categorias',CategoriaController.allCategoria);


// ============================
// Mostrar una categoria por id
// ============================
api.get('/categoria/:id', CategoriaController.oneCategoria);

// ============================
// Crear Categoria
// ============================
api.post('/categoria',[md_auth.ensureAuth], CategoriaController.crearCategoria);


// ============================
// Actualizar  categorias
// ============================
api.put('/categoria/:id', CategoriaController.actualizarCategoria);


// ============================
// eliminar todas las categorias
// ============================
api.delete('/categoria/:id', CategoriaController.eliminarCategoria);


module.exports = api;