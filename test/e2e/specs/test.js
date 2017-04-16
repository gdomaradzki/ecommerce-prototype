module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      // Ensures that page's title is correct
      .waitForElementVisible('body', 1000)
      .assert.title('farfetch-ecommerce')
      // Test's product listing page
      .waitForElementVisible('.md-brands__check-brand', 1000)
      .click('.md-brands__check-brand')
      // Waits so products are loaded
      .waitForElementVisible('.l-product-listing', 7000)
      .waitForElementVisible('.md-product__wish-list-button', 2000)
      // Adds item to wish list
      .click('.md-product__wish-list-button')
      // Adds item to minibag
      .click('.md-product__cart-button')
      // Returns to home page
      .click('.md-product-listing__return-btn')
      // Checks if products are correctly loaded
      .waitForElementVisible('.l-new-products', 5000)
      .assert.containsText('.md-product__name:first-of-type', 'COLETE MATELASSÊ')
      .waitForElementVisible('option[value="Moncler"]', 5000)
      .click('option[value="Moncler"]')
      .waitForElementVisible('.l-product', 5000)
      .assert.containsText('.md-product__name:first-of-type', 'COLETE MATELASSÊ')
      .waitForElementVisible('.l-current-offers', 5000)
      .assert.containsText('.md-product__name:first-of-type', 'COLETE MATELASSÊ')
      .end()
  }
}
