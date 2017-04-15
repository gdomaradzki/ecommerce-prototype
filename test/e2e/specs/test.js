module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
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
