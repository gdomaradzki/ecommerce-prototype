<template>
  <div>
    <article class="l-promo-product" v-for="promo in newPromos">
      <img class="md-promo-product__photo" :src="promo.url" :alt="promo.name">
      <button class="md-promo-product__wish-list-button">
        <svg class="md-wish-list__icon" viewBox="0 6 20 20">
            <polygon id="Wishlist-Icon" stroke="none" fill="#444A59" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
        </svg>
      </button>
      <h3 class="md-promo-product__name">{{ promo.name }}</h3>
      <p class="md-promo-product__description">{{ promo.description }}</p>
      <div class="md-promo-product__pricing">
        <strong class="md-promo-product__price">£{{ promo.price.price }}</strong>
        <strong class="md-promo-product__offer">£{{ promo.price.offer }}</strong>
      </div>
      <button class="md-promo-product__cart-button">add to cart</button>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'PromoProduct',
    props: ['newPromos']
  }
</script>

<style lang="scss" scoped>
  // Imports
  @import './../../assets/partials/_config';

  .l-promo-product {
    background-color: #fff;
    padding: 20px 20px 25px;
    margin: 10px 0;
    width: 100%;
    position: relative;

    .md-promo-product__photo {
      width: 250px;
      display: block;
      margin: 0 auto 20px;

      @media (min-width: 600px) {
        width: 339px;
      }
    }

    .md-promo-product__wish-list-button {
      border-radius: 50%;
      border: 2px solid $border-color;
      width: 40px;
      height: 40px;
      transition: .3s ease;
      @extend %v-align-center;
      @extend %h-align-center;
      position: absolute;
      top: 10px;
      right: 10px;

      .md-wish-list__icon {
        width: 20px;
        height: 20px;
        polygon {
          transition: .3s ease;
          fill: $border-color;
        }
      }

      &:hover {
        border-color: $primary-color;
        .md-wish-list__icon {
          polygon {
            fill: $primary-color;
          }
        }
      }
    }

    .md-promo-product__name {
      padding: 10px 0 0;
      margin: 0;
      text-align: center;
      text-transform: uppercase;
      color: $primary-color;
      font-size: 14px;
      font-weight: 700;
      transition: .3s ease;

      @media (min-width: 1360px) {
        font-size: 24px;
      }
    }

    .md-promo-product__description {
      text-align: center;
      color: $border-color;
      font-size: 12px;
      margin: 0;
      padding: 10px 0;
      transition: .3s ease;

      @media (min-width: 1360px) {
        font-size: 18px;
      }
    }

    .md-promo-product__pricing {
      text-align: center;
      padding: 0 0 20px;
      .md-promo-product__price {
        color: $primary-color;
        font-size: 14px;
        font-weight: 700;
        text-decoration: line-through;
        margin: 0 5px;
        transition: .3s ease;

        @media (min-width: 1360px) {
          font-size: 20px;
        }
      }

      .md-promo-product__offer {
        @extend .md-promo-product__price;
        text-decoration: none;
        color: $offer-color;
      }
    }

    .md-promo-product__cart-button {
      text-transform: uppercase;
      padding: 13px 0;
      color: $primary-color;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      border: 2px solid $border-color;
      border-radius: 30px;
      width: 100%;
      box-sizing: border-box;
      transition: .3s ease;

      &:hover {
        background-color: $primary-color;
        border-color: $primary-color;
        color: #fff;
      }

      @media (min-width: 1360px) {
        font-size: 18px;
      }
    }

    @media (min-width: 600px) {
      margin: 0;
      width: 339px;
    }
  }
</style>
