import Vue from 'vue'
import App from '@/App'

describe('App.vue', () => {
  it('Should add price and quantity to minibag', () => {
    const vm = new Vue({
      data: App.data,
      methods: App.methods
    })

    const product = { promo: false, price: { price: 110.95 } }
    const productOffer = { promo: true, price: { price: 110, offer: 80 } }

    vm.addToCart(product)
    expect(vm.$data.miniBag.price).to.equal(product.price.price)
    expect(vm.$data.miniBag.quantity).to.equal(1)

    vm.addToCart(productOffer)
    expect(vm.$data.miniBag.price).to.equal(product.price.price + productOffer.price.offer)
    expect(vm.$data.miniBag.quantity).to.equal(2)
  })

  it('Should add quantity to wishlist', () => {
    const vm = new Vue({
      data: App.data,
      methods: App.methods
    })

    const product = { promo: false, price: { price: 110.95 } }
    vm.addToWishList(product)
    expect(vm.$data.wishList).to.equal(1)
  })
})
