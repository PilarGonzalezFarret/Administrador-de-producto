const express = require('express');
require("./server/config/mongoose.config");
const cors = require('cors'); // This is new
const { default: mongoose } = require('mongoose');
const app = express();
app.use(cors()) // This is new
app.use(express.json());
require('./server/routes/products.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

