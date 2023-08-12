//Se importa el controlador que contiene las funciones 
//para manejar las operaciones CRUD de los productos.
const ProductController = require("../controllers/products.controller");

//Se establecen las rutas de la API 
//que permiten interactuar con la base de datos
//a través de solicitudes HTTP.
module.exports = app => {
    app.get("/api/products/", ProductController.findAllProducts);
    app.get("/api/products/:id/", ProductController.findOneSingleProduct);
    app.put("/api/products/update/:id/", ProductController.updateExistingProduct);
    app.post("/api/products/new/", ProductController.createNewProduct);
    app.delete("/api/products/delete/:id/", ProductController.deleteAnExistingProduct);
};