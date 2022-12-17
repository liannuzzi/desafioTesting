const express = require("express");
const { Router } = express;
const routerProducto = Router();
const {getAllProducts,
    addNewProduct} = require('../controllers/product')

routerProducto.get("/", getAllProducts);
routerProducto.post("/", addNewProduct);

module.exports=routerProducto