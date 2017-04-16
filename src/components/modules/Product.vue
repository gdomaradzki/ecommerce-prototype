<template>
  <div class="l-product-container">
    <article class="l-product" v-for="product in products">
      <img class="md-product__photo" :src="product.url" :alt="product.name">
      <button class="md-product__wish-list-button" @click="wishListButtonHandler(product)" :class="product.inWishList ? 'md-product__wish-list-button--added-to-wish-list' : ''">
        <svg class="md-wish-list__icon" viewBox="0 6 20 20">
            <polygon id="Wishlist-Icon" stroke="none" fill="#444A59" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
        </svg>
      </button>
      <h3 class="md-product__name">{{ product.name }}</h3>
      <p class="md-product__description">{{ product.description }}</p>
      <div class="md-product__pricing" :class="product.promo ? 'md-product__pricing--has-offer' : 'md-product__pricing--no-offers'">
        <strong class="md-product__price">£{{ product.price.price }}</strong>
        <strong class="md-product__offer">£{{ product.price.offer }}</strong>
      </div>
      <button class="md-product__cart-button" @click="cartButtonHandler(product)" :class="product.inCart ? 'md-product__cart-button--added-to-cart' : ''"></button>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    props: ['products', 'miniBag', 'addToCart', 'removeFromCart', 'addToWishList', 'removeFromWishList'],
    methods: {
      // Handles the cart button
      cartButtonHandler (product) {
        // Swaps the button's state
        product.inCart = !product.inCart
        // Adds or remove from cart
        product.inCart ? this.addToCart(product) : this.removeFromCart(product)
      },
      // Handles the wish list button
      wishListButtonHandler (product) {
        // Swaps the button's state
        product.inWishList = !product.inWishList
        // Adds or remove from wish list
        product.inWishList ? this.addToWishList(product) : this.removeFromWishList(product)
      }
    }
  }
</script>

<style lang="scss">
  // Imports
  @import './../../assets/partials/_config';

  .l-product-container {
    display: block;

    @media (min-width: 600px) {
      display: flex;
      flex-flow: row wrap;
    }
  }

  .l-product {
    background-color: #fff;
    padding: 20px 20px 25px;
    margin: 10px 0;
    width: 100%;
    position: relative;
    transition: .3s ease;

    .md-product__photo {
      width: 250px;
      display: block;
      margin: 0 auto 20px;

      @media (min-width: 600px) {
        width: auto;
      }
    }

    .md-product__wish-list-button {
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

    .md-product__wish-list-button--added-to-wish-list {
      border-color: $primary-color;
      .md-wish-list__icon {
        width: 20px;
        height: 20px;
        polygon {
          transition: .3s ease;
          fill: $primary-color;
        }
      }

      &:hover {
        border-color: $border-color;
        .md-wish-list__icon {
          polygon {
            fill: $border-color;
          }
        }
      }
    }

    .md-product__name {
      padding: 10px 0 0;
      margin: 0;
      text-align: center;
      text-transform: uppercase;
      color: $primary-color;
      font-size: 14px;
      font-weight: 700;
      transition: .3s ease;

      @media (min-width: 600px) {
        min-height: 100px;
      }

      @media (min-width: 1360px) {
        font-size: 22px;
      }
    }

    .md-product__description {
      text-align: center;
      color: #8d8d8d;
      font-size: 12px;
      margin: 0;
      padding: 10px 0;
      transition: .3s ease;

      @media (min-width: 600px) {
        text-align: justify;
        min-height: 140px;
      }

      @media (min-width: 1360px) {
        font-size: 16px;
      }
    }

    .md-product__pricing {
      text-align: center;
      padding: 0 0 20px;
      .md-product__price {
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

      .md-product__offer {
        @extend .md-product__price;
        text-decoration: none;
        color: $offer-color;
      }
    }

    .md-product__pricing--no-offers {
      .md-product__price {
        text-decoration: none;
      }
      .md-product__offer {
        display: none;
      }
    }

    .md-product__cart-button {
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
      position: relative;

      &:after {
        content: 'add to cart';
      }

      &:hover {
        background-color: $primary-color;
        border-color: $primary-color;
        color: #fff;
      }

      @media (min-width: 1360px) {
        font-size: 18px;
      }
    }

    .md-product__cart-button--added-to-cart {
      background-color: $border-color;
      border-color: $border-color;

      &:before {
        content: 'in cart'
      }

      &:after {
        content: '';
      }
    }

    &:hover {
      box-shadow: 0 3px 10px -1px darken($border-color, 30%);
    }

    @media (min-width: 600px) {
      margin: 10px;
      width: auto;
      flex: 1 0 45%;
    }

    @media (min-width: 1024px) {
      flex: 1 0 23%;
      max-width: 345px;
    }

    @media (min-width: 1500px) {
      max-width: auto;
    }
  }
</style>
