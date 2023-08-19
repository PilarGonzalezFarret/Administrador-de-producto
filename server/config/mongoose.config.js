//Se importa el módulo mongoose:
const mongoose = require("mongoose");

//Se inicia la conexión con la base de datos:
mongoose.connect('mongodb://127.0.0.1/productosdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('The connection to the database was established.'))
  .catch(err => console.log('There was an error when connecting to the database.', err));