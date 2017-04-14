module.exports = (app) => {
  const api = app.app.api.products;

  app.route('/v1/products')
      .post(api.createNewProduct)
      .get(api.getProducts)

  app.route('/v1/products/:_id')
      .delete(api.deleteProduct)
};
