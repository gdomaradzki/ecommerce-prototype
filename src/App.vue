<template>
  <div id="app">
    <app-header></app-header>
    <router-view :newProducts='newProducts'
                 :promos="promos"
                 :brands="brands"
                 :selectBrandHandler="selectBrandHandler"
                 :chosenBrand="chosenBrand">
    </router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/v1/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'app',
    data () {
      return {
        newProducts: [],
        promos: [],
        brands: [],
        chosenBrand: []
      }
    },
    created: function () {
      this.fetchNewProducts()
      this.fetchPromos()
      this.fetchBrands()
    },
    methods: {
      // Fetches all new products from the API
      fetchNewProducts () {
        Axios.get(`${urlPrefix}/v1/products/news/true`)
            .then((res) => {
              this.newProducts = res.data.map(products => products)
            }).catch((error) => {
              console.log(error)
            })
      },
      // Fetches all new promos from the API
      fetchPromos () {
        Axios.get(`${urlPrefix}/v1/products/promos/true`)
            .then((res) => {
              this.promos = res.data.map(promo => promo)
            }).catch((error) => {
              console.log(error)
            })
      },
      // Fetches all available brands
      fetchBrands () {
        Axios.get(`${urlPrefix}/v1/products/brands/`)
            .then((res) => {
              this.brands = res.data.map(brand => brand)
            }).catch((error) => {
              console.log(error)
            })
      },
      // Fetches a chosen brand on home page
      fetchOneBrand (brand) {
        Axios.get(`${urlPrefix}/v1/products/${brand}`)
              .then((res) => {
                console.log(res)
                this.chosenBrand = res.data.map(brand => brand)
              }).catch((error) => {
                console.log(error)
              })
      },
      // Callback that is passed into Home page's select box
      selectBrandHandler (brand) {
        this.fetchOneBrand(brand)
      }
    }
  }
</script>

<style lang="scss">
  // Imports
  @import './assets/plugins/foundation-grid.min.css';
  @import './assets/partials/_config';

  body {
    font-family: $primary-font;
    background-color: $background-color;
    box-sizing: border-box;
  }
</style>
