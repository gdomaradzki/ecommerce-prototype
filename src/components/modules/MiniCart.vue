<template>
  <article class="l-mini-cart" :class="isVisible ? 'l-mini-cart--is-active' : ''">
    <ul class="md-mini-cart__list">
      <li class="md-mini-cart__item" v-for="item in miniBag.items">
        <img class="md-mini-cart__photo" :src="item.url" :alt="item.name">
        <div class="md-mini-cart__item-info">
          <p class="md-mini-cart__name">{{ item.name }}</p>
          <p class="md-mini-cart__description">{{ item.description }}</p>
        </div>
        <div class="md-mini-cart__item-pricing">
          <input type="text" class="md-mini-cart__quantity" @input="changeQuantity(item)" v-model="item.quantity">
          <p class="md-mini-cart__price">£ {{ item.promo ? item.quantity * item.price.offer : item.quantity * item.price.price }}</p>
        </div>
      </li>
    </ul>
    <strong class="md-mini-cart__total">£ {{ miniBag.price }}</strong>
  </article>
</template>

<script>
  export default {
    name: 'MiniCart',
    props: ['miniBag', 'isVisible'],
    methods: {
      changeQuantity (item) {
        this.miniBag.price += item.promo ? (item.quantity - item.previousQuantity) * item.price.offer : (item.quantity - item.previousQuantity) * item.price.price
        this.miniBag.quantity += item.quantity - item.previousQuantity
        item.previousQuantity = item.quantity
      }
    }
  }
</script>

<style lang="scss" scoped>
  // Imports
  @import './../../assets/partials/_config';

  .l-mini-cart {
    position: fixed;
    right: 0px;
    top: 45px;
    transition: .3s ease;
    opacity: 0;
    max-height: calc(100% - 45px);
    width: 100%;
    background-color: #fff;
    border: 1px solid $primary-color;
    color: $primary-color;
    overflow-y: scroll;
    z-index: -1;
    display: none;

    @media (min-width: 600px) {
      position: absolute;
      top: 72px;
      width: 320px;
    }

    .md-mini-cart__list {
      padding: 0;
      margin: 0;
    }

    .md-mini-cart__item {
      list-style-type: none;
      display: flex;
      flex-flow: wrap column;
      border-bottom: 1px solid $primary-color;
      padding: 15px;

      @media (min-width: 480px) {
        flex-flow: wrap row;
      }

      .md-mini-cart__item-info {
        display: flex;
        flex-flow: wrap row;
        flex: 1 0 75%;
        padding: 0 15px;

        .md-mini-cart__name {
          font-size: 16px;
          font-weight: 700;
          margin: 15px 0 0;
        }

        .md-mini-cart__description {
          font-size: 14px;
          font-weight: 500;
        }

        @media (min-width: 600px) {
          padding: 0;
        }
      }

      .md-mini-cart__photo {
        width: 150px;
        align-self: center;
        border: 1px solid $primary-color;
        padding: 10px;

        @media (min-width: 480px) {
          width: 90px
        }

        @media (min-width: 600px) {
          margin: 0 auto;
          width: 165px;
        }
      }

      .md-mini-cart__item-pricing {
        display: flex;
        padding: 0 15px;

        @media (min-width: 480px) {
          padding: 0;
        }

        @media (min-width: 600px) {
          margin: 15px 0;
        }

        .md-mini-cart__quantity {
          height: 35px;
          width: 50px;
          text-align: center;
        }

        .md-mini-cart__price {
          margin: 0 15px;
          @extend %v-align-center;
          flex: 1 0 50%;
        }
      }
    }

    .md-mini-cart__total {
      display: flex;
      justify-content: flex-end;
      padding: 15px;
      color: $offer-color;
      font-size: 22px;
    }
  }

  .l-mini-cart--is-active {
    top: 45px;
    opacity: 1;
    transition: .3s ease;
    z-index: 90;
    display: block;

    @media (min-width: 600px) {
      top: 72px;
    }
  }
</style>
