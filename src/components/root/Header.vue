<template>
  <header class="l-app-header">
    <h1 class="md-header-current-page"> {{ $route.name }} </h1>
    <div class="l-header-quick-access">
      <app-mini-bag></app-mini-bag>
      <app-wish-list></app-wish-list>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
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
    }

    @media (min-width: 600px) {
      width: auto;
      margin-top: 0;
    }
  }
</style>
