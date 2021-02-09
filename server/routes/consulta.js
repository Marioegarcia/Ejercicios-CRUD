const express = require("express");
const {verificaToken} = require("../middlewares/authenticacion");
const md_auth = require("../middlewares/autenticar");
const ConsultaController = require('../controllers/consultas');


const api = express.Router();


api.post('/consulta',ConsultaController.nuevaConsulta );






module.exports = api;