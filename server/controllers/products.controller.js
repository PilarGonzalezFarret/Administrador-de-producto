
//Este código se refiere a las funciones controladoras 
//que manejan las operaciones CRUD 
//(Crear, Leer, Actualizar, Eliminar) 
//en la base de datos para los productos.

//Se importa el modelo de datos del producto 
//que se encuentra en la carpeta models.
const Product = require("../models/products.model");

//Las sgtes funciones controladoras manejan las operaciones CRUD 
//para los productos en la base de datos.
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allDaProducts => res.json({ products: allDaProducts}))
        .catch(err => res.json({ message: "Something went wrong.1", error: err}));
};

module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id})
        .then(oneSingleProduct => res.json({ product: oneSingleProduct}))
        .catch(err => res.json({ message: "Something went wrong.2", error: err}));
};

module.exports.createNewProduct = (req, res) => {
    console.log(req.body);
    Product.create(req.body)
        .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct}))
        .catch(err => res.json({ message: "Something went wrong.3", error: err}));

};

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id })
        .then(updatedProduct => res.json({ product: updatedProduct}))
        .catch(err => res.json({ message: "Something went wrong.4", error: err}));
};

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong.5", error: err}));
};