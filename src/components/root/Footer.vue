<template>
  <footer class="l-app-footer">
    <h6 class="md-footer-info">Footer</h6>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  // Imports
  @import './../../assets/partials/_config';

  .l-app-footer {
    @extend %v-align-center;
    width: 100%;
    padding: 0 15px;
    background-color: $primary-color;
    flex-direction: row;
    transition: .3s ease;
    justify-content: space-between;

    .md-footer-info {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 12px;
      color: #fff;
      margin: 22px 0;

      @media (min-width: 600px) {
        color: $primary-color;
        margin: 18px 0;
        font-size: 24px;
      }
    }

    @media (min-width: 600px) {
      background-color: #fff;
      padding: 0 40px;
    }
  }
</style>
