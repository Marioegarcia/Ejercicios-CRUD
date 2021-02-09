//NO ES NECESARIO

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const UserController = require("../controllers/user");

const Usuario = require("../models/usuario");





const api = express.Router();


//api.post("/sign-up", UserController.signUp);

api.post('/login', (req,res) => {
    const params = req.body;
    const email = params.email.toLowerCase();
    const password = params.password;

    Usuario.findOne({email}, (err, userStored) => {
        if (err) {
            res.status(500).send({message: "Error en el servidor", respuesta: false })
        } else {
            if (!userStored) {
                res.status(404).send({message:"Usuario no encontrado", respuesta: false })
            } else {
                bcrypt.compare(password, userStored.password, (err,check)=>{
                    if (err) {
                        res.status(500).send({ message: "Error del servidor.", respuesta: false });
                    }else if (!check) {
                        res.status(404).send({ message: "La contraseña es incorrecta.", respuesta: false  });
                    }else{

                        let token = jwt.sign({
                            usuario: userStored
                        }, process.env.SEED, { expiresIn:process.env.CADUCIDAD_TOKEN });

                        res.status(200).send({
                            message:"Usuario conectado correctamente",
                            usuario: userStored,
                            respuesta: true,
                            token 
                          });
                    }
                })
            }
            
        }
    })
})
// api.post('/login', (req,res) => {
//     const body = req.body;

//     Usuario.findOne({email: body.email}, (err,usuarioDB) =>{
            
//             if(err){
//                 return res.status(500).json({
//                  ok:false,
//                     err
//                 });
//             }

//             if(!usuarioDB){
//                 console.log(usuarioDB);
//                 return res.status(400).json({
//                     ok: false,
//                     err: {
//                         message: 'datos incorrectos'
//                     }
//                 });
//             }

//             if(!bcrypt.compareSync(body.password, usuarioDB.password)){
//                 console.log(usuarioDB);
//                 return res.status(400).json({
//                     ok: false,
//                     err: {
//                         message: 'datos incorrectos (contraseña)'
//                     }
//                 });
//             }

//             res.json({
//                 ok:true,
//                 usuario: usuarioDB,
//                 token: '123'
//             })

//     })

//     res.json({
//         ok:true
//     });
// });



module.exports = api;