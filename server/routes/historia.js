const express = require("express");
const {verificaToken} = require("../middlewares/authenticacion");
const md_auth = require("../middlewares/autenticar");
const HistoriaController = require("../controllers/historia");

const api = express.Router();



api.post('/crear-historia', HistoriaController.crearHistoria);


api.get('/get-historia/:id', HistoriaController.getHistoria);









module.exports = api;