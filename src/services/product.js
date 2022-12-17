const productDAO = require("../../daos/productsDao");

class ProductService {

  static async getAllProds() {
    try {
      const result = await productDAO.getAll();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async addProd(product) {
    try {
      const result = await productDAO.saveProduct(product);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = ProductService;
