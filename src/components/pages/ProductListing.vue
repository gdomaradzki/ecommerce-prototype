<template>
  <section class="l-product-listing">
    <app-product :products="products"></app-product>
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
