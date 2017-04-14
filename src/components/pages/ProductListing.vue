<template>
  <section class="l-product-listing">
    <app-product></app-product>
    <!-- <app-product></app-product>
    <app-product></app-product>
    <app-product></app-product> -->
  </section>
</template>

<script>
  export default {
    name: 'ProductListing'
  }
</script>

<style lang="scss">
  // Imports
  @import './../../assets/partials/_config';

  .l-product-listing {
    display: flex;
    margin: 40px 5px;
    transition: .3s ease;

    @media (min-width: 600px) {
      margin: 40px;
    }
  }

</style>
