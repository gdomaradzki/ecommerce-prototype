<template>
  <section class="l-product-listing">
    <app-product :products="products"></app-product>
  </section>
</template>

<script>
  import Axios from 'axios'
  const urlPrefix = process.env.NODE_ENV === 'production' ? '/v1/' : `http://${window.location.hostname}:3000`
  export default {
    name: 'ProductListing',
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

    @media (min-width: 600px) {
      margin: 30px;
    }

    @media (min-width: 668px) {
      flex-direction: row;
    }
  }

</style>
