//Importación de módulos y configuración inicial:
const express = require('express');
require("./server/config/mongoose.config");
const cors = require('cors'); // This is new
const { default: mongoose } = require('mongoose');

//Creación de la instancia de Express:
const app = express();

//Restringir los permisos de cors.
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
}
//Configuración de middleware:
app.use(cors(corsOptions)) // This is new
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Configuración de rutas:
require('./server/routes/products.routes')(app);

//Inicio del servidor:
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

