<template>
  <div class="l-product-listing-container">
    <router-link class="md-product-listing__return-btn" to="/">go back</router-link>
    <section class="l-product-listing">
      <app-product :products="products"
                   :addToCart="addToCart"
                   :addToWishList="addToWishList"
                   :removeFromCart="removeFromCart"
                   :removeFromWishList="removeFromWishList">
      </app-product>
    </section>
    <nav class="l-pagination">
      <ul class="md-pagination">
        <li class="md-pagination__pages" v-for="page in pages">{{ page }}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '' : `http://${window.location.hostname}:3000`
  export default {
    name: 'ProductListing',
    props: ['addToCart', 'addToWishList', 'removeFromCart', 'removeFromWishList'],
    data () {
      return {
        products: [],
        pages: ['<', '1', '>']
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
                // Adds previousQuantity for miniCart control
                this.products.forEach((product) => {
                  product.previousQuantity = 1
                })
              }).catch((error) => {
                console.log(error)
              })
      },
      // Fetches all products
      fetchAllProducts () {
        Axios.get(`${urlPrefix}/v1/products/`)
              .then((res) => {
                this.products = res.data
                // Adds previousQuantity for miniCart control
                this.products.forEach((product) => {
                  product.previousQuantity = 1
                })
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

  .l-product-listing-container {
    margin: 83px 15px 40px;

    @media (min-width: 600px) {
      margin: 30px;
    }
  }

  .l-product-listing {
    display: flex;
    transition: .3s ease;
    flex-direction: column;

    @media (min-width: 668px) {
      flex-direction: row;
      flex-flow: row wrap;
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
      width: 130px;
      margin: 0 10px 25px;
    }
  }

  .l-pagination {
    .md-pagination {
      display: flex;
      list-style-type: none;
      height: 45px;
      @extend %v-align-center;
      @extend %h-align-center;
      margin: 40px 0 50px;
      padding: 0;
    }

    .md-pagination__pages {
      color: $primary-color;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      margin: 20px;
      transition: .3s ease;

      @media (min-width: 600px) {
        font-size: 16px;
      }

      @media (min-width: 1024px) {
        font-size: 18px;
      }
    }
  }
</style>
