<template>
  <div id="app">
    <app-header></app-header>
    <router-view :newProducts='newProducts'
                 :promos="promos"
                 :brands="brands"
                 :allProducts="products">
    </router-view>
    <!-- :products="products" -->
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
        brandProducts: []
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
                this.promos = res.data
              }).catch((error) => {
                console.log(error)
              })
      },
      // Fetches all available brands
      fetchBrands () {
        Axios.get(`${urlPrefix}/v1/products/brands/`)
              .then((res) => {
                this.brands = res.data
              }).catch((error) => {
                console.log(error)
              })
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
