module.exports = (app) => {
  const api = app.app.api.products;

  app.route('/v1/products')
      .post(api.createNewProduct)
      .get(api.getProducts)

  app.route('/v1/products/news/:newProduct')
      .get(api.getNewProducts)

  app.route('/v1/products/promos/:promo')
      .get(api.getPromos)

  app.route('/v1/products/brands/')
      .get(api.getBrands)

  app.route('/v1/products/:brand')
      .get(api.getOneBrand)

  app.route('/v1/products/:_id')
      .delete(api.deleteProduct)
};
