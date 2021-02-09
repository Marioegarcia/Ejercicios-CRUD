const Categoria = require("../models/categoria");



function allCategoria(req,res) {

  Categoria.find().then(categorias => {
    if (!categorias) {
      res.status(404).send({ message: "No se ha encontrado ninguna categoria." });
    } else {
      res.status(200).send(categorias);
    }
  });

}

function oneCategoria(req,res) {

    let id = req.params.id;
  
    Categoria.findById(id, (err,categoriaDB) => {
       if (err) {
        res.status(404).send({
          message:'Categoria no existe en la base de datos'
        })
       } else {
         res.status(200).send({
           ok:true,
           categoriaDB
         })
       }
    })

}

function crearCategoria(req,res) {
    const body = req.body;
     
    const categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.user.id,
           
    })

    
    categoria.save((err,categoriaDB) => {
       
        if (err && categoriaDB) {
            res.status(500).send({
                message: "Error con el servidor",
                
            });
        }else{

           if (!categoriaDB) {
            res.status(404).send({
                message: "La categoria ya existe",
                
            });
           } else {
            res.json({
                ok:true,
                categoria: categoriaDB,
               
            })  
           } 
            
        }
       

        
    });

}

function actualizarCategoria(req,res) {
    const id = req.params.id;
    const body = req.body;

    const descCategoria = {
        descripcion : body.descripcion
    };

    Categoria.findByIdAndUpdate(id,descCategoria, (err,categoriaDB) => {
        if (err && categoriaDB) {
            res.status(500).send({
                message: "Error con el servidor",
                
            });
        }else{

           if (!categoriaDB) {
            res.status(404).send({
                message: "La categoria ya existe",
                
            });
           } else {
            res.json({
                ok:true,
                message: "Categoria Actualizada ",
                categoria: categoriaDB,
                correccion: body
               
            })  
           } 
            
        }

    });


}

function eliminarCategoria(req,res) {
    const id = req.params.id;
    console.log('estamos en eliminar');
    console.log(id);
    Categoria.findByIdAndRemove(id, (err, categoriaDelete ) => {

          if(err){
            return res.status(400).json({
              ok:false,
              err
            });
          };
      
          if (categoriaDelete === null) {
            return res.status(400).json({
              ok:false,
              err : {
                message: 'Categoria no existe'
              }
            })
          }
      
          res.json({
            ok:true,
            usuario: categoriaDelete
          });
      
      
        })
}

module.exports = {
    allCategoria,
    oneCategoria,
    crearCategoria,
    eliminarCategoria,
    actualizarCategoria
}