const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1/productosdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Se estableció la conección con la base de datos.'))
  .catch(err => console.log('Hubo un error al conectar con la base de datos.', err));