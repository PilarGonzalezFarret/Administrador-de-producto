//Importación de módulos y configuración inicial:
const express = require('express');
require("./server/config/mongoose.config");
const cors = require('cors'); // This is new
const { default: mongoose } = require('mongoose');

//Creación de la instancia de Express:
const app = express();

//Configuración de middleware:
app.use(cors()) // This is new
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Configuración de rutas:
require('./server/routes/products.routes')(app);

//Inicio del servidor:
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

