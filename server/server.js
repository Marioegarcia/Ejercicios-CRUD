require('./config/config');
const express = require('express');

const morgan = require('morgan')
const mongoose = require('mongoose');



mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology',true);

const app = express();
app.use(morgan('tiny'));
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//Configuracion Global de Routes
// Load Routing
const authRoutes = require("./routes/auth");
const usuarioRoutes = require('./routes/usuario');
const categoriaRoutes = require('./routes/categoria');
const dietasRoutes = require('./routes/dietas');
const productosRoutes = require('./routes/producto');
const comidasRoutes = require('./routes/comidas');
const consultaRoutes = require('./routes/consulta');
const historiaRoutes = require('./routes/historia');

//Router Basic
app.use(authRoutes);
app.use(usuarioRoutes);
app.use(categoriaRoutes);
app.use(dietasRoutes);
app.use(productosRoutes);
app.use(comidasRoutes);
app.use(consultaRoutes);
app.use(historiaRoutes);


//Configure Header HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


mongoose.connect(process.env.URLDB, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});