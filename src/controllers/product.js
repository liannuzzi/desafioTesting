const ProductService = require("../services/product");

async function getAllProducts(req, res) {
    const _result= await ProductService.getAllProds()
    res.json(_result)
}

async function addNewProduct(req, res) {
    const _result= await ProductService.addProd(req.body)
    console.log(req.body)
    res.json(_result)
}


module.exports = {
  getAllProducts,
  addNewProduct
};
