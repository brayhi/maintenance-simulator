require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mantRoutes = require('./routes/mantenimientos');

//CORS 
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



// Habilitar la carpeta public

app.use(express.static(path.resolve(__dirname, '../public')));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

// Configuracion global de rutas
app.use('/', mantRoutes);

app.listen(process.env.PORT, () => console.log('Escuchando el puerto: ', process.env.PORT));