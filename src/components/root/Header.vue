<template>
  <header class="l-app-header">
    <!-- Displays current page the user is on -->
    <h1 class="md-header-current-page"> {{ $route.name === ':brand' ? $route.params.brand : $route.name }} </h1>
    <div class="l-header-quick-access">
      <app-mini-bag :miniBag="miniBag" @toggleVisible="isVisible = !isVisible"></app-mini-bag>
      <app-wish-list :wishList="wishList"></app-wish-list>
    </div>
    <app-mini-cart :miniBag="miniBag" :isVisible="isVisible"></app-mini-cart>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: ['miniBag', 'wishList'],
    data () {
      return {
        isVisible: false
      }
    }
  }
</script>

<style lang="scss">
  // Imports
  @import './../../assets/partials/_config';

  .l-app-header {
    @extend %v-align-center;
    width: 100%;
    padding: 0 15px;
    background-color: $primary-color;
    flex-direction: row;
    transition: .3s ease;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    .l-mini-cart-container {
      position: relative;
      background-color: red;
    }

    .md-header-current-page {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      color: #fff;
      margin: 15px 0;

      @media (min-width: 600px) {
        color: $primary-color;
        margin: 18px 0;
        font-size: 24px;
      }
    }

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 40px;
      background-color: #fff;
      position: static;
      border-bottom: 1px solid $primary-color;
    }
  }

  .l-header-quick-access {
    display: flex;
    @extend %v-align-center;
    justify-content: space-around;
    width: 40%;

    .md-mini-bag__quantity {
      background-color: $base-color;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      font-size: 8px;
      color: #fff;
      font-weight: 700;
      @extend %v-align-center;
      @extend %h-align-center;

      @media (min-width: 1360px) {
        width: 20px;
        height: 20px;
        font-size: 10px;
      }
    }

    @media (min-width: 600px) {
      width: auto;
      margin-top: 0;
    }
  }
</style>
