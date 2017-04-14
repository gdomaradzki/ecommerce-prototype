const mongoose = require('mongoose');

module.exports = (app) => {
  const api = {};
  const Product = mongoose.model('Product');

  api.createNewProduct = (req, res) => {
    let product = new Product();
    product.name = req.body.name;
    product.description = req.body.description;
    product.type = req.body.type;
    product.productSize = req.body.productSize;
    product.stock = req.body.stock;
    product.brand = req.body.brand;
    product.price = req.body.price;

    product.save(error => {
      if (error)
        return res.send();

      res.json({ message: 'Product created' });
      console.log('Product Created');
    });
  };

  api.getProducts = (req, res) => {
    Product.find((error, product) => {
      if (error)
        res.send(error);

      res.status(200).json(product);
      return true;
    });
  };

  api.deleteProduct = (req, res) => {
    Product.remove({ _id: req.params._id }, function (error, removed) {
      if (error)
        return console.log(error);

      if (removed) {
        res.status(200).end();
        console.log('Product removed');
      }

      res.status(500).end();
    });
  };

  return api;
};
