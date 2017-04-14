<template>
  <div id="app">
    <app-header></app-header>
    <router-view :newPromos="newPromos"></router-view>
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
        newPromos: []
      }
    },
    mounted: function () {
      this.fetchNewPromos()
    },
    methods: {
      // Fetches all new promos from the API
      fetchNewPromos () {
        Axios.get(`${urlPrefix}/v1/products/true`)
            .then((res) => {
              this.newPromos = res.data.map(promo => promo)
              console.log(this.newPromos)
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
