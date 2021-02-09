const Producto = require('../models/Dieta');

function crearProducto(req,res) {
    
    const body = [req.body]; 

    console.log(body);
   
  // console.log(body);
    // for (x of body) {
    //  var dias =  x.data;
    // }
  // console.log(dias.lunes);

    // const producto = new Producto({
        
    //     user     : body.id,
    //    lunes: dias.lunes,
    //    martes: dias.martes,
    //    miercoles:dias.miercoles,
    //    domingo:dias.domingo
        
        
    // })
    // console.log(producto);

    
    // producto.save((err,productoDB) => {
    //     if (err) {
    //         res.status(500).send({message:err})
    //     } else {
    //         res.json({productoDB})
    //     }
    // })
   
}








module.exports = {
    crearProducto,
}