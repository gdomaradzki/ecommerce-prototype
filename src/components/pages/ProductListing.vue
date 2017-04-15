<template>
  <section class="l-product-listing">
    <!-- <router-link class="md-product-listing__return-btn" to="/">go back</router-link> -->
    <app-product :products="products" :addToCart="addToCart" :addToWishList="addToWishList"></app-product>
  </section>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/v1/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'ProductListing',
    props: ['addToCart', 'addToWishList'],
    data () {
      return {
        products: []
      }
    },
    created: function () {
      // If user is not on specific brand page, fetch all products, else fetch brand's products
      this.$route.name === 'Product Listing' ? this.fetchAllProducts() : this.fetchBrandProducts(this.$route.params.brand)
    },
    methods: {
      // Fetches chosen brand's products
      fetchBrandProducts (brand) {
        Axios.get(`${urlPrefix}/v1/products/${brand}`)
              .then((res) => {
                this.products = res.data
                console.log(brand)
              }).catch((error) => {
                console.log(error)
              })
      },
      // Fetches all products
      fetchAllProducts () {
        Axios.get(`${urlPrefix}/v1/products/`)
              .then((res) => {
                this.products = res.data
              }).catch((error) => {
                console.log(error)
              })
      }
    }
  }
</script>

<style lang="scss">
  // Imports
  @import './../../assets/partials/_config';

  .l-product-listing {
    display: flex;
    margin: 83px 15px 40px;
    transition: .3s ease;
    flex-direction: column;
    flex-flow: row wrap;

    @media (min-width: 600px) {
      margin: 30px;
    }

    @media (min-width: 668px) {
      flex-direction: row;
    }
  }

  .md-product-listing__return-btn {
    text-decoration: none;
    color: $primary-color;
    background-color: #fff;
    border: 2px solid $primary-color;
    border-radius: 5px;
    @extend %v-align-center;
    @extend %h-align-center;
    height: 35px;
    text-transform: uppercase;
    margin-bottom: 30px;
    transition: .3s ease;
    width: 100%;

    &:hover {
      background-color: $primary-color;
      color: #fff;
    }

    @media (min-width: 600px) {
      // width: 130px;
      // flex: 0 0 100%;
    }
  }

</style>
