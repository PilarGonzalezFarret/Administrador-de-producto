//Importación del módulo mongoose:
const mongoose = require("mongoose");

//Definición del esquema del proyecto:
const ProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String
}, {timestamps: true});

//Creación del modelo Product:
const Product = mongoose.model("Product", ProductSchema);

//Exportación del modelo:
module.exports = Product;