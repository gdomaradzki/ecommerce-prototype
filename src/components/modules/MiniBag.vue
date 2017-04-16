<template>
  <div class="md-mini-bag" @click="$emit('toggleVisible')">
    <strong class="md-mini-bag__price">£ {{ miniBag.price }}</strong>
    <svg class="md-mini-bag__icon" viewBox="36 8 17 18">
        <path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill="#444A59" fill-rule="evenodd"></path>
    </svg>
    <strong class="md-mini-bag__quantity">{{ miniBag.quantity }}</strong>
  </div>
</template>

<script>
  export default {
    name: 'MiniBag',
    props: ['miniBag']
  }
</script>

<style lang="scss" scoped>
  // Imports
  @import './../../assets/partials/_config';

  .md-mini-bag {
    cursor: pointer;
    @extend %v-align-center;
    .md-mini-bag__price {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      margin: 0 5px;
      transition: .3s ease;

      @media (min-width: 600px) {
        color: $primary-color;
      }

      @media (min-width: 1360px) {
        font-size: 18px;
      }
    }

    .md-mini-bag__icon {
      width: 17px;
      height: 17px;
      transition: .3s ease;

      path {
        fill: #fff;
        transition: .3s ease;

        @media (min-width: 600px) {
          fill: $primary-color;
        }
      }

      @media (min-width: 1360px) {
        width: 25px;
        height: 25px;
      }
    }

    .md-mini-bag__quantity {
      transform: translateY(-10px) translateX(-3px);
      transition: .3s ease;

      @media (min-width: 1360px) {
        transform: translateY(-10px) translateX(0);
      }
    }

    @media (min-width: 1360px) {
      margin: 0 15px;
    }
  }
</style>
