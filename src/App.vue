<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  // Imports
  @import './assets/plugins/foundation-grid.min.css';
  @import './assets/partials/_config';

  body {
    font-family: $primary-font;
    background-color: $background-color;
  }
</style>
