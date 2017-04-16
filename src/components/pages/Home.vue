<template>
  <main class="l-home-page">
    <picture class="md-landing-page">
      <source media="(max-width: 480px)" srcset="./../../../static/img/landing/01_xs.png">
      <source media="(max-width: 600px)" srcset="./../../../static/img/landing/01_x.png">
      <source media="(max-width: 768px)" srcset="./../../../static/img/landing/01_s.png">
      <source media="(max-width: 1024px)" srcset="./../../../static/img/landing/01_m.png">
      <img class="md-landing-page__default" src="./../../assets/img/landing/01_lb.png" alt="Landing Image Default">
    </picture>

    <!-- Available Brands -->
    <section class="l-brands">
      <h2 class="md-brands__title">check our available brands</h2>
      <h3 class="md-brands__title">or check our complete product list</h3>
      <select class="md-brands__select" v-model="selectedBrand">
        <option class="md-brands__option" value="">Choose a brand</option>
        <option class="md-brands__option" :value="brand" v-for="brand in brands">{{ brand }}</option>
      </select>
      <router-link class="md-brands__check-brand"
                   :to="selectedBrand ? `/products/${selectedBrand}/list` : '/products/list'">
                   go to {{ selectedBrand ? selectedBrand : 'full list' }}
      </router-link>
    </section>

    <!-- New Products -->
    <section class="l-new-products">
      <h1 class="md-new-products__title">new products</h1>
      <app-product :products="newProducts" :addToCart="addToCart" :addToWishList="addToWishList"></app-product>
    </section>

    <!-- Current Offers -->
    <section class="l-current-offers">
      <h3 class="md-current-offers__title">current offers</h3>
      <app-product :products="promos" :addToCart="addToCart" :addToWishList="addToWishList"></app-product>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'Home',
    props: ['newProducts', 'promos', 'brands', 'addToCart', 'addToWishList'],
    data () {
      return {
        selectedBrand: '',
        chosenBrand: []
      }
    }
  }
</script>

<style lang="scss">
  // Imports
  @import './../../assets/partials/_config';

  .l-home-page {
    margin-top: 48px;

    .md-landing-page {
      .md-landing-page__default {
        width: 100%;
      }
    }

    @media (min-width: 600px) {
      margin-top: 0;
    }
  }

  .l-new-products {
    margin: 0 15px;

    @media (min-width: 600px) {
      margin: 0 30px;
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
      margin: 15px 10px;
    }
  }

  .l-brands {
    margin: 15px 0;
    padding: 15px;
    background-color: #fff;
    .md-brands__title {
      @extend .md-new-products__title;
      @media (min-width: 600px) {
        margin: 15px 0;
      }
    }

    @media (min-width: 600px) {
      margin: 75px 0;
      padding: 40px 40px 75px;
    }

    .md-brands__check-brand {
      text-transform: uppercase;
      border-radius: 5px;
      border: 2px solid $border-color;
      color: $primary-color;
      transition: .3s ease;
      text-decoration: none;
      width: 100%;
      display: flex;
      @extend %v-align-center;
      @extend %h-align-center;
      height: 35px;
      margin-bottom: 35px;

      &:hover {
        background-color: $primary-color;
        border-color: $primary-color;
        color: #fff;
      }

      @media (min-width: 600px) {
        display: inline-flex;
        width: 250px;
      }
    }
  }

  .md-brands__select {
    height: 35px;
    padding: 5px;
    background-color: $primary-color;
    border: 1px solid #fff;
    color: #fff;
    border-radius: 4px;
    margin: 15px 0;

    @media (min-width: 600px) {
      width: 370px;
    }
  }

  .l-current-offers {
    margin: 15px;

    .md-current-offers__title {
      @extend .md-new-products__title;

      @media (min-width: 600px) {
        text-align: left;
        font-size: 24px;
        margin: 15px 10px;
      }
    }

    @media (min-width: 600px) {
      margin: 15px 30px 50px;
    }
  }
</style>
