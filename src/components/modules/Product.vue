<template>
  <article class="l-product">
    <img class="md-product__photo" src="./../../assets/img/men/1.jpg" alt="asad">
    <h3 class="md-product__name">x off-white</h3>
    <p class="md-product__description">Moletom com recorte nas mangas</p>
    <div class="md-product__pricing">
      <strong class="md-product__price">£72</strong>
      <strong class="md-product__offer">£50</strong>
    </div>
    <button class="md-product__cart-button">add to cart</button>
  </article>
</template>

<script>
  export default {
    name: 'Product'
  }
</script>

<style lang="scss" scoped>
  // Imports
  @import './../../assets/partials/_config';

  .l-product {
    margin: 10px;
    background-color: #fff;
    padding: 20px 20px 25px;
    width: 100%;

    .md-product__photo {
      width: 250px;
      display: block;
      margin: 0 auto 20px;

      @media (min-width: 600px) {
        width: 339px;
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
    }

    .md-product__description {
      text-align: center;
      color: $border-color;
      font-size: 12px;
      margin: 0;
      padding: 10px 0;
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
      }

      .md-product__offer {
        @extend .md-product__price;
        text-decoration: none;
        color: $offer-color;
      }
    }

    .md-product__cart-button {
      text-transform: uppercase;
      padding: 13px 0;
      color: $primary-color;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      border: 1px solid $border-color;
      border-radius: 30px;
      width: 100%;
      box-sizing: border-box;
      transition: .3s ease;

      &:hover {
        background-color: $primary-color;
        color: #fff;
      }
    }

    @media (min-width: 600px) {
      width: auto;
    }
  }
</style>
