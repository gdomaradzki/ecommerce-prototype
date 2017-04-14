<template>
  <main class="l-home-page">
    <picture class="md-landing-page">
      <source media="(max-width: 480px)" srcset="./../../../static/img/landing/01_xs.png">
      <source media="(max-width: 600px)" srcset="./../../../static/img/landing/01_x.png">
      <source media="(max-width: 768px)" srcset="./../../../static/img/landing/01_s.png">
      <source media="(max-width: 1024px)" srcset="./../../../static/img/landing/01_m.png">
      <img class="md-landing-page" src="./../../assets/img/landing/01_lb.png" alt="Landing Image Default">
    </picture>

    <!-- New Products -->
    <section class="l-new-products">
      <h1 class="md-new-products__title">new products</h1>

    </section>

    <!-- Available Brands -->
    <section class="l-brands">
      <h2 class="md-brands__title">check our available brands</h2>
      <select class="md-brands__select"></select>
    </section>

    <!-- Current Offers -->
    <section class="l-current-offers">
      <h3 class="md-current-offers__title">current offers</h3>
      <app-promo-product :newPromos="newPromos"></app-promo-product>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Home',
    props: ['newPromos']
  }
</script>

<style lang="scss">
  // Imports
  @import './../../assets/partials/_config';

  .l-home-page {
    margin-top: 48px;

    @media (min-width: 600px) {
      margin-top: 0;
    }
  }

  .l-new-products {
    margin: 0 15px;

    @media (min-width: 600px) {
      margin: 0 40px;
    }
  }

  .md-new-products__title {
    text-transform: uppercase;
    font-size: 16px;
    color: $primary-color;
    text-align: center;
    margin: 15px 0;

    @media (min-width: 600px) {
      text-align: left;
      font-size: 24px;
    }
  }

  .l-brands {
    margin: 15px 0;
    padding: 15px;
    background-color: #fff;
    .md-brands__title {
      @extend .md-new-products__title;
    }

    @media (min-width: 600px) {
      margin: 75px 0;
      padding: 40px 40px 75px;
    }
  }

  .md-brands__select {
    height: 35px;

    @media (min-width: 600px) {
      width: 370px;
    }
  }

  .l-current-offers {
    margin: 15px;

    .md-current-offers__title {
      @extend .md-new-products__title;
    }

    @media (min-width: 600px) {
      margin: 15px 40px 50px;
    }
  }
</style>
