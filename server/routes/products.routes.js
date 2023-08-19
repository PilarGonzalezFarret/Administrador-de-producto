//Se importa el controlador que contiene las funciones 
//para manejar las operaciones CRUD de los productos.
//const ProductController = require("../controllers/products.controller");
const { findAllProducts, 
    findOneSingleProduct, 
    updateExistingProduct, 
    createNewProduct, 
    deleteAnExistingProduct } = require('../controllers/products.controller'); // enla línea 3 tengo solo el bojeto, pero en las sgtes líneas puse las propiedades que están dentro del objeto. Por eso no es necesario escribirlas en cada ruta.

//Se establecen las rutas de la API 
//que permiten interactuar con la base de datos
//a través de solicitudes HTTP.
module.exports = app => {
    app.get("/api/products/", findAllProducts);
    app.get("/api/products/:id/", findOneSingleProduct);
    app.put("/api/products/update/:id/", updateExistingProduct);
    app.post("/api/products/new/", createNewProduct);
    app.delete("/api/products/delete/:id/", deleteAnExistingProduct);
};