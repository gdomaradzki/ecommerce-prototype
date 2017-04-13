<template>
  <div class="md-mini-bag">
    <strong class="md-mini-bag__price">£ 335</strong>
    <svg class="md-mini-bag__icon" viewBox="36 8 17 18">
        <path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill="#444A59" fill-rule="evenodd"></path>
    </svg>
    <strong class="md-mini-bag__quantity">2</strong>
  </div>
</template>

<script>
  export default {
    name: 'MiniBag'
  }
</script>

<style lang="scss" scoped>
  // Imports
  @import './../../assets/partials/_config';

  .md-mini-bag {
    @extend %v-align-center;
    .md-mini-bag__price {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
      margin: 0 5px;

      @media (min-width: 600px) {
        color: $primary-color;
      }
    }

    .md-mini-bag__icon {
      width: 17px;
      height: 17px;

      path {
        fill: #fff;
        transition: .3s ease;

        @media (min-width: 600px) {
          fill: $primary-color;
        }
      }
    }

    .md-mini-bag__quantity {
      transform: translateY(-10px) translateX(-3px);
    }
  }
</style>
