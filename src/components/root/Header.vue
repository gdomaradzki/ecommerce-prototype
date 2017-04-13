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
    justify-content: space-between;
    padding: 0 40px;
    background-color: #fff;

    .md-header-current-page {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 24px;
      color: $primary-color;
      margin: 18px 0;
    }
  }

  .l-header-quick-access {
    display: flex;
    @extend %v-align-center;

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
  }
</style>
