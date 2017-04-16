<template>
  <div id="app">
    <app-header :miniBag="miniBag" :wishList="wishList"></app-header>
    <router-view :newProducts='newProducts'
                 :promos="promos"
                 :brands="brands"
                 :addToCart="addToCart"
                 :removeFromCart="removeFromCart"
                 :addToWishList="addToWishList"
                 :removeFromWishList="removeFromWishList">
    </router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'development' ? '' : `http://${window.location.hostname}:3000`
  export default {
    name: 'app',
    data () {
      return {
        newProducts: [],
        promos: [],
        brands: [],
        brandProducts: [],
        miniBag: {
          items: [],
          price: 0,
          quantity: 0
        },
        wishList: 0
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
                this.newProducts = res.data
                this.newProducts.forEach((product) => {
                  product.previousQuantity = 1
                })
              }).catch((error) => {
                console.log(error)
              })
      },
      // Fetches all new promos from the API
      fetchPromos () {
        Axios.get(`${urlPrefix}/v1/products/promos/true`)
              .then((res) => {
                this.promos = res.data
                this.promos.forEach((product) => {
                  product.previousQuantity = 1
                })
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
      },
      // Adds products to the cart
      addToCart (product) {
        // If product has a promotion, sums its offer to minibag's price, else sums its normal price
        product.promo ? this.miniBag.price += product.price.offer : this.miniBag.price += product.price.price
        this.miniBag.quantity++
        this.miniBag.items.unshift(product)
      },
      // Removes products from the cart
      removeFromCart (product) {
        // If product has a promotion, subtracts its offer from minibag's price, else subtracts its normal price
        product.promo ? this.miniBag.price -= product.price.offer : this.miniBag.price -= product.price.price
        this.miniBag.quantity--
      },
      // Adds products to wish list
      addToWishList (product) {
        this.wishList++
      },
      // Removes products from wish list
      removeFromWishList (product) {
        this.wishList--
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
    padding: 0;
    margin: 0;
  }
</style>
